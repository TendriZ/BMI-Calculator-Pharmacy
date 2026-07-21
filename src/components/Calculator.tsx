'use client';

import { useState, useRef } from 'react';
import CustomAlert from './CustomAlert';

export default function Calculator() {
  const [step, setStep] = useState<1 | 2>(1);
  const [berat, setBerat] = useState<string>('');
  const [kadarGula, setKadarGula] = useState<string>('');
  const [konsentrasi, setKonsentrasi] = useState<string>('');
  const [targetGula, setTargetGula] = useState<string>('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  
  const [hasilHarian, setHasilHarian] = useState<number>(0);
  const [hasilTotal, setHasilTotal] = useState<number>(0);

  const btnRef = useRef<HTMLButtonElement>(null);

  const hitungTerapi = () => {
    const w = parseFloat(berat);
    const kg = parseFloat(kadarGula);
    const k = parseFloat(konsentrasi);
    const tg = parseFloat(targetGula);

    if (!w || !kg || !k || !tg) {
      if (btnRef.current) {
        btnRef.current.style.transform = 'translateX(-5px)';
        setTimeout(() => { if (btnRef.current) btnRef.current.style.transform = 'translateX(5px)'; }, 80);
        setTimeout(() => { if (btnRef.current) btnRef.current.style.transform = 'translateX(-3px)'; }, 160);
        setTimeout(() => { if (btnRef.current) btnRef.current.style.transform = 'translateX(0)'; }, 240);
      }
      setIsAlertOpen(true);
      return;
    }

    const selisihGula = kg - tg;
    const harian = Math.max(1, Math.ceil(selisihGula / (k * 5)));
    const total = harian * 14;

    setHasilHarian(harian);
    setHasilTotal(total);
    setStep(2);
  };

  const ulangiKalkulasi = () => {
    setStep(1);
  };

  return (
    <>
      <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden bg-white/95 backdrop-blur-2xl border-[1.5px] border-salmon/30 shadow-[0_20px_60px_rgba(100,6,7,0.08)]">
        
        {/* STEPPER */}
        <div className="px-8 py-5 border-b border-salmon/20 bg-cream/50">
          <div className="flex items-center">
            <div className={`step-circle ${step === 1 ? 'active' : 'done'}`}>
              {step === 1 ? '1' : (
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              )}
            </div>
            <div className={`stepper-line ${step === 2 ? 'done' : ''}`}></div>
            <div className={`step-circle ${step === 2 ? 'active' : 'inactive'}`}>2</div>
          </div>
          <div className="flex justify-between mt-2 text-xs font-bold">
            <span className="text-maroon">Parameter Klinis</span>
            <span style={{ color: step === 2 ? 'var(--maroon)' : 'var(--text-muted)' }}>Hasil Kalkulasi</span>
          </div>
        </div>

        {/* CONTENT KALKULATOR */}
        <div className="p-8 relative min-h-[320px]">
          
          {/* STEP 1: INPUT */}
          <div className={`step-content w-full ${step === 1 ? 'active-step' : 'hidden-step'}`}>
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="berat" className="text-sm font-semibold text-dark">Berat Badan (kg)</label>
                  <input type="number" id="berat" value={berat} onChange={(e) => setBerat(e.target.value)} placeholder="Contoh: 65" className="input-field w-full rounded-xl px-4 py-3 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="kadar_gula" className="text-sm font-semibold text-dark">Kadar Gula Darah (mg/dL)</label>
                  <input type="number" id="kadar_gula" value={kadarGula} onChange={(e) => setKadarGula(e.target.value)} placeholder="Contoh: 200" className="input-field w-full rounded-xl px-4 py-3 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="konsentrasi" className="text-sm font-semibold text-dark">Konsentrasi Senyawa (%)</label>
                  <input type="number" id="konsentrasi" value={konsentrasi} onChange={(e) => setKonsentrasi(e.target.value)} placeholder="Contoh: 15" className="input-field w-full rounded-xl px-4 py-3 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="target_gula" className="text-sm font-semibold text-dark">Target Gula Darah (mg/dL)</label>
                  <input type="number" id="target_gula" value={targetGula} onChange={(e) => setTargetGula(e.target.value)} placeholder="Contoh: 126" className="input-field w-full rounded-xl px-4 py-3 text-sm" />
                </div>
              </div>

              <div className="flex gap-3 p-4 rounded-xl text-sm bg-green/10 border-[1.5px] border-green/20 text-green">
                <svg className="h-5 w-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <p className="text-dark">Kalkulasi bersifat estimatif. Tetap utamakan <strong>saran dari tenaga medis</strong> Anda.</p>
              </div>

              <div className="flex justify-end pt-2">
                <button ref={btnRef} onClick={hitungTerapi} className="btn-primary font-semibold px-8 py-3 rounded-xl flex items-center gap-2">
                  Hitung Kebutuhan
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* STEP 2: HASIL */}
          <div className={`step-content w-full ${step === 2 ? 'active-step' : 'hidden-step'}`}>
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="stat-card rounded-2xl p-5 flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-wide text-dark/50">Konsumsi Harian</span>
                    <span className="text-xs font-bold px-2 py-1 rounded-lg bg-green/10 text-green">Rekomendasi</span>
                  </div>
                  <div className="text-4xl font-extrabold mt-2 text-maroon">{hasilHarian} pcs</div>
                  <p className="text-xs text-dark/50">permen per hari</p>
                </div>

                <div className="stat-card rounded-2xl p-5 flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-wide text-dark/50">Total Kebutuhan</span>
                    <span className="text-xs font-bold px-2 py-1 rounded-lg bg-crimson/10 text-crimson">14 Hari Terapi</span>
                  </div>
                  <div className="text-4xl font-extrabold mt-2 text-maroon">{hasilTotal} pcs</div>
                  <p className="text-xs text-dark/50">total keping permen</p>
                </div>
              </div>

              <div className="flex gap-3 p-4 rounded-xl text-sm bg-salmon/10 border-[1.5px] border-salmon/30 text-dark">
                <svg className="h-5 w-5 shrink-0 mt-0.5 text-crimson" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                <p>Dosis dapat bervariasi bergantung pada respon metabolisme individu. <strong>Segera hentikan pemakaian</strong> bila terjadi hipoglikemia.</p>
              </div>

              <div className="flex justify-start">
                <button onClick={ulangiKalkulasi} className="flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl border text-sm transition-all bg-white border-maroon/20 text-maroon hover:bg-maroon/5">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
                  </svg>
                  Hitung Ulang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CustomAlert isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)} />
    </>
  );
}
