"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const loadingJargon = [
  "INITIALIZING CORE SYSTEMS...",
  "LOADING HIGH-FIDELITY ASSETS...",
  "OPTIMIZING RENDER PIPELINE...",
  "PREPARING EXPERIENCE...",
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [jargonIndex, setJargonIndex] = useState(0);
  const [percentScale, setPercentScale] = useState(0);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.5,
      ease: [0.76, 0, 0.24, 1], // Cinematic ease-in-out
      onUpdate: (latest) => {
        setPercentScale(latest);
        // Map current progress to jargon string
        const newIndex = Math.min(
          Math.floor((latest / 100) * loadingJargon.length),
          loadingJargon.length - 1
        );
        setJargonIndex(newIndex);
      },
      onComplete: () => {
        // Brief hold at 100% for perceived completeness before lifting the curtain
        setTimeout(() => {
          onComplete();
        }, 600);
      },
    });

    return controls.stop;
  }, [count, onComplete]);

  return (
    <motion.div
      key="preloader"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#050505] text-white overflow-hidden py-8 px-6 md:py-12 md:px-12"
    >
      {/* Background Noise Texture for Premium Matte Vibe */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0 mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Header Info */}
      <div className="flex justify-between items-start z-10 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white/90">
            ModernWeb Studio
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="hidden md:block text-xs font-mono text-white/50 tracking-[0.1em] text-right"
        >
          SYS: <span className="text-white">AWAKE</span><br/>
          LOC: INTL
        </motion.div>
      </div>

      {/* Main Massive Typographic Counter Centerpiece */}
      <div className="relative z-10 flex flex-col justify-end w-full grow pb-10 md:pb-16 pt-20">
        <div className="flex flex-col w-full">
          {/* Dynamic Matrix-style Loading Text above counter */}
          <div className="h-6 md:h-8 overflow-hidden mb-2 ml-[0.1rem] md:ml-[0.3rem]">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={jargonIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "backOut" }}
                className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-[0.15em] whitespace-nowrap"
              >
                {loadingJargon[jargonIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-baseline leading-[0.75] tracking-tighter"
          >
            <motion.h1 className="text-[7rem] sm:text-[14rem] md:text-[20rem] lg:text-[26rem] font-bold text-white tabular-nums">
              {rounded}
            </motion.h1>
            <span className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-light text-white/20 ml-2 md:ml-6 mb-2 md:mb-6">
              %
            </span>
          </motion.div>
        </div>
      </div>
      
      {/* Footer Interface & Progress Bar Container */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5 z-20 overflow-hidden">
        <motion.div 
          className="h-full bg-white relative origin-left"
          style={{ width: `${percentScale}%` }}
        >
          {/* Subtle glow on the progress head */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[6px] shadow-[0_0_15px_rgba(255,255,255,0.8)] opacity-80"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
