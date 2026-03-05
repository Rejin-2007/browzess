"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // ✅ Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full relative">

      {/* Image */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, { offset }) => {
          if (offset.x < -80) next();
          if (offset.x > 80) prev();
        }}
        className="overflow-hidden rounded-2xl border border-white/10"
      >
        <Image
          src={images[index]}
          alt="project image"
          width={900}
          height={600}
          className="w-full h-87.5 md:h-112.5 object-cover"
        />
      </motion.div>

      {/* Laptop Buttons */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md border border-white/20 w-10 h-10 rounded-full items-center justify-center hover:bg-black"
      >
        ←
      </button>

      <button
        onClick={next}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md border border-white/20 w-10 h-10 rounded-full items-center justify-center hover:bg-black"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}