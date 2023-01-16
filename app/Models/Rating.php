<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    public function user(){
        return belongsTo(User::class);
    }

    public function house(){
        return belongsTo(House::class);
    }

    protected $fillable = ['user_id', 'house_id', 'stars'];
}
