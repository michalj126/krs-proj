<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SearchKrsRequest;
use App\Http\Resources\KRSCopyResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class KRSCopyController extends Controller
{
    /**
     * Return KRS copy.
     */
    public function showCurrent(SearchKrsRequest $request)
    {
        $krs = $request->query('krs');

        $response = Http::withQueryParameters([
            'rejestr' => $request->query('register', 'P'),
            'format' => 'json',
        ])->get("https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/$krs");

        if ($response->notFound() || $response->noContent()) {
            return response('Not found', 404);
        }

        if (!$response->successful()) {
            return response('Internal server error', 500);
        }

        return new KRSCopyResource($response->json());
    }
}
