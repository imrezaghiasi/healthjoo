<?php

namespace App\Providers;

use App\Repositories\DepartmentRepository;
use App\Repositories\DoctorRepository;
use App\Repositories\EmployeeRepository;
use App\Repositories\Interfaces\DepartmentRepositoryInterface;
use App\Repositories\Interfaces\DoctorRepositoryInterface;
use App\Repositories\Interfaces\EmployeeRepositoryInterface;
use App\Repositories\Interfaces\JobRepositoryInterface;
use App\Repositories\Interfaces\MedicineRepositoryInterface;
use App\Repositories\Interfaces\PatientRepositoryInterface;
use App\Repositories\JobRepository;
use App\Repositories\MedicineRepository;
use App\Repositories\PatientRepository;
use App\Services\DepartmentService;
use App\Services\DoctorService;
use App\Services\EmployeeService;
use App\Services\ImageUploaderService;
use App\Services\Interfaces\DepartmentServiceInterface;
use App\Services\Interfaces\DoctorServiceInterface;
use App\Services\Interfaces\EmployeeServiceInterface;
use App\Services\Interfaces\ImageUploaderServiceInterface;
use App\Services\Interfaces\JobServiceInterface;
use App\Services\Interfaces\MedicineServiceInterface;
use App\Services\Interfaces\PatientServiceInterface;
use App\Services\JobService;
use App\Services\MedicineService;
use App\Services\PatientService;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->bindRepository();
        $this->bindService();
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Paginator::useTailwind();
    }

    public function bindRepository()
    {
        $this->app->bind(JobRepositoryInterface::class,JobRepository::class);
        $this->app->bind(EmployeeRepositoryInterface::class,EmployeeRepository::class);
        $this->app->bind(PatientRepositoryInterface::class,PatientRepository::class);
        $this->app->bind(DoctorRepositoryInterface::class,DoctorRepository::class);
        $this->app->bind(MedicineRepositoryInterface::class,MedicineRepository::class);
        $this->app->bind(DepartmentRepositoryInterface::class,DepartmentRepository::class);
    }

    public function bindService()
    {
        $this->app->bind(JobServiceInterface::class,JobService::class);
        $this->app->bind(EmployeeServiceInterface::class,EmployeeService::class);
        $this->app->bind(ImageUploaderServiceInterface::class,ImageUploaderService::class);
        $this->app->bind(PatientServiceInterface::class,PatientService::class);
        $this->app->bind(DoctorServiceInterface::class,DoctorService::class);
        $this->app->bind(MedicineServiceInterface::class,MedicineService::class);
        $this->app->bind(DepartmentServiceInterface::class,DepartmentService::class);
    }
}
