<?php

namespace App\Repositories;

use App\Models\Clinic;
use App\Models\Doctor;
use App\Repositories\Interfaces\ClinicRepositoryInterface;
use Illuminate\Http\Request;

class ClinicRepository implements ClinicRepositoryInterface
{
    public function query()
    {
        return Clinic::query();
    }

    public function getWithTrashedLatest(Request $request = null)
    {
        return $this->query()->with(['doctor' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }

    public function getDoctorsForAppointment()
    {
        return Doctor::select('id','first_name','last_name')->get();
    }
}
