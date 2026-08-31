'use client';

import { useState } from 'react';

const INSTAGRAM_DM_URL = 'https://ig.me/m/glucersen.id';
const PREFILLED_MESSAGE = 'Halo, saya ingin konsultasi mengenai Glucersen 🌿';

export default function FloatingConsult() {
  const [isOpen, setIsOpen] = useState(false);

  const handleConsult = () => {
    // Instagram DM link — on mobile opens IG app, on desktop opens instagram.com
    const encodedMessage = encodeURIComponent(PREFILLED_MESSAGE);
    window.open(
      `${INSTAGRAM_DM_URL}?text=${encodedMessage}`,
      '_blank',
      'noopener,noreferrer'
    );
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans pointer-events-none">
      {/* Pop-up Bubble */}
      <div
        className={`transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-90 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-[0_16px_45px_rgba(100,6,7,0.18)] border-2 border-salmon/30 p-5 w-80">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3.5 pb-3 border-b border-salmon/15">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon text-white shadow-sm border border-salmon/30">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div>
              <p className="text-base font-bold text-maroon leading-tight">@glucersen.id</p>
            </div>
          </div>

          {/* Chat Bubble */}
          <div className="bg-cream/70 rounded-2xl rounded-tl-xs p-3.5 mb-4 border border-salmon/25">
            <p className="text-xs sm:text-sm text-dark/85 leading-relaxed">
              Halo! 👋 Ingin tahu lebih lanjut tentang terapi sublingual film <span className="font-bold text-maroon">Glucersen</span>?
            </p>
            <p className="text-xs text-dark/65 mt-1.5">
              Konsultasikan dosis & penggunaan langsung via DM Instagram kami.
            </p>
          </div>

          {/* CTA Button */}
          <button
            type="button"
            onClick={handleConsult}
            className="w-full flex items-center justify-center gap-2 bg-maroon hover:bg-crimson text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all shadow-md shadow-maroon/25 hover:shadow-lg hover:shadow-maroon/35 active:scale-[0.98] cursor-pointer"
          >
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Chat via Instagram
          </button>
        </div>

        {/* Small triangle pointer */}
        <div className="flex justify-end pr-8 -mt-1">
          <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-salmon/30 rotate-45 -translate-y-2"></div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center gap-2.5 rounded-full border border-salmon/30 shadow-[0_8px_30px_rgba(100,6,7,0.22)] transition-all duration-300 cursor-pointer active:scale-95 pointer-events-auto ${
          isOpen
            ? 'bg-dark hover:bg-dark/90 text-white px-4 py-3.5'
            : 'bg-maroon hover:bg-crimson text-white hover:shadow-[0_12px_36px_rgba(100,6,7,0.32)] px-5 py-3.5'
        }`}
        title="Konsultasi via Instagram"
      >
        {/* Green Online Pulse Dot (only when closed) */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green border-2 border-white"></span>
          </span>
        )}

        {isOpen ? (
          /* Close icon */
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Chat + IG icon */
          <>
            <svg className="w-5 h-5 text-salmon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            <span className="text-white font-bold text-sm tracking-wide">Konsultasi</span>
          </>
        )}
      </button>
    </div>
  );
}
