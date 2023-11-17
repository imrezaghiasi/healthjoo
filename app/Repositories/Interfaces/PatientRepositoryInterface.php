<?php

namespace App\Repositories\Interfaces;

use App\Models\Patient;
use Illuminate\Http\Request;

interface PatientRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);

    public function getRequestAppointment(Patient $patient);
}
