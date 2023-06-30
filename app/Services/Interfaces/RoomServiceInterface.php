<?php

namespace App\Services\Interfaces;

use App\Http\Requests\RoomRequest;
use App\Models\Room;

interface RoomServiceInterface
{
    public function store(RoomRequest $request);
    public function update(RoomRequest $request, Room $department);
    public function destroy(string $id);
    public function restore(string $id);
}
