'use client';

import { motion } from 'framer-motion';
import { HiTerminal } from 'react-icons/hi';
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-8 bg-[#0f172a] border-t border-white/10 overflow-hidden">
      
      {/* 🌟 Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* 🌟 MASSIVE BACKGROUND WATERMARK */}
      <div className="absolute bottom-[-2%] md:bottom-[-4%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[22vw] md:text-[16vw] font-black text-white/[0.04] tracking-tighter leading-none whitespace-nowrap">
          R A F Y .
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* 🌟 Top Section: High-Impact CTA & Status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          
          <div className="max-w-2xl">
            {/* 🌟 FIX: Applied text-gradient to "next big idea?" for global consistency */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
              Ready to deploy your <br className="hidden md:block" />
              <span className="text-gradient">next big idea?</span>
            </h2>
            <a 
              href="mailto:hello@rafyhossain.com" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-black uppercase tracking-widest text-xs hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              <FiMail size={16} /> Let&apos;s Connect
            </a>
          </div>

          {/* Status / Location Pill */}
          <div className="flex flex-col items-start md:items-end gap-3 text-right">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 uppercase tracking-widest backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for opportunities
            </div>
            {/* 🌟 FIX: Updated Location to Real Data */}
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-widest">
              <FiMapPin size={12} /> Jonail, Natore, Bangladesh
            </div>
          </div>

        </div>

        {/* 🌟 Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* 🌟 Middle Section: Minimal Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-20">
          
          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Navigation</p>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Tech', 'Qualification', 'Projects', 'Services', 'Contact'].map(link => (
                <button key={link} className="text-left text-slate-400 hover:text-white transition-colors text-sm font-medium w-max">{link}</button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Socials</p>
            <div className="flex flex-col gap-3">
              {[
                { name: 'GitHub', icon: FiGithub },
                { name: 'LinkedIn', icon: FiLinkedin },
                { name: 'Twitter', icon: FiTwitter },
              ].map(social => (
                <a key={social.name} href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium w-max">
                  <social.icon size={16} className="group-hover:text-primary transition-colors" /> {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Back to Top */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end justify-end mt-4 md:mt-0">
             <button
                onClick={scrollToTop}
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-slate-400 hover:text-white backdrop-blur-md"
              >
                <FiArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-4">Back to top</p>
          </div>

        </div>

        {/* 🌟 Bottom Bar: Copyright & Terminal Exit */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/5 text-slate-500 text-[10px] md:text-xs font-mono uppercase tracking-widest gap-4 md:gap-0">
          <div className="flex items-center gap-2">
            
            <span>Portfolio of Rafy </span>
          </div>
          <p>© {new Date().getFullYear()} Rafy. Designed & Engineered.</p>
        </div>

      </div>
    </footer>
  );
}