'use client';

import { motion } from 'framer-motion';
import { useState, MouseEvent } from 'react';
import { FaMapMarkerAlt, FaUserAstronaut } from 'react-icons/fa';
import { HiTerminal } from 'react-icons/hi';
import Image from 'next/image';

export default function About() {
  // 3D Tilt Effect Logic for the ID Card
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setRotateX(-y / 15); // Adjust sensitivity here
    setRotateY(x / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="about" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* 🌟 FIX: Section Header - Now Exactly Matches Services & Projects Style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10"
        >
          <div>
           
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
               <span className="text-gradient">Behind the Code</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-sm font-medium leading-relaxed border-l-2 border-primary/30 pl-5 py-2">
            A glimpse into my mindset, academic background, and the philosophy that drives my engineering decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-start">
          
          {/* 🌟 LEFT: 3D Holographic ID Card (Sticky on Desktop) */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-32 perspective-1000 z-20">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateX, rotateY }}
              transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.5 }}
              className="w-full max-w-sm mx-auto aspect-[3/4] rounded-[2.5rem] glass-panel p-2 relative group overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card Inner Background & Noise (Strictly Dark Theme) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#020617]/90 to-black/95 rounded-[2.3rem] -z-10" />
              <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay -z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

              {/* Glowing Orb Inside Card */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/30 blur-[80px] rounded-full group-hover:bg-primary/50 transition-colors duration-700" />
              
              <div className="p-6 h-full flex flex-col justify-between" style={{ transform: 'translateZ(40px)' }}>
                
                {/* ID Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">Developer ID</p>
                    <p className="font-mono text-primary font-bold text-sm tracking-widest">RAFY-01</p>
                  </div>
                  <FaUserAstronaut className="text-3xl text-white/30" />
                </div>

                {/* Center Image / Avatar Space */}
                <div className="w-full aspect-square rounded-full border border-white/10 p-2 relative my-6">
                  <div className="w-full h-full rounded-full overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(var(--color-primary),0.4)] transition-shadow duration-500">
                     {/* Replace with your image */}
                    <Image 
                      src="/pfle.jpeg" 
                      alt="Rafy" 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Details */}
                <div className="text-center">
                  <h3 className="text-3xl font-black text-white mb-1 uppercase tracking-wider">Rafy</h3>
                  <p className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">CSE Student</p>
                  
                
                </div>

                {/* Barcode/Tech Aesthetic */}
                <div className="mt-6 flex justify-between items-end border-t border-white/10 pt-4">
                  <div className="w-1/2 h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiIHg9IjAiIC8+PHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iMTAwJSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIiB4PSI0IiAvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIgeD0iMTAiIC8+PHJlY3Qgd2lkdGg9IjMiIGhlaWdodD0iMTAwJSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIiB4PSIxNCIgLz48cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiIHg9IjIwIiAvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay"></div>
                  <button className="text-[10px] font-black bg-white text-black px-4 py-2 rounded-full hover:scale-105 active:scale-95 transition-all duration-300">
                    DOWNLOAD CV
                  </button>
                </div>

              </div>
            </motion.div>
          </div>

          {/* 🌟 RIGHT: Scrolling Memory Nodes */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12 relative z-10">
            
            {/* Memory Node 1 */}
           <motion.div
  initial={{ opacity: 0, y: 60, scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, margin: "-120px" }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  className="relative group rounded-[2.5rem] p-[1px] bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 hover:from-primary hover:to-accent transition-all duration-500"
>
  {/* Glass Container */}
  <div className="relative backdrop-blur-2xl bg-[#020617]/60 rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)] transition-all duration-500">

    {/* Top Accent Line */}
    <div className="absolute top-0 right-12 w-40 h-[2px] bg-gradient-to-r from-primary via-secondary to-transparent rounded-full opacity-60 group-hover:opacity-100 transition duration-500" />

    <div className="flex items-start gap-6">

      {/* Number Badge */}
      <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md items-center justify-center border border-white/10 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
        <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          01
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          Academic <span className="text-gradient">Architecture</span>
        </h3>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Currently deep-diving into{" "}
          <span className="text-white font-semibold px-2 py-1 bg-white/10 rounded-md">
            Computer Science & Engineering (CSE)
          </span>
          . My academic journey fuels my passion for crafting optimized algorithms,
          mastering core data structures, and architecting scalable software systems.
        </p>
      </div>

    </div>
  </div>
</motion.div>

          {/* Memory Node 2 */}
<motion.div
  initial={{ opacity: 0, y: 60, scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, margin: "-120px" }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
  className="relative group rounded-[2.5rem] p-[1px] 
             bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 
             hover:from-primary hover:to-accent transition-all duration-500"
>
  <div className="relative backdrop-blur-2xl bg-[#020617]/60 
                  rounded-[2.5rem] p-8 md:p-12 
                  border border-white/10 
                  shadow-[0_10px_40px_rgba(0,0,0,0.4)] 
                  hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)] 
                  transition-all duration-500">

    <div className="absolute top-0 right-12 w-40 h-[2px] 
                    bg-gradient-to-r from-primary via-secondary to-transparent 
                    rounded-full opacity-60 group-hover:opacity-100 transition duration-500" />

    <div className="flex items-start gap-6">

      <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl 
                      bg-gradient-to-br from-primary/20 to-secondary/20 
                      backdrop-blur-md items-center justify-center 
                      border border-white/10 shadow-lg 
                      group-hover:scale-110 group-hover:rotate-3 
                      transition-all duration-500">
        <span className="text-2xl font-extrabold 
                         bg-gradient-to-r from-primary to-secondary 
                         bg-clip-text text-transparent">
          02
        </span>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          Leadership & Mentorship
        </h3>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
          Beyond code, I have spent{" "}
          <span className="text-white font-semibold px-2 py-1 bg-white/10 rounded-md">
            2+ years tutoring students in Dhaka
          </span>
          . This experience refined my ability to simplify complex logical systems — directly reflected in writing clean, maintainable code.
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
          <span className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-mono text-slate-300">
            Communication
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-mono text-slate-300">
            Problem Solving
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-mono text-slate-300">
            Team Leadership
          </span>
        </div>
      </div>

    </div>
  </div>
</motion.div>

           {/* Memory Node 3 */}
<motion.div
  initial={{ opacity: 0, y: 60, scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, margin: "-120px" }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
  className="relative group rounded-[2.5rem] p-[1px] 
             bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 
             hover:from-primary hover:to-accent transition-all duration-500"
>
  <div className="relative backdrop-blur-2xl bg-[#020617]/60 
                  rounded-[2.5rem] p-8 md:p-12 
                  border border-white/10 
                  shadow-[0_10px_40px_rgba(0,0,0,0.4)] 
                  hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)] 
                  transition-all duration-500">

    <div className="absolute top-0 right-12 w-40 h-[2px] 
                    bg-gradient-to-r from-primary via-secondary to-transparent 
                    rounded-full opacity-60 group-hover:opacity-100 transition duration-500" />

    <div className="flex items-start gap-6">

      <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl 
                      bg-gradient-to-br from-primary/20 to-secondary/20 
                      backdrop-blur-md items-center justify-center 
                      border border-white/10 shadow-lg 
                      group-hover:scale-110 group-hover:rotate-3 
                      transition-all duration-500">
        <span className="text-2xl font-extrabold 
                         bg-gradient-to-r from-primary to-secondary 
                         bg-clip-text text-transparent">
          03
        </span>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          Development Philosophy
        </h3>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          I believe in the intersection of{" "}
          <span className="text-white font-semibold px-2 py-1 bg-white/10 rounded-md">
            aesthetic design and robust engineering
          </span>
          . My goal is to deliver digital products that feel fast, seamless, and remarkably intuitive.
        </p>
      </div>

    </div>
  </div>
</motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}