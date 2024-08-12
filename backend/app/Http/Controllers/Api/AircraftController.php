<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AircraftResource;
use App\Models\Aircraft;
use App\Http\Requests\StoreAircraftRequest;
use App\Http\Requests\UpdateAircraftRequest;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class AircraftController
 *
 * @author Ivan Savon <isavon.we@gmail.com>
 * @package App\Http\Controllers\Api
 */
class AircraftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return AircraftResource::collection(
            Aircraft::query()->orderBy('id', 'desc')->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAircraftRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAircraftRequest $request)
    {
        $data = $request->validated();
        $aircraft = Aircraft::create($data);
        return response(new AircraftResource($aircraft), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Aircraft  $aircraft
     * @return AircraftResource
     */
    public function show(Aircraft $aircraft)
    {
        return new AircraftResource($aircraft);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAircraftRequest  $request
     * @param  \App\Models\Aircraft  $aircraft
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAircraftRequest $request, Aircraft $aircraft)
    {
        $data = $request->validated();
        $aircraft->update($data);

        return new AircraftResource($aircraft);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Aircraft  $aircraft
     * @return \Illuminate\Http\Response
     */
    public function destroy(Aircraft $aircraft)
    {
        $aircraft->delete();
        return response('', 204);
    }
}
