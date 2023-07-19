<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface LaboratoryTestRepositoryInterface
{
    public function getWithTrashedLatest();
    public function getPatientForLaboratoryTest();
}
