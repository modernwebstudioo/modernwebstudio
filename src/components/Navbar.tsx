"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full transition-all duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "pt-4 px-4 sm:px-6" : "pt-6 md:pt-8 px-0"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] relative w-full ${
            scrolled 
              ? "max-w-4xl bg-white/70 backdrop-blur-2xl border border-white border-b-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-5 py-3 md:px-6" 
              : "container mx-auto px-6 md:px-12 py-2"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 z-50 relative">
            <span className={`font-black tracking-tighter flex items-center transition-all duration-500 ${scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-[1.35rem]'} text-gray-900`}>
              ModernWeb
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 font-bold ml-0.5 tracking-tight group-hover:opacity-80 transition-opacity">Studio.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-semibold tracking-wide text-gray-500 hover:text-black hover:bg-gray-100/80 px-4 py-2 rounded-full transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="pl-4">
              <Link
                href="#contact"
                className="group relative flex items-center justify-center bg-gray-900 text-white px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-black transition-all shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                <span className="relative z-10">Start Project</span>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 p-2 rounded-full hover:bg-gray-100 transition-colors bg-white/50 backdrop-blur-sm border border-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              initial={false}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {mobileMenuOpen ? <X size={20} className="text-gray-900" /> : <Menu size={20} className="text-gray-900" />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl shadow-2xl border border-white/60 rounded-3xl z-[100] md:hidden overflow-hidden origin-top"
            >
              <div className="p-6 flex flex-col space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xl font-black text-gray-900 py-3.5 px-4 rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="pt-4 pb-2"
                >
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block bg-black text-white px-6 py-4 rounded-2xl text-center text-lg font-bold shadow-lg hover:shadow-xl transition-all w-full relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                    <span className="relative z-10">Start Project</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
