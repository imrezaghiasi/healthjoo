<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BedRequest extends FormRequest
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
            'bed_number' => ['required','digits_between:1,4','numeric',Rule::unique('beds')->ignore($this->request->get('id'))],
            'available' => ['required','max:1'],
            'room_id' => ['required','exists:rooms,id'],
            'department_id' => ['required','exists:departments,id']
        ];
    }
}
