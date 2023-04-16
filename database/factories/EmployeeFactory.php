<?php

namespace Database\Factories;

use App\Models\Job;
use Illuminate\Database\Eloquent\Factories\Factory;

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
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'phone' => $this->faker->phoneNumber,
            'national_code' => $this->faker->randomNumber(9),
            'gender' =>rand(1,2),
            'email' => $this->faker->email,
            'address' => $this->faker->address,
            'photo_path' => $this->faker->imageUrl(113.39,151.18),
            'salary' => $this->faker->numberBetween(1000000,15000000),
            'job_id' => $this->faker->randomElement($jobs)
        ];
    }
}
