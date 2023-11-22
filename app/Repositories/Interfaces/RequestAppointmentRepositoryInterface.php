<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface RequestAppointmentRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);
    public function getAppointmentForRequestAppointments();
}
