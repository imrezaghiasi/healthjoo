<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\PatientReportsRepositoryInterface;
use App\Repositories\Interfaces\PatientRepositoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientReportsController extends Controller
{
    private readonly PatientReportsRepositoryInterface $patientReportsRepository;

    public function __construct(PatientReportsRepositoryInterface $patientReportsRepository)
    {
        $this->patientReportsRepository = $patientReportsRepository;
    }

    public function getRequestAppointments(Request $request)
    {
        $requestAppointments = $this->patientReportsRepository->getRequestAppointments($request);
        return Inertia::render('Admin/PatientReport/RequestAppointment',compact('requestAppointments'));
    }

    public function getHospitalization(Request $request)
    {
        $hospitalizations = $this->patientReportsRepository->getHospitalizations($request);
        return Inertia::render('Admin/PatientReport/Hospitalization',compact('hospitalizations'));
    }

    public function getLaboratoryTests(Request $request)
    {
        $laboratoryTests = $this->patientReportsRepository->getLaboratoryTests($request);
        return Inertia::render('Admin/PatientReport/LaboratoryTest',compact('laboratoryTests'));
    }

    public function getOrders(Request $request)
    {
        $orders = $this->patientReportsRepository->getOrders($request);
        return Inertia::render('Admin/PatientReport/Order',compact('$orders'));
    }
}
