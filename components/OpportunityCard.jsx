"use client";

import Link from "next/link";
import { useSaved } from "@/context/SavedContext";

export default function OpportunityCard({ opportunity }) {
  const { saveOpportunity, removeOpportunity, isSaved } = useSaved();

  const saved = isSaved(opportunity.id);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
        {opportunity.category}
      </span>

      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {opportunity.title}
      </h3>

      <p className="mt-2 text-gray-600">{opportunity.organization}</p>

      <div className="mt-4 space-y-1 text-sm text-gray-600">
        <p>Location: {opportunity.location}</p>
        <p>Type: {opportunity.type}</p>
        <p>Deadline: {opportunity.deadline}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={`/opportunities/${opportunity.id}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          View Details
        </Link>

        <button
          onClick={() =>
            saved
              ? removeOpportunity(opportunity.id)
              : saveOpportunity(opportunity)
          }
          className={`rounded-lg border px-4 py-2 text-sm font-medium ${
            saved
              ? "border-red-300 bg-red-50 text-red-600 hover:bg-red-100"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {saved ? "Remove" : "Save"}
        </button>
      </div>
    </div>
  );
}