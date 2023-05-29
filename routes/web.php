<?php

use App\Http\Controllers\Admin\DoctorController;
use App\Http\Controllers\Admin\EmployeeController;
use App\Http\Controllers\Admin\JobController;
use App\Http\Controllers\Admin\MedicineController;
use App\Http\Controllers\Admin\PatientController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::prefix('/admin')->name('admin.')->group(function (){
        Route::get('jobs/restore/{job}',[JobController::class,'restore'])->name('jobs.restore');
        Route::resource('jobs', JobController::class);
        Route::get('employees/restore/{employee}', [EmployeeController::class,'restore'])->name('employees.restore');
        Route::resource('employees', EmployeeController::class);
        Route::get('patients/restore/{patient}', [PatientController::class,'restore'])->name('patients.restore');
        Route::resource('patients', PatientController::class);
        Route::get('doctors/restore/{doctor}', [DoctorController::class,'restore'])->name('doctors.restore');
        Route::resource('doctors', DoctorController::class);
        Route::get('medicines/restore/{medicine}', [MedicineController::class,'restore'])->name('medicines.restore');
        Route::resource('medicines', MedicineController::class);
    });
});

require __DIR__.'/auth.php';
