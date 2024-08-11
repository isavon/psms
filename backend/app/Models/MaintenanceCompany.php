<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class MaintenanceCompany
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Models
 */
class MaintenanceCompany extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'number',
        'specialization',
    ];
}
