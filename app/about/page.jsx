export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* About Header */}
      <section className="bg-blue-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            About KaarYab Afghanistan
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            KaarYab Afghanistan is an opportunity finder platform created to
            help Afghan youth discover jobs, internships, scholarships, remote
            work, and learning opportunities in one place.
          </p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Our Purpose</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Many opportunities are scattered across different websites, social
              media pages, and groups. KaarYab Afghanistan makes it easier for
              users to browse, search, filter, save, and submit opportunities.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Our mission is to provide a clean and easy-to-use platform that
              connects Afghan youth with useful career, education, and
              skill-building opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}