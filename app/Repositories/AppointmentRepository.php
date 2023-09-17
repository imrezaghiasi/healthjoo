<?php

namespace App\Repositories;

use App\Models\Appointment;
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
        return $this->query()->with(['doctor' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }

    public function getDoctorsForAppointments()
    {
        return Doctor::select('id', 'first_name','last_name')->get();
    }
}
