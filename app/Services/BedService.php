<?php

namespace App\Services;

use App\Http\Requests\BedRequest;
use App\Models\Bed;
use App\Services\Interfaces\BedServiceInterface;

class BedService implements BedServiceInterface
{
    private Bed $bed;
    public function __construct(Bed $bed)
    {
        $this->bed = $bed;
    }


    public function store(BedRequest $request)
    {
        return $this->bed->create([
            'bed_number' => $request->bed_number,
            'available' => $request->available,
            'department_id' => $request->department_id,
            'room_id' => $request->room_id
        ]);
    }

    public function update(BedRequest $request, Bed $bed)
    {
        $bed->bed_number = $request->bed_number;
        $bed->available = $request->available;
        $bed->department_id = $request->department_id;
        $bed->room_id = $request->room_id;
        $bed->update();
    }

    public function destroy(Bed $bed)
    {
        $bed->delete();
    }

    public function restore(string $id)
    {
        $bed = $this->bed->withTrashed()->FindOrFail($id);
        $bed->restore();
    }
}
