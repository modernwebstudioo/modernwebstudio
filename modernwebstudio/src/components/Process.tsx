"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understanding your brand, target audience, and market positioning.",
  },
  {
    num: "02",
    title: "Strategy & Design",
    desc: "Crafting a unique, scalable visual identity and frictionless user experience.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Writing clean, performant code ensuring blazing fast load times.",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "Deployment, optimization, and advanced analytics tracking.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position dynamically for connecting line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] rounded-full bg-indigo-500/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 md:mb-28 flex flex-col items-center"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 shadow-sm backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <p className="text-xs md:text-sm font-bold text-gray-300 uppercase tracking-widest">How We Work</p>
          </motion.div>

          <h2 className="text-[2.5rem] sm:text-5xl lg:text-[4rem] font-black tracking-tighter mb-4 sm:mb-6 leading-[1.1]">
            Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Blueprint.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium text-balance px-2">
            A refined, proven methodology transforming initial concepts into powerful, scalable digital experiences.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 z-0" />
          
          {/* Animated Connecting Line on Scroll */}
          <motion.div 
            style={{ scaleX, transformOrigin: 'left', willChange: "transform" }} 
            className="hidden lg:block absolute top-[50%] left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 -translate-y-1/2 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col text-center lg:text-left bg-black border border-white/10 rounded-[2rem] p-8 md:p-10 hover:border-blue-500/30 transition-all duration-700 overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                {/* Glowing neon top accent on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative mb-8 flex flex-col lg:flex-row items-center lg:items-center justify-between">
                  {/* Floating Number */}
                  <div className="relative overflow-hidden w-full text-center lg:text-left">
                    <motion.span 
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                      className="text-6xl md:text-7xl font-black text-transparent stroke-text opacity-40 group-hover:opacity-100 group-hover:text-white/10 transition-all duration-500 block relative translate-y-0 group-hover:-translate-y-2"
                      style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.2)" }}
                    >
                      {step.num}
                    </motion.span>
                  </div>
                  
                  {/* Glowing Interactive Node */}
                  <div className="absolute left-1/2 lg:left-auto lg:right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 w-3 h-3 rounded-full bg-white/20 border-2 border-transparent group-hover:bg-blue-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.9)] transition-all duration-500 scale-0 group-hover:scale-125 hidden lg:block" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors duration-300">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
