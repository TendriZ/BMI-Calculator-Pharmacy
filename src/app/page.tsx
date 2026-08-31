'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Calculator from '@/components/Calculator';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const makeST = (trigger: string, extraConfig = {}) => ({
      trigger,
      start: 'top 88%',
      end: 'top 30%',
      scrub: 1.5,
      ...extraConfig,
    });

    // 1. HERO
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('#hero span', { opacity: 0, y: -16, duration: 0.6 })
      .from('#hero h1', { opacity: 0, y: 50, duration: 0.8 }, '-=0.3')
      .from('#hero p', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
      .from('#hero a', { opacity: 0, y: 20, duration: 0.5, stagger: 0.12 }, '-=0.3')
      .from('#hero img', { opacity: 0, x: 70, scale: 0.95, duration: 0.9, ease: 'power2.out' }, '-=0.7');

    // 2. TENTANG
    gsap.from('#tentang h2, #tentang p', {
      scrollTrigger: makeST('#tentang h2'),
      opacity: 0,
      y: 30,
      stagger: 0.15,
    });
    gsap.from('#tentang dl > div', {
      scrollTrigger: makeST('#tentang dl', { end: 'top 20%' }),
      opacity: 0,
      y: 40,
      stagger: 0.1,
    });

    // 3. KEUNGGULAN
    gsap.from('#keunggulan h2, #keunggulan p', {
      scrollTrigger: makeST('#keunggulan h2'),
      opacity: 0,
      x: -30,
      stagger: 0.15,
    });
    gsap.from('#keunggulan .grid > div', {
      scrollTrigger: makeST('#keunggulan .grid', { end: 'top 15%' }),
      opacity: 0,
      y: 60,
      stagger: 0.15,
    });

    // 4. KALKULATOR
    gsap.from('#kalkulator h2, #kalkulator p', {
      scrollTrigger: makeST('#kalkulator h2'),
      opacity: 0,
      y: 30,
      stagger: 0.15,
    });
    gsap.from('#kalkulator .max-w-2xl', {
      scrollTrigger: makeST('#kalkulator .max-w-2xl', { start: 'top 85%', end: 'top 45%' }),
      opacity: 0,
      scale: 0.9,
      y: 40,
    });


  }, { scope: container });

  return (
    <div ref={container}>
      {/* HERO SECTION */}
      <section id="hero" className="overflow-hidden sm:grid sm:grid-cols-2 lg:h-[85vh] items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24 relative">
          <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(circle 500px at 0% 0%, rgba(72,93,54,0.05), transparent)' }}></div>
          <div className="max-w-xl mx-auto sm:mx-0 text-center sm:text-left flex flex-col items-center sm:items-start">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 text-green border-green/30 bg-green/10">
              Plant-Based Adjuvant Therapy • 20 Films
            </span>
            <h1 className="text-3xl font-extrabold text-maroon md:text-5xl lg:text-6xl leading-tight">
              Sublingual Film <span className="text-crimson italic font-serif block sm:inline">For Diabetes</span>
            </h1>
            <p className="mt-4 text-dark/80 md:mt-6 md:text-lg leading-relaxed">
              Terapi pendamping berbasis ekstrak daun kersen (<em className="font-semibold text-maroon">Muntingia calabura L.</em>) dengan aktivitas antioksidan untuk mendukung kestabilan kadar glukosa darah dalam bentuk film larut cepat tanpa air.
            </p>

            <div className="mt-6 w-full flex flex-wrap items-center justify-center sm:justify-between gap-y-3 text-xs font-semibold text-dark/70">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                Easy to Use
              </span>
              <span className="hidden sm:inline text-salmon/40">|</span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quick Dissolving
              </span>
              <span className="hidden sm:inline text-salmon/40">|</span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                No Water Needed
              </span>
            </div>

            <div className="mt-8 md:mt-10 flex gap-4">
              <Link href="#kalkulator" className="inline-block rounded-full bg-maroon px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-crimson shadow-lg shadow-maroon/30">
                Mulai Kalkulasi
              </Link>
              <Link href="#keunggulan" className="inline-flex items-center justify-center rounded-full bg-white border-2 border-salmon/30 px-8 py-3.5 text-sm font-semibold text-maroon transition hover:bg-salmon/10">
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
        <img alt="Glucersen Medical Research" src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1160" className="h-64 w-full object-cover sm:h-full opacity-90" />
      </section>

      {/* STATS SECTION */}
      <section id="tentang" className="bg-white border-y border-salmon/20">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-maroon sm:text-3xl">Dikembangkan Berdasarkan Riset Farmasi</h2>
            <p className="mt-4 text-dark/70 sm:text-lg">Formulasi sediaan film sublingual berbahan alam terstandar untuk terapi pendamping diabetes.</p>
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Bahan Aktif', value: 'M. calabura L.', sub: 'Ekstrak Daun Kersen' },
              { label: 'Aktivitas Utama', value: 'Antioksidan', sub: 'Blood Glucose Support' },
              { label: 'Sifat Terapi', value: 'Adjuvant', sub: 'Plant-Based Therapy' },
              { label: 'Bentuk Sediaan', value: 'Sublingual Film', sub: '20 Films / Pack' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="flex h-full flex-col rounded-2xl border border-salmon/50 bg-cream/30 px-4 py-6 text-center hover:scale-105 transition-transform duration-300 cursor-default shadow-sm hover:shadow-md">
                  <dt className="order-last text-xs sm:text-sm font-medium text-dark/70 mt-2">
                    <span className="font-semibold text-dark/90">{stat.label}</span>
                    <span className="block text-xs text-dark/50 mt-0.5">{stat.sub}</span>
                  </dt>
                  <dd className="text-xl sm:text-2xl font-extrabold text-green">{stat.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="keunggulan">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-maroon sm:text-4xl">Keunggulan Formulasi Glucersen</h2>
            <p className="mt-4 text-lg text-dark/80">Pendekatan inovatif untuk kepatuhan terapi yang lebih baik tanpa mengorbankan akurasi klinis.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { 
                title: 'Quick Dissolving Sublingual Film', 
                desc: 'Strip film cepat larut di bawah lidah tanpa perlu air (No Water Needed). Praktis, nyaman, dan zat aktif langsung terabsorpsi cepat ke pembuluh darah.', 
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /> 
              },
              { 
                title: 'Ekstrak Daun Kersen (M. calabura L.)', 
                desc: 'Memiliki aktivitas antioksidan tinggi untuk mendukung penurunan kadar glukosa darah dan melindungi sel beta pankreas dari stres oksidatif.', 
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> 
              },
              { 
                title: 'Plant-Based Adjuvant Therapy', 
                desc: 'Terapi pendamping nabati terstandar farmasi. Bekerja sinergis mendampingi pengobatan utama dengan presisi dosis terukur (20 films per kemasan).', 
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /> 
              }
            ].map((feat, i) => (
              <div key={i}>
                <div className="h-full rounded-2xl border border-salmon/50 bg-white p-8 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
                  <div className="inline-flex rounded-xl bg-green/10 p-3 text-green">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">{feat.icon}</svg>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-maroon">{feat.title}</h3>
                  <p className="mt-3 text-dark/70 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KALKULATOR SECTION */}
      <section id="kalkulator" className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10 border-y border-salmon/20"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center space-y-3 max-w-xl mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-maroon sm:text-4xl">Kalkulator Kebutuhan Terapi</h2>
            <p className="text-dark/70 text-lg">Gunakan kalkulator di bawah ini untuk mengestimasi kebutuhan harian sublingual film Glucersen Anda berdasarkan parameter klinis.</p>
          </div>
          <Calculator />
        </div>
      </section>
    </div>
  );
}
