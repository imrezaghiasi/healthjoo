<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DepartmentRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'name' => ['required','persian_alpha',Rule::unique('departments')->ignore($this->request->get('id')),'max:50'],
            'description' => ['nullable']
        ];

        return $rules;
    }
}
