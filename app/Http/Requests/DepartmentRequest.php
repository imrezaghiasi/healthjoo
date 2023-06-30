<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DepartmentRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'name' => ['required','persian_alpha','unique:departments','max:50'],
            'description' => ['nullable','persian_alpha']
        ];

        if (request()->isMethod('put')){
            $rules['name'] = ['required','persian_alpha','max:50'];
        }

        return $rules;
    }
}
