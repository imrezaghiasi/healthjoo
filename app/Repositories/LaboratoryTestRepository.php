<?php

namespace App\Repositories;

use App\Models\LaboratoryTest;
use App\Models\Patient;
use App\Repositories\Interfaces\LaboratoryTestRepositoryInterface;
use Illuminate\Http\Request;

class LaboratoryTestRepository implements LaboratoryTestRepositoryInterface
{
    public function query()
    {
        return LaboratoryTest::query();
    }

    public function getWithTrashedLatest()
    {
        return $this->query()->with(['patient' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }

    public function getPatientForLaboratoryTest()
    {
        return Patient::select('id', 'first_name','last_name')->get();
    }
}
