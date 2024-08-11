<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class ServiceRequestResource
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Http\Resources
 */
class ServiceRequestResource extends JsonResource
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
            'aircraft_id' => $this->aircraft_id,
            'issue' => $this->issue,
            'priority' => $this->priority,
            'due_date' => $this->due_date,
            'maintenance_company_id' => $this->maintenance_company_id,
            'status' => $this->status,
            'created_at' => $this->created_at->format('d.m.Y H:i:s'),
        ];
    }
}
