'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Contact() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  };

  return (
    <section id="contact" className="py-32 relative z-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10"
        >
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
              <span className="text-gradient">Let&apos;s Connect</span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm md:text-base max-w-sm font-medium leading-relaxed border-l-2 border-primary/30 pl-5 py-2">
            Whether you have a complex SaaS idea, need a scalable backend, or just want to say hi—my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >

            <motion.div variants={itemVariants} className="flex flex-col gap-6">

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">
                    Email Address
                  </p>
                  <p className="text-white font-bold text-base md:text-lg">
                    rafyhossain56@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">
                    Current Location
                  </p>
                  <p className="text-white font-bold text-base md:text-lg">
                    Natore, Bangladesh
                  </p>
                </div>
              </div>

            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-8 border-t border-white/10 w-max">
              {[FiGithub, FiLinkedin, FiTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative p-[1px] rounded-[2.5rem] bg-white/5 hover:bg-white/10 transition-colors duration-500"
          >
            <div className="relative bg-[#020617]/90 backdrop-blur-2xl rounded-[2.4rem] p-8 md:p-10 border border-white/5">

              <form className="flex flex-col gap-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all duration-300"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all duration-300"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none"
                />

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 bg-white text-black font-bold uppercase tracking-widest text-xs px-8 py-5 rounded-2xl hover:scale-[1.02] transition-transform active:scale-95"
                >
                  Send Message <FiSend />
                </button>

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}