import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Cpu, Layers } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
}

export default function SelectedWorks({ onSelectProject }: SelectedWorksProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="works" className="bg-[#0a0a0a] py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#1f1f1f]" />
              <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-medium">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#f5f5f5] tracking-tight font-light">
              Featured <span className="font-display italic font-normal">projects</span>
            </h2>
            <p className="text-sm md:text-base text-[#878787] mt-3 max-w-lg">
              A selection of projects engineered by Moncef, spanning real-time computer vision, legal multimedia forensics, and high-concurrency systems.
            </p>
          </div>

          <a
            href="https://github.com/Moncefnl"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hidden md:inline-flex items-center rounded-full text-xs font-medium p-[1.5px] cursor-pointer transition-transform duration-200 hover:scale-105 self-start md:self-auto"
          >
            <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-[#141414] px-5 py-2.5 text-[#f5f5f5] border border-white/10 group-hover:border-transparent transition-all">
              <Github className="w-4 h-4" />
              <span>View GitHub (@Moncefnl)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, index) => {
            const isHovered = hoveredId === project.id;
            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectProject(project)}
                className={`${project.span} group relative bg-[#141414] border border-[#1f1f1f] hover:border-white/20 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between`}
              >
                {/* Image Container with Aspect Ratio */}
                <div className={`relative w-full ${project.aspectRatio} overflow-hidden bg-black/40`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  />

                  {/* Halftone Pattern Overlay */}
                  <div className="absolute inset-0 halftone-overlay opacity-25 mix-blend-multiply pointer-events-none" />

                  {/* Subtle Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#89AACC] border border-white/10">
                      {project.category}
                    </span>

                    <span className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#89AACC]/20 border border-white/10 transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  {/* Hover Backdrop Overlay with Glassmorphism */}
                  <div
                    className={`absolute inset-0 bg-[#0a0a0a]/75 backdrop-blur-md flex items-center justify-center p-6 transition-all duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    {/* Hover Label Pill with Animated Gradient Border */}
                    <div className="relative group/pill p-[1.5px] rounded-full">
                      <div className="absolute -inset-[2px] rounded-full accent-gradient-border-animated blur-[2px]" />
                      <div className="relative inline-flex items-center gap-2 rounded-full bg-[#f5f5f5] text-[#0a0a0a] px-6 py-2.5 shadow-xl">
                        <span className="text-xs font-semibold uppercase tracking-wider">Inspect</span>
                        <span className="text-sm font-display italic">— {project.title}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-6 md:p-7 flex flex-col justify-between flex-1 bg-[#141414]">
                  <div dir={project.isRtl ? 'rtl' : 'ltr'} className={project.isRtl ? 'text-right' : ''}>
                    <h3 className="text-xl md:text-2xl text-[#f5f5f5] font-normal mb-2 flex items-center justify-between group-hover:text-white transition-colors">
                      <span>{project.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#878787] line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills & Optional Live Preview Button */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#1f1f1f]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-[#0a0a0a] text-[#878787] border border-[#1f1f1f] group-hover:border-white/10 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="text-[11px] px-2 py-1 rounded-md bg-[#0a0a0a] text-[#878787] font-mono">
                          +{project.stack.length - 5}
                        </span>
                      )}
                    </div>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#89AACC] to-[#4E85BF] hover:from-[#9abfe4] hover:to-[#5e9be0] text-white text-xs font-bold shadow-lg shadow-[#4E85BF]/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ml-auto"
                        aria-label={`معاينة حية لمشروع ${project.title}`}
                      >
                        <span>معاينة حية</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
