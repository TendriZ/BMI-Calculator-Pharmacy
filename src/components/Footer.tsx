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
              Glucose-Regulating & Antioxidant Sublingual Film (<em className="text-maroon">Muntingia calabura L.</em>)
            </p>
          </div>

          {/* Columns Container */}
          <div className="mt-12 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8 xl:gap-12 justify-between">

              {/* Column 1: Navigation */}
              <div className="col-span-1">
                <p className="font-bold text-maroon text-sm tracking-wide">Navigation</p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li><Link href="/#about" className="text-dark/70 transition hover:text-maroon">About & Research</Link></li>
                  <li><Link href="/#urgency" className="text-dark/70 transition hover:text-maroon">Clinical Urgency</Link></li>
                  <li><Link href="/#formulation" className="text-dark/70 transition hover:text-maroon">Formulation</Link></li>
                  <li><Link href="/#results" className="text-dark/70 transition hover:text-maroon">Results & Evaluation</Link></li>
                  <li><Link href="/#video" className="text-dark/70 transition hover:text-maroon">Video Profile</Link></li>
                </ul>
              </div>

              {/* Column 2: Research Team */}
              <div className="col-span-1">
                <p className="font-bold text-maroon text-sm tracking-wide">Research Team</p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  <li className="text-dark/90 font-semibold text-xs leading-snug">
                    <span className="text-maroon block font-bold">Advisor:</span>
                    Prof. apt. Rr. Retno Widyowati, S.Si., M.Pharm., Ph.D.
                  </li>
                  <li className="text-dark/70 text-xs pt-1 border-t border-salmon/15">Callysta Tabina Nadine</li>
                  <li className="text-dark/70 text-xs">Callista Angelina Putri</li>
                  <li className="text-dark/70 text-xs">Erinna Faizah Rahmadhani</li>
                  <li className="text-dark/70 text-xs">Shakila Geonada Ashar</li>
                  <li className="text-dark/70 text-xs">Faradillah Ermyne Sabil</li>
                </ul>
              </div>

              {/* Column 3: Institutional Affiliation */}
              <div className="col-span-1">
                <p className="font-bold text-maroon text-sm tracking-wide">Affiliations</p>
                <ul className="mt-5 space-y-3.5 text-sm">
                  <li><a href="https://unair.ac.id/" target="_blank" rel="noopener noreferrer" className="text-dark/70 underline decoration-dark/30 underline-offset-2 transition hover:text-maroon hover:decoration-maroon">Universitas Airlangga</a></li>
                  <li><a href="https://unair.ac.id/fakultas-farmasi/" target="_blank" rel="noopener noreferrer" className="text-dark/70 underline decoration-dark/30 underline-offset-2 transition hover:text-maroon hover:decoration-maroon">Faculty of Pharmacy</a></li>
                  <li><a href="https://sarpras.unair.ac.id/news/118/show" target="_blank" rel="noopener noreferrer" className="text-dark/70 underline decoration-dark/30 underline-offset-2 transition hover:text-maroon hover:decoration-maroon">Nanizar Building</a></li>
                  <li><a href="https://innopa.org/" target="_blank" rel="noopener noreferrer" className="text-dark/70 underline decoration-dark/30 underline-offset-2 transition hover:text-maroon hover:decoration-maroon">INNOPA Official</a></li>
                </ul>
              </div>

              {/* Column 4: Contact Us */}
              <div className="col-span-1">
                <p className="font-bold text-maroon text-sm tracking-wide">Contact Us</p>
                <p className="mt-2 text-xs text-dark/60">Connect for clinical inquiries & research collaboration.</p>
                <div className="mt-4 flex items-center gap-4">
                  {/* Email Icon */}
                  <a
                    href="mailto:glucersen2026@gmail.com"
                    className="relative z-10 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-cream/60 border border-salmon/30 text-dark/60 transition hover:bg-maroon hover:text-white hover:border-maroon hover:shadow-md active:scale-95"
                    title="glucersen2026@gmail.com"
                  >
                    <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </a>
                  {/* Instagram Icon */}
                  <a
                    href="https://www.instagram.com/glucersen.id?igsi=MWtsZW9ramlydGs2cg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-cream/60 border border-salmon/30 text-dark/60 transition hover:bg-maroon hover:text-white hover:border-maroon hover:shadow-md active:scale-95"
                    title="@glucersen.id"
                  >
                    <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
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

        {/* Bottom Copyright Bar */}
        <div className="mt-12 border-t border-salmon/20 pt-8">
          <div className="sm:flex sm:justify-between items-center">
            <p className="text-xs text-dark/60 font-medium">&copy; 2026 GLUCERSEN Research Team &bull; Universitas Airlangga. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
