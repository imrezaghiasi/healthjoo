<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface LaboratoryTestItemRepositoryInterface
{
    public function getWithTrashedLatest();
    public function getTestForLaboratoryTestItem();
}
