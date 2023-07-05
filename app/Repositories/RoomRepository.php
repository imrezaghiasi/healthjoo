<?php

namespace App\Repositories;

use App\Models\Department;
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
        $query = $this->query()->with(['department' => function($q){
            $q->withTrashed();
        }])->where('room_number', 'like','%'.$request->term.'%')->withTrashed()->latest();
        return $query;
    }

    public function getJobForEmployees()
    {
        return Department::select('id', 'name')->get();
    }
}
