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
        $this->call([
            RoleSeeder::class,
            JobSeeder::class,
            EmployeeSeeder::class,
            PatientSeeder::class,
            DoctorSeeder::class,
            DepartmentSeeder::class,
            RoomSeeder::class,
            BedSeeder::class,
            MedicineSeeder::class,
        ]);

        User::create([
            'name' => 'رضا غیاثی',
            'email' => 'imrezaghiasi@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('reza12345678'),
            'patient_id' => 1
        ])->assignRole('super_admin');

        User::create([
            'name' => 'رضا غیاثی یوزر',
            'email' => 'user@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('reza12345678'),
            'patient_id' => 1,
        ])->assignRole('user');

        User::create([
            'name' => 'رضا غیاثی پذیرش',
            'email' => 'reception@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('reza12345678'),
            'patient_id' => 1
        ])->assignRole('reception');

        User::create([
            'name' => 'رضا غیاثی داروخانه',
            'email' => 'pharmacy@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('reza12345678'),
            'patient_id' => 1
        ])->assignRole('pharmacy_reception');

        User::create([
            'name' => 'رضا غیاثی آزمایشگاه',
            'email' => 'laboratory@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('reza12345678'),
            'patient_id' => 1
        ])->assignRole('laboratory_reception');

    }
}
