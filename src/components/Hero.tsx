"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BrowserBar = () => (
  <div className="w-full h-8 md:h-12 bg-[#0A0A0A] border-b border-white/5 flex items-center px-4 md:px-5 gap-2 shrink-0 z-20 relative shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
    <div className="flex gap-1.5 md:gap-2">
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]/90 shadow-[0_0_5px_rgba(255,95,86,0.3)]"></div>
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]/90 shadow-[0_0_5px_rgba(255,189,46,0.3)]"></div>
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]/90 shadow-[0_0_5px_rgba(39,201,63,0.3)]"></div>
    </div>
    <div className="absolute left-1/2 -translate-x-1/2 w-2/5 max-w-[280px] h-6 bg-white/5 rounded-md border border-white/10 flex items-center justify-center hidden sm:flex backdrop-blur-xl">
      <span className="text-[10px] md:text-xs text-white/50 font-medium tracking-widest font-mono">modernweb.studio</span>
    </div>
  </div>
);

const portfolioCards = [
  { id: 1, src: "/images/project1.webp", alt: "Dashboard Setup" },
  { id: 2, src: "/images/project2.webp", alt: "E-commerce Storefront" },
  { id: 3, src: "/images/project3.webp", alt: "Hero Showcase Main" },
  { id: 4, src: "/images/project4.webp", alt: "Real Estate App" },
  { id: 5, src: "/images/project5.webp", alt: "Crypto Dashboard" },
];

export default function Hero() {
  return (
    <section 
      className="relative min-h-[100vh] lg:min-h-[140vh] flex flex-col items-center pt-24 sm:pt-32 md:pt-40 overflow-hidden bg-[#FAFAFA]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle breathing grid */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
        />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[130px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-indigo-500/10 blur-[130px]"></div>
      </div>

      <motion.div 
        className="w-full max-w-7xl mx-auto text-center z-40 flex flex-col items-center px-6 relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 bg-white backdrop-blur-xl border border-gray-200 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full mb-6 sm:mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default whitespace-nowrap overflow-hidden max-w-[90vw]"
        >
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          </span>
          <p className="text-[10px] sm:text-xs md:text-[13px] font-semibold text-gray-900 tracking-wide truncate">
            ModernWeb Studio <span className="text-gray-300 mx-1.5 px-0.5">|</span> <span className="text-gray-500">Next-Gen Digital Agency</span>
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[6rem] font-black tracking-tighter text-balance leading-[1.05] mb-5 md:mb-8 text-gray-950 px-2"
        >
          Websites designed for <br className="hidden lg:block" />
          <span className="relative inline-block mt-2 lg:mt-0">
            <span className="absolute -inset-2 bg-blue-100/50 blur-xl rounded-full opacity-50 pointer-events-none"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block">
               Speed & Conversion.
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-[1.25rem] text-gray-500 max-w-2xl mx-auto mb-8 md:mb-12 text-balance px-4 font-medium leading-relaxed"
        >
          We create high-performing digital experiences that elevate brands, instantly engage audiences, and drive measurable results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="#contact"
            className="group relative flex items-center gap-2 bg-gradient-to-br from-gray-900 to-black text-white px-8 py-3.5 md:px-10 md:py-4.5 rounded-full text-sm md:text-base font-bold transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.25)] hover:-translate-y-1 w-full sm:w-auto justify-center overflow-hidden border border-gray-800"
          >
            <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-white/90" />
            </span>
          </Link>
          <Link
            href="#portfolio"
            className="group flex items-center gap-2 bg-white text-gray-900 px-8 py-3.5 md:px-10 md:py-4.5 rounded-full text-sm md:text-base font-bold hover:bg-gray-50 transition-all border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            Explore Our Work
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-600 transition-colors ml-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 flex items-center justify-center gap-4 flex-col sm:flex-row select-none"
        >
          <div className="flex -space-x-3">
             <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#FAFAFA] shadow-sm object-cover relative z-40" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client 1" />
             <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#FAFAFA] shadow-sm object-cover relative z-30" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Client 2" />
             <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#FAFAFA] shadow-sm object-cover relative z-20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Client 3" />
             <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#FAFAFA] shadow-sm object-cover relative z-10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client 4" />
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#FAFAFA] bg-white flex items-center justify-center text-xs font-bold text-gray-800 shadow-[0_4px_10px_rgba(0,0,0,0.05)] z-0 relative">
               +50
             </div>
          </div>
          <div className="text-sm md:text-base text-gray-600 font-medium text-center sm:text-left flex flex-col items-center sm:items-start pl-2">
            <div className="flex items-center gap-1 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-yellow-400 text-yellow-400 drop-shadow-sm" />
              ))}
              <span className="text-gray-900 font-bold ml-1.5">5.0</span>
            </div>
            <span>Trusted by amazing clients globally.</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative w-full mt-10 sm:mt-16 md:mt-24 pb-8 md:pb-24 overflow-hidden flex items-center min-h-[250px] sm:min-h-[400px] md:min-h-[550px]">
        
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 md:w-64 bg-gradient-to-r from-[#FAFAFA] to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 md:w-64 bg-gradient-to-l from-[#FAFAFA] to-transparent z-30 pointer-events-none" />

        <motion.div 
          className="flex gap-4 sm:gap-6 md:gap-12 px-2 sm:px-4 w-max"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="flex gap-4 sm:gap-6 md:gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity, delay: 5.0 }}
            style={{ willChange: "transform" }}
          >
          {[...portfolioCards, ...portfolioCards].map((card, index) => (
            <div key={index} className="flex items-center justify-center py-6 md:py-10">
              <motion.div
                animate={{ y: [0, index % 2 === 0 ? -15 : 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                style={{ willChange: "transform" }}
                className="w-[240px] sm:w-[400px] md:w-[600px] lg:w-[680px] shrink-0 aspect-[16/10.5] sm:aspect-[16/10] rounded-[1.5rem] sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-white/80 border border-gray-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:shadow-[0_24px_60px_rgba(0,0,0,0.06)] flex flex-col p-1.5 sm:p-2 md:p-3 relative group cursor-grab active:cursor-grabbing"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] pointer-events-none"></div>
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white w-full pointer-events-none rounded-t-[2.5rem]"></div>
                
                <div className="w-full flex-1 rounded-2xl md:rounded-[2rem] overflow-hidden relative border border-gray-100 shadow-[inset_0_2px_20px_rgba(0,0,0,0.05)] flex flex-col bg-white">
                  <BrowserBar />
                  <div className="relative w-full flex-1 bg-gray-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    <Image src={card.src} alt={card.alt} fill className="object-cover object-top transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" priority={index < 3} sizes="(max-width: 768px) 400px, 700px" />
                    
                    {/* Floating Title Label */}
                    <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
                      <div className="bg-white px-4 py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center gap-2.5 border border-gray-100">
                        <span className="relative flex h-2 w-2">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        <span className="text-xs md:text-sm font-bold text-gray-900 tracking-tight">{card.alt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
