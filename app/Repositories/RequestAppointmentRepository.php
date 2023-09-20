<?php

namespace App\Repositories;

use App\Models\Appointment;
use App\Models\RequestAppointment;
use App\Repositories\Interfaces\RequestAppointmentRepositoryInterface;
use Illuminate\Http\Request;

class RequestAppointmentRepository implements RequestAppointmentRepositoryInterface
{
    public function query()
    {
        return RequestAppointment::query();
    }


    public function getWithTrashedLatest(Request $request = null)
    {
        return $this->query()->with(['user','appointment' => function($q){
            $q->with('doctor')->latest();
        }])->withTrashed()->latest();
    }

    public function getAppointmentForRequestAppointments()
    {
        return Appointment::select('id', 'started_at')->with('doctor')->get();
    }
}
