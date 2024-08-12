<?php

namespace Database\Seeders;

use App\Models\Aircraft;
use App\Models\MaintenanceCompany;
use App\Models\ServiceRequest;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        MaintenanceCompany::factory(30)->create();
        Aircraft::factory(20)->create();
        ServiceRequest::factory(20)->create();
        // \App\Models\User::factory(10)->create();
    }
}
