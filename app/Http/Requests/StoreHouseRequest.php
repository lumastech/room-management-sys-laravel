<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreHouseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'string|required',
            'price' => 'string|required',
            'school_id' => 'numeric|nullable',
            'near_By_school' => 'string|nullable',
            'type' => 'string|required',
            'rooms' => 'numeric|required',
            'bathroom' => 'string|required',
            'walfance' => 'string|required',
            'water' => 'string|required',
            'electricity' => 'string|required',
            'location' => 'nullable|string',
            'car_park' => 'string|required',
            'status' => 'string|nullable',
            'area' => 'string|required',
            'town' => 'string|required',
            'description' => 'string|nullable',
            'image_1' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:4048',
            'image_2' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:4048',
            'image_3' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:4048',
        ];
    }
}
