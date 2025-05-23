<?php

use App\Http\Controllers\Admin\AppointmentController;
use App\Http\Controllers\Admin\BedController;
use App\Http\Controllers\Admin\ClinicController;
use App\Http\Controllers\Admin\DepartmentController;
use App\Http\Controllers\Admin\DiseaseController;
use App\Http\Controllers\Admin\DoctorController;
use App\Http\Controllers\Admin\EmployeeController;
use App\Http\Controllers\Admin\HospitalizationController;
use App\Http\Controllers\Admin\JobController;
use App\Http\Controllers\Admin\LaboratoryTestController;
use App\Http\Controllers\Admin\MedicineController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\PatientController;
use App\Http\Controllers\Admin\PharmacyController;
use App\Http\Controllers\Admin\ReportsController;
use App\Http\Controllers\Admin\RequestAppointmentController;
use App\Http\Controllers\Admin\RoomController;
use App\Http\Controllers\Admin\TestController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard',[RequestAppointmentController::class,'getAppointmentsForUser'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::name('admin.')->prefix('admin')->group(function () {
        Route::middleware('role:super_admin')->group(function () {
            Route::get('jobs/restore/{job}', [JobController::class, 'restore'])->name('jobs.restore');
            Route::resource('jobs', JobController::class);
            Route::get('employees/restore/{employee}', [EmployeeController::class, 'restore'])->name('employees.restore');
            Route::resource('employees', EmployeeController::class);
            Route::get('doctors/restore/{doctor}', [DoctorController::class, 'restore'])->name('doctors.restore');
            Route::resource('doctors', DoctorController::class);
            Route::get('departments/restore/{department}', [DepartmentController::class, 'restore'])->name('departments.restore');
            Route::resource('departments', DepartmentController::class);
            Route::get('rooms/restore/{room}', [RoomController::class, 'restore'])->name('rooms.restore');
            Route::resource('rooms', RoomController::class);
            Route::get('beds/restore/{bed}', [BedController::class, 'restore'])->name('beds.restore');
            Route::resource('beds', BedController::class);
            Route::get('reports/requestAppointmentsAccordingIllness', [ReportsController::class, 'getRequestAppointmentsAccordingIllness'])->name('reports.requestAppointmentsAccordingIllness');
            Route::get('reports/requestAppointmentsAccordingGender', [ReportsController::class, 'getRequestAppointmentsAccordingGender'])->name('reports.requestAppointmentsAccordingGender');
        });
        Route::middleware('role:super_admin|reception')->group(function () {
            Route::get('patients/restore/{patient}', [PatientController::class, 'restore'])->name('patients.restore');
            Route::get('patients/getBookedAppointments/{patient}', [PatientController::class, 'getBookedAppointments'])->name('patients.bookedAppointments');
            Route::resource('patients', PatientController::class);
            Route::get('hospitalizations/restore/{hospitalization}', [HospitalizationController::class, 'restore'])->name('hospitalizations.restore');
            Route::get('hospitalizations/{hospitalization}/edit_finished_at', [HospitalizationController::class, 'edit_finished_at'])->name('hospitalizations.edit_finished_at');
            Route::patch('hospitalizations/update_finished_at/{hospitalization}', [HospitalizationController::class, 'update_finished_at'])->name('hospitalizations.update_finished_at');
            Route::resource('hospitalizations', HospitalizationController::class);
            Route::get('appointments/restore/{appointment}', [AppointmentController::class, 'restore'])->name('appointments.restore');
            Route::resource('appointments', AppointmentController::class);
            Route::get('requestAppointments/restore/{requestAppointment}', [RequestAppointmentController::class, 'restore'])->name('requestAppointments.restore');
            Route::resource('requestAppointments', RequestAppointmentController::class);
            Route::get('diseases/restore/{disease}', [DiseaseController::class, 'restore'])->name('diseases.restore');
            Route::resource('diseases', DiseaseController::class);
            Route::get('clinics/restore/{clinic}', [ClinicController::class, 'restore'])->name('clinics.restore');
            Route::get('clinics/createMultiAppointmentForClinic/{clinic}', [ClinicController::class, 'createMultiAppointmentForClinic'])->name('clinics.createMultiAppointmentForClinic');
            Route::post('clinics/storeMultiAppointmentForClinic/{clinic}', [ClinicController::class, 'storeMultiAppointmentForClinic'])->name('clinics.storeMultiAppointmentForClinic');
            Route::resource('clinics', ClinicController::class);
        });

        Route::middleware('role:super_admin|laboratory_reception')->group(function () {
            Route::get('tests/restore/{test}', [TestController::class, 'restore'])->name('tests.restore');
            Route::resource('tests', TestController::class);
            Route::get('laboratory_tests/restore/{laboratory_test}', [LaboratoryTestController::class, 'restore'])->name('laboratory_tests.restore');
            Route::get('laboratory_tests/create_laboratory_test_results/{id}', [LaboratoryTestController::class, 'create_laboratory_test_results'])->name('laboratory_tests.create_laboratory_test_results');
            Route::post('laboratory_tests/store_laboratory_test_results', [LaboratoryTestController::class, 'store_laboratory_test_results'])->name('laboratory_tests.store_laboratory_test_results');
            Route::resource('laboratory_tests', LaboratoryTestController::class);
        });
        Route::middleware('role:super_admin|pharmacy_reception')->group(function () {
            Route::get('medicines/restore/{medicine}', [MedicineController::class, 'restore'])->name('medicines.restore');
            Route::resource('medicines', MedicineController::class);
            Route::get('pharmacy/increase/{pharmacy}', [PharmacyController::class, 'increase'])->name('pharmacy.increase');
            Route::put('pharmacy/store_increase/{pharmacy}', [PharmacyController::class, 'store_increase'])->name('pharmacy.store_increase');
            Route::get('pharmacy/reduce/{pharmacy}', [PharmacyController::class, 'reduce'])->name('pharmacy.reduce');
            Route::put('pharmacy/store_reduce/{pharmacy}', [PharmacyController::class, 'store_reduce'])->name('pharmacy.store_reduce');
            Route::get('pharmacy/restore/{pharmacy}', [PharmacyController::class, 'restore'])->name('pharmacy.restore');
            Route::get('pharmacy/get_operation/{pharmacy}', [PharmacyController::class, 'get_operation'])->name('pharmacy.get_operation');
            Route::resource('pharmacy', PharmacyController::class);
            Route::get('orders/get_details_order/{order}', [OrderController::class, 'get_details_order'])->name('orders.get_details_order');
            Route::get('orders/restore/{order}', [OrderController::class, 'restore'])->name('orders.restore');
            Route::resource('orders', OrderController::class);
        });
    });
    Route::get('/doctors/{type}', [HomeController::class, 'doctors'])->name('doctors');
    Route::get('/appointments/{doctor}', [HomeController::class, 'appointments'])->name('appointments');
    Route::put('requestAppointments/confirmRequestAppointment/{requestAppointment}', [RequestAppointmentController::class, 'confirmRequestAppointment'])->name('requestAppointment.confirmRequestAppointment');
    Route::put('requestAppointments/cancelRequestAppointment/{requestAppointment}', [RequestAppointmentController::class, 'cancelRequestAppointment'])->name('requestAppointment.cancelRequestAppointment');
});

require __DIR__ . '/auth.php';
