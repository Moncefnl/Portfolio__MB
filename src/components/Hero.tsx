import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Download, FileText, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  onSeeWorks: () => void;
  onReachOut: () => void;
  onOpenResume: () => void;
}

const HLS_SOURCE = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export default function Hero({ onSeeWorks, onReachOut, onOpenResume }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle roles every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Initialize HLS.js Video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: Hls | null = null;

    if (Hls.isSupported()) {
      hlsInstance = new Hls({
        autoStartLoad: true,
        startLevel: -1,
        capLevelToPlayerSize: true,
      });
      hlsInstance.loadSource(HLS_SOURCE);
      hlsInstance.attachMedia(video);
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Autoplay policy fallback
        });
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SOURCE;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, []);

  // GSAP Entrance Timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      ).fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        '-=0.8'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-24 pb-16 px-4 md:px-8 select-none"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-40 scale-105"
        />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-[#0a0a0a]/55 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]" />
        {/* Bottom Fade to bg */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      {/* Hero Content (Centered) */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center px-4">
        {/* Eyebrow */}
        <div className="blur-in inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#1f1f1f] bg-[#141414]/80 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] text-[#878787] uppercase tracking-[0.4em] font-medium">
            SOFTWARE ENGINEER • JIJEL, DZ
          </span>
        </div>

        {/* Name Reveal */}
        <h1
          id="hero-name-heading"
          className="name-reveal text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic leading-[0.85] tracking-tight text-[#f5f5f5] mb-6 drop-shadow-sm"
        >
          {PERSONAL_INFO.name}
        </h1>

        {/* Dynamic Role Line */}
        <div className="blur-in text-lg sm:text-2xl md:text-3xl text-[#878787] font-light mb-6 flex flex-wrap items-center justify-center gap-2 max-w-2xl leading-relaxed">
          <span>A</span>
          <span
            key={roleIndex}
            className="font-serif italic text-[#f5f5f5] text-xl sm:text-3xl md:text-4xl animate-role-fade-in inline-block border-b border-white/20 pb-0.5"
          >
            {PERSONAL_INFO.roles[roleIndex]}
          </span>
          <span>based in Taher, Jijel.</span>
        </div>

        {/* Concise Description */}
        <p className="blur-in text-sm sm:text-base md:text-lg text-[#878787] max-w-2xl mb-10 leading-relaxed font-light">
          Discipline-driven Computer Science graduate specializing in{' '}
          <span className="text-[#f5f5f5] font-normal">Legal Multimedia Informatics</span>. Adept at building
          scalable systems and solving complex architectural challenges with a focus on precision.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          {/* Primary CTA: View Portfolio */}
          <button
            id="hero-see-works-btn"
            onClick={onSeeWorks}
            className="px-8 py-4 rounded-full bg-[#f5f5f5] text-[#0a0a0a] text-sm font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
          >
            <span>View Portfolio</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Secondary CTA: Reach out */}
          <button
            id="hero-reach-out-btn"
            onClick={onReachOut}
            className="px-8 py-4 rounded-full border border-[#1f1f1f] bg-[#141414] text-[#f5f5f5] text-sm font-bold hover:bg-[#1f1f1f] hover:border-white/20 transition-all cursor-pointer"
          >
            <span>Reach out</span>
          </button>

          {/* CV / Resume Button */}
          <button
            id="hero-resume-btn"
            onClick={onOpenResume}
            className="px-6 py-4 rounded-full border border-[#1f1f1f] bg-[#141414]/80 text-[#878787] hover:text-[#f5f5f5] hover:bg-[#1f1f1f] text-sm font-medium transition-all flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#89AACC]" />
            <span>Resume</span>
          </button>
        </div>

        {/* Elegant Micro-Stats */}
        <div className="blur-in mt-14 sm:mt-16 grid grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-[#1f1f1f]/80 w-full max-w-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[#878787] text-[10px] uppercase tracking-widest block font-bold">
              Projects
            </span>
            <span className="text-xl sm:text-2xl font-serif italic text-[#f5f5f5]">
              12+ Done
            </span>
          </div>
          <div className="space-y-1 text-center">
            <span className="text-[#878787] text-[10px] uppercase tracking-widest block font-bold">
              Focus
            </span>
            <span className="text-xl sm:text-2xl font-serif italic text-[#f5f5f5]">
              System Arch
            </span>
          </div>
          <div className="space-y-1 text-center sm:text-right">
            <span className="text-[#878787] text-[10px] uppercase tracking-widest block font-bold">
              Experience
            </span>
            <span className="text-xl sm:text-2xl font-serif italic text-[#f5f5f5]">
              Freelance
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none">
        <span className="text-[10px] text-[#878787] uppercase tracking-[0.25em] font-mono">
          SCROLL
        </span>
        <div className="w-px h-10 bg-[#1f1f1f] relative overflow-hidden">
          <div className="w-full h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
