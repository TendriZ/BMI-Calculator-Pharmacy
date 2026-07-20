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

    <style>
        /*
        ============================================================
        SISTEM WARNA — 5 WARNA RESMI DARI PALETTE
        ============================================================
        --maroon  : #640607  → Elemen UTAMA (tombol, judul, angka hasil, fokus input)
        --salmon  : #E09184  → Elemen PENDUKUNG (border card, garis stepper)
        --green   : #485D36  → Elemen POSITIF/MEDIS (badge, info box, konfirmasi)
        --crimson : #C63D4D  → Elemen PERINGATAN/AKSEN (badge durasi, warna sekunder)
        --cream   : #F6F4E6  → BACKGROUND utama halaman
        ============================================================
        WARNA TEKS — hanya 2 varian dari maroon (gelap & redup)
        --text-dark : #3B0A0A  → Teks utama (label, konten penting)
        --text-muted: rgba(100,6,7,0.45) → Teks pendukung (caption, placeholder makna)
        ============================================================
        */
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
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: var(--cream);
            color: var(--text-dark);
        }

        /* --- Transisi Stepper --- */
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

        /* --- Tombol Utama (Maroon) --- */
        .btn-primary {
            background: linear-gradient(135deg, var(--maroon), #8a0a0b);
            color: white;
            transition: all 0.2s ease;
            box-shadow: 0 4px 15px rgba(100, 6, 7, 0.28);
        }
        .btn-primary:hover {
            box-shadow: 0 6px 22px rgba(100, 6, 7, 0.4);
            transform: translateY(-1px);
            filter: brightness(1.1);
        }

        /* --- Input fokus (Maroon ring) --- */
        .input-field {
            background: rgba(255, 252, 248, 0.9);
            border: 1.5px solid rgba(224, 145, 132, 0.45); /* Salmon */
            color: var(--text-dark);
            transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-field::placeholder { color: rgba(100, 6, 7, 0.25); }
        .input-field:focus {
            outline: none;
            border-color: var(--maroon);
            box-shadow: 0 0 0 3px rgba(100, 6, 7, 0.1);
        }

        /* --- Kartu hasil --- */
        .stat-card {
            border: 1.5px solid rgba(224, 145, 132, 0.3); /* Salmon */
            background: white;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .stat-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(100, 6, 7, 0.1);
        }

        /* --- Garis pemisah stepper (Salmon) --- */
        .stepper-line {
            flex: 1;
            height: 4px;
            background: rgba(224, 145, 132, 0.3); /* Salmon redup = inactive */
            border-radius: 2px;
            margin: 0 8px;
            transition: background 0.4s ease;
        }
        .stepper-line.done {
            background: var(--maroon); /* Maroon = active/done */
        }

        /* --- Lingkaran stepper --- */
        .step-circle {
            width: 36px; height: 36px;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-weight: 700; font-size: 0.875rem;
            transition: all 0.35s ease;
            flex-shrink: 0;
        }
        .step-circle.active {
            background: rgba(100, 6, 7, 0.12); /* Maroon transparan */
            color: var(--maroon);
        }
        .step-circle.inactive {
            background: rgba(224, 145, 132, 0.15); /* Salmon transparan */
            color: var(--salmon);
        }
        .step-circle.done {
            background: var(--maroon);
            color: white;
        }
    </style>
</head>
<body class="antialiased min-h-screen relative overflow-x-hidden">

    <!-- BACKGROUND (Cream + grid + gradien Maroon & Green halus) -->
    <div class="absolute inset-0 -z-10 h-full w-full"
         style="background-color: var(--cream);
                background-image: linear-gradient(to right, rgba(224,145,132,0.18) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgba(224,145,132,0.18) 1px, transparent 1px);
                background-size: 5rem 4rem;">
        <div class="absolute inset-0"
             style="background: radial-gradient(circle 600px at 5% 85%, rgba(72,93,54,0.1), transparent),
                                radial-gradient(circle 500px at 95% 5%, rgba(198,61,77,0.08), transparent);"></div>
    </div>

    <!-- CONTAINER -->
    <div class="container mx-auto px-4 py-12 flex flex-col justify-center items-center min-h-screen gap-6">

        <!-- HEADER BRANDING -->
        <div class="text-center space-y-2 max-w-md">
            <!-- Badge Hijau = Terapi Medis/Positif -->
            <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-2"
                 style="color: var(--green); border-color: rgba(72,93,54,0.35); background: rgba(72,93,54,0.09);">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                </svg>
                Terapi Adjuvant
            </div>
            <!-- Judul Maroon = elemen paling penting -->
            <h1 class="text-3xl font-extrabold tracking-tight" style="color: var(--maroon);">Kalkulator Terapi</h1>
            <!-- Deskripsi Muted = teks pendukung -->
            <p class="text-sm" style="color: var(--text-muted);">Estimasi kebutuhan permen terapi penurun kadar gula darah secara akurat.</p>
        </div>

        <!-- CARD UTAMA -->
        <div class="w-full max-w-2xl rounded-3xl overflow-hidden"
             style="background: rgba(255,252,248,0.88);
                    backdrop-filter: blur(20px);
                    border: 1.5px solid rgba(224,145,132,0.28); /* Salmon border */
                    box-shadow: 0 20px 60px rgba(100,6,7,0.09), 0 4px 16px rgba(0,0,0,0.05);">

            <!-- STEPPER -->
            <div class="px-8 py-5 border-b" style="border-color: rgba(224,145,132,0.2); background: rgba(246,244,230,0.7);">
                <div class="flex items-center">
                    <!-- Lingkaran 1: Maroon (aktif) -->
                    <div id="circle-1" class="step-circle active">1</div>
                    <!-- Garis: Salmon redup awalnya -->
                    <div id="stepper-line" class="stepper-line"></div>
                    <!-- Lingkaran 2: Salmon (inactive) -->
                    <div id="circle-2" class="step-circle inactive">2</div>
                </div>
                <div class="flex justify-between mt-2 text-xs font-bold">
                    <span style="color: var(--maroon);">Parameter Klinis</span>
                    <!-- Label step 2: Crimson saat aktif, muted saat inactive -->
                    <span id="label-2" style="color: var(--text-muted);">Hasil Kalkulasi</span>
                </div>
            </div>

            <!-- CONTENT -->
            <div class="p-8 relative min-h-[320px]">

                <!-- STEP 1: INPUT -->
                <div id="step-1" class="step-content active-step w-full">
                    <div class="space-y-5">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div class="space-y-1.5">
                                <label for="berat" class="text-sm font-semibold" style="color: var(--text-dark);">Berat Badan (kg)</label>
                                <input type="number" id="berat" placeholder="Contoh: 65"
                                       class="input-field w-full rounded-xl px-4 py-3 text-sm">
                            </div>

                            <div class="space-y-1.5">
                                <label for="kadar_gula" class="text-sm font-semibold" style="color: var(--text-dark);">Kadar Gula Darah (mg/dL)</label>
                                <input type="number" id="kadar_gula" placeholder="Contoh: 200"
                                       class="input-field w-full rounded-xl px-4 py-3 text-sm">
                            </div>

                            <div class="space-y-1.5">
                                <label for="konsentrasi" class="text-sm font-semibold" style="color: var(--text-dark);">Konsentrasi Senyawa (%)</label>
                                <input type="number" id="konsentrasi" placeholder="Contoh: 15"
                                       class="input-field w-full rounded-xl px-4 py-3 text-sm">
                            </div>

                            <div class="space-y-1.5">
                                <label for="target_gula" class="text-sm font-semibold" style="color: var(--text-dark);">Target Gula Darah (mg/dL)</label>
                                <input type="number" id="target_gula" placeholder="Contoh: 126"
                                       class="input-field w-full rounded-xl px-4 py-3 text-sm">
                            </div>
                        </div>

                        <!-- Info Box: Green = informasi positif/medis -->
                        <div class="flex gap-3 p-4 rounded-xl text-sm"
                             style="background: rgba(72,93,54,0.08); border: 1.5px solid rgba(72,93,54,0.22); color: var(--green);">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                            </svg>
                            <p style="color: var(--text-dark);">Produk ini merupakan <strong style="color: var(--green);">terapi tambahan (adjuvant)</strong>. Hasil kalkulasi adalah estimasi dan tidak menggantikan saran dokter.</p>
                        </div>

                        <div class="flex justify-end pt-2">
                            <!-- Tombol: Maroon = aksi utama -->
                            <button id="btn-hitung" onclick="hitungTerapi()"
                                    class="btn-primary font-semibold px-8 py-3 rounded-xl flex items-center gap-2">
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

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- Kartu 1: Konsumsi Harian -->
                            <!-- Salmon border + Green badge = informasi rekomendasi positif -->
                            <div class="stat-card rounded-2xl p-5 flex flex-col gap-1">
                                <div class="flex justify-between items-start">
                                    <span class="text-xs font-bold uppercase tracking-wide" style="color: var(--text-muted);">Konsumsi Harian</span>
                                    <!-- Green badge = rekomendasi/aman -->
                                    <span class="text-xs font-bold px-2 py-1 rounded-lg"
                                          style="background: rgba(72,93,54,0.1); color: var(--green);">Rekomendasi</span>
                                </div>
                                <!-- Maroon = angka paling penting di halaman ini -->
                                <div class="text-4xl font-extrabold mt-2" style="color: var(--maroon);" id="hasil-harian">— pcs</div>
                                <p class="text-xs" style="color: var(--text-muted);">permen per hari</p>
                            </div>

                            <!-- Kartu 2: Total Kebutuhan -->
                            <!-- Salmon border + Crimson badge = durasi/perhatian -->
                            <div class="stat-card rounded-2xl p-5 flex flex-col gap-1">
                                <div class="flex justify-between items-start">
                                    <span class="text-xs font-bold uppercase tracking-wide" style="color: var(--text-muted);">Total Kebutuhan</span>
                                    <!-- Crimson badge = informasi durasi/perlu diperhatikan -->
                                    <span class="text-xs font-bold px-2 py-1 rounded-lg"
                                          style="background: rgba(198,61,77,0.1); color: var(--crimson);">14 Hari</span>
                                </div>
                                <!-- Maroon = angka penting -->
                                <div class="text-4xl font-extrabold mt-2" style="color: var(--maroon);" id="hasil-total">— pcs</div>
                                <p class="text-xs" style="color: var(--text-muted);">total selama terapi</p>
                            </div>
                        </div>

                        <!-- Disclaimer: Salmon = peringatan lembut -->
                        <div class="flex gap-3 p-4 rounded-xl text-sm"
                             style="background: rgba(224,145,132,0.09); border: 1.5px solid rgba(224,145,132,0.3); color: var(--text-dark);">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#C63D4D">
                                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                            </svg>
                            <p>Ini adalah estimasi berbasis parameter yang dimasukkan. <strong style="color: var(--crimson);">Konsultasikan dengan tenaga medis</strong> sebelum memulai terapi.</p>
                        </div>

                        <div class="flex justify-start">
                            <!-- Tombol sekunder: outline Maroon = kembali -->
                            <button onclick="ulangiKalkulasi()"
                                    class="flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl border text-sm transition-all"
                                    style="background: white; border-color: rgba(100,6,7,0.25); color: var(--maroon);"
                                    onmouseover="this.style.background='rgba(100,6,7,0.05)'"
                                    onmouseout="this.style.background='white'">
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

        <!-- FOOTER -->
        <p class="text-xs text-center" style="color: var(--text-muted);">
            ⚕️ Dibuat untuk keperluan penelitian farmasi &nbsp;·&nbsp; Bukan pengganti diagnosa medis
        </p>

    </div>

    <script>
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

            // ============================================================
            // PLACEHOLDER RUMUS — Ganti dengan rumus asli dari Fara
            // ============================================================
            const selisihGula = kadarGula - targetGula;
            const hasilHarian = Math.max(1, Math.ceil(selisihGula / (konsentrasi * 5)));
            const hasilTotal  = hasilHarian * 14;

            document.getElementById('hasil-harian').innerText = hasilHarian + ' pcs';
            document.getElementById('hasil-total').innerText  = hasilTotal  + ' pcs';

            // Animasi pindah step
            document.getElementById('step-1').classList.replace('active-step', 'hidden-step');
            document.getElementById('step-2').classList.replace('hidden-step', 'active-step');

            // Update Stepper: garis jadi Maroon, lingkaran 2 jadi aktif Maroon
            document.getElementById('stepper-line').classList.add('done');
            document.getElementById('circle-1').className = 'step-circle done';
            document.getElementById('circle-1').innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>';
            document.getElementById('circle-2').className = 'step-circle active';
            document.getElementById('label-2').style.color  = 'var(--maroon)';
        }

        function ulangiKalkulasi() {
            document.getElementById('step-2').classList.replace('active-step', 'hidden-step');
            document.getElementById('step-1').classList.replace('hidden-step', 'active-step');

            // Reset Stepper
            document.getElementById('stepper-line').classList.remove('done');
            document.getElementById('circle-1').className   = 'step-circle active';
            document.getElementById('circle-1').innerText   = '1';
            document.getElementById('circle-2').className   = 'step-circle inactive';
            document.getElementById('label-2').style.color  = 'var(--text-muted)';
        }
    </script>
</body>
</html>
