<?php

namespace App\Http\Controllers;

use App\Models\Disease;
use App\Models\Doctor;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Inertia\Inertia;

class HomeController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    public function welcome()
    {
        return view('welcome');
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
        $appointments = $doctor->clinics->appointments()->where('is_reserved',0)->get();
        $similarDoctors = Doctor::where('specialization', $doctor->specialization)->where('id','!=',$doctor->id)->get();
        $diseases = Disease::select('id','name')->get();
        return Inertia::render('Appointment', compact('doctor', 'appointments', 'similarDoctors','diseases'));
    }
}
