<?php

namespace App\Http\Requests;

use Iamfarhad\Validation\Rules\PersianAlpha;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class JobRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required',Rule::unique('jobs')->ignore($this->request->get('id')),'max:50','persian_alpha']
        ];
    }
}
