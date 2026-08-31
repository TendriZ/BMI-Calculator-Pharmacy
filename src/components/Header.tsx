'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-salmon/20">
        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center gap-8 px-6 sm:px-10 lg:px-12">
          <Link href="/" className="flex items-center group py-1">
            <Image
              src="/logo-glucersen.png"
              alt="GLUCERSEN Logo"
              width={240}
              height={98}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
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
                  <Link href="/#video" className="text-dark/70 transition hover:text-maroon">
                    Video Inovasi
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/kalkulator"
                    className={`transition hover:text-maroon ${
                      pathname === '/kalkulator' ? 'font-bold text-maroon' : 'text-dark/70'
                    }`}
                  >
                    Kalkulator Mode Penuh
                  </Link>
                </li> */}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
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
            <Link href="/#video" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon">
              Video Inovasi
            </Link>
          </li>
          {/* <li>
            <Link
              href="/kalkulator"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-2 transition hover:bg-cream hover:text-maroon ${
                pathname === '/kalkulator' ? 'font-bold text-maroon bg-cream/50' : 'text-dark/70'
              }`}
            >
              Kalkulator Mode Penuh
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
}
