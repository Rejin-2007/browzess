'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
      >
        <img
          src="/herobg.webp"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base md:tex  font-anonymous  t-lg text-white/90 mb-8 tracking-wide font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome To
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bebas font-bold text-white mb-6 text-center leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          BROWZESS
        </motion.h1>

        {/* Divider Line */}
        <motion.div
          className="w-20 h-1 bg-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Description */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-white/95 font-anonymous font-mono leading-relaxed text-center max-w-2xl"
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          animate={isLoaded ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We Build Website
          <br />
          That Speaks For Your Business
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-12 px-8 py-3 bg-white text-black font-semibold font-anonymous rounded-sm hover:bg-white/90 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Animated Gradient Blob */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/20 to-transparent rounded-full blur-3xl -z-10"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default Hero;