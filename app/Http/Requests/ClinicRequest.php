<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClinicRequest extends FormRequest
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
            'doctor_id' => ['required','exists:doctors,id'],
            'address' => 'required',
            'phone' => 'required',
            'start_day' => ['required','min:0','max:6'],
            'end_day' => ['required','min:0','max:6'],
            'start_hours' => 'required',
            'end_hours' => 'required',
        ];
    }
}
