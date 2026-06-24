import Link from "next/link";
import OpportunityCard from "@/components/OpportunityCard";
import { opportunities } from "@/data/opportunities";
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";
import { MdSchool, MdWorkOutline, MdOutlineCastForEducation } from "react-icons/md";

export default function HomePage() {
  const categories = [
    { name: "Job", icon: <FaBriefcase /> },
    { name: "Internship", icon: <MdWorkOutline /> },
    { name: "Scholarship", icon: <FaGraduationCap /> },
    { name: "Online Course", icon: <MdSchool /> },
    { name: "Remote Work", icon: <FaLaptopCode /> },
    { name: "Training Program", icon: <MdOutlineCastForEducation /> },
    { name: "Volunteer Work", icon: <FaHandsHelping /> },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm md:grid-cols-2 md:p-12">
          {/* Left Hero Content */}
          <div>
            <span className="inline-block rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700">
              Welcome to KaarYab Afghanistan
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Find Jobs and Opportunities in Afghanistan
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              Discover jobs, internships, scholarships, remote work, and
              skill-building opportunities in one place.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Opportunities
                <FaArrowRight />
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-blue-200 bg-white px-6 py-3 text-center font-medium text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Hero Image Placeholder */}
          <div className="hidden md:block">
            <div className="flex h-72 items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-inner">
              <FaBriefcase className="text-7xl text-blue-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Opportunities
            </h2>

            <Link
              href="/opportunities"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              View All Opportunities <FaArrowRight />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {opportunities.slice(0, 4).map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Browse by Category
            </h2>

            <span className="text-sm font-medium text-blue-600">
              View All Categories →
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
            {categories.map((category) => (
              <div
                key={category.name}
                className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {category.icon}
                </div>

                <h3 className="text-sm font-semibold text-gray-700 group-hover:text-blue-700">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

   
    </main>
  );
}