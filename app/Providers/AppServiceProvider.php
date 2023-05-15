<?php

namespace App\Providers;

use App\Repositories\EmployeeRepository;
use App\Repositories\Interfaces\EmployeeRepositoryInterface;
use App\Repositories\Interfaces\JobRepositoryInterface;
use App\Repositories\Interfaces\PatientRepositoryInterface;
use App\Repositories\JobRepository;
use App\Repositories\PatientRepository;
use App\Services\EmployeeService;
use App\Services\ImageUploaderService;
use App\Services\Interfaces\EmployeeServiceInterface;
use App\Services\Interfaces\ImageUploaderServiceInterface;
use App\Services\Interfaces\JobServiceInterface;
use App\Services\Interfaces\PatientServiceInterface;
use App\Services\JobService;
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
    }

    public function bindService()
    {
        $this->app->bind(JobServiceInterface::class,JobService::class);
        $this->app->bind(EmployeeServiceInterface::class,EmployeeService::class);
        $this->app->bind(ImageUploaderServiceInterface::class,ImageUploaderService::class);
        $this->app->bind(PatientServiceInterface::class,PatientService::class);
    }
}
