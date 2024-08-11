<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MaintenanceCompanyTest extends TestCase
{
    use RefreshDatabase;

    const URL = '/api/maintenance-company';

    public function test_create()
    {
        $response = $this->postJson(self::URL, [
            'name' => 'SkyTech Maintenance',
            'address' => 'Michigan',
            'number' => '"+1-555-1212',
            'specialization' => 'Engine repair',
        ]);

        $response
            ->assertStatus(201)
            ->assertJson([
                'name' => 'SkyTech Maintenance',
            ])
        ;
    }

    public function test_show()
    {
        $this->postJson(self::URL, [
            'name' => 'SkyTech Maintenance',
            'address' => 'Michigan',
            'number' => '"+1-555-1212',
            'specialization' => 'Engine repair',
        ]);

        $response = $this->getJson(self::URL . '/1');

        $response
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'name' => 'SkyTech Maintenance',
                ]
            ])
        ;
    }

    public function test_update()
    {
        $this->postJson(self::URL, [
            'name' => 'SkyTech Maintenance',
            'address' => 'Michigan',
            'number' => '"+1-555-1212',
            'specialization' => 'Engine repair',
        ]);

        $response = $this->putJson(self::URL . '/1', [
            'name' => 'New Company Name',
        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'name' => 'New Company Name',
                ]
            ])
        ;
    }

    public function test_delete()
    {
        $this->postJson(self::URL, [
            'name' => 'SkyTech Maintenance',
            'address' => 'Michigan',
            'number' => '"+1-555-1212',
            'specialization' => 'Engine repair',
        ]);

        $response = $this->deleteJson(self::URL . '/1');

        $response->assertStatus(204);
    }
}
