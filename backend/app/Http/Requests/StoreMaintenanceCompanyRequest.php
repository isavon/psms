<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreMaintenanceCompanyRequest
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Http\Requests
 */
class StoreMaintenanceCompanyRequest extends FormRequest
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
            'name' => 'required|string|unique:maintenance_companies,name',
            'address' => 'nullable|string|max:255',
            'number' => 'nullable|string|max:255',
            'specialization' => 'nullable|string|max:255',
        ];
    }
}
