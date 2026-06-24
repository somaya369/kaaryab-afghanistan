// Import Link component for navigation
import Link from "next/link";

// Import icons
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

// Footer navigation links data
const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Reusable Footer component
export default function Footer() {
  return (
    // Footer section
    <footer className="bg-slate-900 text-gray-300">
      {/* Main footer container */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {/* Brand section */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            KaarYab Afghanistan
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            A platform that helps Afghan youth discover jobs, internships,
            scholarships, remote work, and learning opportunities in one place.
          </p>

          {/* Social media icons */}
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="text-2xl transition hover:text-blue-400"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="text-2xl transition hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="text-2xl transition hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="text-2xl transition hover:text-blue-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick links section */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:pl-2 hover:text-blue-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact section */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Contact
          </h3>

          <p className="mt-5 leading-7 text-gray-400">
            Have questions or suggestions? Feel free to contact us through the
            contact page.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-t border-slate-800 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} KaarYab Afghanistan.
        All rights reserved.
      </div>
    </footer>
  );
}