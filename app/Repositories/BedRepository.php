<?php

namespace App\Repositories;

use App\Models\Bed;
use App\Models\Department;
use App\Models\Room;
use App\Repositories\Interfaces\BedRepositoryInterface;
use Illuminate\Http\Request;

class BedRepository implements BedRepositoryInterface
{
    public function query()
    {
        return Bed::query();
    }

    public function getWithTrashedLatest(Request $request = null)
    {
        $query = $this->query()->with(['department' => function($q){
            $q->withTrashed();
        }, 'room' => function($q){
            $q->withTrashed();
        }])->where('bed_number', 'like','%'.$request->term.'%')->withTrashed()->latest();
        return $query;
    }

    public function getDepartmentForBeds()
    {
        return Department::select('id', 'name')->get();
    }

    public function getRoomForBeds()
    {
        return Room::select('id', 'room_type','room_number')->get();
    }
}
