<?php

namespace Database\Factories;

use App\Models\Aircraft;
use App\Models\MaintenanceCompany;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * Class ServiceRequestFactory
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package Database\Factories
 */
class ServiceRequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'aircraft_id' => Aircraft::get()->random()->id,
            'issue' => $this->faker->text,
            'priority' => $this->faker->randomElement(['low', 'medium','high']),
            'due_date' => $this->faker->date,
            'maintenance_company_id' => MaintenanceCompany::get()->random()->id,
            'status' => $this->faker->randomElement(['awaits', 'in progress', 'completed']),
        ];
    }
}
