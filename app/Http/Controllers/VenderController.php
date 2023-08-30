<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\House;
use App\Models\User;

class VendorController extends Controller
{
    public function index(){
        $data = [
            'houses' => House::orderByDesc('id')->paginate(10),
            'occupied' => House::where('status', 'occupied')->get()->count(),
            'available' => House::where('status', 'active')->orWhere('status', 'available')->get()->count(),
            'users' => User::orderByDesc('id')->paginate(10),
        ];
        return Inertia::render('Vendor/Dashboard', $data);
    }
}
