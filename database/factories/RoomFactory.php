<?php

namespace Database\Factories;

use App\Models\Department;
use Illuminate\Database\Eloquent\Factories\Factory;
use Ybazli\Faker\Facades\Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{

    public function definition(): array
    {
        $departments = Department::pluck('id')->toArray();

        return [
            'room_type' => Faker::word(),
            'room_number' => $this->faker->numberBetween(1,500),
            'available' => 1,
            'department_id' => $this->faker->randomElement($departments)
        ];
    }
}
