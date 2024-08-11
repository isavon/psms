<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_signup_wrong_data()
    {
        $response = $this->json('POST', '/api/signup', [
            'name' => 'name',
            'password' => 'q11',
            'password_confirmation' => 'q112',
        ]);

        $response->assertStatus(422);
    }

    public function test_signup_ok()
    {
        $response = $this->json('POST', '/api/signup', [
            'name' => 'name',
            'email' => 'test@test.com',
            'password' => 'q11',
            'password_confirmation' => 'q11',
        ]);

        $response->assertStatus(200);
    }

    public function test_signup_exists_email()
    {
        $response = $this->json('POST', '/api/signup', [
            'name' => 'test',
            'email' => 'test@test.com',
            'password' => 'q11',
            'password_confirmation' => 'q11',
        ]);

        $response->assertStatus(422);
    }

    public function test_logout_ok()
    {
        $response = $this->json('POST', '/api/logout');

        $response->assertStatus(204);
    }
}
