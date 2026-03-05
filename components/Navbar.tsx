"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/50 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-gray-700 ">
          <Image
            src="/logo.webp"
            alt="Browzess Logo"
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
          <span className="text-xl font-semibold tracking-tight">
            Browzess
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-gray-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-600 transition">
            Projects
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 text-gray-900">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-2 rounded-full bg-black text-white text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}