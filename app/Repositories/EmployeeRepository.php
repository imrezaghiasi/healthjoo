<?php

namespace App\Repositories;

use App\Models\Employee;
use App\Models\Job;
use App\Repositories\Interfaces\EmployeeRepositoryInterface;
use Illuminate\Http\Request;
use Morilog\Jalali\Jalalian;

class EmployeeRepository implements EmployeeRepositoryInterface
{
    public function query()
    {
        return Employee::query();
    }

    public function getWithTrashedLatest(Request $request)
    {
        $query = $this->query()->with(['job' => function($q){
            $q->withTrashed();
        }])->where('first_name', 'like','%'.$request->term.'%')->orWhere('last_name', 'like','%'.$request->term.'%')->withTrashed()->latest();
        return $query;
    }

    public function getJobForEmployees()
    {
        return Job::select('id', 'name')->get();
    }
}
