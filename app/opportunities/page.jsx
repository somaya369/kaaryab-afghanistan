"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import OpportunityCard from "@/components/OpportunityCard";
import { opportunities } from "@/data/opportunities";

export default function OpportunitiesPage() {
  const [allOpportunities, setAllOpportunities] = useState(opportunities);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [type, setType] = useState("All Types");
  const [featured, setFeatured] = useState("All Opportunities");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedOpportunities =
        JSON.parse(localStorage.getItem("customOpportunities")) || [];

      setAllOpportunities([...opportunities, ...storedOpportunities]);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const filteredOpportunities = allOpportunities.filter((opportunity) => {
    const matchesSearch = opportunity.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" || opportunity.category === category;

    const matchesType = type === "All Types" || opportunity.type === type;

    const matchesFeatured =
      featured === "All Opportunities" || opportunity.featured;

    return matchesSearch && matchesCategory && matchesType && matchesFeatured;
  });

  function openDeleteModal(id) {
    setSelectedId(id);
    setIsModalOpen(true);
  }

  function handleDelete() {
    const storedOpportunities =
      JSON.parse(localStorage.getItem("customOpportunities")) || [];

    const updatedOpportunities = storedOpportunities.filter(
      (item) => item.id !== selectedId
    );

    localStorage.setItem(
      "customOpportunities",
      JSON.stringify(updatedOpportunities)
    );

    setAllOpportunities([...opportunities, ...updatedOpportunities]);
    setIsModalOpen(false);
    setSelectedId(null);
  }

  return (
    <>
      <main className="page-bg">
        {/* Page Header */}
        <section className="section-bg px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-bold">Explore Opportunities</h1>

            <p className="text-muted mx-auto mt-4 max-w-2xl">
              Browse jobs, internships, scholarships, remote work, and learning
              opportunities in one place.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="card-bg border-soft mx-auto max-w-7xl rounded-2xl p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-5">
              <input
                type="text"
                placeholder="Search by title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-style md:col-span-2"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input-style"
              >
                {categoryTabs.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="input-style"
              >
                <option>All Types</option>
                <option>Remote</option>
                <option>On-site</option>
              </select>

              <select
                value={featured}
                onChange={(e) => setFeatured(e.target.value)}
                className="input-style"
              >
                <option>All Opportunities</option>
                <option>Featured Only</option>
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
                      : "border-gray-300 bg-white text-gray-700 hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunity Cards Section */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">All Opportunities</h2>

              <p className="text-muted text-sm">
                {filteredOpportunities.length} results found
              </p>
            </div>

            {filteredOpportunities.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredOpportunities.map((opportunity) => (
                  <OpportunityCard
                    key={opportunity.id}
                    opportunity={opportunity}
                    onDelete={openDeleteModal}
                  />
                ))}
              </div>
            ) : (
              <div className="card-bg border-soft rounded-2xl p-8 text-center">
                <p className="text-muted">No opportunities found.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Modal
        isOpen={isModalOpen}
        title="Delete Opportunity"
        message="Are you sure you want to delete this opportunity? This action cannot be undone."
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
