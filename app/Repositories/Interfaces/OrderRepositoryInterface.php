<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface OrderRepositoryInterface
{
    public function getWithTrashedLatest(Request $request = null);
}
