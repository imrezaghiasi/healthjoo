<?php

namespace Database\Factories;

use App\Models\Job;
use Illuminate\Database\Eloquent\Factories\Factory;
use Ybazli\Faker\Facades\Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $jobs = Job::pluck('id')->toArray();
        return [
            'first_name' => Faker::firstName(),
            'last_name' => Faker::lastName(),
            'phone' => Faker::mobile(),
            'national_code' => Faker::melliCode(),
            'gender' =>rand(1,2),
            'date_of_birth' => $this->faker->date(),
            'email' => $this->faker->email(),
            'address' => Faker::address(),
            'photo_path' => $this->faker->imageUrl(113.39,151.18),
            'salary' => $this->faker->numberBetween(100000000,150000000),
            'job_id' => $this->faker->randomElement($jobs)
        ];
    }
}
