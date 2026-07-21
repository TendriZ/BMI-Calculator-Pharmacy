'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-salmon/20">
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center gap-8 px-6 sm:px-10 lg:px-12">
          <Link href="/" className="flex items-center gap-2 text-maroon font-bold text-xl tracking-tight">
            {/* Ikon Medis/Daun sebagai Logo Sementara */}
            <svg className="h-7 w-7 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            GlucaDrop
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm font-medium">
                <li>
                  <Link href="/#tentang" className="text-dark/70 transition hover:text-maroon">
                    Tentang Produk
                  </Link>
                </li>
                <li>
                  <Link href="/#keunggulan" className="text-dark/70 transition hover:text-maroon">
                    Keunggulan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kalkulator"
                    className={`transition hover:text-maroon ${
                      pathname === '/kalkulator' ? 'font-bold text-maroon' : 'text-dark/70'
                    }`}
                  >
                    Kalkulator Mode Penuh
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 hidden">
                <Link
                  href="/#kalkulator"
                  className="block rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-crimson shadow-md shadow-maroon/20"
                >
                  Hitung Kebutuhan
                </Link>
              </div>

              <button
                type="button"
                className="block cursor-pointer rounded-sm p-2.5 text-dark/70 transition hover:text-maroon md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE NAV */}
      <nav className={`border-b border-salmon/20 bg-white md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-1 px-4 py-4 text-sm font-medium">
          <li>
            <Link href="/#tentang" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon">
              Tentang Produk
            </Link>
          </li>
          <li>
            <Link href="/#keunggulan" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon">
              Keunggulan
            </Link>
          </li>
          <li>
            <Link
              href="/kalkulator"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-2 transition hover:bg-cream hover:text-maroon ${
                pathname === '/kalkulator' ? 'font-bold text-maroon bg-cream/50' : 'text-dark/70'
              }`}
            >
              Kalkulator Mode Penuh
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
