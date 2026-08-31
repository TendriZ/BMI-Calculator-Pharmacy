'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextState = !videoRef.current.muted;
      videoRef.current.muted = nextState;
      setIsMuted(nextState);
    }
  };

  useGSAP(() => {
    // 1. HERO ANIMATION (Runs sequentially on load)
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('.hero-badge', { opacity: 0, y: -20, duration: 0.6 })
      .from('.hero-title', { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
      .from('.hero-desc', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
      .from('.hero-features', { opacity: 0, y: 15, duration: 0.5 }, '-=0.3')
      .from('.hero-cta', { opacity: 0, y: 15, duration: 0.5 }, '-=0.3')
      .from('#hero-image-wrapper', { opacity: 0, x: 40, scale: 0.95, duration: 0.8, ease: 'power2.out' }, '-=0.5');

    // 2. SCROLL ANIMATIONS WITH EARLY 92% TRIGGER & CLEARPROPS
    const animateSection = (containerSelector: string, itemSelector: string, staggerTime = 0.08) => {
      const items = gsap.utils.toArray(itemSelector);
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: staggerTime,
            ease: 'power2.out',
            clearProps: 'all', // Ensures all inline styles are cleared after animation!
            scrollTrigger: {
              trigger: containerSelector,
              start: 'top 92%', // Triggers early so content is never blank!
              once: true,
            },
          }
        );
      }
    };

    animateSection('#about', '#about .section-header, #about .pillar-card', 0.08);
    animateSection('#urgency', '#urgency .section-header, #urgency .stat-card, #urgency .deep-dive-card', 0.08);
    animateSection('#formulation', '#formulation .section-header, #formulation .formulation-card', 0.06);
    animateSection('#results', '#results .section-header, #results .result-card', 0.08);
    animateSection('#video', '#video .section-header, #video .video-card', 0.1);

    // Initial refresh
    ScrollTrigger.refresh();

    // 3. AUTOPLAY VIDEO ON SCROLL
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
  }, { scope: container });

  return (
    <div ref={container} className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section id="hero" className="overflow-hidden sm:grid sm:grid-cols-2 lg:min-h-[88vh] lg:py-8 items-center">
        <div className="p-6 sm:p-8 md:p-10 lg:px-14 lg:py-16 relative">
          <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(circle 500px at 0% 0%, rgba(72,93,54,0.05), transparent)' }} />
          <div className="max-w-xl mx-auto sm:mx-0 text-center sm:text-left flex flex-col items-center sm:items-start">
            <span className="hero-badge inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 text-green border-green/30 bg-green/10">
              Glucose-Regulating & Antioxidant Sublingual Film
            </span>
            <h1 className="hero-title text-3xl font-extrabold text-maroon md:text-5xl lg:text-6xl leading-tight">
              Sublingual Film <span className="text-crimson italic font-serif block sm:inline">For Diabetes</span>
            </h1>
            <p className="hero-desc mt-4 text-dark/80 md:mt-6 md:text-lg leading-relaxed">
              An innovative adjuvant therapy utilizing Indonesian <em className="font-semibold text-maroon"><i>Kersen</i></em> (Muntingia calabura) leaves. Formulated as a water-free sublingual film to overcome pill fatigue and swallowing difficulties, delivering quercetin antioxidants directly into systemic circulation.
            </p>

            <div className="hero-features mt-6 w-full flex flex-wrap items-center justify-center sm:justify-between gap-y-2.5 text-xs font-semibold text-dark/70">
              <div className="flex items-center justify-center gap-6 sm:gap-0 sm:contents">
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  Easy to Use
                </span>
                <span className="hidden sm:inline text-salmon/40">|</span>
                <span className="inline-flex items-center gap-1.5" title="Disintegrates completely in 95s (< 2 min Ph. Eur. standard)">
                  <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Quick Dissolving (95s)
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

            <div className="hero-cta mt-8 md:mt-10 flex flex-wrap gap-4 justify-center sm:justify-start w-full relative z-10">
              <Link
                href="#video"
                className="inline-flex items-center justify-center rounded-full bg-crimson px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-maroon shadow-lg shadow-crimson/30 active:scale-95 cursor-pointer"
              >
                Watch Innovation Video
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-cream border border-salmon/40 px-6 py-3.5 text-sm font-semibold text-dark/80 transition hover:bg-white hover:text-maroon hover:border-maroon shadow-sm active:scale-95 cursor-pointer"
              >
                Explore Research
              </Link>
            </div>
          </div>
        </div>

        {/* HERO VIDEO SHOWCASE */}
        <div id="hero-image-wrapper" className="relative w-full flex items-center justify-center p-3 sm:p-4 lg:p-6">
          <div className="absolute inset-2 sm:inset-4 bg-gradient-to-tr from-salmon/25 via-green/10 to-maroon/15 rounded-[3rem] blur-xl -z-10" />

          <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(100,6,7,0.18)] border-2 border-white/90 group bg-black">
            <video
              ref={heroVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto block object-contain"
            >
              <source src="/promotion-vid.mp4" type="video/mp4" />
            </video>

            {/* Top Floating Badge */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-salmon/30 shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green"></span>
              </span>
              <span className="text-xs font-bold text-maroon tracking-wide">Sublingual Film</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 CORE PILLARS SECTION */}
      <section id="about" className="bg-white border-y border-salmon/20 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-header mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-green bg-green/10 px-3.5 py-1 rounded-full border border-green/20">
              Core Pillars
            </span>
            <h2 className="text-3xl font-bold text-maroon sm:text-4xl mt-3">Developed Based on Pharmaceutical Research</h2>
            <p className="mt-4 text-dark/70 sm:text-lg">
              Engineered with four foundational scientific pillars to optimize glucose regulation and daily patient adherence.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Quercetin-Rich',
                badge: 'Active Bioflavonoid',
                desc: 'Contains potent quercetin compounds from Indonesian cherry leaves that actively suppress systemic chronic inflammation and oxidative stress.',
                icon: '🌿',
              },
              {
                title: 'Antidiabetic Potential',
                badge: 'Glucose Regulation',
                desc: 'Improves insulin sensitivity, promotes cellular glucose uptake, and helps prevent excess hepatic glucose breakdown by the liver.',
                icon: '🩸',
              },
              {
                title: 'Sublingual Film',
                badge: 'Mucosal Absorption',
                desc: 'Fast-dissolving oral strip that delivers bioactive compounds directly into sublingual veins, bypassing gastrointestinal degradation.',
                icon: '⚡',
              },
              {
                title: 'Patient-Friendly',
                badge: 'Zero Pill Fatigue',
                desc: 'Dissolves without water in 95s with a pleasant sweet taste, eliminating dysphagia (swallowing difficulty) and daily medication burnout.',
                icon: '👍',
              },
            ].map((pillar, i) => (
              <div key={i} className="pillar-card flex flex-col justify-between rounded-2xl border border-salmon/40 bg-cream/30 p-6 hover:bg-white hover:border-maroon/40 hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{pillar.icon}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-green bg-green/10 px-2.5 py-0.5 rounded-full border border-green/20">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-maroon mt-4">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-dark/75 leading-relaxed mt-2.5">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLINICAL URGENCY: PILL FATIGUE & INFLAMMATION MECHANISM */}
      <section id="urgency" className="py-16 sm:py-24 bg-gradient-to-b from-cream/30 via-white to-cream/20 border-b border-salmon/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-header mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-crimson bg-crimson/10 px-3.5 py-1 rounded-full border border-crimson/20">
              The Clinical Challenge
            </span>
            <h2 className="text-3xl font-extrabold text-maroon sm:text-4xl lg:text-5xl mt-3">
              Tackling Diabetes, Pill Fatigue & Inflammation
            </h2>
            <p className="mt-4 text-dark/75 sm:text-lg leading-relaxed">
              Addressing the real-world behavioral hurdles and complex pathophysiology of Type 2 Diabetes through a patient-centered solution.
            </p>
          </div>

          {/* 3 Key Stats from Poster */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="stat-card rounded-2xl border border-salmon/50 bg-white p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition">
              <p className="text-3xl sm:text-4xl font-extrabold text-maroon">20.4 Million</p>
              <p className="text-sm font-bold text-dark/90 mt-2">People with Diabetes in Indonesia</p>
              <p className="text-xs text-dark/60 mt-1">IDF Diabetes Atlas 2024 data highlighting the urgent need for accessible adjuvant care.</p>
            </div>
            <div className="stat-card rounded-2xl border border-salmon/50 bg-white p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition">
              <p className="text-3xl sm:text-4xl font-extrabold text-crimson">+73%</p>
              <p className="text-sm font-bold text-dark/90 mt-2">Projected SEA Surge by 2050</p>
              <p className="text-xs text-dark/60 mt-1">Rapid growth in Southeast Asian diabetes prevalence demanding preventative natural remedies.</p>
            </div>
            <div className="stat-card rounded-2xl border border-salmon/50 bg-white p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition">
              <p className="text-3xl sm:text-4xl font-extrabold text-green">&lt; 50%</p>
              <p className="text-sm font-bold text-dark/90 mt-2">Adherence in Developing Nations</p>
              <p className="text-xs text-dark/60 mt-1">Less than half of patients adhere to daily treatments due to pill fatigue and swallowing distress.</p>
            </div>
          </div>

          {/* 2 Educational Deep-Dives in Layperson Terms */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: Pill Fatigue & Dysphagia */}
            <div className="deep-dive-card rounded-3xl border-2 border-salmon/30 bg-white p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-crimson/10 text-crimson text-xl font-bold">
                  💊
                </span>
                <div>
                  <h3 className="text-xl font-bold text-maroon">The Behavioral Barrier: Pill Fatigue & Dysphagia</h3>
                  <p className="text-xs text-dark/50 font-medium">Why Conventional Tablets Often Fail in Long-Term Therapy</p>
                </div>
              </div>
              <p className="text-sm text-dark/80 leading-relaxed">
                Daily management of Type 2 Diabetes typically demands multiple tablets every day. Over months and years, this tedious routine creates <strong>"pill fatigue"</strong>—a state of psychological exhaustion, resistance, and missed doses.
              </p>
              <p className="text-sm text-dark/80 leading-relaxed mt-3">
                Furthermore, many elderly individuals and patients suffer from <em>dysphagia</em> (difficulty swallowing large pills). <strong>Glucersen</strong> eliminates this friction completely by melting under the tongue without drinking water, making therapy effortless and comfortable.
              </p>
            </div>

            {/* Box 2: Systemic Inflammation & Insulin Resistance (DeFronzo mechanism) */}
            <div className="deep-dive-card rounded-3xl border-2 border-salmon/30 bg-white p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green/10 text-green text-xl font-bold">
                  🔬
                </span>
                <div>
                  <h3 className="text-xl font-bold text-maroon">The Biological Root: Systemic Inflammation</h3>
                  <p className="text-xs text-dark/50 font-medium">How Quercetin Restores Cellular Insulin Sensitivity</p>
                </div>
              </div>
              <p className="text-sm text-dark/80 leading-relaxed">
                Diabetes is a multifactorial disease where <strong>chronic low-grade systemic inflammation</strong> acts as a major disruptor. Inflammatory markers block insulin receptors on cell surfaces, preventing glucose from entering cells ("starving body cells").
              </p>
              <p className="text-sm text-dark/80 leading-relaxed mt-3">
                When cells cannot absorb glucose, the liver mistakenly assumes the body is starving and releases stored sugar into the bloodstream, worsening hyperglycemia. By providing concentrated <strong>antioxidant quercetin</strong>, Glucersen suppresses inflammation, restores insulin signaling, and helps cells feed normally again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUALITATIVE PHARMACEUTICAL COMPOSITION (NO PERCENTAGES) */}
      <section id="formulation" className="py-16 sm:py-24 bg-white border-b border-salmon/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-header mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-green bg-green/10 px-3.5 py-1 rounded-full border border-green/20">
              Formulation Science
            </span>
            <h2 className="text-3xl font-extrabold text-maroon sm:text-4xl mt-3">
              Curated Pharmaceutical Composition
            </h2>
            <p className="mt-4 text-dark/75 sm:text-lg">
              Formulated exclusively with standardized natural botanical extracts and safe biocompatible polymers for clean sublingual absorption.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                title: 'Cherry Leaf Extract',
                latin: 'Muntingia calabura L.',
                role: 'Primary Active Ingredient',
                desc: 'Extracted Indonesian cherry leaves providing concentrated antidiabetic quercetin and bioactive polyphenols to combat oxidative stress.',
                tag: 'Active Botanical',
              },
              {
                title: 'Hydroxypropyl Methylcellulose',
                latin: '(HPMC)',
                role: 'Film-Forming Polymer',
                desc: 'Pharmaceutical-grade hydrophilic polymer creating the ultra-thin, flexible film matrix for swift oral mucosal disintegration.',
                tag: 'Film Matrix',
              },
              {
                title: 'Glycerin',
                latin: 'Pharmaceutical Grade',
                role: 'Natural Plasticizer',
                desc: 'Provides elasticity, smooth mechanical strength, and non-brittle flexibility so the film stays intact and comfortable in the mouth.',
                tag: 'Flexibility & Texture',
              },
              {
                title: 'Citric Acid',
                latin: 'Natural Acidulant',
                role: 'Saliva Stimulator',
                desc: 'Maintains optimal formula stability and gently stimulates natural saliva flow to ensure rapid under-the-tongue dissolution in 95s.',
                tag: 'Dissolution Aid',
              },
              {
                title: 'Steviol & Menthol',
                latin: 'Natural Flavoring',
                role: 'Taste-Masking Agents',
                desc: 'Calorie-free steviol combined with cooling menthol to mask bitterness and deliver a refreshing sweet flavor for 94.29% patient acceptance.',
                tag: 'Taste & Comfort',
              },
            ].map((comp, i) => (
              <div key={i} className="formulation-card rounded-2xl border border-salmon/40 bg-cream/20 p-5 flex flex-col justify-between hover:bg-cream/50 hover:shadow-md transition">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-maroon bg-salmon/20 px-2 py-0.5 rounded-md">
                    {comp.tag}
                  </span>
                  <h3 className="text-base font-bold text-maroon mt-3">{comp.title}</h3>
                  <p className="text-xs font-semibold text-green italic">{comp.latin}</p>
                  <p className="text-xs font-bold text-dark/70 mt-1">{comp.role}</p>
                  <p className="text-xs text-dark/70 leading-relaxed mt-2.5">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SCIENTIFIC EVALUATION & RESULTS */}
      <section id="results" className="py-16 sm:py-24 bg-gradient-to-b from-white via-cream/30 to-white border-b border-salmon/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-header mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-maroon bg-salmon/20 px-3.5 py-1 rounded-full border border-salmon/30">
              Laboratory & Panel Results
            </span>
            <h2 className="text-3xl font-extrabold text-maroon sm:text-4xl lg:text-5xl mt-3">
              Scientific Evaluation & Results
            </h2>
            <p className="mt-4 text-dark/75 sm:text-lg">
              Rigorous laboratory assays demonstrating high antioxidant potency, rapid sublingual disintegration, and physiological mucosal safety.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Antioxidant Activity */}
            <div className="result-card rounded-3xl border-2 border-salmon/30 bg-white p-6 shadow-sm hover:shadow-md transition text-center flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-green bg-green/10 px-3 py-1 rounded-full border border-green/20">
                  DPPH Assay @ 10 ppm
                </span>
                <p className="text-4xl sm:text-5xl font-black text-green mt-5">73.62%</p>
                <h3 className="text-base font-bold text-maroon mt-2">Antioxidant Inhibition</h3>
                <p className="text-xs text-dark/70 mt-2 leading-relaxed">
                  Demonstrates potent free-radical scavenging capacity—reaching approximately <strong>4/5 (80%)</strong> of the antioxidant potency of pure Ascorbic Acid (Vitamin C).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-salmon/20 text-[11px] font-semibold text-dark/60">
                Reduces oxidative stress in diabetes
              </div>
            </div>

            {/* Card 2: Disintegration Time */}
            <div className="result-card rounded-3xl border-2 border-salmon/30 bg-white p-6 shadow-sm hover:shadow-md transition text-center flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-maroon bg-salmon/20 px-3 py-1 rounded-full border border-salmon/30">
                  Mean Disintegration Time
                </span>
                <p className="text-4xl sm:text-5xl font-black text-maroon mt-5">95s</p>
                <h3 className="text-base font-bold text-maroon mt-2">Fast Sublingual Melt</h3>
                <p className="text-xs text-dark/70 mt-2 leading-relaxed">
                  Fully dissolves beneath the tongue in ~95 seconds (&lt; 2 minutes), strictly compliant with European Pharmacopoeia (<em>Ph. Eur.</em>) criteria for ODTs.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-salmon/20 text-[11px] font-semibold text-dark/60">
                Rapid sublingual venous absorption
              </div>
            </div>

            {/* Card 3: Safe Oral pH */}
            <div className="result-card rounded-3xl border-2 border-salmon/30 bg-white p-6 shadow-sm hover:shadow-md transition text-center flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-crimson bg-crimson/10 px-3 py-1 rounded-full border border-crimson/20">
                  Physiological Compatibility
                </span>
                <p className="text-4xl sm:text-5xl font-black text-crimson mt-5">6.84</p>
                <h3 className="text-base font-bold text-maroon mt-2">Oral-Safe pH Level</h3>
                <p className="text-xs text-dark/70 mt-2 leading-relaxed">
                  Maintains a physiological pH of 6.84, precisely within the natural oral mucosal range (6.2 – 7.6) to prevent any irritation or tissue discomfort.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-salmon/20 text-[11px] font-semibold text-dark/60">
                High oral mucosal safety & tolerance
              </div>
            </div>

            {/* Card 4: Patient Acceptance */}
            <div className="result-card rounded-3xl border-2 border-salmon/30 bg-white p-6 shadow-sm hover:shadow-md transition text-center flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-green bg-green/10 px-3 py-1 rounded-full border border-green/20">
                  Panel Evaluation
                </span>
                <p className="text-4xl sm:text-5xl font-black text-green mt-5">94.29%</p>
                <h3 className="text-base font-bold text-maroon mt-2">Acceptability Score</h3>
                <p className="text-xs text-dark/70 mt-2 leading-relaxed">
                  Evaluated across 15 panel respondents with unanimous "Excellent" ratings for sweet taste, surface uniformity, and comfortable administration.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-salmon/20 text-[11px] font-semibold text-dark/60">
                Hedonic & organoleptic excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VIDEO SHOWCASE SECTION */}
      <section id="video" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-white border-b border-salmon/20">
        <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(circle 600px at 50% 30%, rgba(100,6,7,0.04), transparent)' }} />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="section-header mx-auto max-w-3xl text-center mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-crimson bg-crimson/10 px-3.5 py-1 rounded-full border border-crimson/20">
              Video Profile
            </span>
            <h2 className="text-3xl font-extrabold text-maroon sm:text-4xl lg:text-5xl leading-tight tracking-tight mt-3">
              Research & Innovation <span className="text-crimson italic font-serif">Glucersen</span>
            </h2>
            <p className="mt-4 text-dark/70 sm:text-lg leading-relaxed">
              Watch the research journey and product demonstration of Glucersen sublingual film formulated from Indonesian <em>Muntingia calabura L.</em> leaves for diabetes care.
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
              className="w-full h-auto aspect-video object-cover"
            >
              <source src="/video-profile-glucersen.mp4" type="video/mp4" />
              Your browser does not support the HTML5 video player.
            </video>

            {/* Quick Sound Toggle Button Overlay */}
            <button
              type="button"
              onClick={toggleSound}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/65 hover:bg-black/85 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 text-xs font-semibold transition-all cursor-pointer shadow-lg active:scale-95"
              title={isMuted ? 'Click to enable audio' : 'Click to mute audio'}
            >
              {isMuted ? (
                <>
                  <svg className="w-4 h-4 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                  <span>Enable Sound</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <span className="text-green font-bold">Sound Active</span>
                </>
              )}
            </button>
          </div>

          {/* 3 Scientific Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-salmon/30 shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green font-bold text-lg">
                🍃
              </div>
              <div>
                <p className="text-sm font-bold text-maroon">Indonesian Cherry Leaves</p>
                <p className="text-xs text-dark/60">Rich in antioxidant quercetin</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-salmon/30 shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-maroon/10 text-maroon font-bold text-lg">
                ⚡
              </div>
              <div>
                <p className="text-sm font-bold text-maroon">95s Rapid Sublingual Melt</p>
                <p className="text-xs text-dark/60">Zero water required, effortless intake</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-salmon/30 shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-crimson/10 text-crimson font-bold text-lg">
                🔬
              </div>
              <div>
                <p className="text-sm font-bold text-maroon">Pharmaceutical Precision</p>
                <p className="text-xs text-dark/60">Ph. Eur. compliant formulation</p>
              </div>
            </div>
          </div>

          {/* Conclusion Banner from Poster */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-maroon to-dark p-8 sm:p-10 text-white text-center shadow-xl border border-salmon/30">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Conclusion & Future Impact</h3>
            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-white/85 leading-relaxed">
              <strong>GLUCERSEN</strong> demonstrates promising potential as a natural, water-free, and patient-friendly sublingual film for supporting long-term diabetes management and significantly improving treatment compliance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}