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
                <div className="mt-5 flex items-center gap-4">
                  {/* Email Icon */}
                  <a
                    href="mailto:glucersen2026@gmail.com"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/60 border border-salmon/30 text-dark/60 transition hover:bg-maroon hover:text-white hover:border-maroon hover:shadow-md"
                    title="glucersen2026@gmail.com"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </a>
                  {/* Instagram Icon */}
                  <a
                    href="https://www.instagram.com/glucersen.id?igsi=MWtsZW9ramlydGs2cg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/60 border border-salmon/30 text-dark/60 transition hover:bg-maroon hover:text-white hover:border-maroon hover:shadow-md"
                    title="@glucersen.id"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                </div>
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
