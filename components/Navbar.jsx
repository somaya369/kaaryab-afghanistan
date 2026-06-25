"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// Navigation links data
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Opportunities", href: "/opportunities" },
   { label: "Add Opportunity", href: "/add-opportunity" },
  { label: "Saved", href: "/saved" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
 
];

// Reusable Navbar component
export default function Navbar() {
  // State for opening and closing mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      {/* Main navigation container */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Website logo */}
        <Link href="/" className="text-lg font-bold text-blue-700 sm:text-xl">
          KaarYab Afghanistan
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl text-gray-700 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="border-t px-4 py-3 md:hidden">
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-blue-700"
              >
                {link.label}
              </Link>
              
            ))}
          </div>
        </div>
      )}
    </header>
  );
}