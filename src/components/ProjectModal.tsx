import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Cpu, Layers, BarChart2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-modal-overlay"
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#0f0f0f] border border-[#1f1f1f] rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f1f1f] bg-[#141414]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-[#0a0a0a] text-[#89AACC] border border-[#1f1f1f]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#878787] hidden sm:inline-block">
                Architectural Breakdown
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0a0a0a] text-[#878787] hover:text-white border border-[#1f1f1f] hover:border-white/20 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Image Preview Banner */}
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-[#1f1f1f] bg-black">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div
                dir={project.isRtl ? 'rtl' : 'ltr'}
                className={`absolute bottom-4 left-4 right-4 ${project.isRtl ? 'text-right' : ''}`}
              >
                <h2 className="text-2xl sm:text-3xl font-display italic text-white">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#878787] font-mono mt-1">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Deep Description */}
            <div dir={project.isRtl ? 'rtl' : 'ltr'} className={project.isRtl ? 'text-right' : ''}>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#89AACC] mb-2">
                {project.isRtl ? 'نظرة عامة على المشروع' : 'System Overview'}
              </h3>
              <p className="text-sm text-[#f5f5f5]/90 leading-relaxed">
                {project.fullDetails}
              </p>
            </div>

            {/* Key Performance Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" dir={project.isRtl ? 'rtl' : 'ltr'}>
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#141414] border border-[#1f1f1f] flex items-center gap-2.5">
                    <BarChart2 className="w-4 h-4 text-[#89AACC] shrink-0" />
                    <span className="text-xs font-mono text-white">{metric}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <div dir={project.isRtl ? 'rtl' : 'ltr'} className={project.isRtl ? 'text-right' : ''}>
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#89AACC] mb-3">
                  {project.isRtl ? 'أبرز المميزات التقنية' : 'Key Technical Features'}
                </h3>
                <div className="space-y-2">
                  {project.keyFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#141414]/60 border border-[#1f1f1f]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-[#f5f5f5]/85">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Badges */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#89AACC] mb-2">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#141414] text-[#f5f5f5] border border-[#1f1f1f]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#1f1f1f] flex flex-wrap justify-end gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#89AACC] to-[#4E85BF] hover:from-[#9abfe4] hover:to-[#5e9be0] text-white text-xs font-bold shadow-lg shadow-[#4E85BF]/20 transition-all"
                >
                  <span>Live Preview (معاينة حية)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-white border border-[#1f1f1f] hover:border-white/20 text-xs font-medium transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#f5f5f5] text-[#0a0a0a] hover:bg-white text-xs font-medium transition-all cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
