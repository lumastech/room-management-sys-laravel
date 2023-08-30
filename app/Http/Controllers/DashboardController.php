<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\House;
use App\Models\User;

class DashboardController extends Controller
{
    public function index(Request $request){
        $resource = 'Vendor/Dashboard';
        $data = [
            'houses' => House::orderByDesc('id')->where('user_id', $request->user()->id)->paginate(10),
            'occupied' => House::where('user_id', $request->user()->id)->where('status', 'occupied')->get()->count(),
            'available' => House::where('user_id', $request->user()->id)->where('status', 'active')->orWhere('status', 'available')->get()->count(),
            'users' => User::orderByDesc('id')->paginate(10),
        ];

        if($request->user()->type == "admin"){
            $data = [
                'houses' => House::orderByDesc('id')->paginate(10),
                'occupied' => House::where('status', 'occupied')->get()->count(),
                'available' => House::where('status', 'active')->orWhere('status', 'available')->get()->count(),
                'users' => User::orderByDesc('id')->paginate(10),
            ];
            $resource = 'Admin/Dashboard';
        }
        return Inertia::render($resource, $data);
    }
}
