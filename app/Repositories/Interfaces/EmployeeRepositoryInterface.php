<?php

namespace App\Repositories\Interfaces;

interface EmployeeRepositoryInterface
{
    public function getWithTrashedLatest();
    public function getJobForEmployees();
}
