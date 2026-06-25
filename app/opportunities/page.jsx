"use client";

import { useState } from "react";
import OpportunityCard from "@/components/OpportunityCard";
import { opportunities } from "@/data/opportunities";

export default function OpportunitiesPage() {
  // Store search text
  const [search, setSearch] = useState("");

  // Store selected category
  const [category, setCategory] = useState("All Categories");

  // Store selected type
  const [type, setType] = useState("All Types");

  // Category tabs data
  const categoryTabs = [
    "All Categories",
    "Job",
    "Internship",
    "Scholarship",
    "Online Course",
    "Remote Work",
    "Training Program",
    "Volunteer Work",
  ];

  // Filter opportunities based on search, category, and type
  const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesSearch = opportunity.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" || opportunity.category === category;

    const matchesType = type === "All Types" || opportunity.type === type;

    return matchesSearch && matchesCategory && matchesType;
  });

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 md:col-span-2"
            />

            {/* Category filter dropdown */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              {categoryTabs.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            {/* Type filter */}
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option>All Types</option>
              <option>Remote</option>
              <option>On-site</option>
            </select>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 flex flex-wrap gap-3">
            {categoryTabs.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  category === item
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Cards */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900">
              All Opportunities
            </h2>

            <p className="text-sm text-gray-600">
              {filteredOpportunities.length} results found
            </p>
          </div>

          {filteredOpportunities.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredOpportunities.map((opportunity) => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border bg-white p-8 text-center text-gray-600">
              No opportunities found.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}