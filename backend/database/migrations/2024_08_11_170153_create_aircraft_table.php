<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateAircraftTable
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 */
class CreateAircraftTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aircraft', function (Blueprint $table) {
            $table->id();
            $table->string('model')->unique();
            $table->integer('serial_number');
            $table->string('registration', 6);
            $table->integer('id_maintenance_company')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aircraft');
    }
}
