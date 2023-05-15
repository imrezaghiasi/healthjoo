<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Ybazli\Faker\Facades\Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
class PatientFactory extends Factory
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
            'mobile' => Faker::mobile(),
            'national_code' => Faker::melliCode(),
            'gender' =>rand(1,2),
            'date_of_birth' => $this->faker->date(),
            'address' => Faker::address(),
            'blood_group' => $this->faker->bloodGroup(),
            'photo_path' => $this->faker->imageUrl(113.39,151.18),
        ];
    }
}
