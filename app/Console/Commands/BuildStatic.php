<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class BuildStatic extends Command
{
    protected $signature = 'build:static';
    protected $description = 'Render Blade views ke file HTML statis di public/ untuk deployment Vercel';

    public function handle()
    {
        $this->info('🔨 Building static HTML files...');

        // Daftar halaman yang akan di-render
        $pages = [
            ['view' => 'index', 'output' => 'index.html'],
            ['view' => 'kalkulator', 'output' => 'kalkulator.html'],
        ];

        // Set APP_URL agar route() menghasilkan path relatif
        config(['app.url' => '']);
        url()->forceRootUrl('');

        foreach ($pages as $page) {
            $html = view($page['view'])->render();

            // Ganti URL absolut menjadi path relatif yang cocok untuk static hosting
            $html = str_replace(url('/kalkulator'), '/kalkulator.html', $html);
            $html = str_replace(url('/'), '/', $html);
            
            // Pastikan link ke halaman kalkulator menggunakan .html
            $html = preg_replace('/href="\/kalkulator(?!\.html)(?:\/?)"/i', 'href="/kalkulator.html"', $html);

            $outputPath = public_path($page['output']);
            File::put($outputPath, $html);

            $this->info("  ✅ {$page['view']} → public/{$page['output']}");
        }

        $this->newLine();
        $this->info('🚀 Build selesai! File siap di-deploy ke Vercel.');
        $this->info('   Jalankan: git add -A && git commit -m "build: static" && git push');
    }
}
