import { motion } from 'framer-motion';
import { STATS } from '../data/portfolioData';
import { Award, Zap, Users, Globe2 } from 'lucide-react';

export default function Stats() {
  const statIcons = [Award, Zap, Users, Globe2];

  return (
    <section id="stats" className="bg-[#0a0a0a] py-20 md:py-28 relative border-t border-[#1f1f1f]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                id={`stat-card-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-[#141414] border border-[#1f1f1f] hover:border-white/20 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between"
              >
                {/* Top Icon and live pulse */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] flex items-center justify-center text-[#89AACC]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="w-2 h-2 rounded-full accent-gradient opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>

                {/* Stat Big Number */}
                <div>
                  <div className="text-5xl sm:text-6xl md:text-7xl font-display text-[#f5f5f5] tracking-tight group-hover:text-white transition-colors">
                    {stat.value}
                  </div>
                  <h4 className="text-base font-medium text-[#f5f5f5] mt-2">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-[#878787] mt-1 font-mono">
                    {stat.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
