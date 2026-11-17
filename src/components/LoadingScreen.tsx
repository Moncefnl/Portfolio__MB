import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const ROTATING_WORDS = ['Design', 'Create', 'Inspire'];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // RequestAnimationFrame counter from 0 -> 100 over 2700ms
  useEffect(() => {
    const duration = 2700;
    const startTime = performance.now();

    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuad) for smooth count up
      const easedProgress = 1 - Math.pow(1 - progress, 2);
      const currentCount = Math.floor(easedProgress * 100);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setIsDone(true);
        const timer = setTimeout(() => {
          onComplete();
        }, 400);
        return () => clearTimeout(timer);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  // Word cycler every 900ms
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] text-white flex flex-col justify-between p-6 md:p-12 select-none overflow-hidden"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-xs text-[#878787] uppercase tracking-[0.3em] font-medium flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full accent-gradient inline-block animate-pulse"></span>
          <span>Portfolio — Moncef Boucheloukh</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs text-[#878787] uppercase tracking-[0.2em] hidden sm:block font-mono"
        >
          COLLECTION '26
        </motion.div>
      </div>

      {/* Center Rotating Words */}
      <div className="flex-1 flex items-center justify-center">
        <div className="h-24 md:h-32 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={wordIndex}
              initial={{ y: 30, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 0.85, filter: 'blur(0px)' }}
              exit={{ y: -30, opacity: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-7xl lg:text-8xl font-display italic text-[#f5f5f5] text-center tracking-tight"
            >
              {ROTATING_WORDS[wordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Counter & Info */}
      <div className="w-full">
        <div className="flex justify-between items-end mb-4">
          <div className="text-xs text-[#878787] uppercase tracking-[0.2em] max-w-xs font-mono">
            {isDone ? 'SYSTEM INITIALIZED' : 'LOADING ASSETS & MODELS...'}
          </div>

          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-[#f5f5f5] tabular-nums tracking-tighter leading-none">
            {String(count).padStart(3, '0')}
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="w-full h-[3px] bg-[#1f1f1f] rounded-full overflow-hidden relative">
          <div
            className="h-full accent-gradient transition-all duration-75 origin-left"
            style={{
              width: `${count}%`,
              boxShadow: '0 0 12px rgba(137, 170, 204, 0.65)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
