<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rating;

class RatingController extends Controller
{
    public function store(Request $request){
        $rating = $request->validate([
            'house_id' => 'required|numeric',
            'stars' => 'required|numeric',
        ]);

        $rating['user_id'] = $request->user()->id;

        $exist = Rating::where('house_id', $request->house_id)->where('user_id', $request->user()->id)->first();

        if($exist){
            $exist->delete();
        }

        Rating::create($rating);
        return back();
    }

}
