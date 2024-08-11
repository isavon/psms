<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class StoreServiceRequestRequest
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Http\Requests
 */
class StoreServiceRequestRequest extends FormRequest
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
            'aircraft_id' => 'required|numeric',
            'issue' => 'required|string',
            'priority' => [
                'required',
                Rule::in(['low', 'medium','high']),
            ],
            'due_date' => 'required|date',
            'maintenance_company_id' => 'nullable|numeric',
            'status' => [
                'required',
                Rule::in(['awaits', 'in progress', 'completed']),
            ],
        ];
    }
}
