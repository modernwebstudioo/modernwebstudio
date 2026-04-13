import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-8 px-6 relative overflow-hidden border-t border-white/5">
      {/* Absolute Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}
      ></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 md:mb-32">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight mb-6 w-max">
              <div className="w-5 h-5 bg-white rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              <span className="text-white">ModernWeb<span className="text-gray-500">_Studio</span></span>
            </Link>
            <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed">
              We design and build bespoke digital experiences that elevate brands and captivate audiences globally.
            </p>
          </div>
          
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="font-semibold text-white tracking-wide mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><Link href="#portfolio" className="hover:text-white transition-colors flex w-max items-center">Portfolio</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors flex w-max items-center">Services</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors flex w-max items-center">Methodology</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors flex w-max items-center">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white tracking-wide mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors w-max group">Twitter <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all text-blue-400"/></a></li>
              <li><a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors w-max group">LinkedIn <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all text-blue-400"/></a></li>
              <li><a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors w-max group">Instagram <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all text-blue-400"/></a></li>
            </ul>
          </div>
        </div>

        {/* Massive Studio Typography */}
        <div className="flex justify-center w-full overflow-hidden items-center mb-8 border-b border-white/5 pb-10 select-none">
           <h1 className="text-[14vw] md:text-[15.5vw] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/[0.01]">
              MODERNWEB
           </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 gap-4 font-light">
          <p>© {new Date().getFullYear()} ModernWeb Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
