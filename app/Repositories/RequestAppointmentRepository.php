<?php

namespace App\Repositories;

use App\Models\Appointment;
use App\Models\RequestAppointment;
use App\Repositories\Interfaces\RequestAppointmentRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

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

    public function getAppointmentsForUser(): Builder
    {
        return RequestAppointment::with(['appointment' => function($q) {
            $q->with(['clinic' => function($q){
                $q->with('doctor');
            }])->latest();
        },'disease'])->where('user_id',Auth::user()->id)->latest();
    }
}
