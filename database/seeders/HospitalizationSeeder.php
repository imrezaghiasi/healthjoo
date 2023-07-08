<?php

namespace Database\Seeders;

use App\Models\Hospitalization;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HospitalizationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Hospitalization::factory(20)->create();
    }
}
