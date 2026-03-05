"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutIntro() {
    return (
        <section className="relative min-h-screen flex items-center bg-linear-to-br from-white via-gray-50 to-gray-100 overflow-hidden px-6">

            {/* Animated Background Huge Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <h1 className="text-[70px] sm:text-[100px] font-inter md:text-[180px] lg:text-[220px] font-bold text-black/5 tracking-widest select-none text-center">
                    BROWZESS
                </h1>
            </motion.div>

            <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center py-20">

                {/* Left Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100"
                    >
                        <Image
                            src="/logo.webp"
                            alt="Browzess Logo"
                            width={350}
                            height={350}
                            className="object-contain w-55 sm:w-65 md:w-[320px] lg:w-87.5 h-auto"
                            priority
                        />
                    </motion.div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-sm bg-white/70 p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                >
                    <h2 className="text-3xl sm:text-4xl font-inter md:text-5xl font-semibold mb-6 leading-tight text-gray-800">
                        Crafting Clean <br className="hidden sm:block" /> Digital Experiences.
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 font-anonymous leading-relaxed">
                        Browzess builds modern, responsive, and entry-level coded websites
                        designed for clarity and performance.
                        We focus on simplicity, speed, and affordability — delivering
                        professional web presence for students, startups, and small businesses.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}