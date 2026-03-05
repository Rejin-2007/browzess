"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="text-white py-28 px-6 pt-40">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 font-inter"
        >
          Let’s Build Something Great
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-neutral-400 text-lg max-w-xl mx-auto mb-12 font-anonymous"
        >
          Have a project in mind or want to create a powerful digital presence?
          Let’s collaborate and build something impactful together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          
          <a
            href="tel:9947985177"
            className="px-8 py-4 border border-white/20 rounded-full text-sm font-inter hover:bg-white hover:text-black transition"
          >
            Call Us
          </a>

          <a
            href="mailto:browzess2025@gmail.com"
            className="px-8 py-4 border border-white/20 rounded-full text-sm font-inter hover:bg-white hover:text-black transition"
          >
            Mail Us
          </a>

          <a
            href="https://instagram.com/browzess"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 rounded-full text-sm font-inter hover:bg-white hover:text-black transition"
          >
            Instagram
          </a>

        </motion.div>

      </div>
    </section>
  );
}