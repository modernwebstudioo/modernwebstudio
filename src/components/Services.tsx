"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, ShoppingCart, Target, CheckCircle2, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description: "Corporate platforms designed to establish authority, build trust, and consistently generate qualified B2B leads.",
    icon: <MonitorSmartphone className="w-5 h-5 text-blue-400 group-hover:text-current transition-colors" />,
  },
  {
    title: "E-commerce Stores",
    description: "High-conversion online retail experiences prioritizing speed, seamless navigation, and frictionless checkout.",
    icon: <ShoppingCart className="w-5 h-5 text-blue-400 group-hover:text-current transition-colors" />,
  },
  {
    title: "Landing Pages",
    description: "Laser-focused funnels engineered exclusively for marketing campaigns, ad traffic, and massive product launches.",
    icon: <Target className="w-5 h-5 text-blue-400 group-hover:text-current transition-colors" />,
  },
];

const whyUs = [
  "Modern & Premium Design",
  "Lightning Fast Delivery",
  "Conversion-Optimized UX",
  "Scalable Architecture",
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-28 px-6 relative overflow-hidden bg-[#050505] min-h-[90vh] flex items-center">
      {/* Highly Optimized Backgrounds (No expensive backdrop blurs) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08)_0%,transparent_50%_)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.08)_0%,transparent_50%_)]"></div>
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Why Us */}
          <div className="lg:w-[40%] flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full mb-6 shadow-sm w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              <p className="text-[10px] md:text-[11px] font-bold text-gray-300 uppercase tracking-widest">Our Expertise</p>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tighter mb-6 text-white leading-[1.05]"
            >
              Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 pb-2 inline-block">Excellence.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="text-base md:text-lg text-gray-400 mb-10 font-medium leading-relaxed max-w-md text-balance"
            >
              We don&apos;t just build websites. We forge strategic digital assets that elevate your brand and work tirelessly for your business.
            </motion.p>
            
            <div className="space-y-4">
              {whyUs.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  style={{ willChange: "transform, opacity" }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/40 group-hover:scale-110 transition-all duration-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gray-600 group-hover:text-blue-400 transition-colors duration-500" />
                  </div>
                  <span className="font-semibold text-gray-400 group-hover:text-white transition-colors duration-500 text-sm md:text-[15px] tracking-wide">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Services Cards */}
          <div className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 auto-rows-fr">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.15), ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: "transform, opacity, box-shadow" }}
                className={`group p-6 lg:p-8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] rounded-[1.75rem] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-700 relative overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${
                  index === 2 ? "sm:col-span-2 sm:flex-row sm:items-center gap-6" : ""
                }`}
              >
                {/* Highly optimized hover glow (Radial Gradient) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className={`relative z-10 ${index === 2 ? "sm:w-[45%]" : ""}`}>
                  <div className="w-12 h-12 rounded-[0.85rem] bg-white/5 border border-white/10 shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden text-white">
                     <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                     <div className="relative z-10 drop-shadow-md">
                        {service.icon}
                     </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white tracking-tight group-hover:text-gray-100 transition-colors duration-500">{service.title}</h3>
                </div>

                <div className={`relative z-10 ${index === 2 ? "sm:w-[55%] flex flex-col justify-center" : ""}`}>
                  <p className="text-gray-500 leading-relaxed font-medium group-hover:text-gray-300 transition-colors duration-500 text-sm md:text-[15px]">
                    {service.description}
                  </p>
                  
                  {/* Subtle Learn More indicator */}
                  <div className={`mt-6 flex items-center gap-2 text-[13px] font-bold text-gray-600 group-hover:text-white transition-colors duration-500`}>
                    <span className="tracking-wide">Explore capability</span>
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/15 group-hover:text-white transition-all duration-500">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
