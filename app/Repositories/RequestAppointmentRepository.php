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


    public function getWithTrashedLatest(Request $request)
    {
        return $this->query()->withWhereHas('patient', function ($query) use ($request) {
            if ($request->term !== null) {
                $query->where('national_code', $request->term);
            }
        })->with(['user','appointment' => function($q){
            $q->with(['clinic' => function($q){
                $q->with('doctor');
            }])->latest();
        },'disease' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }

    public function getAppointmentForRequestAppointments()
    {
        return Appointment::select('id', 'started_at')->with('doctor')->get();
    }
}
