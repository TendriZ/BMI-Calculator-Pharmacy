<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Terapi Tambahan | Permen Penurun Gula Darah</title>
    <meta name="description" content="Estimasi kebutuhan terapi adjuvant penurun kadar gula darah.">
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
  <div class="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <a class="flex items-center gap-2 text-maroon font-bold text-xl tracking-tight" href="#">
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
          <li><a class="text-dark/70 transition hover:text-maroon" href="#kalkulator">Kalkulator Dosis</a></li>
        </ul>
      </nav>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4 hidden">
          <a class="block rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-maroon/90 shadow-md shadow-maroon/20" href="#kalkulator">
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
    <li><a href="#kalkulator" class="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon">Kalkulator Dosis</a></li>
  </ul>
</nav>

<!-- HERO SECTION -->
<section class="overflow-hidden sm:grid sm:grid-cols-2 lg:h-[85vh] items-center">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24 relative">
    <div class="absolute inset-0 -z-10" style="background: radial-gradient(circle 500px at 0% 0%, rgba(72,93,54,0.05), transparent);"></div>
    <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right flex flex-col items-center sm:items-start">
      
      <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 text-green border-green/30 bg-green/10">
        Inovasi Terapi Adjuvant
      </span>

      <h1 class="text-3xl font-extrabold text-maroon md:text-5xl leading-tight">
        Kendalikan Gula Darah Lebih Praktis & Terukur
      </h1>

      <p class="mt-4 text-dark/80 md:mt-6 md:text-lg leading-relaxed">
        Pendamping terapi medis Anda dalam bentuk permen yang inovatif. Diformulasikan khusus untuk membantu mengelola kadar gula darah dengan dosis senyawa yang presisi.
      </p>

      <div class="mt-8 md:mt-10 flex gap-4">
        <a href="#kalkulator" class="inline-block rounded-full bg-maroon px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-maroon/90 shadow-lg shadow-maroon/30">
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
      <div class="flex flex-col rounded-2xl border border-salmon/20 bg-cream/30 px-4 py-8 text-center">
        <dt class="order-last text-sm font-medium text-dark/70 mt-2">Bahan Aktif</dt>
        <dd class="text-3xl font-extrabold text-green">100%</dd>
      </div>
      <div class="flex flex-col rounded-2xl border border-salmon/20 bg-cream/30 px-4 py-8 text-center">
        <dt class="order-last text-sm font-medium text-dark/70 mt-2">Dosis Terukur</dt>
        <dd class="text-3xl font-extrabold text-green">Presisi</dd>
      </div>
      <div class="flex flex-col rounded-2xl border border-salmon/20 bg-cream/30 px-4 py-8 text-center">
        <dt class="order-last text-sm font-medium text-dark/70 mt-2">Sifat Terapi</dt>
        <dd class="text-3xl font-extrabold text-green">Adjuvant</dd>
      </div>
      <div class="flex flex-col rounded-2xl border border-salmon/20 bg-cream/30 px-4 py-8 text-center">
        <dt class="order-last text-sm font-medium text-dark/70 mt-2">Bentuk Sediaan</dt>
        <dd class="text-3xl font-extrabold text-green">Permen</dd>
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
      <div class="rounded-2xl border border-salmon/30 bg-white p-8 shadow-sm hover:shadow-md transition">
        <div class="inline-flex rounded-xl bg-green/10 p-3 text-green">
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
        </div>
        <h3 class="mt-5 text-xl font-bold text-maroon">Bentuk Permen Inovatif</h3>
        <p class="mt-3 text-dark/70 leading-relaxed">Sangat praktis dikonsumsi kapan saja dan di mana saja. Meningkatkan kenyamanan pasien dibandingkan bentuk sediaan konvensional.</p>
      </div>

      <!-- Feature 2 -->
      <div class="rounded-2xl border border-salmon/30 bg-white p-8 shadow-sm hover:shadow-md transition">
        <div class="inline-flex rounded-xl bg-green/10 p-3 text-green">
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
        </div>
        <h3 class="mt-5 text-xl font-bold text-maroon">Akurasi Dosis Tinggi</h3>
        <p class="mt-3 text-dark/70 leading-relaxed">Meskipun berbentuk permen, setiap kepingnya diproduksi dengan standar farmasi untuk memastikan konsentrasi senyawa yang presisi.</p>
      </div>

      <!-- Feature 3 -->
      <div class="rounded-2xl border border-salmon/30 bg-white p-8 shadow-sm hover:shadow-md transition">
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

<!-- FOOTER -->
<footer class="bg-white border-t border-salmon/20">
  <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center text-center">
    
    <a class="flex items-center justify-center gap-2 text-maroon font-bold text-xl tracking-tight mb-4" href="#">
      <svg class="h-6 w-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
      GlucaDrop
    </a>
    
    <p class="text-sm text-dark/70 max-w-md mx-auto mb-8">
      Proyek penelitian formulasi farmasi. Produk ini sedang dalam tahap pengembangan dan belum didistribusikan secara komersial.
    </p>

    <div class="border-t border-salmon/10 pt-8 w-full">
      <p class="text-xs text-dark/50">&copy; 2026 Tim Peneliti Farmasi. All rights reserved.</p>
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
          alert('Mohon isi semua parameter terlebih dahulu!');
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
</body>
</html>
