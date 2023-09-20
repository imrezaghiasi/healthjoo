<?php

namespace App\Repositories;

use App\Models\Bed;
use App\Models\Doctor;
use App\Models\Hospitalization;
use App\Models\Patient;
use App\Models\Room;
use App\Repositories\Interfaces\HospitalizationRepositoryInterface;
use Illuminate\Http\Request;

class HospitalizationRepository implements HospitalizationRepositoryInterface
{
    public function query()
    {
        return Hospitalization::query();
    }


    public function getWithTrashedLatest(Request $request = null)
    {
        return $this->query()->with(['patient' => function ($q) {
            $q->withTrashed();
        }, 'room' => function ($q) {
            $q->withTrashed();
        }, 'doctor' => function ($q) {
            $q->withTrashed();
        }, 'bed' => function ($q) {
            $q->withTrashed();
        }])->withTrashed()->latest();
    }

    public function getPatientForHospitalization()
    {
        return Patient::select('id', 'first_name', 'last_name')->get();
    }

    public function getRoomForHospitalization()
    {
        return Room::select('id', 'room_type', 'room_number')->get();
    }

    public function getDoctorForHospitalization()
    {
        return Doctor::select('id', 'first_name', 'last_name')->get();
    }

    public function getBedForHospitalization()
    {
        return Bed::select('id', 'bed_number','room_id')->where('available', 1)->get();
    }
}
