<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Ybazli\Faker\Facades\Faker;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Department::create([
            'name' => 'بستری',
            'description' => Faker::paragraph()
        ]);
        Department::create([
            'name' => 'اورژانس',
            'description' => Faker::paragraph()
        ]);
        Department::create([
            'name' => 'جراحی',
            'description' => Faker::paragraph()
        ]);
        Department::create([
            'name' => 'پرستاری',
            'description' => Faker::paragraph()
        ]);
    }
}
