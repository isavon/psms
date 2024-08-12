<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ServiceRequest
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Models
 */
class ServiceRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'aircraft_id',
        'issue',
        'priority',
        'due_date',
        'maintenance_company_id',
        'status',
    ];

    public $priorities = [
        'low' => 'Низький',
        'medium' => 'Середній',
        'high' => 'Високий',
    ];

    public $statuses = [
        'awaits' => 'Очікує',
        'in progress' => 'В процесі',
        'completed' => 'Завершено',
    ];

    public function Aircraft()
    {
        return $this->hasOne(Aircraft::class, 'id', 'aircraft_id');
    }

    public function MaintenanceCompany()
    {
        return $this->hasOne(MaintenanceCompany::class, 'id', 'maintenance_company_id');
    }
}
