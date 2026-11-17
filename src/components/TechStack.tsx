import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Layers, Globe2, CheckCircle2, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, typeof Code2> = {
    languages: Code2,
    web: Globe2,
    devops: Cloud,
    architecture: Layers,
    databases: Database,
    spoken: Globe2,
  };

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="stack" className="bg-[#0a0a0a] py-20 md:py-28 relative border-t border-[#1f1f1f]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#1f1f1f]" />
              <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-medium">
                Capabilities & Stack
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#f5f5f5] tracking-tight font-light">
              Engineering <span className="font-display italic font-normal">toolkit</span>
            </h2>
            <p className="text-sm md:text-base text-[#878787] mt-3 max-w-xl">
              Comprehensive multi-language proficiency, distributed system design, cloud containerization, and data engineering architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer font-medium ${
                activeCategory === 'all'
                  ? 'border-white/30 bg-[#1f1f1f] text-white shadow-sm'
                  : 'border-[#1f1f1f] text-[#878787] hover:text-white hover:bg-[#141414]'
              }`}
            >
              All Pillars
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer font-medium ${
                  activeCategory === cat.category
                    ? 'border-[#89AACC]/40 bg-[#1f1f1f] text-[#f5f5f5] shadow-sm'
                    : 'border-[#1f1f1f] text-[#878787] hover:text-white hover:bg-[#141414]'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((categoryGroup, idx) => {
            const Icon = categoryIcons[categoryGroup.category] || Code2;
            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-[#141414] border border-[#1f1f1f] hover:border-white/15 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#1f1f1f]">
                    <div className="w-9 h-9 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] flex items-center justify-center text-[#89AACC]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[#f5f5f5]">{categoryGroup.title}</h3>
                      <span className="text-[11px] text-[#878787] font-mono uppercase tracking-wider">
                        {categoryGroup.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {categoryGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center justify-between p-2.5 rounded-xl bg-[#0a0a0a]/60 hover:bg-[#0a0a0a] border border-[#1f1f1f]/50 hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full accent-gradient" />
                          <span className="text-xs sm:text-sm font-medium text-[#f5f5f5] group-hover:text-white">
                            {skill.name}
                          </span>
                        </div>
                        {skill.level && (
                          <span className="text-[11px] text-[#878787] font-mono px-2 py-0.5 rounded bg-[#141414] border border-[#1f1f1f] text-right">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="mt-5 pt-3 border-t border-[#1f1f1f]/60 flex items-center justify-between text-[11px] text-[#878787]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#89AACC]" />
                    <span>Production Verified</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#878787]/80">CORE SPEC</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
