'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaNodeJs, FaJava, FaReact, FaGithub, FaFigma, FaGitAlt } from 'react-icons/fa';
import { HiTerminal } from 'react-icons/hi';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiDaisyui,
  SiKalilinux,
  SiVercel
} from 'react-icons/si';

// Infinite Marquee Icons
const row1Icons = [FaReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiDaisyui, FaFigma];
const row2Icons = [FaNodeJs, SiExpress, SiMongodb, SiFirebase, FaJava, FaGithub, SiKalilinux];

// 3D Spheres Data
const bowlsData = [
  {
    title: 'Frontend Ecosystem',
    description: 'Building interactive, high-performance UIs and smooth animations.',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000', text: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
      { name: 'Framer', icon: SiFramer, color: '#0055FF' },
    ],
  },
  {
    title: 'Backend & Database',
    description: 'Designing scalable APIs, server logic, and secure databases.',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#888888', text: '#111111' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', text: '#111111' },
      { name: 'Java', icon: FaJava, color: '#007396' },
    ],
  },
  {
    title: 'Tools & Security',
    description: 'Version control, system security, and object-oriented programming.',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Kali Linux', icon: SiKalilinux, color: '#666666', text: '#ffffff' },
      { name: 'Vercel', icon: SiVercel, color: '#000000', text: '#ffffff' },
      { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
      { name: 'DaisyUI', icon: SiDaisyui, color: '#5A0EF8' },
    ],
  },
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBowl1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yBowl2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yBowl3 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const bowlTransforms = [yBowl1, yBowl2, yBowl3];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const card = containerRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const sphereContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
  };

  const sphereVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    float: {
      y: [0, -8, 0, 8, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <section id="tech" className="py-32 relative z-10 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-6">
              <HiTerminal className="text-primary animate-pulse" />
              <span>./load_superpowers.sh</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
              <span className="text-gradient">Tech Stack</span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm md:text-base max-w-sm font-medium leading-relaxed border-l-2 border-primary/30 pl-5 py-2">
            A comprehensive overview of my technical arsenal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 pt-10 lg:pt-0">
          {bowlsData.map((bowl, index) => (
            <motion.div
              key={index}
              style={{ y: bowlTransforms[index] }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full min-h-[400px] md:h-[480px] rounded-[2.5rem] lg:rounded-[3.5rem] glass-panel bg-[#020617]/40 p-6 md:p-10 relative flex flex-col items-center text-center overflow-hidden group border-white/5 hover:border-white/10"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                {bowl.title}
              </h3>

              <p className="text-slate-400 text-xs md:text-sm mb-6 md:mb-auto max-w-[95%] leading-relaxed">
                {bowl.description}
              </p>

              <motion.div
                variants={sphereContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-4 mt-6 md:mt-auto w-full px-2"
              >
                {bowl.skills.map((skill, sIndex) => (
                  <motion.div
                    key={sIndex}
                    variants={sphereVariants}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    animate="float"
                    style={{
                      background: `radial-gradient(130% 130% at 30% 20%, #ffffff 0%, #e5e7eb 25%, ${skill.color} 100%)`,
                      color: skill.text || '#111111',
                      boxShadow: `0 10px 25px -5px rgba(0,0,0,0.5), inset 0 4px 10px rgba(255,255,255,0.5)`
                    }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center p-2 relative overflow-hidden cursor-pointer border border-white/20"
                  >
                    <skill.icon size={22} className="mb-1 relative z-10" />
                    <span className="text-[8px] md:text-[10px] font-black uppercase">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}