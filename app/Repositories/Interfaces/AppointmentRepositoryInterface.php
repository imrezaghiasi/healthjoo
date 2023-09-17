<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface AppointmentRepositoryInterface
{
    public function getWithTrashedLatest(Request $request = null);
    public function getDoctorsForAppointments();
}
