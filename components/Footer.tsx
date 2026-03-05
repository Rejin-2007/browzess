import Link from "next/link";
import Image from "next/image";
import {  FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.webp"
              alt="Browzess Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-semibold">Browzess</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed font-anonymous">
            Simple. Fast. Professional websites built with modern
            technologies. Clean UI. Responsive. Affordable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-300">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>
            <Link href="/projects" className="hover:text-white transition">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-300">
            Connect
          </h3>

          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <a
              href="mailto:browzess2025@gmail.com"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <FaEnvelope /> Email
            </a>

            <a
              href="https://wa.me/919947985177"
              target="_blank"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://instagram.com/browzess"
              target="_blank"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Browzess. All rights reserved.
      </div>
    </footer>
  );
}