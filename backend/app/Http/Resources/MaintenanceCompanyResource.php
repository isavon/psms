<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class MaintenanceCompanyResource
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Http\Resources
 */
class MaintenanceCompanyResource extends JsonResource
{
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
            'name' => $this->name,
            'address' => $this->address,
            'number' => $this->number,
            'specialization' => $this->specialization,
            'created_at' => $this->created_at->format('d.m.Y H:i:s'),
        ];
    }
}
