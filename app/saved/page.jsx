"use client";

import OpportunityCard from "@/components/OpportunityCard";
import { useSaved } from "@/context/SavedContext";

export default function SavedPage() {
  const { savedOpportunities } = useSaved();

  return (
    <main className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Saved Opportunities
        </h1>

        <p className="mt-4 text-gray-600">
          View the opportunities you have saved for later.
        </p>

        {savedOpportunities.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border bg-white p-10 text-center text-gray-600">
            No saved opportunities yet.
          </div>
        )}
      </section>
    </main>
  );
}