<?php

namespace App\Services;

use App\Http\Requests\HospitalizationRequest;
use App\Models\Bed;
use App\Models\Hospitalization;
use App\Models\Room;
use App\Services\Interfaces\HospitalizationServiceInterface;
use Carbon\Carbon;

class HospitalizationService implements HospitalizationServiceInterface
{
    private Hospitalization $hospitalization;

    public function __construct(Hospitalization $hospitalization)
    {
        $this->hospitalization = $hospitalization;
    }

    public function store(HospitalizationRequest $request)
    {
        $this->hospitalization->patient_id = $request->patient_id;
        $this->hospitalization->room_id = $request->room_id;
        $this->hospitalization->doctor_id = $request->doctor_id;
        $this->hospitalization->bed_id = $request->bed_id;
        $this->hospitalization->disease = $request->disease;
        $this->hospitalization->started_at = Carbon::parse("$request->date_started_at $request->time_started_at");

        $this->hospitalization->save();

        $bed = Bed::findOrFail($this->hospitalization->bed_id);
        $bed->available = 0;
        $bed->update();
        $room = Room::findOrFail($this->hospitalization->room_id);
        $availableBedCount = $room->beds()->where('available', 1)->count();
        if ($availableBedCount == 0) {
            $room->available = 0;
            $room->update();
        }
    }

    public function update(HospitalizationRequest $request, Hospitalization $hospitalization)
    {
        $hospitalization->patient_id = $request->patient_id;
        $hospitalization->room_id = $request->room_id;
        $hospitalization->doctor_id = $request->doctor_id;

        if ($request->bed_id != $hospitalization->bed_id) {
            $bed = Bed::findOrFail($hospitalization->bed_id);
            $bed->available = 1;
            $bed->update();
            $bed = Bed::findOrFail($request->bed_id);
            $bed->available = 0;
            $bed->update();
            $room = Room::findOrFail($this->hospitalization->room_id);
            $availableBedCount = $room->beds()->where('available', 1)->count();
            if ($availableBedCount == 0) {
                $room->available = 0;
                $room->update();
            }
        }

        $hospitalization->bed_id = $request->bed_id;
        $hospitalization->disease = $request->disease;
        $hospitalization->started_at = Carbon::parse("$request->date_started_at $request->time_started_at");

        $hospitalization->update();
    }

    public function destroy(Hospitalization $hospitalization)
    {
        $hospitalization->delete();
    }

    public function restore(string $id)
    {
        $hospitalization = $this->hospitalization->withTrashed()->FindOrFail($id);
        $hospitalization->restore();
    }

    public function update_finished_at(HospitalizationRequest $request, Hospitalization $hospitalization)
    {
        $hospitalization->finished_at = Carbon::parse("$request->date_finished_at $request->time_finished_at");

        $hospitalization->update();

        $bed = Bed::findOrFail($hospitalization->bed_id);
        $bed->available = 1;
        $bed->update();
        $room = Room::findOrFail($hospitalization->room_id);
        if ($room->available == 0) {
            $room->available = 1;
            $room->update();
        }
    }
}
