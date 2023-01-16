<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    use HasFactory;

    public function user(){
        return belongsTo(User::class);
    }

    public function school(){
        return belongsTo(School::class);
    }

    public function ratings(){
        return hasMany(Rating::class);
    }

    public function comments(){
        return hasMany(Comment::class);
    }

    public function likes(){
        return hasMany(Like::class);
    }

    protected $fillable =[
        'name',
        'user_id',
        'school_id',
        'type',
        'rooms',
        'bathroom',
        'walfance',
        'water',
        'electricity',
        'rentals',
        'location',
        'car_parck',
        'status',
        'area',
        'town',
        'description',
        'image_1',
        'image_2',
        'image_3',
    ];
}
