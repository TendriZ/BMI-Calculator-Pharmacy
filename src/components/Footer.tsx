import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-salmon/20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-16">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-12 xl:gap-16">
          {/* Kolom Logo */}
          <div className="flex flex-col items-start gap-3 lg:w-64 shrink-0">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo-glucersen.png"
                alt="GLUCERSEN Logo"
                width={260}
                height={106}
                className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-xs text-dark/70 max-w-[240px] leading-relaxed font-medium">
              Sublingual Film for Diabetes (<em className="text-maroon">Muntingia calabura L.</em>)
            </p>
          </div>

          {/* Kolom Konten (4 Kolom Terdistribusi Rapi) */}
          <div className="mt-12 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8 xl:gap-12 justify-between">

              {/* Kolom 1: Navigasi */}
              <div className="col-span-1">
                <p className="font-bold text-maroon text-sm tracking-wide">Navigasi</p>
                <ul className="mt-5 space-y-3.5 text-sm">
                  <li><Link href="/#tentang" className="text-dark/70 transition hover:text-maroon">Tentang & Riset</Link></li>
                  <li><Link href="/#keunggulan" className="text-dark/70 transition hover:text-maroon">Keunggulan Formulasi</Link></li>
                  <li><Link href="/#video" className="text-dark/70 transition hover:text-maroon">Video Inovasi</Link></li>
                </ul>
              </div>

              {/* Kolom 2: Tim Peneliti */}
              <div className="col-span-1">
                <p className="font-bold text-maroon text-sm tracking-wide">Tim Peneliti</p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li className="text-dark/70">Callysta Tabina Nadine</li>
                  <li className="text-dark/70">Callista Angelina Putri</li>
                  <li className="text-dark/70">Erina Faizah Rahmadhani</li>
                  <li className="text-dark/70">Shakila Geonada Ashar</li>
                  <li className="text-dark/70">Faradillah Ermyne Sabil</li>
                </ul>
              </div>

              {/* Kolom 3: Afiliasi Riset */}
              <div className="col-span-1">
                <p className="font-bold text-maroon text-sm tracking-wide">Afiliasi Riset</p>
                <ul className="mt-5 space-y-3.5 text-sm">
                  <li><a href="https://www.unair.ac.id/" target="_blank" rel="noopener noreferrer" className="text-dark/70 underline decoration-dark/30 underline-offset-2 transition hover:text-maroon hover:decoration-maroon">Universitas Airlangga</a></li>
                  <li><a href="https://unair.ac.id/fakultas-farmasi/" target="_blank" rel="noopener noreferrer" className="text-dark/70 underline decoration-dark/30 underline-offset-2 transition hover:text-maroon hover:decoration-maroon">Fakultas Farmasi</a></li>
                  <li><a href="https://www.youtube.com/shorts/c2n_uj04I1I" target="_blank" rel="noopener noreferrer" className="text-dark/70 underline decoration-dark/30 underline-offset-2 transition hover:text-maroon hover:decoration-maroon">Gedung Nanizar</a></li>
                </ul>
              </div>

              {/* Kolom 4: Kontak Kami */}
              <div className="col-span-1">
                <p className="font-bold text-maroon text-sm tracking-wide">Kontak Kami</p>
                <ul className="mt-5 space-y-3.5 text-sm">
                  <li>
                    <a
                      href="mailto:glucersen2026@gmail.com"
                      className="inline-flex items-center gap-1.5 text-dark/70 underline decoration-dark/30 underline-offset-2 transition hover:text-maroon hover:decoration-maroon font-medium"
                    >
                      <span>glucersen2026@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/glucersen.id?igsi=MWtsZW9ramlydGs2cg%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-dark/70 underline decoration-dark/30 underline-offset-2 transition hover:text-maroon hover:decoration-maroon font-medium"
                    >
                      <span>@glucersen.id</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright Bar Bawah */}
        <div className="mt-12 border-t border-salmon/20 pt-8">
          <div className="sm:flex sm:justify-between items-center">
            <p className="text-xs text-dark/50 font-medium">&copy; 2026 Tim Peneliti Inovasi Farmasi. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
