// Import Link component for page navigation
import Link from "next/link";

// Import opportunities data
import { opportunities } from "@/data/opportunities";

// Dynamic details page component
// params contains the dynamic route parameter (id)
export default function OpportunityDetailsPage({ params }) {
  
  // Find the opportunity that matches the URL id
  const opportunity = opportunities.find(
    (item) => item.id === params.id
  );

  // Show this UI if no opportunity is found
  if (!opportunity) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Error title */}
        <h1 className="text-3xl font-bold text-gray-900">
          Opportunity Not Found
        </h1>

        {/* Button to return to opportunities page */}
        <Link
          href="/opportunities"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          Back to Opportunities
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      {/* Main details card */}
      <section className="mx-auto max-w-4xl rounded-3xl border bg-white p-8 shadow-sm">

        {/* Opportunity category badge */}
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          {opportunity.category}
        </span>

        {/* Opportunity title */}
        <h1 className="mt-6 text-4xl font-bold text-gray-900">
          {opportunity.title}
        </h1>

        {/* Organization name */}
        <p className="mt-3 text-lg text-gray-600">
          {opportunity.organization}
        </p>

        {/* Basic opportunity information */}
        <div className="mt-6 grid gap-4 rounded-2xl bg-gray-50 p-6 sm:grid-cols-2">
          <p>
            <strong>Location:</strong> {opportunity.location}
          </p>

          <p>
            <strong>Type:</strong> {opportunity.type}
          </p>

          <p>
            <strong>Deadline:</strong> {opportunity.deadline}
          </p>

          <p>
            <strong>Category:</strong> {opportunity.category}
          </p>
        </div>

        {/* Description section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Description
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            {opportunity.description}
          </p>
        </div>

        {/* Requirements section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Requirements
          </h2>

          {/* Display requirements list dynamically */}
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-600">
            {opportunity.requirements.map((requirement) => (
              <li key={requirement}>
                {requirement}
              </li>
            ))}
          </ul>
        </div>

        {/* Display opportunity tags dynamically */}
        <div className="mt-8 flex flex-wrap gap-2">
          {opportunity.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons section */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          {/* Apply button */}
          <a
            href={opportunity.applyLink}
            target="_blank"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-medium text-white hover:bg-blue-700"
          >
            Apply Now
          </a>

          {/* Save button (logic will be added later) */}
          <button className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50">
            Save Opportunity
          </button>

          {/* Return button */}
          <Link
            href="/opportunities"
            className="rounded-xl border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 hover:bg-gray-50"
          >
            Back to Opportunities
          </Link>
        </div>
      </section>
    </main>
  );
}