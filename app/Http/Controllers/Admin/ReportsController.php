<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\ReportsRepositoryInterface;
use App\Repositories\Interfaces\PatientRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\In;
use Inertia\Inertia;

class ReportsController extends Controller
{
    private readonly ReportsRepositoryInterface $reportsRepository;

    public function __construct(ReportsRepositoryInterface $reportsRepository)
    {
        $this->reportsRepository = $reportsRepository;
    }

    public function getRequestAppointmentsAccordingIllness()
    {
        $requestAppointments = $this->reportsRepository->getRequestAppointmentsAccordingIllness();
        return Inertia::render('Admin/Report/RequestAppointmentReport',compact('requestAppointments'));
    }

    public function getHospitalization(Request $request)
    {
    }

    public function getLaboratoryTests(Request $request)
    {
    }

    public function getOrders(Request $request)
    {
    }
}
