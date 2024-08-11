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
}
