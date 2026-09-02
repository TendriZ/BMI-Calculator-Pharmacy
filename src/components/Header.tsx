'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { scrollToVideoSection } from '@/lib/scroll';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleVideoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      scrollToVideoSection();
    }
  };

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
                  <Link href="/#about" className="text-dark/70 transition hover:text-maroon">
                    About & Research
                  </Link>
                </li>
                <li>
                  <Link href="/#urgency" className="text-dark/70 transition hover:text-maroon">
                    Clinical Urgency
                  </Link>
                </li>
                <li>
                  <Link href="/#formulation" className="text-dark/70 transition hover:text-maroon">
                    Formulation
                  </Link>
                </li>
                <li>
                  <Link href="/#results" className="text-dark/70 transition hover:text-maroon">
                    Results & Advantages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#video"
                    onClick={handleVideoClick}
                    className="text-dark/70 transition hover:text-maroon cursor-pointer"
                  >
                    Video Profile
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="block cursor-pointer rounded-sm p-2.5 text-dark/70 transition hover:text-maroon md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
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
            <Link href="/#about" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon">
              About & Research
            </Link>
          </li>
          <li>
            <Link href="/#urgency" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon">
              Clinical Urgency
            </Link>
          </li>
          <li>
            <Link href="/#formulation" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon">
              Formulation
            </Link>
          </li>
          <li>
            <Link href="/#results" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon">
              Results & Advantages
            </Link>
          </li>
          <li>
            <Link
              href="/#video"
              onClick={(e) => {
                setIsOpen(false);
                handleVideoClick(e);
              }}
              className="block rounded-lg px-3 py-2 text-dark/70 hover:bg-cream hover:text-maroon cursor-pointer"
            >
              Video Profile
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
