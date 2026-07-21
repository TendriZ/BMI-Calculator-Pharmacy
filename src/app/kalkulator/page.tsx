import { Metadata } from 'next';
import Calculator from '@/components/Calculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kalkulator Mode Penuh | GlucaDrop',
  description: 'Kalkulator dosis permen terapi GlucaDrop mode layar penuh.',
};

export default function KalkulatorPage() {
  return (
    <div className="min-h-[85vh] bg-cream/30 relative py-16 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
      
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-dark/60 hover:text-maroon transition"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>
        
        <div className="text-center space-y-3 max-w-xl mx-auto mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-maroon sm:text-4xl">Kalkulator Kebutuhan Terapi</h1>
          <p className="text-dark/70 text-lg">Gunakan kalkulator di bawah ini untuk mengestimasi kebutuhan harian permen terapi Anda berdasarkan parameter klinis.</p>
        </div>

        <Calculator />
      </div>
    </div>
  );
}
