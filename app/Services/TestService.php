<?php

namespace App\Services;

use App\Http\Requests\TestRequest;
use App\Models\Test;
use App\Services\Interfaces\TestServiceInterface;

class TestService implements TestServiceInterface
{
    private Test $test;
    public function __construct(Test $test)
    {
        $this->test = $test;
    }

    public function store(TestRequest $request)
    {
        return $this->test->create([
            'test_name' => $request->test_name,
            'unit' => $request->unit,
            'normal_range' => $request->normal_range
        ]);
    }

    public function update(TestRequest $request, Test $test)
    {
        $test->test_name = $request->test_name;
        $test->unit = $request->unit;
        $test->normal_range = $request->normal_range;
        $test->update();
    }

    public function destroy(Test $test)
    {
        $test->delete();
    }

    public function restore(string $id)
    {
        $test = $this->test->withTrashed()->FindOrFail($id);
        $test->restore();
    }
}
