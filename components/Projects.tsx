'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiTerminal } from 'react-icons/hi';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    title: 'Ramadan Calendar ',
    description: 'A Progressive Web App displaying precise Sehri and Iftar times for all 64 districts of Bangladesh with offline support.',
    image: '/project-1.jpg', // public ফোল্ডারে ছবিগুলো রাখবেন
    tech: ['React', 'PWA', 'Tailwind', 'Vite'],
    liveLink: 'https://ramadancalender.vercel.app/',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Learnify',
    description: 'An interactive learning and educational platform securely hosted on Firebase with seamless user authentication.',
    image: '/project-2.jpg',
    tech: ['React', 'Node.js', 'Firebase', 'DaisyUI'],
    liveLink: 'https://learnify-24h.web.app/',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Skill Swap',
    description: 'A dynamic local skill exchange platform connecting individuals to share, learn, and grow their abilities together.',
    image: '/project-3.jpg',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Motion'],
    liveLink: 'https://skill-swap-72e9d.web.app/',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Book Courier',
    description: 'Book Courier is a full-stack web application that streamlines book ordering, delivery tracking, and management through a secure and responsive user experience.',
    image: '/project-4.jpg',
    tech: ['React', 'Express', 'MongoDB', 'Node.js'],
    liveLink: 'https://bookcrir.web.app/',
    githubLink: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* 🌟 FIX: Section Header - Now Exactly Matches Services Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10"
        >
          <div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
              <span className="text-gradient"> Featured Projects</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-sm font-medium leading-relaxed border-l-2 border-primary/30 pl-5 py-2">
            A showcase of my recent full-stack applications, featuring progressive web apps, real-time databases, and interactive UI/UX.
          </p>
        </motion.div>

        {/* 🌟 Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet-active]:bg-primary" // Custom styling for Swiper Dots
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full py-10"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="max-w-[320px] md:max-w-md lg:max-w-lg">
                
                {/* 🌟 Project Card (Deep Graphite background, consistent with Services) */}
                <div className="group relative rounded-[2.5rem] p-[1px] overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-500 h-[550px] md:h-[600px] flex flex-col">
                  
                  <div className="relative h-full bg-[#020617]/90 backdrop-blur-2xl rounded-[2.4rem] p-6 md:p-8 flex flex-col z-10 border border-white/5 group-hover:border-white/10 transition-colors">
                    
                    {/* Subtle internal grid */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '2rem 2rem' }} />

                    {/* Project Image */}
                    <div className="relative w-full h-48 md:h-56 rounded-[1.5rem] overflow-hidden mb-8 border border-white/10 bg-[#0f172a] z-20">
                      <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                      
                      {/* Image Placeholders / Real Image */}
                      {/* <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" /> */}
                      <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-xs">Image Placeholder</div>
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 flex flex-col z-20">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 mb-6 text-sm leading-relaxed font-medium flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-8 border-t border-white/5 pt-6 group-hover:border-white/10 transition-colors">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-widest group-hover:border-white/20 group-hover:text-white transition-all duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 mt-auto">
                        <a href={project.liveLink} className="flex-1 flex justify-center items-center gap-2 py-3 rounded-2xl bg-primary-gradient text-white font-bold uppercase tracking-wider text-[10px] md:text-xs hover:scale-[1.02] transition-transform active:scale-95 shadow-[0_0_20px_rgba(var(--color-primary),0.2)]">
                          <FaExternalLinkAlt size={12} /> Live Demo
                        </a>
                        <a href={project.githubLink} className="flex-1 flex justify-center items-center gap-2 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 font-bold uppercase tracking-wider text-[10px] md:text-xs hover:bg-white/10 hover:text-white hover:border-white/20 transition-all active:scale-95">
                          <FaGithub size={14} /> Source
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}