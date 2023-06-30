<?php

namespace App\Repositories;

use App\Models\Doctor;
use App\Repositories\Interfaces\DoctorRepositoryInterface;
use Illuminate\Http\Request;

class DoctorRepository implements DoctorRepositoryInterface
{
    public function query()
    {
        return Doctor::query();
    }

    public function getWithTrashedLatest(Request $request)
    {
        return $this->query()->where('first_name','like','%'.$request->term.'%')->orWhere('last_name','like','%'.$request->term.'%')->withTrashed()->latest();
    }
}
