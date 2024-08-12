<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

/**
 * Class ServiceRequestTest
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package Tests\Feature
 */
class ServiceRequestTest extends TestCase
{
    use RefreshDatabase;

    const URL = '/api/service-request';

    public function test_create()
    {
        $response = $this->postJson(self::URL, [
            'aircraft_id' => '10',
            'issue' => 'Engine inspection required',
            'priority' => 'high',
            'due_date' => '15.08.2024',
            'status' => 'awaits',
        ]);

        $response
            ->assertStatus(201)
            ->assertJson([
                'priority' => 'high',
            ])
        ;
    }

    public function test_show()
    {
        $this->postJson(self::URL, [
            'aircraft_id' => '10',
            'issue' => 'Engine inspection required',
            'priority' => 'high',
            'due_date' => '2024-08-15',
            'status' => 'awaits',
        ]);

        $response = $this->getJson(self::URL . '/1');

        $response
            ->assertStatus(200)
            ->assertJson([
                'status' => 'awaits',
            ])
        ;
    }

    public function test_update()
    {
        $this->postJson(self::URL, [
            'aircraft_id' => '10',
            'issue' => 'Engine inspection required',
            'priority' => 'high',
            'due_date' => '2024-08-15',
            'status' => 'awaits',
        ]);

        $response = $this->putJson(self::URL . '/1', [
            'aircraft_id' => '20',
            'issue' => 'Engine inspection required',
            'priority' => 'high',
            'due_date' => '24.08.2024',
            'status' => 'awaits',
        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'aircraft_id' => '20',
            ])
        ;
    }

    public function test_delete()
    {
        $this->postJson(self::URL, [
            'aircraft_id' => '10',
            'issue' => 'Engine inspection required',
            'priority' => 'high',
            'due_date' => '2024-08-15',
            'status' => 'awaits',
        ]);

        $response = $this->deleteJson(self::URL . '/1');

        $response->assertStatus(204);
    }
}
