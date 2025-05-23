<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface ClinicRepositoryInterface
{
    public function getWithTrashedLatest(Request $request = null);
    public function getDoctorsForAppointment();
}
