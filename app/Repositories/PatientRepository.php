<?php

namespace App\Repositories;

use App\Models\Patient;
use App\Repositories\Interfaces\PatientRepositoryInterface;

class PatientRepository implements PatientRepositoryInterface
{
    public function query()
    {
        return Patient::query();
    }

    public function getWithTrashedLatest()
    {
        return $this->query()->withTrashed()->latest();

    }
}
