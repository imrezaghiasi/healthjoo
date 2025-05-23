<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RoomRequest;
use App\Models\Room;
use App\Repositories\Interfaces\RoomRepositoryInterface;
use App\Services\Interfaces\RoomServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoomController extends Controller
{
    private string $redirectRoute = 'admin.rooms.index';

    private readonly RoomRepositoryInterface $roomRepository;
    private readonly RoomServiceInterface $roomService;

    public function __construct(RoomRepositoryInterface $roomRepository, RoomServiceInterface $roomService)
    {
        $this->roomRepository = $roomRepository;
        $this->roomService = $roomService;
    }

    public function index(Request $request)
    {
        $rooms = $this->roomRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/Room/Index',compact('rooms'));
    }

    public function create()
    {
        $departments = $this->roomRepository->getDepartmentForRooms();
        return Inertia::render('Admin/Room/Create',compact('departments'));
    }

    public function store(RoomRequest $request)
    {
        $this->roomService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Room $room)
    {
        //
    }

    public function edit(Room $room)
    {
        $departments = $this->roomRepository->getDepartmentForRooms();
        return Inertia::render('Admin/Room/Edit', compact('room','departments'));
    }

    public function update(RoomRequest $request, Room $room)
    {
        $this->roomService->update($request, $room);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(string $id)
    {
        $this->roomService->destroy($id);
    }

    public function restore(string $id)
    {
        $this->roomService->restore($id);
    }
}
