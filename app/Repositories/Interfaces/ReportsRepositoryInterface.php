<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface ReportsRepositoryInterface
{
    public function getRequestAppointmentsAccordingIllness();
    public function getRequestAppointmentsAccordingGender(Request $request);
    public function getHospitalizationsAccordingIllness(Request $request);
    public function getHospitalizationsAccordingGender(Request $request);
    public function getLaboratoryTestsAccordingDate(Request $request);
    public function getOrdersAccordingDate(Request $request);
}
