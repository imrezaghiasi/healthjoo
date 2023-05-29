<?php

namespace App\Repositories;

use App\Models\Patient;
use App\Repositories\Interfaces\PatientRepositoryInterface;
use Illuminate\Http\Request;

class PatientRepository implements PatientRepositoryInterface
{
    public function query()
    {
        return Patient::query();
    }

    public function getWithTrashedLatest(Request $request)
    {
        return $this->query()->withTrashed()->where('first_name', 'like','%'.$request->term.'%')->orWhere('last_name', 'like','%'.$request->term.'%')->latest();

    }
}
