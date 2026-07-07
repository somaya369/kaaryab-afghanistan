import Link from "next/link";
import OpportunityCard from "@/components/OpportunityCard";
import { opportunities } from "@/data/opportunities";
import {
  FaArrowRight,
  FaBriefcase,
  FaGraduationCap,
  FaHandsHelping,
  FaLaptopCode,
  FaSearch,
  FaBookmark,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import {
  MdSchool,
  MdWorkOutline,
  MdOutlineCastForEducation,
} from "react-icons/md";

export default function HomePage() {
  const featuredOpportunities = opportunities
    .filter((opportunity) => opportunity.featured)
    .slice(0, 4);

  const categories = [
    { name: "Job", icon: <FaBriefcase /> },
    { name: "Internship", icon: <MdWorkOutline /> },
    { name: "Scholarship", icon: <FaGraduationCap /> },
    { name: "Online Course", icon: <MdSchool /> },
    { name: "Remote Work", icon: <FaLaptopCode /> },
    { name: "Training Program", icon: <MdOutlineCastForEducation /> },
    { name: "Volunteer Work", icon: <FaHandsHelping /> },
  ];

  const features = [
    {
      title: "Search Easily",
      text: "Find opportunities faster using search and filters.",
      icon: <FaSearch />,
    },
    {
      title: "Save Opportunities",
      text: "Save useful opportunities and review them later.",
      icon: <FaBookmark />,
    },
    {
      title: "For Afghan Youth",
      text: "Built for students, graduates, and job seekers.",
      icon: <FaUsers />,
    },
  ];

  return (
    <main className="page-bg">
      {/* Hero Section */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="border-soft relative mx-auto grid max-w-7xl items-center gap-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 md:grid-cols-2 md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"></div>
          <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"></div>

          {/* Left content */}
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              <FaRocket />
              Opportunity Finder Platform
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Find Better Opportunities for Your Future
            </h1>

            <p className="text-muted mt-6 max-w-xl text-lg leading-8">
              KaarYab Afghanistan helps Afghan youth discover jobs,
              internships, scholarships, remote work, online courses, and
              skill-building opportunities in one place.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/opportunities"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Explore Opportunities
                <FaArrowRight />
              </Link>

              <Link href="/add-opportunity" className="btn-secondary text-center">
                Submit Opportunity
              </Link>
            </div>

            {/* Small stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <MiniStat number="7+" label="Categories" />
              <MiniStat number="8+" label="Demo Data" />
              <MiniStat number="100%" label="Responsive" />
            </div>
          </div>

          {/* Right visual card */}
          <div className="relative hidden md:block">
            <div className="card-bg border-soft rounded-[2rem] p-6 shadow-xl">
              <div className="rounded-3xl bg-blue-600 p-6 text-white">
                <p className="text-sm text-blue-100">Featured Opportunity</p>

                <h3 className="mt-4 text-2xl font-bold">
                  Frontend Developer Intern
                </h3>

                <p className="mt-3 text-blue-100">
                  Kabul Tech Community · Remote
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
                    React
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
                    Next.js
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
                    Internship
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                <HeroMiniCard icon={<FaSearch />} title="Search & Filter" />
                <HeroMiniCard icon={<FaBookmark />} title="Save Opportunities" />
                <HeroMiniCard icon={<FaBriefcase />} title="Apply Easily" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Featured"
            title="Featured Opportunities"
            text="Explore selected opportunities for jobs, internships, scholarships, and remote work."
            href="/opportunities"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Categories"
            title="Browse by Category"
            text="Choose the category that matches your goal."
            href="/opportunities"
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
            {categories.map((category) => (
              <div
                key={category.name}
                className="card-bg border-soft hover-card group rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-300">
                  {category.icon}
                </div>

                <h3 className="text-sm font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KaarYab */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="card-bg border-soft rounded-[2rem] p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
              <div>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  Why KaarYab?
                </span>

                <h2 className="mt-6 text-3xl font-bold">
                  A simple platform for real opportunity discovery
                </h2>

                <p className="text-muted mt-4 leading-7">
                  Instead of searching across many websites and social media
                  groups, users can find useful opportunities in one organized
                  place.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {features.map((feature) => (
                  <FeatureCard
                    key={feature.title}
                    title={feature.title}
                    text={feature.text}
                    icon={feature.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-center text-white shadow-lg">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Ready to find your next opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Browse available opportunities and take the next step toward your
            career and education goals.
          </p>

          <Link
            href="/opportunities"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3 font-medium text-blue-700 transition hover:bg-gray-100"
          >
            Get Started
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

function MiniStat({ number, label }) {
  return (
    <div className="card-bg border-soft rounded-2xl p-4 text-center shadow-sm">
      <h3 className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
        {number}
      </h3>
      <p className="text-muted mt-1 text-sm">{label}</p>
    </div>
  );
}

function HeroMiniCard({ icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4 dark:bg-gray-800">
      <div className="text-blue-600 dark:text-blue-400">{icon}</div>
      <p className="font-semibold">{title}</p>
    </div>
  );
}

function SectionHeader({ badge, title, text, href }) {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          {badge}
        </span>

        <h2 className="mt-5 text-3xl font-bold">{title}</h2>

        <p className="text-muted mt-3 max-w-2xl">{text}</p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        View All
        <FaArrowRight />
      </Link>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
      <div className="text-2xl text-blue-600 dark:text-blue-400">{icon}</div>
      <h3 className="mt-4 font-bold">{title}</h3>
      <p className="text-muted mt-2 text-sm leading-6">{text}</p>
    </div>
  );
}
