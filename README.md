# GlucaDrop - Inovasi Terapi Adjuvant Farmasi 🧬🍬

**GlucaDrop** (Nama Sementara) adalah purwarupa (prototipe) *landing page* dan aplikasi kalkulator medis yang dikembangkan untuk keperluan lomba inovasi farmasi. Proyek ini mempresentasikan inovasi produk berupa terapi pendamping (*adjuvant*) penurun kadar gula darah dalam bentuk sediaan permen yang praktis dan terukur presisi.

---

## 🎯 Fitur Utama

1. **Kalkulator Dosis Medis (Interaktif):**
   - Menghitung estimasi kebutuhan harian permen terapi berdasarkan:
     - Berat Badan (kg)
     - Kadar Gula Darah Saat Ini (mg/dL)
     - Target Gula Darah (mg/dL)
     - Konsentrasi Senyawa Aktif (%)
   - Dilengkapi dengan UI Stepper modern dan validasi pencegahan *error*.

2. **Desain UI/UX Tingkat Lanjut (Premium):**
   - Menggunakan pendekatan desain ala *startup/SaaS* modern untuk memberikan kesan profesional pada karya lomba.
   - Menggunakan *Color Palette* khusus: Maroon, Salmon Pink, Hijau Hutan, Merah Cerah, dan Krem.
   - Terintegrasi dengan **GSAP & ScrollTrigger** untuk animasi *scroll* yang halus, mulus, dan memiliki gaya inersia (*physics-based animation*).

3. **Struktur Multi-Kolom (Siap Lomba):**
   - Header statis dengan navigasi mulus (*smooth scrolling*).
   - Bagian "Sosial Media Tim" di Footer yang dioptimalkan untuk menonjolkan profil profesional (LinkedIn, dsb) dari 3 anggota tim (termasuk Fara sebagai ketua tim).

---

## 🛠️ Teknologi yang Digunakan

- **HTML5 & Vanilla JavaScript** (Logika Kalkulator & Interaktivitas)
- **Tailwind CSS** (Styling via CDN)
- **GSAP & ScrollTrigger** (Animasi Web Kelas Dunia)
- **Struktur Folder Laravel** (Disiapkan untuk *scaling backend* apabila nantinya lomba mensyaratkan penggunaan basis data).
- **Vercel** (Hosting & Deployment).

---

## 🚀 Panduan Menjalankan di Lokal (Localhost)

Karena saat ini proyek di-deploy sebagai *Static Site* untuk menghindari *server-cost*, kamu bisa menjalankannya dengan dua cara:

**Cara 1: Menggunakan Browser Langsung (Termudah)**
Cukup buka file `public/index.html` langsung di browsermu (Google Chrome / Edge / Safari).

**Cara 2: Menggunakan PHP / Laravel Server (Disarankan untuk testing)**
Jika kamu sudah menginstall PHP dan Composer:
1. Buka terminal di folder proyek ini.
2. Jalankan perintah:
   ```bash
   php artisan serve
   ```
3. Buka browser dan akses: `http://127.0.0.1:8000`

---

## 📝 Catatan Penting untuk Pengembangan Selanjutnya

- File utama yang memuat antarmuka saat ini berada di: `resources/views/welcome.blade.php`.
- **Setiap ada perubahan pada file `welcome.blade.php`, WAJIB disalin ke `public/index.html`** agar perubahan tersebut terbawa ke Vercel (karena Vercel membaca folder `public`).
- Rumus kalkulasi medis saat ini masih bersifat **dummy/sementara**. Menunggu spesifikasi medis resmi, parameter klinis, dan algoritma *real* dari tim (Fara).

---
*Proyek ini masih dalam tahap purwarupa. Bukan merupakan produk komersial atau saran medis pengganti resep dokter.*
