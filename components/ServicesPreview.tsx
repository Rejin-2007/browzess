"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Resort Website",
    description:
      "Luxury escape with nature, comfort, and serene experiences.",
    image: "/Project1/p1.webp",
  },
  {
    title: "Flim Fest Website",
    description:
      "Celebrating cinema, creativity, and global storytelling.",
    image: "/Project2/p1.webp",
  },
  {
    title: "Boating Agency Website",
    description:
      "Explore breathtaking waters and unforgettable backwater journeys.",
    image: "/Project3/p1.webp",
  },
];

export default function ServicesPreview() {
  return (
    <section className="min-h-screen flex items-center bg-linear-to-b from-white to-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold font-inter text-gray-900 mb-4">
            What We Build
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-anonymous">
            Clean, responsive, entry-level coded websites crafted with clarity,
            performance, and modern design principles.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-inter font-semibold text-gray-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-anonymous leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link
            href="/projects"
            className="inline-block px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition duration-300"
          >
            View All Projects
          </Link>
        </motion.div>

      </div>
    </section>
  );
}