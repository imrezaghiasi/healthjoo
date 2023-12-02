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
        return Inertia::render('Admin/Report/RequestAppointmentAccordingIllness',compact('requestAppointments'));
    }

    public function getRequestAppointmentsAccordingGender()
    {
        $requestAppointments = $this->reportsRepository->getRequestAppointmentsAccordingGender();
        return Inertia::render('Admin/Report/RequestAppointmentAccordingGender',compact('requestAppointments'));
    }

    public function getHospitalizationsAccordingIllness()
    {
    }

    public function getHospitalizationsAccordingGender()
    {
    }

    public function getLaboratoryTestsAccordingDate(Request $request){

    }
    public function getOrdersAccordingDate(Request $request){

    }
}
