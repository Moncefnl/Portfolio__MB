import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Code2, Layers, Cpu } from 'lucide-react';
import { ExplorationItem } from '../types';

interface ExplorationModalProps {
  item: ExplorationItem | null;
  onClose: () => void;
}

export default function ExplorationModal({ item, onClose }: ExplorationModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div
        id="exploration-modal-overlay"
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl max-h-[90vh] bg-[#0f0f0f] border border-[#1f1f1f] rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f1f1f] bg-[#141414]">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#0a0a0a] text-[#89AACC] border border-[#1f1f1f]">
              {item.category}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0a0a0a] text-[#878787] hover:text-white border border-[#1f1f1f] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-[#f5f5f5]">
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[#1f1f1f] bg-black">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-display italic text-white mb-1">
                {item.title}
              </h2>
              <p className="text-xs text-[#878787] font-mono">
                {item.subtitle}
              </p>
            </div>

            <p className="text-sm text-[#878787] leading-relaxed">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#141414] text-[#89AACC] border border-[#1f1f1f]"
                >
                  #{t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[#1f1f1f] flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#f5f5f5] text-[#0a0a0a] hover:bg-white text-xs font-medium transition-all cursor-pointer"
              >
                Close Showcase
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
