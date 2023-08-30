<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Models\House;
use App\Models\Comment;
use App\Models\Like;
use App\Models\View;
use App\Models\Rating;
use App\Models\User;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home(){
        $houses = House::orderByDesc('id')->get();

        return Inertia::render('Home', [
            'houses' => $houses,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    // show a list of houses
    public function houses(){
        $houses = House::orderByDesc('id')->paginate(24);

        return Inertia::render('Houses', ['houses' => $houses]);
    }

    // count house views
    public function view($id, Request $request){
        View::create(['house_id'=>$id, 'user_id'=>$request->user()->id]);
        return redirect('house/'.$id);
    }


    // show a single house
    public function house($id, Request $request){
        $house = House::find($id);

        $data = [
            'house' => $house,
            'houses' => House::orderByDesc('id')->paginate(24),
            'comments' => Comment::where('house_id', $id)->get()->map(fn($comment) => [
                'user' => User::find($comment->user_id)->name,
                'user_id' => $comment->user_id,
                'comment' => $comment->comment,
                'created_at' => $comment->created_at->diffForHumans()
            ]),
            'likes' => Like::where('house_id', $id)->where('type', 'like')->get(),
            'views' => View::where('house_id', $id)->get(),
            'dislikes' => Like::where('house_id', $id)->where('type', 'dislike')->get(),
            'username' => User::find($house->user_id)->name,
            'liked' => Like::where('user_id', $request->user()->id)->where('house_id', $id)->where('type', 'like')->first()? true : false,
            'disliked' => Like::where('user_id', $request->user()->id)->where('house_id', $id)->where('type', 'dislike')->first()? true : false,
            'ratings' => Rating::where('house_id', $id)->get(),
            'rating' => Rating::where('house_id', $id)->where('user_id', $request->user()->id)->first(),
        ];

        return Inertia::render('House', $data);
    }
}
