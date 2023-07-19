<?php

namespace App\Services\Interfaces;

use App\Http\Requests\TestRequest;
use App\Models\Test;

interface TestServiceInterface
{
    public function store(TestRequest $request);
    public function update(TestRequest $request, Test $test);
    public function destroy(Test $test);
    public function restore(string $id);
}
