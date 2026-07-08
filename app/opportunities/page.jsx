"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import EmptyState from "@/components/EmptyState";
import Modal from "@/components/Modal";
import OpportunityCard from "@/components/OpportunityCard";
import { useToast } from "@/context/ToastContext";
import { opportunities } from "@/data/opportunities";

export default function OpportunitiesPage() {
  const visibleStep = 6;

  const [allOpportunities, setAllOpportunities] = useState(opportunities);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [type, setType] = useState("All Types");
  const [featured, setFeatured] = useState("All Opportunities");
  const [sortBy, setSortBy] = useState("Featured First");
  const [visibleCount, setVisibleCount] = useState(visibleStep);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const { showToast } = useToast();

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

  const sortOptions = [
    "Featured First",
    "Newest",
    "Deadline Soon",
    "Title A-Z",
  ];

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedOpportunities =
        JSON.parse(localStorage.getItem("customOpportunities")) || [];
      const deletedOpportunityIds =
        JSON.parse(localStorage.getItem("deletedOpportunityIds")) || [];
      const activeDemoOpportunities = opportunities.filter(
        (item) => !deletedOpportunityIds.includes(String(item.id))
      );

      setAllOpportunities([...activeDemoOpportunities, ...storedOpportunities]);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const filteredOpportunities = useMemo(() => {
    const filtered = allOpportunities.filter((opportunity) => {
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

    return [...filtered].sort((first, second) => {
      if (sortBy === "Deadline Soon") {
        return new Date(first.deadline) - new Date(second.deadline);
      }

      if (sortBy === "Title A-Z") {
        return first.title.localeCompare(second.title);
      }

      if (sortBy === "Newest") {
        return Number(second.id) - Number(first.id);
      }

      return Number(second.featured) - Number(first.featured);
    });
  }, [allOpportunities, search, category, type, featured, sortBy]);

  const visibleOpportunities = filteredOpportunities.slice(0, visibleCount);
  const hasMoreOpportunities = visibleCount < filteredOpportunities.length;

  function resetVisibleCards() {
    setVisibleCount(visibleStep);
  }

  function openDeleteModal(id) {
    setSelectedId(id);
    setIsModalOpen(true);
  }

  function handleDelete() {
    const storedOpportunities =
      JSON.parse(localStorage.getItem("customOpportunities")) || [];
    const deletedOpportunityIds =
      JSON.parse(localStorage.getItem("deletedOpportunityIds")) || [];

    const updatedOpportunities = storedOpportunities.filter(
      (item) => item.id !== selectedId
    );
    const updatedDeletedIds = deletedOpportunityIds.includes(String(selectedId))
      ? deletedOpportunityIds
      : [...deletedOpportunityIds, String(selectedId)];
    const activeDemoOpportunities = opportunities.filter(
      (item) => !updatedDeletedIds.includes(String(item.id))
    );

    localStorage.setItem(
      "customOpportunities",
      JSON.stringify(updatedOpportunities)
    );
    localStorage.setItem(
      "deletedOpportunityIds",
      JSON.stringify(updatedDeletedIds)
    );

    setAllOpportunities([...activeDemoOpportunities, ...updatedOpportunities]);
    setIsModalOpen(false);
    setSelectedId(null);
    showToast("Opportunity deleted successfully.", "info");
  }

  return (
    <>
      <main className="page-bg">
        {/* Page Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="section-bg px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-bold">Explore Opportunities</h1>

            <p className="text-muted mx-auto mt-4 max-w-2xl">
              Browse jobs, internships, scholarships, remote work, and learning
              opportunities in one place.
            </p>
          </div>
        </motion.section>

        {/* Search and Filter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="px-4 py-8 sm:px-6 lg:px-8"
        >
          <div className="card-bg border-soft mx-auto max-w-7xl rounded-2xl p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-6">
              <input
                type="text"
                placeholder="Search by title..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  resetVisibleCards();
                }}
                className="input-style md:col-span-2"
              />

              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  resetVisibleCards();
                }}
                className="input-style"
              >
                {categoryTabs.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  resetVisibleCards();
                }}
                className="input-style"
              >
                <option>All Types</option>
                <option>Remote</option>
                <option>On-site</option>
              </select>

              <select
                value={featured}
                onChange={(e) => {
                  setFeatured(e.target.value);
                  resetVisibleCards();
                }}
                className="input-style"
              >
                <option>All Opportunities</option>
                <option>Featured Only</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  resetVisibleCards();
                }}
                className="input-style"
              >
                {sortOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Category Tabs */}
            <div className="mt-6 flex flex-wrap gap-3">
              {categoryTabs.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setCategory(item);
                    resetVisibleCards();
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    category === item
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Opportunity Cards Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="px-4 pb-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">All Opportunities</h2>

              <p className="text-muted text-sm">
                {filteredOpportunities.length} results found
              </p>
            </div>

            {filteredOpportunities.length > 0 ? (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {visibleOpportunities.map((opportunity) => (
                    <OpportunityCard
                      key={opportunity.id}
                      opportunity={opportunity}
                      onDelete={openDeleteModal}
                    />
                  ))}
                </div>

                {hasMoreOpportunities && (
                  <div className="mt-10 text-center">
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() =>
                        setVisibleCount((current) => current + visibleStep)
                      }
                      className="btn-primary"
                    >
                      Load More
                    </motion.button>
                  </div>
                )}
              </>
            ) : (
              <EmptyState
                title="No opportunities found"
                text="Try a different search, category, type, featured filter, or sorting option."
                actionLabel="Add Opportunity"
                actionHref="/add-opportunity"
              />
            )}
          </div>
        </motion.section>
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
