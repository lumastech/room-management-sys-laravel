<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('houses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('user_id');
            $table->foreignId('school_id');
            $table->string('type');
            $table->integer('rooms');
            $table->string('bathroom');
            $table->boolean('walfance');
            $table->boolean('water');
            $table->boolean('electricity');
            $table->float('rentals');
            $table->string('location');
            $table->boolean('car_parck');
            $table->string('status', 15);
            $table->string('area');
            $table->string('town');
            $table->text('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('houses');
    }
};
