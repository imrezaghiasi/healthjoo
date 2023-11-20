<?php

namespace App\Repositories;

use App\Models\Hospitalization;
use App\Models\LaboratoryTest;
use App\Models\Order;
use App\Models\RequestAppointment;
use App\Repositories\Interfaces\PatientReportsRepositoryInterface;
use Illuminate\Http\Request;

class PatientReportsRepository implements PatientReportsRepositoryInterface
{
    public function getRequestAppointments(Request $request)
    {
        return RequestAppointment::with(['patient' => function($q){
            $q->where('national_code', $request->term)->latest();
        },'appointment' => function($q){
            $q->with('doctor')->latest();
        },'disease' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }

    public function getHospitalizations(Request $request)
    {
        return Hospitalization::with(['patient' => function ($q) {
            $q->where('national_code',$request->term)->withTrashed()->latest();
        }, 'room' => function ($q) {
            $q->withTrashed();
        }, 'doctor' => function ($q) {
            $q->withTrashed();
        }, 'bed' => function ($q) {
            $q->withTrashed();
        },'disease' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }

    public function getLaboratoryTests(Request $request)
    {
        return LaboratoryTest::with(['patient' => function($q){
            $q->where('national_code',$request->term)->withTrashed()->latest();
        }])->withTrashed()->latest();
    }

    public function getOrders(Request $request)
    {
        return Order::with(['patient' => function($q){
            $q->where('national_code',$request->term)->withTrashed()->latest();
        }])->withTrashed()->latest();
    }
}
