<?php

namespace Database\Factories;

use App\Models\Doctor;
use App\Models\Patient;
use App\Models\Room;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Ybazli\Faker\Facades\Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hospitalization>
 */
class HospitalizationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $patient = Patient::pluck('id')->toArray();
        $room = Room::pluck('id')->toArray();
        $doctor = Doctor::pluck('id')->toArray();

        return [
            'patient_id' => $this->faker->randomElement($patient),
            'room_id' => $this->faker->randomElement($room),
            'doctor_id' => $this->faker->randomElement($doctor),
            'disease' => Faker::word(),
            'started_at' => Carbon::instance($this->faker->dateTimeBetween('-1 year', 'now')),
            'finished_at' => Carbon::instance($this->faker->dateTimeBetween('now', '+1 year')),
        ];
    }
}
