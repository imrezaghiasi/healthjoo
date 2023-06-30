<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoomRequest extends FormRequest
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
            'room_type' => ['required','max:50','persian_alpha'],
            'room_number' => ['required','digits:3','numeric','unique:rooms'],
            'available' => ['required','max:1'],
            'department_id' => ['required','exists:departments,id']
        ];
    }
}
