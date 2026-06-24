import OpportunityCard from "@/components/OpportunityCard";
import { opportunities } from "@/data/opportunities";

export default function OpportunitiesPage() {
  return (
    <main className="bg-gray-50">
      {/* Page Header */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Explore Opportunities
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Browse jobs, internships, scholarships, remote work, and learning
            opportunities in one place.
          </p>
        </div>
      </section>

      {/* Search and Filter UI */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">
            {/* Search input */}
            <input
              type="text"
              placeholder="Search by title..."
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 md:col-span-2"
            />

            {/* Category filter */}
            <select className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
              <option>All Categories</option>
              <option>Job</option>
              <option>Internship</option>
              <option>Scholarship</option>
              <option>Online Course</option>
              <option>Remote Work</option>
            </select>

            {/* Type filter */}
            <select className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
              <option>All Types</option>
              <option>Remote</option>
              <option>On-site</option>
            </select>
          </div>
        </div>
      </section>

      {/* Opportunity Cards */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            All Opportunities
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}