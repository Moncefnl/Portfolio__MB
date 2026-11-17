import { useEffect, useRef, useState, FormEvent } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
  MapPin,
  ArrowUp,
  CheckCircle2,
  Copy,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const HLS_SOURCE = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export default function ContactFooter() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Initialize HLS for Footer
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ autoStartLoad: true, capLevelToPlayerSize: true });
      hls.loadSource(HLS_SOURCE);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SOURCE;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, []);

  // GSAP Marquee
  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    // Trigger confetti animation
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.85 },
      colors: ['#89AACC', '#4E85BF', '#ffffff'],
    });

    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const marqueeText =
    'ENGINEERING THE FUTURE • SCALABLE ARCHITECTURES • COMPUTER VISION • LEGAL MULTIMEDIA INFORMATICS • OPTIMIZED SYSTEMS • '
      .repeat(6);

  return (
    <footer
      id="contact"
      className="relative bg-[#0a0a0a] pt-20 md:pt-28 pb-12 overflow-hidden border-t border-[#1f1f1f] select-none"
    >
      {/* Background Flipped Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-25 scale-y-[-1] scale-105"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/85 backdrop-blur-[2px]" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
      </div>

      {/* GSAP Endless Marquee Banner */}
      <div className="relative z-10 w-full overflow-hidden border-y border-[#1f1f1f] bg-[#141414]/80 py-4 mb-20">
        <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
          <span className="text-sm md:text-base font-mono uppercase tracking-[0.25em] text-[#878787] flex-shrink-0">
            {marqueeText}
          </span>
          <span className="text-sm md:text-base font-mono uppercase tracking-[0.25em] text-[#878787] flex-shrink-0">
            {marqueeText}
          </span>
        </div>
      </div>

      {/* Main Contact Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Heading & Contact Direct Details */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#1f1f1f]" />
              <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-medium">
                Initiate Dialogue
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#f5f5f5] tracking-tight font-light mb-6">
              Let’s build something <span className="font-display italic font-normal">extraordinary</span> together.
            </h2>

            <p className="text-sm md:text-base text-[#878787] mb-8 leading-relaxed max-w-lg">
              Whether you need to architect scalable backend systems, deploy low-latency computer vision pipelines, or discuss software engineering opportunities, I’m always open to new connections.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 mb-8">
              {/* Email Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#141414] border border-[#1f1f1f] hover:border-white/20 transition-all group">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] flex items-center justify-center text-[#89AACC]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#878787] font-mono block">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base text-[#f5f5f5] group-hover:text-white font-medium transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#0a0a0a] text-xs text-[#878787] hover:text-white border border-[#1f1f1f] flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#141414] border border-[#1f1f1f] hover:border-white/20 transition-all group">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] flex items-center justify-center text-[#89AACC]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#878787] font-mono block">Phone & WhatsApp</span>
                    <a
                      href={`https://wa.me/213666387871`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-[#f5f5f5] group-hover:text-white font-medium transition-colors"
                    >
                      {PERSONAL_INFO.phone} ({PERSONAL_INFO.phoneIntl})
                    </a>
                  </div>
                </div>

                <a
                  href={`https://wa.me/213666387871`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#0a0a0a] text-xs text-[#878787] hover:text-white border border-[#1f1f1f] flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono">WhatsApp</span>
                </a>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#141414] border border-[#1f1f1f]">
                <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] flex items-center justify-center text-[#89AACC]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#878787] font-mono block">Location</span>
                  <span className="text-sm text-[#f5f5f5] font-medium">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Direct Message Form */}
          <div className="lg:col-span-6 bg-[#141414] border border-[#1f1f1f] rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl text-[#f5f5f5] font-medium mb-1">Send a Message</h3>
            <p className="text-xs text-[#878787] mb-6">
              Drop a quick note directly or reach out via email.
            </p>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#89AACC]/20 border border-[#89AACC]/40 flex items-center justify-center text-[#89AACC] mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Message Dispatched!</h4>
                <p className="text-xs text-[#878787] max-w-sm mb-6">
                  Thank you for reaching out, Moncef will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="text-xs text-[#89AACC] hover:underline font-mono cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#878787] mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[#89AACC] focus:outline-none text-sm text-[#f5f5f5] placeholder:text-[#878787]/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#878787] mb-1.5 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[#89AACC] focus:outline-none text-sm text-[#f5f5f5] placeholder:text-[#878787]/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#878787] mb-1.5 uppercase">
                    Project / Inquiry Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your software requirements, timeline, or engineering opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[#89AACC] focus:outline-none text-sm text-[#f5f5f5] placeholder:text-[#878787]/50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full rounded-xl text-sm font-medium p-[1.5px] cursor-pointer transition-transform duration-200 hover:scale-[1.02] focus:outline-none"
                >
                  <span className="absolute -inset-[1px] rounded-xl accent-gradient opacity-80 group-hover:opacity-100 transition-opacity blur-[1px]" />
                  <span className="relative flex items-center justify-center gap-2 rounded-[10px] bg-[#0a0a0a] text-white px-6 py-3.5 font-medium transition-colors group-hover:bg-[#141414]">
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-[#89AACC] transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#1f1f1f] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex gap-8">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-[#878787] hover:text-[#f5f5f5] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-[#878787] hover:text-[#f5f5f5] transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:monsafmooo@gmail.com"
              className="text-[10px] uppercase tracking-widest text-[#878787] hover:text-[#f5f5f5] transition-colors"
            >
              Email
            </a>
          </div>

          {/* Availability Status */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#52ff52] shadow-[0_0_8px_#52ff52] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#878787]">
              Available for select projects & software engineering roles
            </span>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="text-[10px] uppercase tracking-widest text-[#878787]">
              ©{new Date().getFullYear()} MONCEF BOUCHELOUKH
            </div>
            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-[#141414] border border-[#1f1f1f] hover:border-white/30 flex items-center justify-center text-[#878787] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
