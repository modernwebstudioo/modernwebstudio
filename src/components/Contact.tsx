"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Loader2, Zap } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-[#050505] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}
      ></div>
      
      <div className="container mx-auto max-w-7xl relative z-10 text-white">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Copy */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide text-gray-300 mb-8 w-max">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                AVAILABLE FOR NEW PROJECTS
              </div>

              <h2 className="text-[2.75rem] sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6 sm:mb-8 leading-[1.1]">
                Let&apos;s build <br />
                something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  exceptional.
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 sm:mb-12 text-balance font-light leading-relaxed max-w-md">
                Partner with us to create a digital experience that elevates your brand and drives measurable results. No fluff, just premium execution.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/90 mb-1">Swift Response</h4>
                    <p className="text-gray-500 text-sm font-light">Expect a reply within 24 hours.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/90 mb-1">Results-Focused</h4>
                    <p className="text-gray-500 text-sm font-light">Built for high conversion rates.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 w-full mt-8 lg:mt-0"
          >
            <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Success State */}
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center py-16 gap-5 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400 font-light max-w-xs">
                    We&apos;ve received your request and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-5 sm:space-y-6 relative z-10"
                  onSubmit={handleSubmit}
                >
                  {/* Required hidden inputs for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don&apos;t fill this out: <input name="bot-field" /></label>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <label className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Name</label>
                      <input 
                        type="text"
                        name="name"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-light"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <label className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Email</label>
                      <input 
                        type="email"
                        name="email"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-light"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <label className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Project Type</label>
                      <select name="project_type" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-gray-300 outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-light appearance-none">
                        <option className="bg-gray-900">Business Website</option>
                        <option className="bg-gray-900">E-commerce Store</option>
                        <option className="bg-gray-900">Web Application</option>
                      </select>
                    </div>
                    <div className="space-y-2.5">
                      <label className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Budget Range</label>
                      <select name="budget" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-gray-300 outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-light appearance-none">
                        <option className="bg-gray-900">$5k - $10k</option>
                        <option className="bg-gray-900">$10k - $25k</option>
                        <option className="bg-gray-900">$25k+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Message</label>
                    <textarea 
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none font-light"
                      placeholder="Tell us about your goals..."
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:-translate-y-1 mt-8 overflow-hidden relative transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center gap-2">
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Project Request
                          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
