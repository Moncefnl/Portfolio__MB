import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code, Eye, Sparkles, Terminal } from 'lucide-react';
import { EXPLORATIONS } from '../data/portfolioData';
import { ExplorationItem } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface ExplorationsProps {
  onSelectExploration: (item: ExplorationItem) => void;
}

export default function Explorations({ onSelectExploration }: ExplorationsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinnedContentRef = useRef<HTMLDivElement | null>(null);
  const colLeftRef = useRef<HTMLDivElement | null>(null);
  const colRightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin center header
      if (pinnedContentRef.current && containerRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: pinnedContentRef.current,
          pinSpacing: false,
        });
      }

      // Parallax scroll on left and right columns
      if (colLeftRef.current && containerRef.current) {
        gsap.fromTo(
          colLeftRef.current,
          { y: 100 },
          {
            y: -180,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }

      if (colRightRef.current && containerRef.current) {
        gsap.fromTo(
          colRightRef.current,
          { y: 240 },
          {
            y: -280,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.6,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const col1 = EXPLORATIONS.slice(0, 3);
  const col2 = EXPLORATIONS.slice(3, 6);

  return (
    <section
      id="explorations"
      ref={containerRef}
      className="relative min-h-[220vh] md:min-h-[260vh] bg-[#0a0a0a] border-t border-[#1f1f1f] overflow-hidden"
    >
      {/* Layer 1: Pinned Center Content */}
      <div
        ref={pinnedContentRef}
        className="h-screen w-full flex flex-col items-center justify-center pointer-events-none z-10 px-6 text-center select-none"
      >
        <div className="pointer-events-auto max-w-xl flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#1f1f1f]" />
            <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-medium">
              Explorations & Labs
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl text-[#f5f5f5] tracking-tight font-light mb-4">
            Visual <span className="font-display italic font-normal">playground</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#878787] max-w-md mb-8 leading-relaxed">
            Algorithmic prototypes, computer vision benchmarks, forensic signals, and low-level hardware diagnostics.
          </p>

          <a
            href="https://github.com/Moncefnl"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center rounded-full text-xs font-medium p-[1.5px] cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-[#141414] px-6 py-2.5 text-[#f5f5f5] border border-white/10 group-hover:border-transparent transition-all">
              <Code className="w-4 h-4 text-[#89AACC]" />
              <span>Explore Code Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>

      {/* Layer 2: Parallax Floating Cards Columns */}
      <div className="absolute inset-0 z-20 pointer-events-none flex justify-center items-start pt-32 pb-48 px-6">
        <div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-36 lg:gap-52">
          {/* Column 1 */}
          <div ref={colLeftRef} className="flex flex-col gap-16 md:gap-24 items-center md:items-start pointer-events-auto">
            {col1.map((item) => (
              <div
                key={item.id}
                id={`exploration-${item.id}`}
                onClick={() => onSelectExploration(item)}
                style={{ transform: `rotate(${item.rotation}deg)` }}
                className="group relative w-full max-w-[320px] sm:max-w-[340px] aspect-square rounded-3xl bg-[#141414] border border-[#1f1f1f] hover:border-white/30 p-3 shadow-2xl shadow-black/80 cursor-pointer transition-all duration-500 hover:scale-105 hover:rotate-0 hover:z-30"
              >
                {/* Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 halftone-overlay opacity-30 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Card Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-black/60 backdrop-blur-md text-[#89AACC] border border-white/10">
                    {item.category}
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-base font-medium text-white font-display italic tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#878787] mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={colRightRef} className="flex flex-col gap-16 md:gap-24 items-center md:items-end pointer-events-auto">
            {col2.map((item) => (
              <div
                key={item.id}
                id={`exploration-${item.id}`}
                onClick={() => onSelectExploration(item)}
                style={{ transform: `rotate(${item.rotation}deg)` }}
                className="group relative w-full max-w-[320px] sm:max-w-[340px] aspect-square rounded-3xl bg-[#141414] border border-[#1f1f1f] hover:border-white/30 p-3 shadow-2xl shadow-black/80 cursor-pointer transition-all duration-500 hover:scale-105 hover:rotate-0 hover:z-30"
              >
                {/* Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 halftone-overlay opacity-30 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Card Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-black/60 backdrop-blur-md text-[#89AACC] border border-white/10">
                    {item.category}
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-base font-medium text-white font-display italic tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#878787] mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
