<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HouseController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\RatingController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'home'])->name('home');
Route::middleware(['auth'])->get('/dashboard', function(Request $request){
    if ($request->user()->type == 'admin') {
        return redirect('/admin');
    }

    elseif ($request->user()->type == 'vendor') {
        return redirect('/vendor');
    }

    else{
        return redirect('/');
    }
});
// Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

// home


// about
Route::get('/about', function (){
    return Inertia::render('About');
})->name('about');


// house
Route::get('houses', [HomeController::class, "houses"]);




Route::middleware(['auth:sanctum',config('jetstream.auth_session')])->group(function (){
    Route::get('house/view/{id}', [HomeController::class, "view"]);
    Route::get('house/{id}', [HomeController::class, "house"]);
    //likes
    Route::post('like', [LikeController::class, 'store']);

    //comments
    Route::post('comment', [CommentController::class, 'store']);

    //ratings
    Route::post('rating', [RatingController::class, 'store']);
});




//schools



// ADMIN
Route::middleware(['auth:sanctum',
config('jetstream.auth_session'), 'admin', 'verified'])->prefix('admin')->group(function (){
    Route::get('/', [DashboardController::class, 'index'])->name('admin');
    // under contruction
    Route::get('comingsoon', function (){
        return Inertia::render('Admin/ComingSoon');
    });

    // HOUSE ROUTES
    Route::prefix('house')->group(function (){
        Route::get('/', [HouseController::class, 'index'])->name('admin.houses');
        Route::get('/show/{id}', [HouseController::class, 'show']);
        Route::get('/form', [HouseController::class, 'form'])->name('admin.house.form');
        Route::post('/', [HouseController::class, 'store'])->name('admin.house.store');
        Route::put('/', [HouseController::class, 'update'])->name('admin.house.update');
        Route::delete('/destroy/{house}', [HouseController::class, 'destroy']);
    });

    // USER ROUTE GROUP
    Route::prefix('users')->group(function (){
        Route::get('/',[UserController::class, 'index'])->name('admin.user.users');
    });
});

// VENDOR
Route::middleware(['auth:sanctum',
config('jetstream.auth_session'), 'vendor', 'verified'])->prefix('vendor')->group(function (){
    Route::get('/', [DashboardController::class, 'index'])->name('vendor');
    // under contruction
    Route::get('comingsoon', function (){
        return Inertia::render('Vendor/ComingSoon');
    });

    // HOUSE ROUTES
    Route::prefix('house')->group(function (){
        Route::get('/', [HouseController::class, 'index'])->name('vendor.houses');
        Route::get('/show/{id}', [HouseController::class, 'show']);
        Route::get('/form', [HouseController::class, 'form'])->name('vendor.house.form');
        Route::post('/', [HouseController::class, 'store'])->name('vendor.house.store');
        Route::put('/', [HouseController::class, 'update'])->name('vendor.house.update');
        Route::delete('/destroy/{house}', [HouseController::class, 'destroy']);
    });

});





