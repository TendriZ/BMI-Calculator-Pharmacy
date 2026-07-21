'use client';

interface CustomAlertProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomAlert({ isOpen, onClose }: CustomAlertProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-sm mx-4 rounded-[2rem] p-8 shadow-2xl scale-100 transition-all duration-300 border-[1.5px] border-salmon/30 flex flex-col items-center text-center">
        <div className="h-16 w-16 rounded-full bg-salmon/20 text-maroon flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-maroon mb-2">Data Belum Lengkap</h3>
        <p className="text-dark/70 text-sm leading-relaxed mb-8">
          Mohon isi semua parameter klinis (Berat Badan, Kadar Gula, dll) sebelum melakukan kalkulasi dosis.
        </p>
        <button 
          onClick={onClose} 
          className="w-full rounded-xl bg-maroon px-6 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition-all hover:bg-crimson shadow-[0_8px_16px_rgba(100,6,7,0.2)] hover:shadow-[0_4px_8px_rgba(100,6,7,0.2)] active:scale-95"
        >
          Saya Mengerti
        </button>
      </div>
    </div>
  );
}
