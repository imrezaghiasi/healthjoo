<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface BedRepositoryInterface
{
    public function getWithTrashedLatest(Request $request = null);
    public function getDepartmentForBeds();
    public function getRoomForBeds();
}
