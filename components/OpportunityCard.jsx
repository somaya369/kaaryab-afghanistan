import Link from "next/link";

// Reusable card component for showing one opportunity
export default function OpportunityCard({ opportunity }) {
  return (
    // Opportunity card container
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      {/* Opportunity category */}
      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
        {opportunity.category}
      </span>

      {/* Opportunity title */}
      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {opportunity.title}
      </h3>

      {/* Organization name */}
      <p className="mt-2 text-gray-600">
        {opportunity.organization}
      </p>

      {/* Basic opportunity information */}
      <div className="mt-4 space-y-1 text-sm text-gray-600">
        <p>Location: {opportunity.location}</p>
        <p>Type: {opportunity.type}</p>
        <p>Deadline: {opportunity.deadline}</p>
      </div>

      {/* Link to dynamic details page */}
      <Link
        href={`/opportunities/${opportunity.id}`}
        className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white"
      >
        View Details
      </Link>
    </div>
  );
}