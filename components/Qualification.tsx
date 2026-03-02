'use client';

import { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

const qualifications = {
  education: [
    {
      id: 1,
      title: "B.Sc. in Computer Science & Engineering",
      institution: "Patuakhali Science and Technology University",
      date: "2024 - Present",
      description:
        "Currently pursuing a degree in Computer Science & Engineering, focusing on Data Structures, Algorithms, Software Engineering, and system design fundamentals. Building a strong foundation for scalable and high-performance software architecture.",
    },
    {
      id: 2,
      title: "Higher Secondary Certificate (HSC)",
      institution: "Notre Dame College",
      date: "",
      description:
        "Completed Higher Secondary education with a Science background, concentrating on Mathematics, Physics, and ICT. Developed strong analytical thinking and logical problem-solving abilities.",
    },
    {
      id: 3,
      title: "Secondary School Certificate (SSC)",
      institution: "Saint Louis High School",
      date: "",
      description:
        "Completed Secondary School education with a Science background. Built foundational knowledge in Mathematics and general sciences, shaping early interest in technology and computing.",
    },
  ],
  experience: [
    {
      id: 1,
      title: 'Full-Stack Web Developer',
      institution: 'Freelance / Personal Projects',
      date: '2024 - Present',
      description:
        'Architecting and deploying modern web applications using React, Next.js, and Node.js. Focused on writing clean, maintainable, and highly optimized code.',
    },
    {
      id: 2,
      title: 'Academic Tutor (Math & Science)',
      institution: 'Dhaka, Bangladesh',
      date: '2022 - 2024 (2+ Years)',
      description:
        'Mentored Class 9 and 10 students. This experience drastically improved my ability to break down complex logical problems into easily understandable steps.',
    },
  ],
};

export default function Qualification() {
  const [activeTab, setActiveTab] =
    useState<'education' | 'experience'>('education');

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // ✅ No transition inside variants (to avoid TS error)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
    },
  };

  return (
    <section
      id="qualification"
      ref={sectionRef}
      className="py-32 relative z-10 overflow-hidden"
    >
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10"
        >
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
              <span className="text-gradient">Qualification</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-sm font-medium leading-relaxed border-l-2 border-primary/30 pl-5 py-2">
            My academic foundation and professional timeline that shaped my engineering mindset.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {['education', 'experience'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className="relative flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-colors z-10 group"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-primary-gradient rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <span
                  className={
                    activeTab === tab
                      ? 'text-white'
                      : 'text-slate-500 group-hover:text-slate-300'
                  }
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Vertical Tracking Line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-primary-gradient origin-top"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-12"
            >
              {qualifications[activeTab].map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  transition={{ duration: 0.8 }}  // ✅ moved here
                  className="relative pl-14 md:pl-20 group"
                >
                  {/* Glowing Node */}
                  <div className="absolute left-0 md:left-1 top-2 w-10 h-10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-400 dark:border-slate-600 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-500 z-10" />
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-700" />
                  </div>

                  {/* Timeline Card */}
                  <div className="relative overflow-hidden rounded-[2.5rem] backdrop-blur-3xl bg-white/10 dark:bg-white/5 border border-white/10 p-8 md:p-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]">

                    <div
                      className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                        backgroundSize: '2rem 2rem',
                      }}
                    />

                    <div className="relative z-10">

                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary uppercase tracking-widest mb-6">
                        <FiCalendar size={12} />
                        {item.date}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>

                      <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-slate-400 dark:bg-slate-600" />
                        {item.institution}
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-medium group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                        {item.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}