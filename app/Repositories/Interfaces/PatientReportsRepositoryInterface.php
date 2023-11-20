<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface PatientReportsRepositoryInterface
{
    public function getRequestAppointments(Request $request);
    public function getHospitalizations(Request $request);
    public function getLaboratoryTests(Request $request);
    public function getOrders(Request $request);
}
