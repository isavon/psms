<?php

namespace Database\Seeders;

use App\Models\MaintenanceCompany;
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
        // \App\Models\User::factory(10)->create();
    }
}
