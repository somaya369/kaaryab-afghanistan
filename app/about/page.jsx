import {
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaSearch,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="page-bg">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
            About KaarYab Afghanistan
          </span>

          <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
            Helping Afghan Youth Find Better Opportunities
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            KaarYab Afghanistan brings jobs, internships, scholarships, remote
            work, and learning opportunities into one clean and easy-to-use
            platform.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard number="7+" label="Categories" />
          <StatCard number="100%" label="Responsive" />
          <StatCard number="24/7" label="Accessible" />
          <StatCard number="1" label="Central Platform" />
        </div>
      </section>

      {/* Main content */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <AboutCard
            icon={<FaBullseye />}
            title="Our Purpose"
            text="Many opportunities are scattered across different websites, social media pages, and groups. KaarYab Afghanistan helps users browse, search, filter, save, and submit opportunities in one place."
          />

          <AboutCard
            icon={<FaLightbulb />}
            title="Our Mission"
            text="Our mission is to create a useful platform that connects Afghan youth with career, education, remote work, and skill-building opportunities."
          />

          <AboutCard
            icon={<FaUsers />}
            title="Who We Help"
            text="This platform is designed for students, fresh graduates, job seekers, women looking for remote opportunities, and organizations that want to share opportunities."
          />

          <AboutCard
            icon={<FaSearch />}
            title="Easy Discovery"
            text="Users can quickly find useful opportunities through search, filters, category tabs, saved lists, and detailed opportunity pages."
          />
        </div>
      </section>

      {/* What users can find */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="card-bg border-soft mx-auto max-w-6xl rounded-3xl p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                Platform Features
              </span>

              <h2 className="mt-6 text-3xl font-bold">
                What users can discover
              </h2>

              <p className="text-muted mt-4 leading-7">
                KaarYab Afghanistan is built to make opportunity discovery
                faster, cleaner, and more organized for users.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureItem icon={<FaBriefcase />} text="Jobs and internships" />
              <FeatureItem icon={<FaGraduationCap />} text="Scholarships" />
              <FeatureItem icon={<FaSearch />} text="Search and filters" />
              <FeatureItem icon={<FaUsers />} text="Saved opportunities" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="card-bg border-soft rounded-2xl p-6 text-center shadow-sm">
      <h3 className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
        {number}
      </h3>
      <p className="text-muted mt-2 text-sm font-medium">{label}</p>
    </div>
  );
}

function AboutCard({ icon, title, text }) {
  return (
    <div className="card-bg border-soft hover-card rounded-3xl p-8 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
        {icon}
      </div>

      <h2 className="mt-6 text-2xl font-bold">{title}</h2>

      <p className="text-muted mt-4 leading-7">{text}</p>
    </div>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
      <div className="text-xl text-blue-600 dark:text-blue-400">{icon}</div>
      <p className="mt-3 font-semibold">{text}</p>
    </div>
  );
}
