import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Code2,
  Globe2,
  CheckCircle2,
  Printer,
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div
        id="resume-modal-overlay"
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0f0f0f] border border-[#1f1f1f] rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto"
        >
          {/* Modal Header Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f1f1f] bg-[#141414]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full accent-gradient animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#878787]">
                Curriculum Vitae — Official Document
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-2 rounded-xl bg-[#0a0a0a] text-[#878787] hover:text-white border border-[#1f1f1f] hover:border-white/20 transition-colors cursor-pointer"
                title="Print CV"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#0a0a0a] text-[#878787] hover:text-white border border-[#1f1f1f] hover:border-white/20 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Printable Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-10 text-[#f5f5f5]">
            {/* Header Resume Bio */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-[#1f1f1f]">
              <div>
                <h1 className="text-3xl sm:text-4xl font-display italic text-white mb-2">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-lg text-[#89AACC] font-medium mb-3">
                  {PERSONAL_INFO.title} • {PERSONAL_INFO.degree}
                </p>
                <p className="text-xs sm:text-sm text-[#878787] max-w-2xl leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Contact Pill Box */}
              <div className="bg-[#141414] p-4 rounded-2xl border border-[#1f1f1f] space-y-2 text-xs text-[#878787] font-mono shrink-0">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#89AACC]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#89AACC]" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#89AACC]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-[#89AACC]" />
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    github.com/{PERSONAL_INFO.githubUsername}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-[#89AACC]" />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    linkedin.com/in/{PERSONAL_INFO.linkedinUsername}
                  </a>
                </div>
              </div>
            </div>

            {/* Section 1: Professional Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-[#141414] border border-[#1f1f1f] flex items-center justify-center text-[#89AACC]">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-medium text-white">Work Experience</h2>
              </div>

              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="p-5 rounded-2xl bg-[#141414]/60 border border-[#1f1f1f]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                      <span className="text-xs font-mono text-[#89AACC]">{exp.period}</span>
                    </div>
                    <div className="text-xs text-[#878787] font-mono mb-3">
                      {exp.organization} — {exp.location}
                    </div>
                    <p className="text-xs sm:text-sm text-[#878787] mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-xs sm:text-sm text-[#f5f5f5]/80 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full accent-gradient mt-2 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Technical Stack Matrix */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-[#141414] border border-[#1f1f1f] flex items-center justify-center text-[#89AACC]">
                  <Code2 className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-medium text-white">Technical Skills & Competencies</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.category} className="p-4 rounded-xl bg-[#141414] border border-[#1f1f1f]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#89AACC] mb-2">
                      {cat.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s) => (
                        <span
                          key={s.name}
                          className="text-xs px-2.5 py-1 rounded-md bg-[#0a0a0a] text-[#f5f5f5] border border-[#1f1f1f]"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Spoken Languages */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#141414] border border-[#1f1f1f] flex items-center justify-center text-[#89AACC]">
                  <Globe2 className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-medium text-white">Languages</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#141414] border border-[#1f1f1f]">
                  <div className="text-sm font-medium text-white">Arabic</div>
                  <div className="text-xs text-[#89AACC] font-mono mt-1">Native / Bilingual</div>
                </div>
                <div className="p-4 rounded-xl bg-[#141414] border border-[#1f1f1f]">
                  <div className="text-sm font-medium text-white">English</div>
                  <div className="text-xs text-[#89AACC] font-mono mt-1">Full Professional</div>
                </div>
                <div className="p-4 rounded-xl bg-[#141414] border border-[#1f1f1f]">
                  <div className="text-sm font-medium text-white">French</div>
                  <div className="text-xs text-[#89AACC] font-mono mt-1">Professional Working</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
