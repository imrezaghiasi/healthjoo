<?php

namespace Database\Seeders;

use App\Models\Patient;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Patient::create([
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'mobile' => '09921221500',
            'national_code' => '5150206520',
            'gender' => 1,
            'date_of_birth' => now(),
            'address' => 'شیراز',
            'blood_group' => 'B+',
            'photo_path' => ''
        ]);
        Patient::factory(20)->create();
    }
}
