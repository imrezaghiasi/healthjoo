<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PatientRequest extends FormRequest
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
        $rules = [
            'first_name' => ['required','persian_alpha'],
            'last_name' => ['required','persian_alpha'],
            'mobile' => ['required','ir_mobile'],
            'national_code' => ['required','unique:patients','numeric','digits:10'],
            'gender' => ['required','min:1','max:2'],
            'photo' => ['nullable','image','mimes:jpg,png,jpeg','max:2048'],
            'blood_group' => ['required'],
            'address' => ['required','persian_alpha'],
            'date_of_birth' => ['required']
        ];
        if (request()->isMethod('put')){
            $rules['national_code'] = ['required','digits:10','numeric'];
            $rules['photo'] = [''];
        }

        return $rules;
    }
}
