<?php

namespace App\Services\Interfaces;

use App\Http\Requests\BedRequest;
use App\Models\Bed;

interface BedServiceInterface
{
    public function store(BedRequest $request);
    public function update(BedRequest $request, Bed $bed);
    public function destroy(Bed $bed);
    public function restore(string $id);
}
