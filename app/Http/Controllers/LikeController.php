<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;

class LikeController extends Controller
{

    // like function
    public function store(Request $request){
        $like = $request->validate([
            'house_id' => "required|numeric",
            'type' => 'string|required'
        ]);
        $like['user_id'] = $request->user()->id;

        $reaction = Like::where('user_id', $like['user_id'])->where('house_id', $like['house_id'])->first();

        if($like['type'] == "like"){
            if($reaction){
                if($reaction->type == 'like'){
                    $reaction->delete();
                    return back();
                }
                $reaction->delete();
            }

            Like::create($like);
            return back();
        }else{
            if($reaction){
                if($reaction->type == 'dislike'){
                    $reaction->delete();
                    return back();
                }
                $reaction->delete();
            }

            Like::create($like);
            return back();
        }

    }

}
