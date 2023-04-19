<?php

namespace App\Repositories;

use App\Models\Employee;
use App\Models\Job;
use App\Repositories\Interfaces\EmployeeRepositoryInterface;

class EmployeeRepository implements EmployeeRepositoryInterface
{
    public function query()
    {
        return Employee::query();
    }

    public function getWithTrashedLatest()
    {
        return $this->query()->with(['job' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }

    public function getJobForEmployees()
    {
        return Job::select('id', 'name')->get();
    }
}
