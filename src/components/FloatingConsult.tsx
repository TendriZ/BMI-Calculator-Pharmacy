'use client';

import { useState } from 'react';

const INSTAGRAM_USERNAME = 'glucersen.id';
const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_USERNAME}`;
const PREFILLED_MESSAGE = 'Hello, I would like to consult regarding Glucersen sublingual film.';

type FlowStep = 'idle' | 'copied';

export default function FloatingConsult() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<FlowStep>('idle');

  const handleCopyAndPrepare = async () => {
    try {
      await navigator.clipboard.writeText(PREFILLED_MESSAGE);
    } catch {
      // Fallback for older browsers or non-HTTPS
      const textarea = document.createElement('textarea');
      textarea.value = PREFILLED_MESSAGE;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setStep('copied');
  };

  const handleOpenInstagram = () => {
    window.open(INSTAGRAM_DM_URL, '_blank', 'noopener,noreferrer');
    // Reset after a short delay so it's ready for next use
    setTimeout(() => {
      setStep('idle');
      setIsOpen(false);
    }, 600);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset step when closing
    setTimeout(() => setStep('idle'), 300);
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
        <div className="bg-white rounded-2xl shadow-[0_16px_45px_rgba(100,6,7,0.18)] border-2 border-salmon/30 p-5 w-84 max-w-[calc(100vw-2rem)]">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-salmon/15">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon text-white shadow-sm border border-salmon/30">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <p className="text-base font-bold text-maroon leading-tight">@{INSTAGRAM_USERNAME}</p>
                <p className="text-[11px] text-dark/50 font-medium mt-0.5">Clinical Inquiries & Consultation</p>
              </div>
            </div>
          </div>

          {step === 'idle' ? (
            <>
              {/* STEP 1: Show message preview + Copy button */}
              <div className="bg-cream/70 rounded-2xl rounded-tl-xs p-3.5 mb-4 border border-salmon/25">
                <p className="text-xs text-dark/70 font-bold flex items-center gap-1.5 mb-1.5">
                  <span>💬</span> Prepared Inquiry:
                </p>
                <p className="text-xs text-dark/85 italic leading-relaxed bg-white/80 p-2.5 rounded-xl border border-salmon/20">
                  &ldquo;{PREFILLED_MESSAGE}&rdquo;
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyAndPrepare}
                className="w-full flex items-center justify-center gap-2 bg-maroon hover:bg-crimson text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all shadow-md shadow-maroon/25 hover:shadow-lg hover:shadow-maroon/35 active:scale-[0.98] cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
                Step 1: Copy Message to Clipboard
              </button>

              <p className="text-[10px] text-dark/45 mt-2 text-center leading-snug">
                Instagram does not support auto-filled messages.<br />
                Copy first, then paste into Instagram DM.
              </p>
            </>
          ) : (
            <>
              {/* STEP 2: Confirmation + Open Instagram */}
              <div className="bg-green/10 rounded-2xl p-4 mb-4 border border-green/25 text-center">
                <div className="flex justify-center mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green/20">
                    <svg className="w-7 h-7 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-bold text-green">Message Copied!</p>
                <p className="text-xs text-dark/60 mt-1 leading-relaxed">
                  Now open Instagram and <strong>paste</strong> (Ctrl+V / long-press) into the chat.
                </p>
              </div>

              <button
                type="button"
                onClick={handleOpenInstagram}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                Step 2: Open Instagram DM
              </button>

              <button
                type="button"
                onClick={() => setStep('idle')}
                className="w-full text-xs text-dark/50 hover:text-dark/70 mt-2 py-1 transition cursor-pointer"
              >
                ← Back to copy again
              </button>
            </>
          )}
        </div>

        {/* Small triangle pointer */}
        <div className="flex justify-end pr-8 -mt-1">
          <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-salmon/30 rotate-45 -translate-y-2"></div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
        className={`group relative flex items-center gap-2.5 rounded-full border border-salmon/30 shadow-[0_8px_30px_rgba(100,6,7,0.22)] transition-all duration-300 cursor-pointer active:scale-95 pointer-events-auto ${
          isOpen
            ? 'bg-dark hover:bg-dark/90 text-white px-4 py-3.5'
            : 'bg-maroon hover:bg-crimson text-white hover:shadow-[0_12px_36px_rgba(100,6,7,0.32)] px-5 py-3.5'
        }`}
        title="Consultation via Instagram"
        aria-label="Consultation via Instagram"
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
            <span className="text-white font-bold text-sm tracking-wide">Consultation</span>
          </>
        )}
      </button>
    </div>
  );
}
