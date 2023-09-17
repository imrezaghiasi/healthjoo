<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface RequestAppointmentRepositoryInterface
{
    public function getWithTrashedLatest(Request $request = null);
    public function getAppointmentForRequestAppointments();
}
