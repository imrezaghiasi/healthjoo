<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface RoomRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);
}
