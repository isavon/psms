<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class AircraftResource
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Http\Resources
 */
class AircraftResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'model' => $this->model,
            'serial_number' => $this->serial_number,
            'registration' => $this->registration,
            'id_maintenance_company' => $this->id_maintenance_company,
            'maintenance_company_name' => !empty($this->maintenanceCompany) ? $this->maintenanceCompany->name : '',
            'created_at' => $this->created_at->format('d.m.Y H:i:s'),
        ];
    }
}
