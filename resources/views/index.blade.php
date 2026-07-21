<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Terapi Tambahan | Permen Penurun Gula Darah</title>
    <meta name="description" content="Estimasi kebutuhan terapi adjuvant penurun kadar gula darah.">
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Konfigurasi Tailwind untuk Palette Warna Kita -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                    },
                    colors: {
                        maroon: '#640607',
                        salmon: '#E09184',
                        green: '#485D36',
                        crimson: '#C63D4D',
                        cream: '#F6F4E6',
                        dark: '#3B0A0A',
                    }
                }
            }
        }
    </script>

    <style>
        :root {
            --maroon:  #640607;
            --salmon:  #E09184;
            --green:   #485D36;
            --crimson: #C63D4D;
            --cream:   #F6F4E6;
            --text-dark:  #3B0A0A;
            --text-muted: rgba(100, 6, 7, 0.45);
        }

        body {
            background-color: var(--cream);
            color: var(--text-dark);
            /* Background Pattern Lembut */
            background-image: linear-gradient(to right, rgba(224,145,132,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(224,145,132,0.1) 1px, transparent 1px);
            background-size: 4rem 4rem;
        }

        /* --- Style Kalkulator (Dari Versi Sebelumnya) --- */
        .step-content { transition: opacity 0.35s ease-in-out, transform 0.35s ease-in-out; }
        .hidden-step { opacity: 0; transform: translateY(12px); pointer-events: none; position: absolute; visibility: hidden; }
        .active-step { opacity: 1; transform: translateY(0); position: relative; visibility: visible; }
        
        .btn-primary { background: linear-gradient(135deg, var(--maroon), #8a0a0b); color: white; transition: all 0.2s ease; box-shadow: 0 4px 15px rgba(100, 6, 7, 0.28); }
        .btn-primary:hover { box-shadow: 0 6px 22px rgba(100, 6, 7, 0.4); transform: translateY(-1px); filter: brightness(1.1); }
        
        .input-field { background: rgba(255, 252, 248, 0.9); border: 1.5px solid rgba(224, 145, 132, 0.45); color: var(--text-dark); transition: border-color 0.2s, box-shadow 0.2s; }
        .input-field::placeholder { color: rgba(100, 6, 7, 0.25); }
        .input-field:focus { outline: none; border-color: var(--maroon); box-shadow: 0 0 0 3px rgba(100, 6, 7, 0.1); }
        
        .stat-card { border: 1.5px solid rgba(224, 145, 132, 0.3); background: white; transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .stat-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(100, 6, 7, 0.1); }
        
        .stepper-line { flex: 1; height: 4px; background: rgba(224, 145, 132, 0.3); border-radius: 2px; margin: 0 8px; transition: background 0.4s ease; }
        .stepper-line.done { background: var(--maroon); }
        
        .step-circle { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem; transition: all 0.35s ease; flex-shrink: 0; }
        .step-circle.active { background: rgba(100, 6, 7, 0.12); color: var(--maroon); }
        .step-circle.inactive { background: rgba(224, 145, 132, 0.15); color: var(--salmon); }
        .step-circle.done { background: var(--maroon); color: white; }
    </style>
</head>
<body class="antialiased">

<input type="checkbox" id="nav-toggle" class="peer sr-only" />

<!-- HEADER / NAV -->
<header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-salmon/20">
  <div class="mx-auto flex h-16 w-full max-w-[1440px] items-center gap-8 px-6 sm:px-10 lg:px-12">
    <a class="flex items-center gap-2 text-maroon font-bold text-xl tracking-tight" href="{{ route('landing') }}">
      <!-- Ikon Medis/Daun sebagai Logo Sementara -->
      <svg class="h-7 w-7 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
      GlucaDrop
    </a>

    <div class="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" class="hidden md:block">
        <ul class="flex items-center gap-6 text-sm font-medium">
          <li><a class="text-dark/70 transition hover:text-maroon" href="#tentang">Tentang Produk</a></li>
          <li><a class="text-dark/70 transition hover:text-maroon" href="#keunggulan">Keunggulan</a></li>
          <li><a class="text-dark/70 transition hover:text-maroon font-bold text-maroon" href="{{ route('kalkulator') }}">Kalkulator Mode Penuh</a></li>
        </ul>
      </nav>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4 hidden">
          <a class="block rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-crimson shadow-md shadow-maroon/20" href="#kalkulator">
            Hitung Kebutuhan
          </a>
        </div>

        <label for="nav-toggle" class="block cursor-pointer rounded-sm p-2.5 text-dark/70 transition hover:text-maroon md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </div>
    </div>
  </div>
</header>

<!-- MOBILE NAV -->
<nav class="hidden border-b border-salmon/20 bg-white peer-checked:block md:hidden">
  <ul class="space-y-1 px-4 py-4 text-sm font-medium">
    <li><a href="#tentang" class="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon">Tentang Produk</a></li>
    <li><a href="#keunggulan" class="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon">Keunggulan</a></li>
    <li><a href="{{ route('kalkulator') }}" class="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon font-bold text-maroon">Kalkulator Mode Penuh</a></li>
  </ul>
</nav>

<!-- HERO SECTION -->
<section class="overflow-hidden sm:grid sm:grid-cols-2 lg:h-[85vh] items-center">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24 relative">
    <div class="absolute inset-0 -z-10" style="background: radial-gradient(circle 500px at 0% 0%, rgba(72,93,54,0.05), transparent);"></div>
    <div class="max-w-xl mx-auto sm:mx-0 text-center sm:text-left flex flex-col items-center sm:items-start">
      
      <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 text-green border-green/30 bg-green/10">
        Inovasi Terapi Adjuvant
      </span>

      <h1 class="text-3xl font-extrabold text-maroon md:text-5xl leading-tight">
        Kendalikan <span class="text-crimson">Gula Darah</span> Lebih Praktis & Terukur
      </h1>

      <p class="mt-4 text-dark/80 md:mt-6 md:text-lg leading-relaxed">
        Pendamping terapi medis Anda dalam bentuk permen yang inovatif. Diformulasikan khusus untuk membantu mengelola kadar gula darah dengan <strong class="text-crimson">dosis senyawa yang presisi</strong>.
      </p>

      <!-- Trust Badges -->
      <div class="mt-6 w-full flex flex-wrap items-center justify-center sm:justify-between gap-y-3 text-xs font-semibold text-dark/60">
        <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Berbasis Riset Klinis
        </span>
        <span class="hidden sm:inline text-salmon/40">|</span>
        <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          Standar Farmasi
        </span>
        <span class="hidden sm:inline text-salmon/40">|</span>
        <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          100% Halal
        </span>
      </div>

      <div class="mt-8 md:mt-10 flex gap-4">
        <a href="#kalkulator" class="inline-block rounded-full bg-maroon px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-crimson shadow-lg shadow-maroon/30">
          Mulai Kalkulasi
        </a>
        <a href="#keunggulan" class="inline-flex items-center justify-center rounded-full bg-white border-2 border-salmon/30 px-8 py-3.5 text-sm font-semibold text-maroon transition hover:bg-salmon/10">
          Pelajari Lebih Lanjut
        </a>
      </div>
    </div>
  </div>

  <!-- Hero Image (Gambar lab/medis/permen sebagai ilustrasi) -->
  <img alt="Medical Concept" src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1160" class="h-64 w-full object-cover sm:h-full opacity-90" />
</section>

<!-- STATS SECTION -->
<section id="tentang" class="bg-white border-y border-salmon/20">
  <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-2xl font-bold text-maroon sm:text-3xl">Dikembangkan Berdasarkan Riset</h2>
      <p class="mt-4 text-dark/70 sm:text-lg">Formulasi optimal yang dirancang sebagai terapi pendamping pengobatan utama Anda.</p>
    </div>

    <dl class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Card 1 -->
      <div>
        <div class="flex h-full flex-col rounded-2xl border border-salmon/50 bg-cream/30 px-4 py-8 text-center hover:scale-105 transition-transform duration-300 cursor-default shadow-sm hover:shadow-md">
          <dt class="order-last text-sm font-medium text-dark/70 mt-2">Bahan Aktif</dt>
          <dd class="text-3xl font-extrabold text-green">100%</dd>
        </div>
      </div>
      <!-- Card 2 -->
      <div>
        <div class="flex h-full flex-col rounded-2xl border border-salmon/50 bg-cream/30 px-4 py-8 text-center hover:scale-105 transition-transform duration-300 cursor-default shadow-sm hover:shadow-md">
          <dt class="order-last text-sm font-medium text-dark/70 mt-2">Dosis Terukur</dt>
          <dd class="text-3xl font-extrabold text-green">Presisi</dd>
        </div>
      </div>
      <!-- Card 3 -->
      <div>
        <div class="flex h-full flex-col rounded-2xl border border-salmon/50 bg-cream/30 px-4 py-8 text-center hover:scale-105 transition-transform duration-300 cursor-default shadow-sm hover:shadow-md">
          <dt class="order-last text-sm font-medium text-dark/70 mt-2">Sifat Terapi</dt>
          <dd class="text-3xl font-extrabold text-green">Adjuvant</dd>
        </div>
      </div>
      <!-- Card 4 -->
      <div>
        <div class="flex h-full flex-col rounded-2xl border border-salmon/50 bg-cream/30 px-4 py-8 text-center hover:scale-105 transition-transform duration-300 cursor-default shadow-sm hover:shadow-md">
          <dt class="order-last text-sm font-medium text-dark/70 mt-2">Bentuk Sediaan</dt>
          <dd class="text-3xl font-extrabold text-green">Permen</dd>
        </div>
      </div>
    </dl>
  </div>
</section>

<!-- FEATURES SECTION -->
<section id="keunggulan">
  <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold text-maroon sm:text-4xl">Mengapa Memilih Formulasi Kami?</h2>
      <p class="mt-4 text-lg text-dark/80">Pendekatan inovatif untuk kepatuhan terapi yang lebih baik tanpa mengorbankan akurasi klinis.</p>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
      <!-- Feature 1 -->
      <div>
        <div class="h-full rounded-2xl border border-salmon/50 bg-white p-8 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
          <div class="inline-flex rounded-xl bg-green/10 p-3 text-green">
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
          <h3 class="mt-5 text-xl font-bold text-maroon">Bentuk Permen Inovatif</h3>
          <p class="mt-3 text-dark/70 leading-relaxed">Sangat praktis dikonsumsi kapan saja dan di mana saja. Meningkatkan kenyamanan pasien dibandingkan bentuk sediaan konvensional.</p>
        </div>
      </div>

      <!-- Feature 2 -->
      <div>
        <div class="h-full rounded-2xl border border-salmon/50 bg-white p-8 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
          <div class="inline-flex rounded-xl bg-green/10 p-3 text-green">
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <h3 class="mt-5 text-xl font-bold text-maroon">Akurasi Dosis Tinggi</h3>
          <p class="mt-3 text-dark/70 leading-relaxed">Meskipun berbentuk permen, setiap kepingnya diproduksi dengan standar farmasi untuk memastikan konsentrasi senyawa yang presisi.</p>
        </div>
      </div>

      <!-- Feature 3 -->
      <div>
        <div class="h-full rounded-2xl border border-salmon/50 bg-white p-8 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
          <div class="inline-flex rounded-xl bg-green/10 p-3 text-green">
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <h3 class="mt-5 text-xl font-bold text-maroon">Terapi Adjuvant (Pendamping)</h3>
          <p class="mt-3 text-dark/70 leading-relaxed">Bukan untuk menggantikan obat utama, melainkan bekerja sinergis untuk membantu optimalisasi penurunan kadar gula darah.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- KALKULATOR SECTION (Pengganti Pricing) -->
<section id="kalkulator" class="relative py-16 lg:py-24">
  <div class="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10 border-y border-salmon/20"></div>
  
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
    
    <!-- Judul Section -->
    <div class="text-center space-y-3 max-w-xl mb-12">
        <h2 class="text-3xl font-extrabold tracking-tight text-maroon sm:text-4xl">Kalkulator Kebutuhan Terapi</h2>
        <p class="text-dark/70 text-lg">Gunakan kalkulator di bawah ini untuk mengestimasi kebutuhan harian permen terapi Anda berdasarkan parameter klinis.</p>
    </div>

    <!-- CARD UTAMA KALKULATOR -->
    <div class="w-full max-w-2xl rounded-3xl overflow-hidden bg-white/95 backdrop-blur-2xl border-[1.5px] border-salmon/30 shadow-[0_20px_60px_rgba(100,6,7,0.08)]">
        
        <!-- STEPPER -->
        <div class="px-8 py-5 border-b border-salmon/20 bg-cream/50">
            <div class="flex items-center">
                <div id="circle-1" class="step-circle active">1</div>
                <div id="stepper-line" class="stepper-line"></div>
                <div id="circle-2" class="step-circle inactive">2</div>
            </div>
            <div class="flex justify-between mt-2 text-xs font-bold">
                <span class="text-maroon">Parameter Klinis</span>
                <span id="label-2" style="color: var(--text-muted);">Hasil Kalkulasi</span>
            </div>
        </div>

        <!-- CONTENT KALKULATOR -->
        <div class="p-8 relative min-h-[320px]">
            <!-- STEP 1: INPUT -->
            <div id="step-1" class="step-content active-step w-full">
                <div class="space-y-5">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-1.5">
                            <label for="berat" class="text-sm font-semibold text-dark">Berat Badan (kg)</label>
                            <input type="number" id="berat" placeholder="Contoh: 65" class="input-field w-full rounded-xl px-4 py-3 text-sm">
                        </div>
                        <div class="space-y-1.5">
                            <label for="kadar_gula" class="text-sm font-semibold text-dark">Kadar Gula Darah (mg/dL)</label>
                            <input type="number" id="kadar_gula" placeholder="Contoh: 200" class="input-field w-full rounded-xl px-4 py-3 text-sm">
                        </div>
                        <div class="space-y-1.5">
                            <label for="konsentrasi" class="text-sm font-semibold text-dark">Konsentrasi Senyawa (%)</label>
                            <input type="number" id="konsentrasi" placeholder="Contoh: 15" class="input-field w-full rounded-xl px-4 py-3 text-sm">
                        </div>
                        <div class="space-y-1.5">
                            <label for="target_gula" class="text-sm font-semibold text-dark">Target Gula Darah (mg/dL)</label>
                            <input type="number" id="target_gula" placeholder="Contoh: 126" class="input-field w-full rounded-xl px-4 py-3 text-sm">
                        </div>
                    </div>

                    <div class="flex gap-3 p-4 rounded-xl text-sm bg-green/10 border-[1.5px] border-green/20 text-green">
                        <svg class="h-5 w-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                        </svg>
                        <p class="text-dark">Kalkulasi bersifat estimatif. Tetap utamakan <strong>saran dari tenaga medis</strong> Anda.</p>
                    </div>

                    <div class="flex justify-end pt-2">
                        <button id="btn-hitung" onclick="hitungTerapi()" class="btn-primary font-semibold px-8 py-3 rounded-xl flex items-center gap-2">
                            Hitung Kebutuhan
                            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- STEP 2: HASIL -->
            <div id="step-2" class="step-content hidden-step w-full">
                <div class="space-y-5">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="stat-card rounded-2xl p-5 flex flex-col gap-1">
                            <div class="flex justify-between items-start">
                                <span class="text-xs font-bold uppercase tracking-wide text-dark/50">Konsumsi Harian</span>
                                <span class="text-xs font-bold px-2 py-1 rounded-lg bg-green/10 text-green">Rekomendasi</span>
                            </div>
                            <div class="text-4xl font-extrabold mt-2 text-maroon" id="hasil-harian">— pcs</div>
                            <p class="text-xs text-dark/50">permen per hari</p>
                        </div>

                        <div class="stat-card rounded-2xl p-5 flex flex-col gap-1">
                            <div class="flex justify-between items-start">
                                <span class="text-xs font-bold uppercase tracking-wide text-dark/50">Total Kebutuhan</span>
                                <span class="text-xs font-bold px-2 py-1 rounded-lg bg-crimson/10 text-crimson">14 Hari Terapi</span>
                            </div>
                            <div class="text-4xl font-extrabold mt-2 text-maroon" id="hasil-total">— pcs</div>
                            <p class="text-xs text-dark/50">total keping permen</p>
                        </div>
                    </div>

                    <div class="flex gap-3 p-4 rounded-xl text-sm bg-salmon/10 border-[1.5px] border-salmon/30 text-dark">
                        <svg class="h-5 w-5 shrink-0 mt-0.5 text-crimson" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                        </svg>
                        <p>Dosis dapat bervariasi bergantung pada respon metabolisme individu. <strong>Segera hentikan pemakaian</strong> bila terjadi hipoglikemia.</p>
                    </div>

                    <div class="flex justify-start">
                        <button onclick="ulangiKalkulasi()" class="flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl border text-sm transition-all bg-white border-maroon/20 text-maroon hover:bg-maroon/5">
                            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                            </svg>
                            Hitung Ulang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</section>

<!-- FOOTER BARU DARI TEMPLATE -->
<footer class="bg-white border-t border-salmon/20">
  <div class="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-16">
    <div class="lg:flex lg:items-start lg:gap-8">
      <!-- Kolom Logo -->
      <div class="text-maroon flex items-center gap-2 font-bold text-xl tracking-tight">
        <svg class="h-8 w-8 text-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        GlucaDrop
      </div>

      <!-- Kolom Konten -->
      <div class="mt-12 lg:mt-0 lg:flex-1">
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-y-16">
          
          <!-- Newsletter Top Block -->
          <div class="col-span-2">
            <div>
              <h2 class="text-xl font-bold text-maroon">Dukung Riset Inovasi Kami</h2>
              <p class="mt-4 text-dark/70 text-sm leading-relaxed">
                Dapatkan pembaruan terkini tentang pengembangan terapi adjuvant dan hasil riset kami langsung di kotak masuk Anda.
              </p>
            </div>
          </div>

          <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
            <form class="w-full">
              <label for="UserEmail" class="sr-only"> Email </label>
              <div class="border border-salmon/30 bg-cream/30 p-1.5 focus-within:ring-2 focus-within:ring-maroon sm:flex sm:items-center sm:gap-2 rounded-xl transition-all">
                <input type="email" id="UserEmail" placeholder="email_anda@gmail.com" class="w-full border-none bg-transparent focus:outline-none focus:border-transparent focus:ring-transparent sm:text-sm px-4 text-dark placeholder:text-dark/40" />
                <button class="mt-1 w-full rounded-lg bg-maroon px-6 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-crimson sm:mt-0 sm:w-auto sm:shrink-0 shadow-md">
                  Berlangganan
                </button>
              </div>
            </form>
          </div>

          <!-- Kolom Link 1 -->
          <div class="col-span-2 sm:col-span-1">
            <p class="font-bold text-maroon">Navigasi</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><a href="#kalkulator" class="text-dark/70 transition hover:text-maroon">Kalkulator Dosis</a></li>
              <li><a href="#keunggulan" class="text-dark/70 transition hover:text-maroon">Keunggulan Produk</a></li>
              <li><a href="#tentang" class="text-dark/70 transition hover:text-maroon">Latar Belakang</a></li>
            </ul>
          </div>

          <!-- Kolom Link 2 -->
          <div class="col-span-2 sm:col-span-1">
            <p class="font-bold text-maroon">Tim Peneliti</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><a href="https://www.linkedin.com/in/faradillah-sabil-321ba8321?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                    class="text-dark/70 transition hover:text-maroon">Faradillah Ermyne Sabil</a></li>
              <li><a href="https://www.linkedin.com/in/faradillah-sabil-321ba8321?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    class="text-dark/70 transition hover:text-maroon">Anggota Dua</a></li>
              <li><a href="https://www.linkedin.com/in/faradillah-sabil-321ba8321?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    class="text-dark/70 transition hover:text-maroon">Anggota Tiga</a></li>
            </ul>
          </div>

          <!-- Kolom Link 3 -->
          <div class="col-span-2 sm:col-span-1">
            <p class="font-bold text-maroon">Afiliasi Riset</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><span class="text-dark/70 block">Universitas Airlangga</span></li>
              <li><span class="text-dark/70 block">Fakultas Farmasi</span></li>
              <li><span class="text-dark/70 block">Gedung Nanizar</span></li>
            </ul>
          </div>

          <!-- Kolom Link 4 -->
          <div class="col-span-2 sm:col-span-1">
            <p class="font-bold text-maroon">Dokumen Legal</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><a href="#" class="text-dark/70 transition hover:text-maroon">Disclaimer Medis</a></li>
              <li><a href="#" class="text-dark/70 transition hover:text-maroon">Hak Kekayaan Intelektual</a></li>
            </ul>
          </div>

          <!-- Kolom Link 5 (Kosong untuk spasi atau info ekstra) -->
          <div class="col-span-2 sm:col-span-1">
             <p class="font-bold text-maroon">Kontak Kami</p>
             <ul class="mt-6 space-y-4 text-sm">
               <li><a href="mailto:faradillah@gmail.com" class="text-dark/70 transition hover:text-maroon">faradillah@gmail.com</a></li>
             </ul>
          </div>

          <!-- Media Sosial Tim -->
          <ul class="col-span-2 flex flex-wrap justify-start gap-4 lg:col-span-5 lg:justify-end items-center mt-4 border-t border-salmon/20 pt-8 lg:mt-0 lg:border-0 lg:pt-0">
            <li class="text-sm font-semibold text-dark/50 mr-2 w-full lg:w-auto mb-2 lg:mb-0">Media Sosial Kami:</li>
            
            <!-- Ikon 1: LinkedIn (Sangat disarankan untuk Lomba) -->
            <li>
              <a href="https://www.linkedin.com/in/faradillah-sabil-321ba8321?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" class="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-maroon/70 transition hover:bg-maroon hover:text-white" title="LinkedIn Tim">
                <span class="sr-only">LinkedIn</span>
                <svg class="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                </svg>
              </a>
            </li>

            <!-- Ikon 2: Instagram (Untuk portofolio kelompok) -->
            <li>
              <a href="https://www.instagram.com/fremerylab/?utm_source=ig_web_button_share_sheet" target="_blank" class="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-maroon/70 transition hover:bg-maroon hover:text-white" title="Instagram Tim">
                <span class="sr-only">Instagram</span>
                <svg class="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>
            </li>

            <!-- Ikon 3: Email Institusi -->
            <li>
              <a href="mailto:faradillah.ermyne.sabil-2024@unair.ac.id" target="_blank" class="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-maroon/70 transition hover:bg-maroon hover:text-white" title="Email Tim">
                <span class="sr-only">Email</span>
                <svg class="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>

    <!-- Copyright Bar Bawah -->
    <div class="mt-12 border-t border-salmon/20 pt-8">
      <div class="sm:flex sm:justify-between items-center">
        <p class="text-xs text-dark/50 font-medium">&copy; 2026 Tim Peneliti Inovasi Farmasi. Hak Cipta Dilindungi.</p>
        <p class="text-xs text-dark/40 mt-4 sm:mt-0 font-medium">Bukan merupakan saran medis profesional.</p>
      </div>
    </div>
  </div>
</footer>

<script>
  // Mobile Nav Toggle Script
  const navToggleCheckbox = document.getElementById('nav-toggle')
  const navToggleLabel = document.querySelector('label[for="nav-toggle"]')
  if(navToggleCheckbox && navToggleLabel) {
    navToggleCheckbox.addEventListener('change', () => {
        navToggleLabel.setAttribute('aria-expanded', String(navToggleCheckbox.checked))
    })
  }

  // Custom Alert Modal Functions
  function showCustomAlert() {
      const modal = document.getElementById('custom-alert-modal');
      const backdrop = document.getElementById('modal-backdrop');
      const box = document.getElementById('modal-box');
      
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      
      // Delay sedikit biar transition Tailwind bisa menangkap perubahan dari display:none
      setTimeout(() => {
          backdrop.classList.replace('opacity-0', 'opacity-100');
          box.classList.replace('scale-95', 'scale-100');
          box.classList.replace('opacity-0', 'opacity-100');
      }, 10);
  }

  function hideCustomAlert() {
      const modal = document.getElementById('custom-alert-modal');
      const backdrop = document.getElementById('modal-backdrop');
      const box = document.getElementById('modal-box');

      backdrop.classList.replace('opacity-100', 'opacity-0');
      box.classList.replace('scale-100', 'scale-95');
      box.classList.replace('opacity-100', 'opacity-0');

      // Tunggu animasi selesai baru di-hide
      setTimeout(() => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
      }, 300);
  }

  // Calculator Script
  function hitungTerapi() {
      const berat       = parseFloat(document.getElementById('berat').value);
      const kadarGula   = parseFloat(document.getElementById('kadar_gula').value);
      const konsentrasi = parseFloat(document.getElementById('konsentrasi').value);
      const targetGula  = parseFloat(document.getElementById('target_gula').value);

      if (!berat || !kadarGula || !konsentrasi || !targetGula) {
          const btn = document.getElementById('btn-hitung');
          btn.style.transform = 'translateX(-5px)';
          setTimeout(() => btn.style.transform = 'translateX(5px)', 80);
          setTimeout(() => btn.style.transform = 'translateX(-3px)', 160);
          setTimeout(() => btn.style.transform = 'translateX(0)', 240);
          showCustomAlert();
          return;
      }

      const selisihGula = kadarGula - targetGula;
      const hasilHarian = Math.max(1, Math.ceil(selisihGula / (konsentrasi * 5)));
      const hasilTotal  = hasilHarian * 14;

      document.getElementById('hasil-harian').innerText = hasilHarian + ' pcs';
      document.getElementById('hasil-total').innerText  = hasilTotal  + ' pcs';

      document.getElementById('step-1').classList.replace('active-step', 'hidden-step');
      document.getElementById('step-2').classList.replace('hidden-step', 'active-step');

      document.getElementById('stepper-line').classList.add('done');
      document.getElementById('circle-1').className = 'step-circle done';
      document.getElementById('circle-1').innerHTML = '<svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>';
      document.getElementById('circle-2').className = 'step-circle active';
      document.getElementById('label-2').style.color  = 'var(--maroon)';
  }

  function ulangiKalkulasi() {
      document.getElementById('step-2').classList.replace('active-step', 'hidden-step');
      document.getElementById('step-1').classList.replace('hidden-step', 'active-step');

      document.getElementById('stepper-line').classList.remove('done');
      document.getElementById('circle-1').className   = 'step-circle active';
      document.getElementById('circle-1').innerText   = '1';
      document.getElementById('circle-2').className   = 'step-circle inactive';
      document.getElementById('label-2').style.color  = 'var(--text-muted)';
  }
</script>

<!-- GSAP & ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<script>
  /* ================================================================
     GSAP ANIMATIONS (Disesuaikan dari referensi Apex F1)
  ================================================================ */
  gsap.registerPlugin(ScrollTrigger);

  // Helper: makeST
  function makeST(trigger, extraConfig = {}) {
    return {
      trigger,
      start: "top 88%",
      end:   "top 30%",
      scrub: 1.5, // Efek inersia/smooth saat scroll naik/turun
      ...extraConfig,
    };
  }

  // 1. HERO - Entrance Animation (Tanpa Scrub, langsung jalan)
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  const heroSection = document.querySelector('section'); 
  
  if (heroSection) {
    heroTl
      .from("header", { opacity: 0, y: -20, duration: 0.5 })
      .from(heroSection.querySelector('span'), { opacity: 0, y: -16, duration: 0.6 })
      .from(heroSection.querySelector('h1'), { opacity: 0, y: 50, duration: 0.8 }, "-=0.3")
      .from(heroSection.querySelector('p'), { opacity: 0, y: 30, duration: 0.6 }, "-=0.4")
      .from(heroSection.querySelectorAll('a'), { opacity: 0, y: 20, duration: 0.5, stagger: 0.12 }, "-=0.3")
      .from(heroSection.querySelector('img'), { opacity: 0, x: 70, scale: 0.95, duration: 0.9, ease: "power2.out" }, "-=0.7");
  }

  // 2. TENTANG (Social Proof / Stats)
  gsap.from("#tentang h2, #tentang p", {
    scrollTrigger: makeST("#tentang h2"),
    opacity: 0,
    y: 30,
    stagger: 0.15,
  });

  gsap.from("#tentang dl > div", {
    scrollTrigger: makeST("#tentang dl", { end: "top 20%" }),
    opacity: 0,
    y: 40,
    stagger: 0.1,
  });

  // 3. KEUNGGULAN (Features Grid)
  gsap.from("#keunggulan h2, #keunggulan p", {
    scrollTrigger: makeST("#keunggulan h2"),
    opacity: 0,
    x: -30,
    stagger: 0.15,
  });

  gsap.from("#keunggulan .grid > div", {
    scrollTrigger: makeST("#keunggulan .grid", { end: "top 15%" }),
    opacity: 0,
    y: 60,
    stagger: 0.15,
  });

  // 4. KALKULATOR (Zoom in & Pop)
  gsap.from("#kalkulator h2, #kalkulator p", {
    scrollTrigger: makeST("#kalkulator h2"),
    opacity: 0,
    y: 30,
    stagger: 0.15,
  });

  gsap.from("#kalkulator .max-w-2xl", {
    scrollTrigger: makeST("#kalkulator .max-w-2xl", { start: "top 85%", end: "top 45%" }),
    opacity: 0,
    scale: 0.9,
    y: 40,
  });

  // 5. FOOTER (Stagger Links)
  gsap.from("footer .grid > div", {
    scrollTrigger: makeST("footer", { start: "top 95%", end: "top 60%" }),
    opacity: 0,
    x: -30,
    stagger: 0.1,
  });
</script>

<!-- CUSTOM ALERT MODAL -->
<div id="custom-alert-modal" class="fixed inset-0 z-[99] hidden items-center justify-center">
  <div id="modal-backdrop" class="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>
  <div id="modal-box" class="relative bg-white w-full max-w-sm mx-4 rounded-[2rem] p-8 shadow-2xl scale-95 opacity-0 transition-all duration-300 border-[1.5px] border-salmon/30 flex flex-col items-center text-center">
    <div class="h-16 w-16 rounded-full bg-salmon/20 text-maroon flex items-center justify-center mb-6">
      <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
    <h3 class="text-xl font-extrabold text-maroon mb-2">Data Belum Lengkap</h3>
    <p class="text-dark/70 text-sm leading-relaxed mb-8">
      Mohon isi semua parameter klinis (Berat Badan, Kadar Gula, dll) sebelum melakukan kalkulasi dosis.
    </p>
    <button onclick="hideCustomAlert()" class="w-full rounded-xl bg-maroon px-6 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition-all hover:bg-crimson shadow-[0_8px_16px_rgba(100,6,7,0.2)] hover:shadow-[0_4px_8px_rgba(100,6,7,0.2)] active:scale-95">
      Saya Mengerti
    </button>
  </div>
</div>

</body>
</html>
