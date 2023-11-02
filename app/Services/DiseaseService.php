<?php

namespace App\Services;

use App\Http\Requests\DiseaseRequest;
use App\Models\Disease;
use App\Services\Interfaces\DiseaseServiceInterface;

class DiseaseService implements DiseaseServiceInterface
{
    private Disease $disease;
    public function __construct(Disease $disease)
    {
        $this->disease = $disease;
    }

    public function store(DiseaseRequest $request)
    {
        return $this->disease->create([
            'name' => $request->name
        ]);
    }

    public function update(DiseaseRequest $request, Disease $disease)
    {
        $disease->name = $request->name;
        $disease->update();
    }

    public function destroy(Disease $disease)
    {
        $disease->delete();
    }

    public function restore(string $id)
    {
        $disease = $this->disease->withTrashed()->FindOrFail($id);
        $disease->restore();
    }
}
