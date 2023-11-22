<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface ReportsRepositoryInterface
{
    public function getRequestAppointmentsAccordingIllness();
    public function getRequestAppointmentsAccordingGender();
    public function getHospitalizationsAccordingIllness();
    public function getHospitalizationsAccordingGender();
    public function getLaboratoryTestsAccordingDate(Request $request);
    public function getOrdersAccordingDate(Request $request);
}
