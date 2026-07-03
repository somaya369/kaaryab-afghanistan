"use client";

import OpportunityCard from "@/components/OpportunityCard";
import { useSaved } from "@/context/SavedContext";

export default function SavedPage() {
  const { savedOpportunities } = useSaved();

  return (
    <main className="page-bg px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Saved Opportunities</h1>

        <p className="text-muted mt-4">
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
          <div className="card-bg border-soft mt-10 rounded-2xl p-10 text-center">
            <h2 className="text-xl font-bold">No saved opportunities yet</h2>

            <p className="text-muted mt-3">
              Save opportunities from the opportunities page and they will
              appear here.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}