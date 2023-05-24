<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Ybazli\Faker\Facades\Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Doctor>
 */
class DoctorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => Faker::firstName(),
            'last_name' => Faker::lastName(),
            'national_code' => Faker::melliCode(),
            'date_of_birth' => $this->faker->date(),
            'email' => fake()->unique()->safeEmail(),
            'mobile' => Faker::mobile(),
            'gender' =>rand(1,2),
            'address' => Faker::address(),
            'specialization' => Faker::word(),
            'photo_path' => $this->faker->imageUrl(113.39,151.18),
        ];
    }
}
