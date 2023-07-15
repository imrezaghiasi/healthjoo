<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\Room;
use Illuminate\Database\Eloquent\Factories\Factory;
use Ybazli\Faker\Facades\Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bed>
 */
class BedFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $departments = Department::pluck('id')->toArray();
        $rooms = Room::pluck('id')->toArray();

        return [
            'bed_number' => $this->faker->numberBetween(1,1000),
            'available' => 1,
            'department_id' => $this->faker->randomElement($departments),
            'room_id' => $this->faker->randomElement($rooms)
        ];
    }
}
