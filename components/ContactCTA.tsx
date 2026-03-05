"use client" 
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="bg-linear-to-b from-[#ECC5C0] to-[#FFD6A5] min-h-screen flex items-center justify-center px-6 md:px-16">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-inter"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Let's Build Something Exceptional
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-10 font-anonymous"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Have a project, idea, or question? Reach out and let's make it happen. We’ll help bring your vision to life with precision and style.
        </motion.p>
        <motion.a
          href="tel:+919947985177"
          className="inline-flex font-inter items-center justify-center gap-3 bg-black text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-black/75 transition duration-300 text-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <FiPhoneCall size={24} />
          Call Us
        </motion.a>
      </motion.div>
    </section>
  );
}