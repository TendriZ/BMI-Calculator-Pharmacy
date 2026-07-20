<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Terapi Tambahan</title>
    <meta name="description" content="Kalkulator kebutuhan terapi adjuvant penurun kadar gula darah berbasis berat badan dan parameter klinis.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                    },
                    colors: {
                        primary: {
                            DEFAULT: '#640607',
                            light: '#8a0a0b',
                            dark: '#430404',
                        },
                        accent: {
                            pink: '#E09184',
                            'pink-light': '#f2c4bc',
                            red: '#C63D4D',
                            green: '#485D36',
                            'green-light': '#6b8f52',
                            cream: '#F6F4E6',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .step-content {
            transition: opacity 0.35s ease-in-out, transform 0.35s ease-in-out;
        }
        .hidden-step {
            opacity: 0;
            transform: translateY(12px);
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
        .btn-primary {
            background: linear-gradient(135deg, #640607, #8a0a0b);
            transition: all 0.2s ease;
            box-shadow: 0 4px 15px rgba(100, 6, 7, 0.3);
        }
        .btn-primary:hover {
            background: linear-gradient(135deg, #8a0a0b, #a01010);
            box-shadow: 0 6px 20px rgba(100, 6, 7, 0.4);
            transform: translateY(-1px);
        }
        .input-field:focus {
            border-color: #640607;
            box-shadow: 0 0 0 3px rgba(100, 6, 7, 0.12);
        }
        .card-container {
            box-shadow: 0 20px 60px rgba(100, 6, 7, 0.1), 0 4px 16px rgba(0,0,0,0.06);
        }
        .stat-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .stat-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(100, 6, 7, 0.12);
        }
    </style>
</head>
<body class="antialiased min-h-screen relative overflow-x-hidden" style="background-color: #F6F4E6; color: #2d1a1a;">

    <!-- BACKGROUND COMPONENT -->
    <div class="absolute inset-0 -z-10 h-full w-full" style="background-color: #F6F4E6; background-image: linear-gradient(to right, #e8e4d0 1px, transparent 1px), linear-gradient(to bottom, #e8e4d0 1px, transparent 1px); background-size: 6rem 4rem;">
        <div class="absolute bottom-0 left-0 right-0 top-0" style="background: radial-gradient(circle 700px at 5% 80%, rgba(72, 93, 54, 0.12), transparent), radial-gradient(circle 600px at 95% 10%, rgba(198, 61, 77, 0.1), transparent);"></div>
    </div>

    <!-- MAIN CONTAINER -->
    <div class="container mx-auto px-4 py-12 flex flex-col justify-center items-center min-h-screen gap-6">

        <!-- BRANDING / TAGLINE ATAS -->
        <div class="text-center space-y-2 max-w-lg">
            <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-2" style="color: #485D36; border-color: rgba(72,93,54,0.3); background: rgba(72,93,54,0.08);">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                </svg>
                Terapi Adjuvant
            </div>
            <h1 class="text-3xl font-extrabold tracking-tight" style="color: #640607;">Kalkulator Terapi</h1>
            <p class="text-sm" style="color: #7a5050;">Estimasi kebutuhan permen terapi penurun kadar gula darah secara akurat.</p>
        </div>

        <!-- CARD COMPONENT -->
        <div class="w-full max-w-2xl rounded-3xl overflow-hidden card-container" style="background: rgba(255,252,248,0.85); backdrop-filter: blur(20px); border: 1px solid rgba(224, 145, 132, 0.25);">

            <!-- STEPPER COMPONENT -->
            <div class="px-8 py-5 border-b" style="border-color: rgba(224,145,132,0.2); background: rgba(246,244,230,0.6);">
                <ol class="flex items-center w-full">
                    <!-- Step 1 -->
                    <li id="indicator-1" class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b-4 after:border-accent-pink-light after:inline-block">
                        <span class="flex items-center justify-center w-9 h-9 rounded-full shrink-0 font-bold text-sm transition-all duration-300" style="background: rgba(100,6,7,0.12); color: #640607;">
                            1
                        </span>
                    </li>
                    <!-- Step 2 -->
                    <li id="indicator-2" class="flex items-center">
                        <span id="circle-2" class="flex items-center justify-center w-9 h-9 rounded-full shrink-0 font-bold text-sm transition-all duration-300" style="background: rgba(0,0,0,0.06); color: #9a8080;">
                            2
                        </span>
                    </li>
                </ol>
                <div class="flex justify-between mt-2 text-xs font-semibold">
                    <span style="color: #640607;">Parameter Klinis</span>
                    <span id="label-2" style="color: #9a8080;">Hasil Kalkulasi</span>
                </div>
            </div>

            <!-- CONTENT AREA -->
            <div class="p-8 relative min-h-[320px]">

                <!-- STEP 1: FORM INPUT -->
                <div id="step-1" class="step-content active-step w-full">
                    <div class="space-y-5">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <!-- Input Berat Badan -->
                            <div class="space-y-2">
                                <label for="berat" class="text-sm font-semibold" style="color: #3d1a1a;">Berat Badan (kg)</label>
                                <input type="number" id="berat" placeholder="Contoh: 65"
                                    class="input-field w-full rounded-xl px-4 py-3 text-sm outline-none transition-all border"
                                    style="background: #fffaf8; border-color: rgba(224,145,132,0.4); color: #2d1a1a;">
                            </div>

                            <!-- Kadar Gula Darah -->
                            <div class="space-y-2">
                                <label for="kadar_gula" class="text-sm font-semibold" style="color: #3d1a1a;">Kadar Gula Darah (mg/dL)</label>
                                <input type="number" id="kadar_gula" placeholder="Contoh: 200"
                                    class="input-field w-full rounded-xl px-4 py-3 text-sm outline-none transition-all border"
                                    style="background: #fffaf8; border-color: rgba(224,145,132,0.4); color: #2d1a1a;">
                            </div>

                            <!-- Konsentrasi Senyawa -->
                            <div class="space-y-2">
                                <label for="konsentrasi" class="text-sm font-semibold" style="color: #3d1a1a;">Konsentrasi Senyawa (%)</label>
                                <input type="number" id="konsentrasi" placeholder="Contoh: 15"
                                    class="input-field w-full rounded-xl px-4 py-3 text-sm outline-none transition-all border"
                                    style="background: #fffaf8; border-color: rgba(224,145,132,0.4); color: #2d1a1a;">
                            </div>

                            <!-- Target Gula Darah -->
                            <div class="space-y-2">
                                <label for="target_gula" class="text-sm font-semibold" style="color: #3d1a1a;">Target Gula Darah (mg/dL)</label>
                                <input type="number" id="target_gula" placeholder="Contoh: 126"
                                    class="input-field w-full rounded-xl px-4 py-3 text-sm outline-none transition-all border"
                                    style="background: #fffaf8; border-color: rgba(224,145,132,0.4); color: #2d1a1a;">
                            </div>
                        </div>

                        <!-- Info Box -->
                        <div class="flex gap-3 p-4 rounded-xl border text-sm" style="background: rgba(72,93,54,0.07); border-color: rgba(72,93,54,0.2); color: #3a4d2a;">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#485D36">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                            </svg>
                            <p>Produk ini merupakan <strong>terapi tambahan (adjuvant)</strong>. Hasil kalkulasi adalah estimasi dan tidak menggantikan saran dokter.</p>
                        </div>

                        <!-- Tombol Hitung -->
                        <div class="flex justify-end pt-2">
                            <button id="btn-hitung" onclick="hitungTerapi()"
                                class="btn-primary text-white font-semibold px-8 py-3 rounded-xl flex items-center gap-2">
                                Hitung Sekarang
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- STEP 2: HASIL -->
                <div id="step-2" class="step-content hidden-step w-full">
                    <div class="space-y-5">

                        <!-- Stat Cards -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- Stat: Jumlah Permen/Hari -->
                            <div class="stat-card rounded-2xl p-5 flex flex-col gap-1 border" style="background: #fff; border-color: rgba(224,145,132,0.25);">
                                <div class="flex justify-between items-start">
                                    <span class="text-xs font-semibold uppercase tracking-wide" style="color: #9a8080;">Konsumsi Harian</span>
                                    <span class="text-xs font-bold px-2 py-1 rounded-lg" style="background: rgba(72,93,54,0.12); color: #485D36;">Rekomendasi</span>
                                </div>
                                <div class="text-4xl font-extrabold mt-2" style="color: #640607;" id="hasil-harian">— pcs</div>
                                <p class="text-xs" style="color: #b08080;">permen per hari</p>
                            </div>

                            <!-- Stat: Total Permen -->
                            <div class="stat-card rounded-2xl p-5 flex flex-col gap-1 border" style="background: #fff; border-color: rgba(224,145,132,0.25);">
                                <div class="flex justify-between items-start">
                                    <span class="text-xs font-semibold uppercase tracking-wide" style="color: #9a8080;">Total Kebutuhan</span>
                                    <span class="text-xs font-bold px-2 py-1 rounded-lg" style="background: rgba(198,61,77,0.1); color: #C63D4D;">14 Hari</span>
                                </div>
                                <div class="text-4xl font-extrabold mt-2" style="color: #640607;" id="hasil-total">— pcs</div>
                                <p class="text-xs" style="color: #b08080;">total selama terapi</p>
                            </div>
                        </div>

                        <!-- Disclaimer -->
                        <div class="flex gap-3 p-4 rounded-xl border text-sm" style="background: rgba(224,145,132,0.08); border-color: rgba(224,145,132,0.25); color: #7a4040;">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#E09184">
                                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                            </svg>
                            <p>Ini adalah estimasi berbasis parameter yang dimasukkan. <strong>Konsultasikan dengan tenaga medis</strong> sebelum memulai terapi.</p>
                        </div>

                        <!-- Tombol Ulang -->
                        <div class="flex justify-start">
                            <button onclick="ulangiKalkulasi()"
                                class="flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl border transition-all hover:shadow text-sm"
                                style="background: #fff; border-color: rgba(224,145,132,0.4); color: #640607;">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                                </svg>
                                Hitung Ulang
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- FOOTER NOTE -->
        <p class="text-xs text-center" style="color: #b08080;">
            ⚕️ Dibuat untuk keperluan penelitian farmasi &nbsp;·&nbsp; Bukan pengganti diagnosa medis
        </p>

    </div>

    <!-- SCRIPT -->
    <script>
        function hitungTerapi() {
            const berat = parseFloat(document.getElementById('berat').value);
            const kadarGula = parseFloat(document.getElementById('kadar_gula').value);
            const konsentrasi = parseFloat(document.getElementById('konsentrasi').value);
            const targetGula = parseFloat(document.getElementById('target_gula').value);

            if (!berat || !kadarGula || !konsentrasi || !targetGula) {
                // Shake animasi sederhana pada tombol
                const btn = document.getElementById('btn-hitung');
                btn.style.transform = 'translateX(-4px)';
                setTimeout(() => btn.style.transform = 'translateX(4px)', 100);
                setTimeout(() => btn.style.transform = 'translateX(0)', 200);
                alert('Mohon isi semua parameter terlebih dahulu!');
                return;
            }

            // ============================================================
            // PLACEHOLDER RUMUS — Ganti dengan rumus asli dari Fara
            // Contoh sementara: kebutuhan harian = selisih gula / (konsentrasi * 10)
            // ============================================================
            const selisihGula = kadarGula - targetGula;
            const hasilHarian = Math.max(1, Math.ceil(selisihGula / (konsentrasi * 5)));
            const hasilTotal = hasilHarian * 14;

            document.getElementById('hasil-harian').innerText = hasilHarian + ' pcs';
            document.getElementById('hasil-total').innerText = hasilTotal + ' pcs';

            // Pindah ke Step 2
            document.getElementById('step-1').classList.remove('active-step');
            document.getElementById('step-1').classList.add('hidden-step');
            document.getElementById('step-2').classList.remove('hidden-step');
            document.getElementById('step-2').classList.add('active-step');

            // Update stepper
            document.getElementById('indicator-1').style.setProperty('--tw-border-opacity', '1');
            document.getElementById('circle-2').style.background = 'rgba(100,6,7,0.12)';
            document.getElementById('circle-2').style.color = '#640607';
            document.getElementById('label-2').style.color = '#640607';
        }

        function ulangiKalkulasi() {
            document.getElementById('step-2').classList.remove('active-step');
            document.getElementById('step-2').classList.add('hidden-step');
            document.getElementById('step-1').classList.remove('hidden-step');
            document.getElementById('step-1').classList.add('active-step');

            // Reset stepper
            document.getElementById('circle-2').style.background = 'rgba(0,0,0,0.06)';
            document.getElementById('circle-2').style.color = '#9a8080';
            document.getElementById('label-2').style.color = '#9a8080';
        }
    </script>
</body>
</html>
