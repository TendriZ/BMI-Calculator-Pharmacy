<?php

define('LARAVEL_START', microtime(true));

// WAJIB: Load Composer autoloader dulu sebelum apapun
require_once __DIR__ . '/../vendor/autoload.php';

// Baru bootstrap Laravel
$app = require_once __DIR__ . '/../bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);
