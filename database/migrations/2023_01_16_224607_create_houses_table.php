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
            $table->string('price');
            $table->foreignId('user_id');
            $table->string('near_By_school')->nullable();
            $table->foreignId('school_id')->nullable();
            $table->string('type')->nullable();
            $table->integer('rooms')->nullable();
            $table->string('bathroom')->nullable();
            $table->string('walfance')->nullable();
            $table->string('water')->nullable();
            $table->string('electricity')->nullable();
            $table->string('location')->nullable();
            $table->string('car_park')->nullable();
            $table->string('status', 15)->default('active');
            $table->string('area')->nullable();
            $table->string('town')->nullable();
            $table->string('image_1')->nullable();
            $table->string('image_2')->nullable();
            $table->string('image_3')->nullable();
            $table->text('description')->nullable();
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
