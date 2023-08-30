<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHouseRequest;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateHouseRequest;
use App\Models\House;
use App\Models\Comment;
use App\Models\Like;
use App\Models\View;
use App\Models\Rating;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HouseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request){
        $houses = House::orderByDesc('id')->where('user_id', $request->user()->id)->paginate(24);
        $resource = 'Vendor/Houses';
        if($request->user()->type == "admin"){
            $houses = House::orderByDesc('id')->paginate(24);
            $resource = 'Admin/Houses';
        }
        return Inertia::render($resource, ['houses'=>$houses]);
    }


    public function houses(){
        $houses = House::orderByDesc('id')->paginate(24);
        return Inertia::render('Houses', ['houses'=>$houses]);
    }

    // form
    public function form(Request $request){
        $resource = 'Vendor/house-form';
        if($request->user()->type == "admin"){
            $resource = 'Admin/house-form';
        }
        return inertia($resource);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(){
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreHouseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHouseRequest $request){
        $data = $request->validated();
        $data['user_id'] = Auth::user()->id;
        $data['status'] = "active";

        //insert into plan table
        $imagefiles = [
            'image_1' => $request->file('image_1'),
            'image_2' => $request->file('image_2'),
            'image_3' => $request->file('image_3'),
        ];

        foreach ($imagefiles as $key => $file) {
            if ($file) {
                $dir = $file->store('public/images/house');
                $data[$key] = '/storage/'.str_replace("public/", "", $dir);
            }
        }
        // dd($data);
        House::create($data);

        return back();
    }

    // UPDATE images
    // public function updateplanimage(Request $request){
    //     $image_key = 'image_'.$request->pos;
    //     $request->validate([
    //         'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:4048'
    //     ]);

    //     $plan = Plan::where('id', $request->plan_id)->first(); //retreave pan table
    //     $plan->update([$image_key => 'public/'.$request->file('image')->store('images/plans')]);
    //     session(['message'=> [
    //         'type'=>'success',
    //         'title'=>'Success',
    //         'message'=>'Image '.$request->pos.' has been uploaded successfully!',
    //         'visible'=>true
    //         ]]);
    //     return back();
    // }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\House  $house
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request){
        $house = House::find($id);

        $data = [
            'house' => $house,
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

        $resource = 'Vendor/House';
        if($request->user()->type == "admin"){
            $resource = 'Admin/House';
        }

        return Inertia::render($resource, $data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\House  $house
     * @return \Illuminate\Http\Response
     */
    public function edit(House $house)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateHouseRequest  $request
     * @param  \App\Models\House  $house
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateHouseRequest $request, House $house)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\House  $house
     * @return \Illuminate\Http\Response
     */
    public function destroy($house)
    {
        House::destroy($house);

        return \back();
    }
}
