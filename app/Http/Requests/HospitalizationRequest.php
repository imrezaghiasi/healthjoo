<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HospitalizationRequest extends FormRequest
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
        $rules = [];
        if (request()->isMethod('put')){
           $rules = [
               'date_finished_at' => ['required'],
               'time_finished_at' => ['required'],
           ];
        }else{
            $rules = [
                'patient_id' => ['required','exists:patients,id'],
                'room_id' => ['required','exists:rooms,id'],
                'doctor_id' => ['required','exists:doctors,id'],
                'disease' => ['required'],
                'date_started_at' => ['required'],
                'time_started_at' => ['required'],
            ];
        }
         return $rules;
    }
}
