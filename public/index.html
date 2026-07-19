<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Terapi Tambahan</title>
    <!-- Menggunakan CDN Tailwind CSS untuk prototyping cepat -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Transisi halus saat pindah step */
        .step-content {
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .hidden-step {
            opacity: 0;
            transform: translateY(10px);
            pointer-events: none;
            position: absolute;
            visibility: hidden;
        }
        .active-step {
            opacity: 1;
            transform: translateY(0);
            position: relative;
            visibility: visible;
        }
    </style>
</head>
<body class="antialiased min-h-screen relative overflow-x-hidden text-slate-800">

    <!-- 1. BACKGROUND COMPONENT (Dari Prompt ke-4) -->
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
    </div>

    <!-- MAIN CONTAINER -->
    <div class="container mx-auto px-4 py-12 flex justify-center items-center min-h-screen">
        
        <!-- 2. CARD COMPONENT (Wadah Kalkulator) -->
        <div class="w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-xl overflow-hidden relative">
            
            <!-- HEADER -->
            <div class="px-8 py-6 border-b border-slate-100 bg-white/50">
                <h1 class="text-2xl font-bold text-slate-800 tracking-tight">Kalkulator Terapi</h1>
                <p class="text-sm text-slate-500 mt-1">Hitung estimasi kebutuhan dosis dengan mudah dan akurat.</p>
            </div>

            <!-- 3. STEPPER COMPONENT -->
            <div class="bg-slate-50/50 px-8 py-5 border-b border-slate-100">
                <ol class="flex items-center w-full">
                    <!-- Indikator Step 1 -->
                    <li id="indicator-1" class="flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-200 after:border-4 after:inline-block">
                        <span class="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full shrink-0 font-semibold text-sm">
                            1
                        </span>
                    </li>
                    <!-- Indikator Step 2 -->
                    <li id="indicator-2" class="flex items-center text-slate-400">
                        <span id="circle-2" class="flex items-center justify-center w-8 h-8 bg-slate-100 text-slate-500 rounded-full shrink-0 font-semibold text-sm transition-colors">
                            2
                        </span>
                    </li>
                </ol>
                <div class="flex justify-between mt-2 text-xs font-medium text-slate-500">
                    <span class="text-blue-600">Parameter Dasar</span>
                    <span id="label-2" class="text-slate-400">Hasil Kalkulasi</span>
                </div>
            </div>

            <!-- CONTENT AREA -->
            <div class="p-8 relative min-h-[300px]">
                
                <!-- STEP 1: FORM INPUT -->
                <div id="step-1" class="step-content active-step w-full">
                    <div class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Input Berat Badan -->
                            <div class="space-y-2">
                                <label for="berat" class="text-sm font-semibold text-slate-700">Berat Badan (kg)</label>
                                <input type="number" id="berat" placeholder="Contoh: 65" 
                                    class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-300">
                            </div>
                            
                            <!-- Input Parameter Tambahan (Contoh) -->
                            <div class="space-y-2">
                                <label for="parameter" class="text-sm font-semibold text-slate-700">Konsentrasi Senyawa (%)</label>
                                <input type="number" id="parameter" placeholder="Contoh: 15" 
                                    class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-300">
                            </div>
                        </div>

                        <!-- Info/Peringatan -->
                        <div class="bg-blue-50 text-blue-800 text-sm p-4 rounded-xl border border-blue-100 flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                            </svg>
                            <p>Pastikan data yang dimasukkan akurat karena ini merupakan produk terapi tambahan.</p>
                        </div>
                        
                        <!-- Tombol Aksi -->
                        <div class="flex justify-end pt-4">
                            <button onclick="hitungTerapi()" 
                                class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-colors shadow-sm hover:shadow flex items-center gap-2">
                                Hitung Sekarang
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- STEP 2: HASIL KALKULASI (STATS COMPONENT dari Prompt ke-3) -->
                <div id="step-2" class="step-content hidden-step w-full">
                    <div class="space-y-6">
                        
                        <!-- Grid Kartu Statistik -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- Stat 1 -->
                            <div class="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col gap-1">
                                <div class="flex justify-between items-start">
                                    <span class="text-sm font-medium text-slate-500">Dosis Rekomendasi</span>
                                    <span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Optimal</span>
                                </div>
                                <div class="text-3xl font-bold text-slate-800 mt-2" id="hasil-dosis">
                                    0 mg
                                </div>
                            </div>
                            
                            <!-- Stat 2 -->
                            <div class="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col gap-1">
                                <div class="flex justify-between items-start">
                                    <span class="text-sm font-medium text-slate-500">Durasi Pemakaian</span>
                                    <span class="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Standar</span>
                                </div>
                                <div class="text-3xl font-bold text-slate-800 mt-2">
                                    14 Hari
                                </div>
                            </div>
                        </div>

                        <!-- Deskripsi Tambahan -->
                        <p class="text-sm text-slate-500 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                            Berdasarkan parameter yang dimasukkan, ini adalah estimasi kebutuhan terapi. Silakan konsultasikan lebih lanjut atau sesuaikan dengan kondisi aktual produk.
                        </p>

                        <!-- Tombol Aksi -->
                        <div class="flex justify-start pt-2">
                            <button onclick="ulangiKalkulasi()" 
                                class="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium px-6 py-2.5 rounded-xl transition-colors flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                                </svg>
                                Hitung Ulang
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- SCRIPT LOGIKA KALKULATOR (VANILLA JS) -->
    <script>
        function hitungTerapi() {
            // Ambil data dari input
            const berat = document.getElementById('berat').value;
            const parameter = document.getElementById('parameter').value;

            // Validasi Sederhana
            if(!berat || !parameter) {
                alert('Mohon isi semua parameter terlebih dahulu!');
                return;
            }

            // --- MOCK LOGIKA PERHITUNGAN (Tunggu Rumus Asli dari Fara besok) ---
            // Contoh rumus asal: (Berat * Parameter) / 2
            const hasil = (parseFloat(berat) * parseFloat(parameter)) / 2;
            
            // Tampilkan hasil ke UI
            document.getElementById('hasil-dosis').innerText = hasil + ' mg';

            // --- ANIMASI PINDAH STEP ---
            // Sembunyikan Step 1
            document.getElementById('step-1').classList.remove('active-step');
            document.getElementById('step-1').classList.add('hidden-step');
            
            // Tampilkan Step 2
            document.getElementById('step-2').classList.remove('hidden-step');
            document.getElementById('step-2').classList.add('active-step');

            // Update Tampilan Stepper (Warna indikator atas)
            document.getElementById('indicator-1').classList.remove('after:border-blue-200');
            document.getElementById('indicator-1').classList.add('after:border-blue-600');
            
            document.getElementById('indicator-2').classList.remove('text-slate-400');
            document.getElementById('indicator-2').classList.add('text-blue-600');
            
            document.getElementById('circle-2').classList.remove('bg-slate-100', 'text-slate-500');
            document.getElementById('circle-2').classList.add('bg-blue-100', 'text-blue-600');
            
            document.getElementById('label-2').classList.remove('text-slate-400');
            document.getElementById('label-2').classList.add('text-blue-600');
        }

        function ulangiKalkulasi() {
            // --- ANIMASI KEMBALI KE STEP 1 ---
            // Sembunyikan Step 2
            document.getElementById('step-2').classList.remove('active-step');
            document.getElementById('step-2').classList.add('hidden-step');
            
            // Tampilkan Step 1
            document.getElementById('step-1').classList.remove('hidden-step');
            document.getElementById('step-1').classList.add('active-step');

            // Reset Tampilan Stepper
            document.getElementById('indicator-1').classList.add('after:border-blue-200');
            document.getElementById('indicator-1').classList.remove('after:border-blue-600');
            
            document.getElementById('indicator-2').classList.add('text-slate-400');
            document.getElementById('indicator-2').classList.remove('text-blue-600');
            
            document.getElementById('circle-2').classList.add('bg-slate-100', 'text-slate-500');
            document.getElementById('circle-2').classList.remove('bg-blue-100', 'text-blue-600');
            
            document.getElementById('label-2').classList.add('text-slate-400');
            document.getElementById('label-2').classList.remove('text-blue-600');

            // Opsional: Kosongkan form
            // document.getElementById('berat').value = '';
            // document.getElementById('parameter').value = '';
        }
    </script>
</body>
</html>
