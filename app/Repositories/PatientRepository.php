<?php

namespace App\Repositories;

use App\Models\Patient;
use App\Models\RequestAppointment;
use App\Repositories\Interfaces\PatientRepositoryInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class PatientRepository implements PatientRepositoryInterface
{
    public function query()
    {
        return Patient::query();
    }

    public function getWithTrashedLatest(Request $request)
    {
        return $this->query()->withTrashed()->where('first_name', 'like', '%' . $request->term . '%')->orWhere('last_name', 'like', '%' . $request->term . '%')->latest();

    }

    public function getRequestAppointment(Patient $patient): Builder
    {
        return RequestAppointment::with(['patient', 'disease', 'appointment' => function ($q) {
            $q->with('doctor')->latest();
        }])->where('patient_id', $patient->id)->latest();
    }
}
