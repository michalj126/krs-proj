<?php

use App\Http\Controllers\api\KRSCopyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix("krs-copy")->controller(KRSCopyController::class)->group(function () {
    Route::get('current', 'showCurrent');
})->prefix('asd');
