<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Bed;
use App\Models\User;
use Database\Factories\PatientFactory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'رضا غیاثی',
            'email' => 'imrezaghiasi@gmail.com',
            'password' => bcrypt('reza12345678')
        ]);

        $this->call([
            JobSeeder::class,
            EmployeeSeeder::class,
            PatientSeeder::class,
            DoctorSeeder::class,
            MedicineSeeder::class,
            DepartmentSeeder::class,
            RoomSeeder::class,
//            HospitalizationSeeder::class
           BedSeeder::class
        ]);
    }
}
