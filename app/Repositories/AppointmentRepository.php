<?php

namespace App\Repositories;

use App\Models\Appointment;
use App\Models\Clinic;
use App\Models\Doctor;
use App\Repositories\Interfaces\AppointmentRepositoryInterface;
use Illuminate\Http\Request;

class AppointmentRepository implements AppointmentRepositoryInterface
{
    public function query()
    {
        return Appointment::query();
    }


    public function getWithTrashedLatest(Request $request = null)
    {
        return $this->query()->with(['clinic' => function($q){
            $q->with('doctor')->withTrashed();
        }])->withTrashed()->latest();
    }

    public function getClinicForAppointments()
    {
        return Clinic::with('doctor')->get();
    }
}
