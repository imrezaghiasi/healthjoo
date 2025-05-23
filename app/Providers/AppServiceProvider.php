<?php

namespace App\Providers;

use App\Repositories\AppointmentRepository;
use App\Repositories\BedRepository;
use App\Repositories\ClinicRepository;
use App\Repositories\DepartmentRepository;
use App\Repositories\DiseaseRepository;
use App\Repositories\DoctorRepository;
use App\Repositories\EmployeeRepository;
use App\Repositories\HospitalizationRepository;
use App\Repositories\Interfaces\AppointmentRepositoryInterface;
use App\Repositories\Interfaces\BedRepositoryInterface;
use App\Repositories\Interfaces\ClinicRepositoryInterface;
use App\Repositories\Interfaces\DepartmentRepositoryInterface;
use App\Repositories\Interfaces\DiseaseRepositoryInterface;
use App\Repositories\Interfaces\DoctorRepositoryInterface;
use App\Repositories\Interfaces\EmployeeRepositoryInterface;
use App\Repositories\Interfaces\HospitalizationRepositoryInterface;
use App\Repositories\Interfaces\JobRepositoryInterface;
use App\Repositories\Interfaces\LaboratoryTestItemRepositoryInterface;
use App\Repositories\Interfaces\LaboratoryTestRepositoryInterface;
use App\Repositories\Interfaces\MedicineRepositoryInterface;
use App\Repositories\Interfaces\OrderRepositoryInterface;
use App\Repositories\Interfaces\ReportsRepositoryInterface;
use App\Repositories\Interfaces\PatientRepositoryInterface;
use App\Repositories\Interfaces\PharmacyRepositoryInterface;
use App\Repositories\Interfaces\RequestAppointmentRepositoryInterface;
use App\Repositories\Interfaces\RoomRepositoryInterface;
use App\Repositories\Interfaces\TestRepositoryInterface;
use App\Repositories\JobRepository;
use App\Repositories\LaboratoryTestItemRepository;
use App\Repositories\LaboratoryTestRepository;
use App\Repositories\MedicineRepository;
use App\Repositories\OrderRepository;
use App\Repositories\ReportsRepository;
use App\Repositories\PatientRepository;
use App\Repositories\PharmacyRepository;
use App\Repositories\RequestAppointmentRepository;
use App\Repositories\RoomRepository;
use App\Repositories\TestRepository;
use App\Services\AppointmentService;
use App\Services\BedService;
use App\Services\ClinicService;
use App\Services\DepartmentService;
use App\Services\DiseaseService;
use App\Services\DoctorService;
use App\Services\EmployeeService;
use App\Services\HospitalizationService;
use App\Services\ImageUploaderService;
use App\Services\Interfaces\AppointmentServiceInterface;
use App\Services\Interfaces\BedServiceInterface;
use App\Services\Interfaces\ClinicServiceInterface;
use App\Services\Interfaces\DepartmentServiceInterface;
use App\Services\Interfaces\DiseaseServiceInterface;
use App\Services\Interfaces\DoctorServiceInterface;
use App\Services\Interfaces\EmployeeServiceInterface;
use App\Services\Interfaces\HospitalizationServiceInterface;
use App\Services\Interfaces\ImageUploaderServiceInterface;
use App\Services\Interfaces\JobServiceInterface;
use App\Services\Interfaces\LaboratoryTestItemServiceInterface;
use App\Services\Interfaces\LaboratoryTestServiceInterface;
use App\Services\Interfaces\MedicineServiceInterface;
use App\Services\Interfaces\OrderServiceInterface;
use App\Services\Interfaces\PatientServiceInterface;
use App\Services\Interfaces\PharmacyServiceInterface;
use App\Services\Interfaces\RequestAppointmentServiceInterface;
use App\Services\Interfaces\RoomServiceInterface;
use App\Services\Interfaces\TestServiceInterface;
use App\Services\JobService;
use App\Services\LaboratoryTestItemService;
use App\Services\LaboratoryTestService;
use App\Services\MedicineService;
use App\Services\OrderService;
use App\Services\PatientService;
use App\Services\PharmacyService;
use App\Services\RequestAppointmentService;
use App\Services\RoomService;
use App\Services\TestService;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

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
        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }
        Schema::defaultStringLength(191);
        Paginator::useTailwind();
    }

    public function bindRepository()
    {
        $this->app->bind(JobRepositoryInterface::class, JobRepository::class);
        $this->app->bind(EmployeeRepositoryInterface::class, EmployeeRepository::class);
        $this->app->bind(PatientRepositoryInterface::class, PatientRepository::class);
        $this->app->bind(DoctorRepositoryInterface::class, DoctorRepository::class);
        $this->app->bind(MedicineRepositoryInterface::class, MedicineRepository::class);
        $this->app->bind(DepartmentRepositoryInterface::class, DepartmentRepository::class);
        $this->app->bind(RoomRepositoryInterface::class, RoomRepository::class);
        $this->app->bind(HospitalizationRepositoryInterface::class, HospitalizationRepository::class);
        $this->app->bind(BedRepositoryInterface::class, BedRepository::class);
        $this->app->bind(TestRepositoryInterface::class, TestRepository::class);
        $this->app->bind(LaboratoryTestItemRepositoryInterface::class, LaboratoryTestItemRepository::class);
        $this->app->bind(LaboratoryTestRepositoryInterface::class, LaboratoryTestRepository::class);
        $this->app->bind(PharmacyRepositoryInterface::class, PharmacyRepository::class);
        $this->app->bind(OrderRepositoryInterface::class, OrderRepository::class);
        $this->app->bind(AppointmentRepositoryInterface::class, AppointmentRepository::class);
        $this->app->bind(RequestAppointmentRepositoryInterface::class, RequestAppointmentRepository::class);
        $this->app->bind(DiseaseRepositoryInterface::class, DiseaseRepository::class);
        $this->app->bind(ReportsRepositoryInterface::class, ReportsRepository::class);
        $this->app->bind(ClinicRepositoryInterface::class, ClinicRepository::class);
    }

    public function bindService()
    {
        $this->app->bind(JobServiceInterface::class, JobService::class);
        $this->app->bind(EmployeeServiceInterface::class, EmployeeService::class);
        $this->app->bind(ImageUploaderServiceInterface::class, ImageUploaderService::class);
        $this->app->bind(PatientServiceInterface::class, PatientService::class);
        $this->app->bind(DoctorServiceInterface::class, DoctorService::class);
        $this->app->bind(MedicineServiceInterface::class, MedicineService::class);
        $this->app->bind(DepartmentServiceInterface::class, DepartmentService::class);
        $this->app->bind(RoomServiceInterface::class, RoomService::class);
        $this->app->bind(HospitalizationServiceInterface::class, HospitalizationService::class);
        $this->app->bind(BedServiceInterface::class, BedService::class);
        $this->app->bind(TestServiceInterface::class, TestService::class);
        $this->app->bind(LaboratoryTestItemServiceInterface::class, LaboratoryTestItemService::class);
        $this->app->bind(LaboratoryTestServiceInterface::class, LaboratoryTestService::class);
        $this->app->bind(PharmacyServiceInterface::class, PharmacyService::class);
        $this->app->bind(OrderServiceInterface::class, OrderService::class);
        $this->app->bind(AppointmentServiceInterface::class, AppointmentService::class);
        $this->app->bind(RequestAppointmentServiceInterface::class, RequestAppointmentService::class);
        $this->app->bind(DiseaseServiceInterface::class, DiseaseService::class);
        $this->app->bind(ClinicServiceInterface::class, ClinicService::class);
    }
}
