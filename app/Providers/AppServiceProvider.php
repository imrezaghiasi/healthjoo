<?php

namespace App\Providers;

use App\Repositories\EmployeeRepository;
use App\Repositories\Interfaces\EmployeeRepositoryInterface;
use App\Repositories\Interfaces\JobRepositoryInterface;
use App\Repositories\JobRepository;
use App\Services\EmployeeService;
use App\Services\ImageUploaderService;
use App\Services\Interfaces\EmployeeServiceInterface;
use App\Services\Interfaces\ImageUploaderServiceInterface;
use App\Services\Interfaces\JobServiceInterface;
use App\Services\JobService;
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
    }

    public function bindService()
    {
        $this->app->bind(JobServiceInterface::class,JobService::class);
        $this->app->bind(EmployeeServiceInterface::class,EmployeeService::class);
        $this->app->bind(ImageUploaderServiceInterface::class,ImageUploaderService::class);
    }
}
