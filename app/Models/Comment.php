<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    public function house(){
        return belongsTo(House::class);
    }

    public function user(){
        return belongsTo(User::class);
    }

    protected $fillable = [
        'user_id',
        'house_id',
        'comment',
        'status'
    ];
}
