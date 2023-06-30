<?php

namespace App\Services;

use App\Http\Requests\RoomRequest;
use App\Models\Room;
use App\Services\Interfaces\RoomServiceInterface;

class RoomService implements RoomServiceInterface
{
    private Room $room;
    public function __construct(Room $room)
    {
        $this->room = $room;
    }

    public function store(RoomRequest $request)
    {
        return $this->room->create([
            'room_type' => $request->room_type,
            'room_number' => $request->room_number,
            'available' => $request->available,
            'department_id' => $request->department_id
        ]);
    }

    public function update(RoomRequest $request, Room $room)
    {
        $room->room_type = $request->room_type;
        $room->room_number = $request->room_number;
        $room->available = $request->available;
        $room->department_id = $request->department_id;
        $room->update();
    }

    public function destroy(string $id)
    {
        $room = $this->room->FindOrFail($id);
        $room->delete();
    }

    public function restore(string $id)
    {
        $room = $this->room->withTrashed()->FindOrFail($id);
        $room->restore();
    }
}
