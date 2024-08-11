<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasRelationships;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Aircraft
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Models
 */
class Aircraft extends Model
{
    use HasFactory;

    protected $fillable = [
        'model',
        'serial_number',
        'registration',
        'id_maintenance_company',
    ];

    public function MaintenanceCompany()
    {
        return $this->hasOne(MaintenanceCompany::class, 'id', 'id_maintenance_company');
    }
}
