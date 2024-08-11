<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MaintenanceCompanyResource;
use App\Models\MaintenanceCompany;
use App\Http\Requests\StoreMaintenanceCompanyRequest;
use App\Http\Requests\UpdateMaintenanceCompanyRequest;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class MaintenanceCompanyController
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Http\Controllers\Api
 */
class MaintenanceCompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return MaintenanceCompanyResource::collection(
            MaintenanceCompany::query()->orderBy('id', 'desc')->paginate()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMaintenanceCompanyRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMaintenanceCompanyRequest $request)
    {
        $data = $request->validated();
        $maintenanceCompany = MaintenanceCompany::create($data);
        return response(new MaintenanceCompanyResource($maintenanceCompany), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MaintenanceCompany  $maintenanceCompany
     * @return MaintenanceCompanyResource
     */
    public function show(MaintenanceCompany $maintenanceCompany)
    {
        return new MaintenanceCompanyResource($maintenanceCompany);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMaintenanceCompanyRequest  $request
     * @param  \App\Models\MaintenanceCompany  $maintenanceCompany
     * @return MaintenanceCompanyResource
     */
    public function update(UpdateMaintenanceCompanyRequest $request, MaintenanceCompany $maintenanceCompany)
    {
        $data = $request->validated();
        $maintenanceCompany->update($data);

        return new MaintenanceCompanyResource($maintenanceCompany);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MaintenanceCompany  $maintenanceCompany
     * @return \Illuminate\Http\Response
     */
    public function destroy(MaintenanceCompany $maintenanceCompany)
    {
        $maintenanceCompany->delete();
        return response('', 204);
    }
}
