<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreAircraftRequest
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Http\Requests
 */
class StoreAircraftRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'model' => 'required|string|unique:aircraft,model',
            'serial_number' => 'required|numeric|max:1000000',
            'registration' => 'required|string|max:6',
            'id_maintenance_company' => 'nullable|numeric',
        ];
    }
}
