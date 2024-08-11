<?php

namespace App\Models;

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
}
