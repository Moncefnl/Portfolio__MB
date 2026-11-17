import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Navbar({
  activeSection,
  onNavigate,
  onOpenResume,
  onOpenContact,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'works', label: 'Work' },
    { id: 'web-apps', label: 'Web Apps' },
    { id: 'stack', label: 'Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'explorations', label: 'Playground' },
  ];

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none transition-all duration-300"
    >
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-[#1f1f1f] bg-[#141414]/80 px-2 py-2 gap-2 sm:gap-3 md:gap-4 transition-all duration-300 ${
          scrolled ? 'shadow-2xl shadow-black/80 border-white/15 scale-[0.98]' : 'shadow-xl shadow-black/40'
        }`}
      >
        {/* Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => onNavigate('hero')}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          aria-label="Moncef Boucheloukh - Home"
          className="relative w-9 h-9 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] p-[1px] transition-transform duration-300 hover:scale-105 flex items-center justify-center cursor-pointer group focus:outline-none flex-shrink-0"
        >
          {/* Inner Circle */}
          <div className="relative w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
            <span className="font-serif italic text-[13px] font-bold text-[#f5f5f5] tracking-tight group-hover:text-white transition-colors">
              MB
            </span>
          </div>
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-[#1f1f1f] hidden sm:block" />

        {/* Navigation Items */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => onNavigate(link.id)}
                className={`text-xs font-medium px-3 sm:px-4 py-2 rounded-full transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#1f1f1f] text-[#f5f5f5]'
                    : 'text-[#878787] hover:text-[#f5f5f5]'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          {/* Resume link in nav */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="text-xs font-medium px-3 sm:px-4 py-2 rounded-full text-[#878787] hover:text-[#f5f5f5] transition-colors cursor-pointer hidden md:inline-flex"
          >
            Resume
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-[#1f1f1f]" />

        {/* "SAY HI ↗" Contact Button */}
        <button
          id="nav-say-hi-btn"
          onClick={onOpenContact}
          className="text-xs font-bold px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] text-white shadow-lg shadow-[#4E85BF]/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-wider flex-shrink-0"
        >
          SAY HI ↗
        </button>
      </motion.nav>
    </header>
  );
}
