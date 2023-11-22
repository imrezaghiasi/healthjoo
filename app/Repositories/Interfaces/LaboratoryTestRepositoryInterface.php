<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface LaboratoryTestRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);
    public function getPatientForLaboratoryTest();
}
