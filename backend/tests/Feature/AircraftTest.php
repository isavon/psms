<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

/**
 * Class AircraftTest
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package Tests\Feature
 */
class AircraftTest extends TestCase
{
    use RefreshDatabase;

    const URL = '/api/aircraft';

    public function test_create()
    {
        $response = $this->postJson(self::URL, [
            'model' => 'Boeing 737-800',
            'serial_number' => '12345',
            'registration' => 'N123AB',
            'id_maintenance_company' => 1,
        ]);

        $response
            ->assertStatus(201)
            ->assertJson([
                'model' => 'Boeing 737-800',
            ])
        ;
    }

    public function test_show()
    {
        $this->postJson(self::URL, [
            'model' => 'Boeing 737-800',
            'serial_number' => '12345',
            'registration' => 'N123AB',
            'id_maintenance_company' => 1,
        ]);

        $response = $this->getJson(self::URL . '/1');

        $response
            ->assertStatus(200)
            ->assertJson([
                'model' => 'Boeing 737-800',
            ])
        ;
    }

    public function test_update()
    {
        $this->postJson(self::URL, [
            'model' => 'Boeing 737-800',
            'serial_number' => '12345',
            'registration' => 'N123AB',
            'id_maintenance_company' => 1,
        ]);

        $response = $this->putJson(self::URL . '/1', [
            'model' => 'New Model',
            'serial_number' => '54321',
            'registration' => 'N678CD',
        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'model' => 'New Model',
            ])
        ;
    }

    public function test_delete()
    {
        $this->postJson(self::URL, [
            'model' => 'Boeing 737-800',
            'serial_number' => '12345',
            'registration' => 'N123AB',
            'id_maintenance_company' => 1,
        ]);

        $response = $this->deleteJson(self::URL . '/1');

        $response->assertStatus(204);
    }
}
