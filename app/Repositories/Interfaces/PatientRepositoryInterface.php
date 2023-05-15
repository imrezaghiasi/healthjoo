<?php

namespace App\Repositories\Interfaces;

interface PatientRepositoryInterface
{
    public function getWithTrashedLatest();
}
