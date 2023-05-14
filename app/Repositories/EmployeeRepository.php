<?php

namespace App\Repositories;

use App\Models\Employee;
use App\Models\Job;
use App\Repositories\Interfaces\EmployeeRepositoryInterface;
use Morilog\Jalali\Jalalian;

class EmployeeRepository implements EmployeeRepositoryInterface
{
    public function query()
    {
        return Employee::query();
    }

    public function getWithTrashedLatest()
    {
        $query = $this->query()->with(['job' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
        return $query;
    }

    public function getJobForEmployees()
    {
        return Job::select('id', 'name')->get();
    }
}
