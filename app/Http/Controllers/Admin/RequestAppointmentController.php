<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RequestAppointmentRequest;
use App\Models\Appointment;
use App\Models\Disease;
use App\Models\Doctor;
use App\Models\RequestAppointment;
use App\Repositories\Interfaces\RequestAppointmentRepositoryInterface;
use App\Repositories\RequestAppointmentRepository;
use App\Services\Interfaces\RequestAppointmentServiceInterface;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RequestAppointmentController extends Controller
{
    private string $redirectRoute = 'admin.appointments.index';

    private readonly RequestAppointmentRepositoryInterface $requestAppointmentRepository;
    private readonly RequestAppointmentServiceInterface $requestAppointmentService;

    public function __construct(RequestAppointmentRepositoryInterface $requestAppointmentRepository, RequestAppointmentServiceInterface $requestAppointmentService)
    {
        $this->requestAppointmentRepository = $requestAppointmentRepository;
        $this->requestAppointmentService = $requestAppointmentService;
    }

    public function index(Request $request)
    {
        $requestAppointments = $this->requestAppointmentRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/RequestAppointment/Index', compact('requestAppointments'));
    }

    public function create()
    {
        $appointments = $this->requestAppointmentRepository->getAppointmentForRequestAppointments();
        return Inertia::render('Admin/RequestAppointment/Create', compact('appointments'));
    }

    public function store(RequestAppointmentRequest $request)
    {
        $this->requestAppointmentService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(RequestAppointment $requestAppointment)
    {
        //
    }

    public function edit(RequestAppointment $requestAppointment)
    {
        $appointments = $this->requestAppointmentRepository->getAppointmentForRequestAppointments();
        return Inertia::render('Admin/RequestAppointment/Edit', compact('requestAppointment', 'appointments'));
    }

    public function update(RequestAppointmentRequest $request, RequestAppointment $requestAppointment)
    {
        $this->requestAppointmentService->update($request, $requestAppointment);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(RequestAppointment $requestAppointment)
    {
        $this->requestAppointmentService->destroy($requestAppointment);
    }

    public function restore(string $id)
    {
        $this->requestAppointmentService->restore($id);
    }

    public function doctors(string $type)
    {
        if ($type == 'all')
            $doctors = Doctor::all();
        elseif ($type == 'dentists')
            $doctors = Doctor::where('specialization', 'دندانپزشک')->get();
        elseif ($type == 'cardiologist')
            $doctors = Doctor::where('specialization', 'قلب و عروق')->get();
        elseif ($type == 'internist')
            $doctors = Doctor::where('specialization', 'داخلی')->get();
        elseif ($type == 'neurologist')
            $doctors = Doctor::where('specialization', 'مغز و اعصاب')->get();
        return Inertia::render('Doctors', compact('doctors'));
    }

    public function appointments(Doctor $doctor)
    {
        $appointments = $doctor->appointments()->where('is_reserved',0)->get();
        $similarDoctors = Doctor::where('specialization', $doctor->specialization)->where('id','!=',$doctor->id)->get();
        $diseases = Disease::select('id','name')->get();
        return Inertia::render('Appointment', compact('doctor', 'appointments', 'similarDoctors','diseases'));
    }

    public function storeAppointment(RequestAppointmentRequest $request)
    {
        $appointment = Appointment::where('started_at', Carbon::parse("$request->date_started_at $request->time_started_at"))->first();
        $requestAppointment = RequestAppointment::withWhereHas('appointment', function ($query) use ($appointment) {
            $query->where('doctor_id','!=',$appointment->doctor_id);
        })->where([['user_id',$request->user_id] , ['appointment_id',$appointment->id]]);
        if ($requestAppointment->exists())
            return back()->with('failed', 'قبلا در این زمان نوبت برای شما رزرو شده است');
        $requestAppointment = RequestAppointment::create(
            [
                'user_id' => $request->user_id,
                'patient_id' => $request->patient_id,
                'appointment_id' => $appointment->id,
                'disease_id' => $request->disease_id
            ]
        );
        $requestAppointment->appointment->is_reserved = 1;
        $requestAppointment->appointment->save();
        return back()->with('success', 'نوبت شما با موفقیت رزرو شد');
    }

    public function getAppointmentsForUser()
    {
        $requestAppointments = RequestAppointment::with(['appointment' => function($q) {
            $q->with('doctor')->latest();
        },'disease'])->where('user_id',Auth::user()->id)->latest()->paginate(4);
        return Inertia::render('Dashboard',compact('requestAppointments'));
    }

    public function confirmRequestAppointment(RequestAppointment $requestAppointment)
    {
        $requestAppointment->is_referred = 1;
        $appointment = Appointment::where('id',$requestAppointment->appointment_id)->first();
        $appointment->is_expired = 1;
        $appointment->save();
        $requestAppointment->save();
    }

    public function cancelRequestAppointment(RequestAppointment $requestAppointment)
    {
        $requestAppointment->is_canceled = 1;
        $appointment = Appointment::where('id',$requestAppointment->appointment_id)->first();
        $appointment->is_reserved = 0;
        $appointment->save();
        $requestAppointment->save();
    }
}

