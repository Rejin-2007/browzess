"use client";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FiSearch } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Subtle premium glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-white/5 blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Built Different.
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Browzess is a solo developer initiative focused on building
            modern, fast, and clean websites — coded properly from scratch.
            No fake team. No templates. Just real work.
          </p>
        </motion.div>

        {/* Who + Why */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              Who’s Behind Browzess?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              I'm an independent developer passionate about clean UI and
              performance-focused websites. Browzess exists to help individuals
              and small businesses launch a strong digital presence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              Why It Started
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Many entry-level websites look generic and feel slow. Browzess
              was started to deliver affordable, coded websites that feel
              premium and load fast.
            </p>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl font-semibold text-center mb-12">
            Tech Stack
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="border border-white/10 bg-white/5 rounded-2xl p-8 text-center hover:border-white/20 hover:bg-white/10 transition">
              <SiNextdotjs size={28} className="mx-auto mb-4" />
              <p className="font-medium">Next.js</p>
            </div>

            <div className="border border-white/10 bg-white/5 rounded-2xl p-8 text-center hover:border-white/20 hover:bg-white/10 transition">
              <FaReact size={28} className="mx-auto mb-4 text-blue-400" />
              <p className="font-medium">React</p>
            </div>

            <div className="border border-white/10 bg-white/5 rounded-2xl p-8 text-center hover:border-white/20 hover:bg-white/10 transition">
              <SiTailwindcss size={28} className="mx-auto mb-4 text-sky-400" />
              <p className="font-medium">Tailwind CSS</p>
            </div>

            <div className="border border-white/10 bg-white/5 rounded-2xl p-8 text-center hover:border-white/20 hover:bg-white/10 transition">
              <FiSearch size={28} className="mx-auto mb-4" />
              <p className="font-medium">Basic SEO</p>
            </div>

          </div>
        </motion.div>

        {/* Focus */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-10">
            What I Focus On
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-sm">
              Clean UI
            </span>
            <span className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-sm">
              Fully Responsive
            </span>
            <span className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-sm">
              Affordable
            </span>
            <span className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-sm">
              Pure Coded Websites
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}