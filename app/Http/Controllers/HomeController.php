<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Disease;
use App\Models\Doctor;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Inertia\Inertia;

class HomeController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    public function doctors(string $type)
    {
        if ($type == 'all')
            $doctors = Doctor::whereHas('clinic')->get();
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
        $appointments = $doctor->clinic->appointments()->get();
        $clinic = $doctor->clinic()->get()[0];
        $similarDoctors = Doctor::where('specialization', $doctor->specialization)->where('id', '!=', $doctor->id)->get();
        $diseases = Disease::select('id', 'name')->get();
        return Inertia::render('Appointment', compact('doctor', 'clinic', 'appointments', 'similarDoctors', 'diseases'));
    }
}
