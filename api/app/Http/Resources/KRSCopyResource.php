<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KRSCopyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'copy' => [
                'kind' => $this['odpis']['rodzaj'],
                'header_a' => [
                    'krs_number' => $this['odpis']['naglowekA']['numerKRS'],
                    'copy_datetime' => $this['odpis']['naglowekA']['dataCzasOdpisu'],
                    'state_from_day' => $this['odpis']['naglowekA']['stanZDnia'],
                ],
                'data' => [
                    'section_1' => [
                        'subject_data' => [
                            'legal_form' => $this['odpis']['dane']['dzial1']['danePodmiotu']['formaPrawna'],
                            'regon' => $this['odpis']['dane']['dzial1']['danePodmiotu']['identyfikatory']['regon'],
                            'nip' => $this['odpis']['dane']['dzial1']['danePodmiotu']['identyfikatory']['nip'],
                            'name' => $this['odpis']['dane']['dzial1']['danePodmiotu']['nazwa'],
                            'opp_status' => $this['odpis']['dane']['dzial1']['danePodmiotu']['czyPosiadaStatusOPP'],
                        ],
                        'headquarters' => [
                            'country' => $this['odpis']['dane']['dzial1']['siedzibaIAdres']['siedziba']['kraj'],
                            'province' => $this['odpis']['dane']['dzial1']['siedzibaIAdres']['siedziba']['wojewodztwo'],
                            'district' => $this['odpis']['dane']['dzial1']['siedzibaIAdres']['siedziba']['powiat'],
                            'borough' => $this['odpis']['dane']['dzial1']['siedzibaIAdres']['siedziba']['gmina'],
                            'town' => $this['odpis']['dane']['dzial1']['siedzibaIAdres']['siedziba']['miejscowosc'],
                        ],
                        'address' => [
                            'street' => $this['odpis']['dane']['dzial1']['siedzibaIAdres']['adres']['ulica'],
                            'house_number' => $this['odpis']['dane']['dzial1']['siedzibaIAdres']['adres']['nrDomu'],
                            'town' => $this['odpis']['dane']['dzial1']['siedzibaIAdres']['adres']['miejscowosc'],
                            'postal_code' => $this['odpis']['dane']['dzial1']['siedzibaIAdres']['adres']['kodPocztowy'],
                            'post' => $this['odpis']['dane']['dzial1']['siedzibaIAdres']['adres']['poczta'],
                            'country' => $this['odpis']['dane']['dzial1']['siedzibaIAdres']['adres']['kraj'],
                        ]
                    ]
                ],
            ]
        ];
    }
}
