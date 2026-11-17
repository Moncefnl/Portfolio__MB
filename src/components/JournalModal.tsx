import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, BookOpen, Share2 } from 'lucide-react';
import { JournalEntry } from '../types';

interface JournalModalProps {
  post: JournalEntry | null;
  onClose: () => void;
}

export default function JournalModal({ post, onClose }: JournalModalProps) {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div
        id="journal-modal-overlay"
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] bg-[#0f0f0f] border border-[#1f1f1f] rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f1f1f] bg-[#141414]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#89AACC]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{post.category}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0a0a0a] text-[#878787] hover:text-white border border-[#1f1f1f] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#f5f5f5]">
            <div className="flex items-center gap-4 text-xs text-[#878787] font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display italic text-white leading-tight">
              {post.title}
            </h2>

            <div className="w-full h-52 rounded-2xl overflow-hidden border border-[#1f1f1f]">
              <img
                src={post.image}
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 rounded-xl bg-[#141414] border border-[#1f1f1f] text-xs sm:text-sm text-[#89AACC] italic leading-relaxed">
              "{post.summary}"
            </div>

            <div className="text-sm sm:text-base text-[#878787] leading-relaxed space-y-4">
              <p>{post.content}</p>
              <p>
                As systems become more complex and distributed, engineering rigorous diagnostic metrics ensures reliable performance across diverse operating scenarios.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1f1f1f] flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#f5f5f5] text-[#0a0a0a] hover:bg-white text-xs font-medium transition-all cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
