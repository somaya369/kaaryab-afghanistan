import Link from "next/link";

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


export default function Footer() {
  return (
    <footer className="card-bg border-t border-soft">
      {/* Main footer container */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Brand section */}
        <div>
          <h2 className="text-2xl font-bold">
            KaarYab Afghanistan
          </h2>

          <p className="text-muted mt-4 leading-7">
            A platform that helps Afghan youth discover jobs, internships,
            scholarships, remote work, and learning opportunities in one place.
          </p>


          {/* Social media icons */}
          <div className="mt-6 flex gap-4">
            <SocialIcon>
              <FaFacebook />
            </SocialIcon>

            <SocialIcon>
              <FaLinkedin />
            </SocialIcon>

            <SocialIcon>
              <FaGithub />
            </SocialIcon>

            <SocialIcon>
              <FaEnvelope />
            </SocialIcon>
          </div>
        </div>


        {/* Quick links */}
        <div>
          <h3 className="text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted transition hover:pl-2 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">
            Contact
          </h3>

          <p className="text-muted mt-5 leading-7">
            Have questions or suggestions? Feel free to contact us through the
            contact page.
          </p>

          <Link
            href="/contact"
            className="btn-primary mt-6 inline-block"
          >
            Contact Us
          </Link>
        </div>

      </div>


      {/* Copyright */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
        &copy; {new Date().getFullYear()} KaarYab Afghanistan.
        All rights reserved.
      </div>
    </footer>
  );
}


/* Reusable social icon */
function SocialIcon({ children }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-xl text-gray-600 transition hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300"
    >
      {children}
    </a>
  );
}