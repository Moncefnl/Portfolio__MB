import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, BookOpen, Briefcase, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCES, JOURNAL_POSTS } from '../data/portfolioData';
import { JournalEntry } from '../types';

interface ExperienceJournalProps {
  onSelectJournal: (post: JournalEntry) => void;
}

export default function ExperienceJournal({ onSelectJournal }: ExperienceJournalProps) {
  const [tab, setTab] = useState<'experience' | 'journal'>('experience');

  return (
    <section id="experience" className="bg-[#0a0a0a] py-20 md:py-28 relative border-t border-[#1f1f1f]">
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
                Journey & Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#f5f5f5] tracking-tight font-light">
              Experience & <span className="font-display italic font-normal">publications</span>
            </h2>
            <p className="text-sm md:text-base text-[#878787] mt-3 max-w-lg">
              Hands-on software delivery, academic university teaching, and deep research into digital multimedia forensics.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex rounded-full bg-[#141414] border border-[#1f1f1f] p-1 self-start md:self-auto">
            <button
              onClick={() => setTab('experience')}
              className={`flex items-center gap-2 text-xs sm:text-sm font-medium rounded-full px-5 py-2 transition-all cursor-pointer ${
                tab === 'experience'
                  ? 'bg-[#1f1f1f] text-[#f5f5f5] shadow-sm'
                  : 'text-[#878787] hover:text-[#f5f5f5]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setTab('journal')}
              className={`flex items-center gap-2 text-xs sm:text-sm font-medium rounded-full px-5 py-2 transition-all cursor-pointer ${
                tab === 'journal'
                  ? 'bg-[#1f1f1f] text-[#f5f5f5] shadow-sm'
                  : 'text-[#878787] hover:text-[#f5f5f5]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Research & Journal</span>
            </button>
          </div>
        </motion.div>

        {/* Content View */}
        <AnimatePresence mode="wait">
          {tab === 'experience' ? (
            <motion.div
              key="exp-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  id={`experience-item-${exp.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative rounded-3xl md:rounded-[40px] bg-[#141414]/40 hover:bg-[#141414] border border-[#1f1f1f] hover:border-white/20 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Role & Org */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-[#0a0a0a] text-[#89AACC] border border-[#1f1f1f]">
                          {exp.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-[#878787]">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#878787]">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-medium text-[#f5f5f5] group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#878787] mt-1 font-mono">
                        {exp.organization}
                      </p>

                      <p className="text-sm text-[#878787] mt-3 leading-relaxed max-w-3xl">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="mt-4 space-y-2">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f5f5f5]/80">
                            <span className="w-1.5 h-1.5 rounded-full accent-gradient mt-2 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="journal-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {JOURNAL_POSTS.map((post, idx) => (
                <motion.div
                  key={post.id}
                  id={`journal-item-${post.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => onSelectJournal(post)}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-4 sm:p-5 rounded-[32px] sm:rounded-full bg-[#141414]/40 hover:bg-[#141414] border border-[#1f1f1f] hover:border-white/20 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-black/40"
                >
                  <div className="flex items-center gap-5">
                    {/* Thumbnail */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border border-[#1f1f1f] bg-black">
                      <img
                        src={post.image}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Metadata */}
                    <div>
                      <div className="flex items-center gap-3 text-xs text-[#878787] mb-1 font-mono">
                        <span className="text-[#89AACC]">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-medium text-[#f5f5f5] group-hover:text-white transition-colors line-clamp-1">
                        {post.title}
                      </h3>
                      <p className="text-xs text-[#878787] line-clamp-1 max-w-xl hidden sm:block mt-1">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  {/* Right read time & arrow */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 px-2 sm:px-4 shrink-0">
                    <span className="text-xs text-[#878787] font-mono flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-[#0a0a0a] group-hover:bg-[#89AACC]/20 border border-[#1f1f1f] group-hover:border-transparent flex items-center justify-center text-[#878787] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
