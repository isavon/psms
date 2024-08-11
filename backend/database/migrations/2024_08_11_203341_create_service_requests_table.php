<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateServiceRequestsTable
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 */
class CreateServiceRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_requests', function (Blueprint $table) {
            $table->id();
            $table->integer('aircraft_id');
            $table->text('issue');
            $table->enum('priority', ['low', 'medium','high']);
            $table->date('due_date');
            $table->integer('maintenance_company_id')->nullable();
            $table->enum('status', ['awaits', 'in progress', 'completed']);
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
        Schema::dropIfExists('service_requests');
    }
}
