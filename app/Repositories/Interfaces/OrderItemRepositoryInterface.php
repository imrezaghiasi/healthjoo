<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface OrderItemRepositoryInterface
{
    public function getWithTrashedLatest(Request $request = null);
}
