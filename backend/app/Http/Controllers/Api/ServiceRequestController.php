<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceRequestResource;
use App\Models\ServiceRequest;
use App\Http\Requests\StoreServiceRequestRequest;
use App\Http\Requests\UpdateServiceRequestRequest;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class ServiceRequestController
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Http\Controllers\Api
 */
class ServiceRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return ServiceRequestResource::collection(
            ServiceRequest::query()->orderBy('id', 'desc')->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreServiceRequestRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreServiceRequestRequest $request)
    {
        $data = $request->validated();
        $serviceRequest = ServiceRequest::create($data);
        return response(new ServiceRequestResource($serviceRequest), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ServiceRequest  $serviceRequest
     * @return ServiceRequestResource
     */
    public function show(ServiceRequest $serviceRequest)
    {
        return new ServiceRequestResource($serviceRequest);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateServiceRequestRequest  $request
     * @param  \App\Models\ServiceRequest  $serviceRequest
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateServiceRequestRequest $request, ServiceRequest $serviceRequest)
    {
        $data = $request->validated();
        $serviceRequest->update($data);
        return new ServiceRequestResource($serviceRequest);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceRequest  $serviceRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceRequest $serviceRequest)
    {
        $serviceRequest->delete();
        return response('', 204);
    }
}
