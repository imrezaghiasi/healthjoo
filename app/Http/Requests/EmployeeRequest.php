<?php

namespace App\Http\Requests;

use Iamfarhad\Validation\Rules\Address;
use Iamfarhad\Validation\Rules\Mobile;
use Iamfarhad\Validation\Rules\NationalCode;
use Iamfarhad\Validation\Rules\PersianAlpha;
use Iamfarhad\Validation\Rules\Phone;
use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
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
            'first_name' => ['required',new PersianAlpha()],
            'last_name' => ['required',new PersianAlpha()],
            'phone' => ['required',new Mobile()],
            'national_code' => ['required',new NationalCode()],
            'gender' => ['required','min:1','max:2'],
            'email' => ['email'],
            'address' => ['required',new Address()],
            'photo' => ['mimes:jpeg,png,jpg','size:1024'],
            'job_id' => ['required'],
        ];
    }
}
