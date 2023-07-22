<?php

namespace App\Http\Controllers;

use App\Models\Pharmacy;
use App\Repositories\Interfaces\PharmacyRepositoryInterface;
use App\Services\Interfaces\PharmacyServiceInterface;
use Illuminate\Http\Request;

class PharmacyController extends Controller
{
    private readonly PharmacyRepositoryInterface $pharmacyRepository;
    private readonly PharmacyServiceInterface $pharmacyService;

    public function __construct(PharmacyRepositoryInterface $pharmacyRepository, PharmacyServiceInterface $pharmacyService)
    {
        $this->pharmacyRepository = $pharmacyRepository;
        $this->pharmacyService = $pharmacyService;
    }

    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Pharmacy $pharmacy)
    {
        //
    }

    public function edit(Pharmacy $pharmacy)
    {
        //
    }


    public function update(Request $request, Pharmacy $pharmacy)
    {
        //
    }

    public function destroy(Pharmacy $pharmacy)
    {
        //
    }
}
