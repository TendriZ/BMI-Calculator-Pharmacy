<?php

// Sesuaikan path agar Laravel bisa dijalankan dari folder api/
define('LARAVEL_START', microtime(true));

// Bootstrap Laravel dari lokasi yang benar
$app = require_once __DIR__ . '/../bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);
