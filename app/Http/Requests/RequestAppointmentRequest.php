<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestAppointmentRequest extends FormRequest
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
            'user_id' => ['required','exists:users,id'],
            'patient_id' => ['required','exists:patients,id'],
            'date_started_at' => ['required'],
            'time_started_at' => ['required'],
            'disease_id' => ['required']
        ];
    }
}
