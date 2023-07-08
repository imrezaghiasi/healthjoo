<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface HospitalizationRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);

    public function getPatientForHospitalization();

    public function getRoomForHospitalization();

    public function getDoctorForHospitalization();
}
