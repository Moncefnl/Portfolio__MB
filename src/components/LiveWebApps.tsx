import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, CheckCircle2, Sparkles, Copy, Check, Search, Layers } from 'lucide-react';
import { LIVE_WEB_APPS } from '../data/portfolioData';
import { LiveWebApp } from '../types';

export default function LiveWebApps() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(LIVE_WEB_APPS.map((a) => a.category)));
    return ['All', ...uniqueCats];
  }, []);

  const filteredApps = useMemo(() => {
    return LIVE_WEB_APPS.filter((app) => {
      const matchesCategory =
        selectedCategory === 'All' || app.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        app.title.toLowerCase().includes(query) ||
        (app.arabicTitle && app.arabicTitle.toLowerCase().includes(query)) ||
        app.description.toLowerCase().includes(query) ||
        (app.arabicDescription && app.arabicDescription.toLowerCase().includes(query)) ||
        app.category.toLowerCase().includes(query) ||
        app.stack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyLink = (app: LiveWebApp) => {
    navigator.clipboard.writeText(app.url);
    setCopiedId(app.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="web-apps" className="relative py-28 md:py-36 px-4 sm:px-6 md:px-12 bg-[#0a0a0a]">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#89AACC]/5 via-[#4E85BF]/10 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1f1f1f] bg-[#141414] mb-4">
              <Globe className="w-3.5 h-3.5 text-[#89AACC]" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#89AACC]">
                Live Deployed Systems • معاينة حية للمشاريع
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-[#f5f5f5] tracking-tight">
              Websites & Web Applications
            </h2>
            <p className="mt-2 text-base sm:text-lg text-[#878787] font-sans">
              منصات ومواقع وتطبيقات ويب سحابية منشورة وقابلة للتجربة الحية مباشرة
            </p>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#878787] font-light leading-relaxed">
              Explore live production platforms spanning digital commerce, automotive enterprise showroom engines, healthcare diagnosis systems, dining portals, and SaaS services.
            </p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#141414]/90 border border-[#1f1f1f]">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#878787]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, technology, or category / ابحث في المشاريع..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] text-sm text-[#f5f5f5] placeholder-[#878787]/60 focus:outline-none focus:border-[#4E85BF] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#878787] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#878787] px-3 py-2 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] self-start md:self-auto whitespace-nowrap">
            <Layers className="w-3.5 h-3.5 text-[#89AACC]" />
            <span>
              Showing <strong className="text-white">{filteredApps.length}</strong> of{' '}
              <strong className="text-white">{LIVE_WEB_APPS.length}</strong> Live Apps
            </span>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="mb-12 flex flex-wrap gap-2 items-center">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === 'All'
                ? LIVE_WEB_APPS.length
                : LIVE_WEB_APPS.filter((a) => a.category === cat).length;
            if (count === 0) return null;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#89AACC] to-[#4E85BF] text-white font-medium shadow-md shadow-[#4E85BF]/20'
                    : 'bg-[#141414] hover:bg-[#1f1f1f] text-[#878787] hover:text-[#f5f5f5] border border-[#1f1f1f]'
                }`}
              >
                {cat === 'All' ? 'All Deployments' : cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Live Applications Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredApps.map((app, index) => {
              return (
                <motion.article
                  layout
                  key={app.id}
                  id={`live-app-card-${app.id}`}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group relative rounded-3xl bg-[#141414] border border-[#1f1f1f] hover:border-[#4E85BF]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-[#4E85BF]/10"
                >
                  {/* Subtle top hover gradient glow */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#89AACC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  <div>
                    {/* Card Image Banner */}
                    <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-black/50">
                      <img
                        src={app.image}
                        alt={app.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a0a0a]/85 backdrop-blur-md border border-[#1f1f1f] text-[10px] sm:text-xs font-mono text-[#f5f5f5]">
                          <span className="w-2 h-2 rounded-full bg-[#52ff52] shadow-[0_0_8px_#52ff52] animate-pulse" />
                          <span>{app.badge || 'Live Online'}</span>
                        </div>

                        <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#0a0a0a]/85 backdrop-blur-md text-[#89AACC] border border-[#1f1f1f]">
                          {app.category}
                        </span>
                      </div>

                      {/* Hostname URL badge on bottom right of image */}
                      <div className="absolute bottom-3 right-4 z-10">
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-white/90 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                          <Globe className="w-3 h-3 text-[#89AACC]" />
                          <span>{new URL(app.url).hostname}</span>
                        </span>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-6 space-y-3.5">
                      {(() => {
                        const isArabicTitle = /[\u0600-\u06FF]/.test(app.title);
                        const isArabicTagline = /[\u0600-\u06FF]/.test(app.tagline);
                        return (
                          <div>
                            {app.arabicTitle && (
                              <div dir="rtl" className="text-xs font-medium text-[#89AACC] mb-1 font-sans text-right">
                                {app.arabicTitle}
                              </div>
                            )}
                            <h3
                              dir={isArabicTitle ? 'rtl' : 'ltr'}
                              className={`text-xl sm:text-2xl text-[#f5f5f5] group-hover:text-white transition-colors leading-tight ${
                                isArabicTitle ? 'font-sans font-semibold text-right' : 'font-serif italic'
                              }`}
                            >
                              {app.title}
                            </h3>
                            <p
                              dir={isArabicTagline ? 'rtl' : 'ltr'}
                              className={`text-xs text-[#878787] mt-1 font-light leading-snug ${
                                isArabicTagline ? 'text-right' : ''
                              }`}
                            >
                              {app.tagline}
                            </p>
                          </div>
                        );
                      })()}

                      {/* Arabic Description Highlight */}
                      {app.arabicDescription && (
                        <div dir="rtl" className="p-2.5 rounded-xl bg-[#0a0a0a]/60 border border-[#1f1f1f] text-xs text-[#b0b0b0] font-sans leading-relaxed text-right">
                          {app.arabicDescription}
                        </div>
                      )}

                      {app.description !== app.arabicDescription && (
                        <p className="text-xs text-[#878787] leading-relaxed line-clamp-2">
                          {app.description}
                        </p>
                      )}

                      {/* Feature Highlights */}
                      {app.highlights && (
                        <div className="pt-2 space-y-1.5 border-t border-[#1f1f1f]/80">
                          {app.highlights.map((highlight, hIdx) => {
                            const isArabicHighlight = /[\u0600-\u06FF]/.test(highlight);
                            return (
                              <div
                                key={hIdx}
                                dir={isArabicHighlight ? 'rtl' : 'ltr'}
                                className="flex items-center gap-2 text-xs text-[#878787]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#89AACC] flex-shrink-0" />
                                <span className="truncate">{highlight}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {app.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-[#1f1f1f] text-[#878787] group-hover:text-[#f5f5f5] text-[10px] font-mono border border-white/5 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-[#1f1f1f]/60 mt-4">
                    {/* Copy Link Button */}
                    <button
                      onClick={() => handleCopyLink(app)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0a0a0a] hover:bg-[#1f1f1f] border border-[#1f1f1f] text-[#878787] hover:text-[#f5f5f5] text-xs font-mono transition-all cursor-pointer"
                      title="Copy direct URL"
                    >
                      {copiedId === app.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#52ff52]" />
                          <span className="text-[#52ff52]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Copy Link</span>
                        </>
                      )}
                    </button>

                    {/* Primary "Live Demo ↗" Action */}
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#89AACC] to-[#4E85BF] hover:from-[#9abfe4] hover:to-[#5e9be0] text-white text-xs font-bold shadow-lg shadow-[#4E85BF]/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ml-auto"
                      aria-label={`Open live demo for ${app.title}`}
                    >
                      <span>Live Preview</span>
                      <span className="font-arabic font-normal text-[11px] opacity-90">(معاينة حية)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if search has no results */}
        {filteredApps.length === 0 && (
          <div className="py-16 text-center rounded-3xl bg-[#141414] border border-[#1f1f1f] p-8">
            <Globe className="w-10 h-10 text-[#878787] mx-auto mb-3 opacity-50" />
            <h4 className="text-lg font-serif italic text-[#f5f5f5] mb-1">
              No matching live applications found
            </h4>
            <p className="text-xs text-[#878787] mb-4">
              Try adjusting your search terms or selecting another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-[#1f1f1f] text-xs font-mono text-[#f5f5f5] hover:bg-[#2a2a2a] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 rounded-2xl bg-[#141414]/60 border border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-[#89AACC]" />
            </div>
            <div>
              <h4 className="text-sm font-serif italic text-[#f5f5f5]">
                Custom Fullstack Web Engineering & Production Deployment
              </h4>
              <p className="text-xs text-[#878787]">
                Need a tailored web application, specialized clinical tool, restaurant ordering platform, or dealership system?
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full border border-[#1f1f1f] bg-[#0a0a0a] hover:bg-[#1f1f1f] text-xs font-medium text-[#f5f5f5] transition-all whitespace-nowrap cursor-pointer"
          >
            Discuss a Project / تواصل معي ↗
          </a>
        </div>
      </div>
    </section>
  );
}
