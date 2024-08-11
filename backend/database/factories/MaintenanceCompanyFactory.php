<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MaintenanceCompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->company,
            'address' => $this->faker->address,
            'number' => $this->faker->phoneNumber,
            'specialization' => '',
        ];
    }
}
