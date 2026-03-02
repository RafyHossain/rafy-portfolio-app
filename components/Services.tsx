'use client';

import { motion } from 'framer-motion';
import { FiLayout, FiDatabase, FiLayers, FiUsers } from 'react-icons/fi';

const services = [
  {
    id: "01",
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive web interfaces using React and Tailwind CSS. I focus on clean UI structure, smooth animations, and performance optimization.",
    icon: FiLayout,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    colSpan: "lg:col-span-7",
  },
  {
    id: "02",
    title: "Backend Development",
    description:
      "Developing secure and scalable backend systems using Node.js and Express. I design RESTful APIs and integrate databases to support full-stack applications.",
    icon: FiDatabase,
    tech: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    colSpan: "lg:col-span-5",
  },
  {
    id: "03",
    title: "Full Stack Web Applications",
    description:
      "Creating complete web solutions by connecting frontend and backend seamlessly.",
    icon: FiLayers,
    tech: ["MERN Stack", "API Integration", "Authentication", "Deployment"],
    colSpan: "lg:col-span-5",
  },
  {
    id: "04",
    title: "Technical Guidance & Mentorship",
    description:
      "With 2+ years of teaching experience, I simplify complex programming concepts.",
    icon: FiUsers,
    tech: ["Logic Building", "Problem Solving", "Data Structures", "C / Java"],
    colSpan: "lg:col-span-7",
  },
];

export default function Services() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // ✅ Removed transition from variants (to avoid TS error)
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
    },
  };

  return (
    <section id="services" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10"
        >
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
              <span className="text-gradient">My Services</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-sm font-medium leading-relaxed border-l-2 border-primary/30 pl-5 py-2">
            Delivering high-performance digital architecture through clean code and scalable systems.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              transition={{ duration: 0.8 }} // ✅ moved here
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`group relative rounded-[2.5rem] p-[1px] overflow-hidden 
                          bg-gradient-to-br from-primary/40 via-secondary/30 to-primary/40
                          hover:from-primary hover:to-secondary
                          transition-all duration-500 ${service.colSpan}`}
            >
              <div
                className="relative h-full 
                           bg-slate-950/90 dark:bg-slate-900/90
                           backdrop-blur-2xl 
                           rounded-[2.4rem] 
                           p-8 md:p-12 
                           flex flex-col justify-between 
                           overflow-hidden 
                           border border-white/10
                           transition-all duration-500
                           group-hover:-translate-y-1
                           group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
              >
                <div className="relative z-20">

                  <div className="flex justify-between items-start mb-14">
                    <span
                      className="text-5xl font-black text-transparent 
                                 bg-clip-text bg-gradient-to-r 
                                 from-primary to-secondary
                                 group-hover:scale-110 
                                 transition-all duration-500 inline-block"
                    >
                      {service.id}
                    </span>

                    <div
                      className="w-14 h-14 rounded-2xl 
                                 bg-white/5 border border-white/10 
                                 flex items-center justify-center 
                                 text-primary
                                 group-hover:scale-110 group-hover:rotate-6
                                 transition-all duration-500"
                    >
                      <service.icon size={24} />
                    </div>
                  </div>

                  <h3
                    className="text-2xl md:text-4xl font-bold 
                               text-white mb-4 tracking-tight
                               group-hover:text-primary 
                               transition-colors duration-300"
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-slate-400 
                               text-sm md:text-lg 
                               leading-relaxed mb-10 font-medium
                               group-hover:text-slate-200 
                               transition-colors"
                  >
                    {service.description}
                  </p>
                </div>

                <div
                  className="relative z-20 flex flex-wrap gap-2 pt-6 
                             border-t border-white/10"
                >
                  {service.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full 
                                 bg-white/5 border border-white/10 
                                 text-[10px] md:text-xs font-mono 
                                 text-slate-400 uppercase tracking-widest
                                 transition-all duration-300
                                 group-hover:border-primary/40 
                                 group-hover:text-white 
                                 group-hover:bg-primary/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}