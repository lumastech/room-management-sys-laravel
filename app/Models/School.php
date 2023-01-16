<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;

    public function user(){
        return belongsTo(User::class);
    }

    protected $fillable = ['user_id', 'image_1', 'name', 'location', 'area', 'town'];
}
