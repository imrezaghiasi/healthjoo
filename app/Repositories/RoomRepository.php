<?php

namespace App\Repositories;

use App\Models\Room;
use App\Repositories\Interfaces\RoomRepositoryInterface;
use Illuminate\Http\Request;

class RoomRepository implements RoomRepositoryInterface
{

    public function query()
    {
        return Room::query();
    }

    public function getWithTrashedLatest(Request $request)
    {
        return $this->query()->where('room_type','like','%'.$request->term.'%')->withTrashed()->latest();
    }
}
