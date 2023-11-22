<?php

namespace App\Repositories;

use App\Models\Disease;
use App\Models\RequestAppointment;
use App\Repositories\Interfaces\ReportsRepositoryInterface;
use Illuminate\Http\Request;
use Nette\Utils\Paginator;

class ReportsRepository implements ReportsRepositoryInterface
{

    public function getRequestAppointmentsAccordingIllness()
    {
        $diseases = Disease::select('id', 'name')->get();
        $requestAppointments = RequestAppointment::with('disease')->get();

        $results = array();

        foreach ($diseases as $disease) {
            $temp = new \stdClass();
            $temp->id = $disease->id;
            $temp->name = $disease->name;
            $temp->count = 0;
            foreach ($requestAppointments as $requestAppointment) {
                if ($requestAppointment->disease->name == $disease->name) {
                    $temp->count += 1;
                }
            }
            $results[] = $temp;
        }

        return $results;
    }

    public function getRequestAppointmentsAccordingGender()
    {
        // TODO: Implement getRequestAppointmentsAccordingGender() method.
    }

    public function getHospitalizationsAccordingIllness()
    {
        // TODO: Implement getHospitalizationsAccordingIllness() method.
    }

    public function getHospitalizationsAccordingGender()
    {
        // TODO: Implement getHospitalizationsAccordingGender() method.
    }

    public function getLaboratoryTestsAccordingDate(Request $request)
    {
        // TODO: Implement getLaboratoryTestsAccordingDate() method.
    }

    public function getOrdersAccordingDate(Request $request)
    {
        // TODO: Implement getOrdersAccordingDate() method.
    }
}
