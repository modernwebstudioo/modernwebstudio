"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "NexGen SaaS Platform",
    category: "Web App • Dashboard",
    result: "Increased UX engagement by 140%",
    image: "/images/project3.webp",
  },
  {
    id: "02",
    title: "Aura E-Commerce",
    category: "Online Store • Web GL",
    result: "Achieved $50k MRR in month 1",
    image: "/images/project2.webp",
  },
  {
    id: "03",
    title: "Real Estate Vision",
    category: "Property App • UI/UX",
    result: "Winner of Awwwards Site of the Day",
    image: "/images/project4.webp",
  },
  {
    id: "04",
    title: "FinDash Analytics",
    category: "Fintech • SaaS",
    result: "Streamlined data processing by 3x",
    image: "/images/project1.webp",
  },
  {
    id: "05",
    title: "Aether Crypto Wallet",
    category: "Web3 • Mobile UI",
    result: "Top 10 Dribbble App Design 2024",
    image: "/images/project5.webp",
  },
];

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

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position for smooth parallax
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Calculate smooth parallax transforms (moves seamlessly from -15% to 15% during scroll)
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const numberY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center group/proj ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Text Context Content */}
      <div className="w-full lg:w-[35%] flex flex-col justify-center order-2 lg:order-none relative">
        
        {/* Giant Outline ID with Smooth Parallax Float */}
        {/* Adjusted responsive position: floats distinctly over the entire context block without being blocked */}
        <motion.div 
          style={{ y: numberY, willChange: "transform" }}
          className="absolute -top-[120px] right-2 lg:-top-28 lg:-left-12 z-0 select-none pointer-events-none"
        >
          <span className="block font-black text-[10rem] md:text-[14rem] leading-none text-transparent [-webkit-text-stroke:1.5px_#e5e7eb] lg:[-webkit-text-stroke:2px_#e5e7eb] group-hover/proj:[-webkit-text-stroke:1.5px_#3b82f6] lg:group-hover/proj:[-webkit-text-stroke:2px_#3b82f6] transition-colors duration-1000 ease-out opacity-40 lg:opacity-60">
            {project.id}
          </span>
        </motion.div>
        
        <div className="relative z-10 w-full">
          <p className="inline-flex items-center gap-2 text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            {project.category}
          </p>
          
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 md:mb-8 leading-[1.1] text-gray-900 group-hover/proj:text-black transition-colors relative z-10">
            {project.title}
          </h3>
          
          <p className="text-gray-500 text-lg md:text-xl font-medium mb-10 md:mb-12 text-balance leading-relaxed relative z-10">
            {project.result}
          </p>
          
          <div className="mt-auto relative z-10">
            <span className="group/btn inline-flex items-center gap-4 font-bold text-sm md:text-base text-gray-900 hover:text-blue-600 transition-all cursor-pointer outline-none">
              <span className="relative overflow-hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 group-hover/btn:bg-blue-50 border border-gray-200 transition-colors shadow-sm">
                 <ArrowRight size={18} className="absolute -translate-x-6 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-blue-600" />
                 <ArrowRight size={18} className="absolute translate-x-0 opacity-100 group-hover/btn:translate-x-6 group-hover/btn:opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </span>
              View Case Study 
            </span>
          </div>
        </div>
      </div>

      {/* Massive Cinematic Image Frame */}
      <div className="w-full lg:w-[65%] order-1 lg:order-none group/img relative aspect-[16/11] sm:aspect-[16/10] md:aspect-[16/10] rounded-[2rem] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-200/50 flex flex-col hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-shadow duration-700 z-20">
        <BrowserBar />
        <div className="relative flex-1 w-full h-full overflow-hidden bg-gray-50">
          <motion.div
            style={{ y: imageY, willChange: "transform" }}
            className="w-full h-[130%] relative -top-[15%] group-hover/img:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority={index < 2}
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
          </motion.div>
          {/* Premium soft glass overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-[#FAFAFA] relative z-10 border-t border-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Premium Section Header */}
        <div className="mb-24 md:mb-44 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-200/60 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[2.75rem] sm:text-5xl md:text-[6.5rem] lg:text-[7.5rem] font-black tracking-tighter leading-none text-gray-950">
              Selected <span className="text-transparent [-webkit-text-stroke:2px_#d1d5db]">Works.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg md:text-xl text-gray-500 max-w-sm font-medium leading-relaxed pb-3">
              A curated showcase of premium digital experiences built for industry leaders.
            </p>
          </motion.div>
        </div>

        {/* Cinematic Alternating Layout */}
        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
