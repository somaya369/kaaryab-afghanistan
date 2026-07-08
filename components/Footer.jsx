import Link from "next/link";

import {
  FaArrowRight,
  FaBriefcase,
  FaFacebook,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaHandsHelping,
  FaLinkedin,
  FaMapMarkerAlt,
  FaRocket,
} from "react-icons/fa";
import { MdSchool, MdWorkOutline } from "react-icons/md";


// Footer navigation links data
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Add Opportunity", href: "/add-opportunity" },
  { label: "Saved", href: "/saved" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categoryLinks = [
  { label: "Jobs", icon: <FaBriefcase />, href: "/opportunities" },
  { label: "Internships", icon: <MdWorkOutline />, href: "/opportunities" },
  { label: "Scholarships", icon: <FaGraduationCap />, href: "/opportunities" },
  { label: "Online Courses", icon: <MdSchool />, href: "/opportunities" },
  { label: "Volunteer Work", icon: <FaHandsHelping />, href: "/opportunities" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: <FaFacebook /> },
  { label: "LinkedIn", href: "#", icon: <FaLinkedin /> },
  { label: "GitHub", href: "#", icon: <FaGithub /> },
  { label: "Email", href: "mailto:hello@kaaryab.af", icon: <FaEnvelope /> },
];


export default function Footer() {
  return (
    <footer className="card-bg border-t border-soft">
      {/* Main footer container */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        
        {/* Footer call to action */}
        <div className="mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white shadow-lg sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                <FaRocket />
                Opportunity Finder Platform
              </span>

              <h2 className="mt-5 text-2xl font-extrabold md:text-3xl">
                Find and share useful opportunities for Afghan youth
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-blue-100">
                Browse jobs, internships, scholarships, remote work, courses,
                and training programs in one organized platform.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-blue-700 transition hover:bg-gray-100"
              >
                Explore
                <FaArrowRight />
              </Link>

              <Link
                href="/add-opportunity"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
          {/* Brand section */}
          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold text-blue-700 dark:text-blue-400"
            >
              KaarYab Afghanistan
            </Link>

            <p className="text-muted mt-4 max-w-md leading-7">
              A clean opportunity discovery platform for students, graduates,
              job seekers, and organizations across Afghanistan.
            </p>

            <div className="mt-6 grid gap-3 text-sm">
              <FooterInfo icon={<FaMapMarkerAlt />} text="Afghanistan" />
              <FooterInfo icon={<FaEnvelope />} text="hello@kaaryab.af" />
            </div>

            {/* Social media icons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <SocialIcon key={link.label} {...link} />
              ))}
            </div>
          </div>

          {/* Quick links */}
          <FooterColumn title="Quick Links">
            {quickLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Categories */}
          <FooterColumn title="Categories">
            {categoryLinks.map((link) => (
              <FooterLink key={link.label} href={link.href} icon={link.icon}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">
              Stay Connected
            </h3>

            <p className="text-muted mt-5 leading-7">
              Have suggestions or want to share an opportunity? Contact us and
              help keep the platform useful.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Contact Us
                <FaArrowRight />
              </Link>

              <p className="text-muted text-sm">
                Demo project for learning Next.js and modern web development.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Copyright */}
      <div className="border-t border-gray-200 px-4 py-6 dark:border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} KaarYab Afghanistan. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/about" className="transition hover:text-blue-600 dark:hover:text-blue-400">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-blue-600 dark:hover:text-blue-400">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="mt-5 grid gap-3">{children}</div>
    </div>
  );
}


function FooterLink({ href, icon, children }) {
  return (
    <Link
      href={href}
      className="text-muted inline-flex items-center gap-2 transition hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400"
    >
      {icon && <span className="text-blue-600 dark:text-blue-400">{icon}</span>}
      {children}
    </Link>
  );
}


function FooterInfo({ icon, text }) {
  return (
    <p className="text-muted flex items-center gap-3">
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      {text}
    </p>
  );
}


/* Reusable social icon */
function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-xl text-gray-600 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300"
    >
      {icon}
    </a>
  );
}
