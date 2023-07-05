<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DoctorRequest extends FormRequest
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
            'national_code' => ['required',Rule::unique('doctors')->ignore($this->request->get('id')),'numeric','digits:10'],
            'date_of_birth' => ['required'],
            'gender' => ['required','min:1','max:2'],
            'email' => ['nullable','email'],
            'mobile' => ['required','ir_mobile'],
            'address' => ['required'],
            'specialization' => ['required','persian_alpha'],
            'photo' => ['nullable','image','mimes:jpg,png,jpeg','max:2048'],
        ];
        if (request()->isMethod('put')){
            $rules['photo'] = [''];
        }

        return $rules;
    }
}
