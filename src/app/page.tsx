'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Calculator from '@/components/Calculator';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [activeImage, setActiveImage] = useState<1 | 2>(1);
  const [isMuted, setIsMuted] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextState = !videoRef.current.muted;
      videoRef.current.muted = nextState;
      setIsMuted(nextState);
    }
  };

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
      .from('#hero-image-wrapper', { opacity: 0, x: 70, scale: 0.95, duration: 0.9, ease: 'power2.out' }, '-=0.7');

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

    // 3.5. VIDEO SHOWCASE (REVEAL & SCROLL AUTOPLAY)
    gsap.from('#video h2, #video p, #video .badge', {
      scrollTrigger: makeST('#video h2'),
      opacity: 0,
      y: 30,
      stagger: 0.15,
    });
    gsap.from('#video .video-card', {
      scrollTrigger: makeST('#video .video-card', { start: 'top 85%', end: 'top 45%' }),
      opacity: 0,
      scale: 0.95,
      y: 40,
    });

    // Autoplay on scroll reached, pause on leave
    const videoEl = videoRef.current;
    if (videoEl) {
      ScrollTrigger.create({
        trigger: '#video',
        start: 'top 75%',
        end: 'bottom 20%',
        onEnter: () => {
          videoEl.play().catch(() => {});
        },
        onEnterBack: () => {
          videoEl.play().catch(() => {});
        },
        onLeave: () => {
          videoEl.pause();
        },
        onLeaveBack: () => {
          videoEl.pause();
        },
      });
    }

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
    <div ref={container} className="overflow-x-hidden">
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

            <div className="mt-6 w-full flex flex-wrap items-center justify-center sm:justify-between gap-y-2.5 text-xs font-semibold text-dark/70">
              <div className="flex items-center justify-center gap-6 sm:gap-0 sm:contents">
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
              </div>
              <span className="hidden sm:inline text-salmon/40">|</span>
              <div className="w-full sm:w-auto flex justify-center">
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  No Water Needed
                </span>
              </div>
            </div>

            <div className="mt-8 md:mt-10 flex gap-4">
              <Link href="#video" className="inline-block rounded-full bg-crimson px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-maroon shadow-lg shadow-crimson/30">
                Tonton Video
              </Link>
            </div>
          </div>
        </div>
        {/* HERO PRODUCT SHOWCASE (DUAL-VIEW MOCKUP) */}
        <div id="hero-image-wrapper" className="relative h-[380px] sm:h-full w-full flex items-center justify-center p-4 sm:p-6 lg:p-10">
          {/* Subtle background aura */}
          <div className="absolute inset-4 sm:inset-8 bg-gradient-to-tr from-salmon/20 via-green/10 to-maroon/10 rounded-[2.5rem] blur-xl -z-10" />

          <div className="relative w-full h-full max-h-[540px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(100,6,7,0.15)] border-2 border-white/80 group bg-slate-100">
            {/* Foto 1: Nature / Botanical View */}
            <img
              src="/glucersen-product-1.jpg"
              alt="GLUCERSEN Sublingual Film - Nature & Botanical Formulation View"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                activeImage === 1 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'
              }`}
            />

            {/* Foto 2: Clean Packaging View */}
            <img
              src="/glucersen-product-2.jpg"
              alt="GLUCERSEN Sublingual Film - Packaging & Strip View"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                activeImage === 2 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'
              }`}
            />

            {/* Top Floating Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-salmon/30 shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green"></span>
              </span>
              <span className="text-xs font-bold text-maroon tracking-wide">Inovasi Sublingual Film</span>
            </div>

            {/* Dual-View Switcher Controls */}
            <div className="absolute bottom-1.5 inset-x-1 z-20 flex items-center justify-between gap-2 p-1.5 sm:p-2 rounded-2xl bg-white/90 backdrop-blur-md border border-salmon/30 shadow-lg">
              <div className="flex gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setActiveImage(1)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeImage === 1
                      ? 'bg-maroon text-white shadow-md scale-102'
                      : 'bg-cream/60 text-dark/70 hover:bg-cream hover:text-maroon'
                  }`}
                  title="Lihat foto dengan latar daun kersen"
                >
                  <span>Nature View</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImage(2)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeImage === 2
                      ? 'bg-maroon text-white shadow-md scale-102'
                      : 'bg-cream/60 text-dark/70 hover:bg-cream hover:text-maroon'
                  }`}
                  title="Lihat foto fokus kemasan"
                >
                  <span>Packaging View</span>
                </button>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-semibold text-dark/60 pr-2">
                <span className="text-maroon font-bold">{activeImage}</span> / 2
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section id="tentang" className="bg-white border-y border-salmon/20">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-maroon sm:text-3xl">Dikembangkan Berdasarkan Riset Kefarmasian</h2>
            <p className="mt-4 text-dark/70 sm:text-lg">Formulasi sediaan film sublingual berbahan alam untuk <i>terapi pendamping diabetes</i> </p>
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
            <p className="mt-4 text-lg text-dark/80">Pendekatan inovatif untuk kepatuhan terapi yang lebih baik tanpa mengorbankan akurasi klinis</p>
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

      {/* VIDEO SHOWCASE SECTION */}
      <section id="video" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-white via-cream/40 to-white border-b border-salmon/20">
        <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(circle 600px at 50% 30%, rgba(100,6,7,0.04), transparent)' }} />
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
            
            <h2 className="text-3xl font-extrabold text-maroon sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Inovasi Terapi Bersama <span className="text-crimson italic font-serif">Glucersen</span>
            </h2>
            <p className="mt-4 text-dark/70 sm:text-lg leading-relaxed">
              Pelajari keunggulan dan kemudahan penggunaan sediaan sublingual film ekstrak daun kersen (<em>Muntingia calabura L.</em>) untuk kestabilan kadar glukosa darah Anda
            </p>
          </div>

          <div className="video-card relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-2 border-salmon/30 bg-black shadow-[0_25px_60px_rgba(100,6,7,0.12)] group">
            <video
              ref={videoRef}
              controls
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              poster="/glucersen-product-1.jpg"
              className="w-full h-auto aspect-video object-cover"
            >
              <source src="/promotion-vid.mp4" type="video/mp4" />
              Browser Anda tidak mendukung pemutaran video HTML5.
            </video>

            {/* Quick Sound Toggle Button Overlay */}
            <button
              type="button"
              onClick={toggleSound}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/65 hover:bg-black/85 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 text-xs font-semibold transition-all cursor-pointer shadow-lg active:scale-95"
              title={isMuted ? "Klik untuk mengaktifkan suara" : "Klik untuk mematikan suara"}
            >
              {isMuted ? (
                <>
                  <svg className="w-4 h-4 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                  <span>Aktifkan Suara</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <span className="text-green font-bold">Suara Aktif</span>
                </>
              )}
            </button>
          </div>

          {/* 3 Value Highlight Badges */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-salmon/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green font-bold text-lg">
                🍃
              </div>
              <div>
                <p className="text-sm font-bold text-maroon">Ekstrak Daun Kersen</p>
                <p className="text-xs text-dark/60">Aktivitas antioksidan alami</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-salmon/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-maroon/10 text-maroon font-bold text-lg">
                ⚡
              </div>
              <div>
                <p className="text-sm font-bold text-maroon">Larut Cepat Sublingual</p>
                <p className="text-xs text-dark/60">Tanpa air, praktis di mana saja</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-salmon/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-crimson/10 text-crimson font-bold text-lg">
                🔬
              </div>
              <div>
                <p className="text-sm font-bold text-maroon">Terstandar Farmasi</p>
                <p className="text-xs text-dark/60">Diformulasikan secara terukur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KALKULATOR SECTION */}
      {/* <section id="kalkulator" className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10 border-y border-salmon/20"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center space-y-3 max-w-xl mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-maroon sm:text-4xl">Kalkulator Kebutuhan Terapi</h2>
            <p className="text-dark/70 text-lg">Gunakan kalkulator di bawah ini untuk mengestimasi kebutuhan harian sublingual film Glucersen Anda berdasarkan parameter klinis.</p>
          </div>
          <Calculator />
        </div>
      </section> */}
    </div>
  );
}
