<?php

namespace Database\Factories;

use App\Models\MaintenanceCompany;
use Illuminate\Database\Eloquent\Factories\Factory;

class AircraftFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'model' => $this->faker->unique()->name(),
            'serial_number' => $this->faker->randomNumber(5, true),
            'registration' => $this->faker->regexify('[A-Z0-9]{6}'),
            'id_maintenance_company' => MaintenanceCompany::get()->random()->id,
        ];
    }
}
