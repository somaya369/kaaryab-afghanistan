"use client";

import Link from "next/link";
import { useSaved } from "@/context/SavedContext";
import {
  FaBookmark,
  FaRegBookmark,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaArrowRight,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

export default function OpportunityCard({ opportunity, onDelete }) {
  const { saveOpportunity, removeOpportunity, isSaved } = useSaved();

  const saved = isSaved(opportunity.id);

  return (
    <div className="card-bg border-soft hover-card group relative overflow-hidden rounded-3xl p-6 shadow-sm">
      {/* Top section: category badge and save button */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          {opportunity.category}
        </span>

        <button
          onClick={() =>
            saved
              ? removeOpportunity(opportunity.id)
              : saveOpportunity(opportunity)
          }
          aria-label="Save opportunity"
          className={`rounded-full p-2 transition ${
            saved
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-300"
          }`}
        >
          {saved ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>

      {/* Opportunity title */}
      <h3 className="mt-5 text-xl font-bold group-hover:text-blue-700 dark:group-hover:text-blue-300">
        {opportunity.title}
      </h3>

      {/* Organization name */}
      <p className="text-muted mt-2 text-sm font-medium">
        {opportunity.organization}
      </p>

      {/* Basic details */}
      <div className="text-muted mt-5 space-y-3 text-sm">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
          {opportunity.location}
        </p>

        <p className="flex items-center gap-2">
          <FaBriefcase className="text-blue-600 dark:text-blue-400" />
          {opportunity.type}
        </p>

        <p className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-600 dark:text-blue-400" />
          Deadline: {opportunity.deadline}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {opportunity.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Card action buttons */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={`/opportunities/${opportunity.id}`}
          className="inline-flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Details
          <FaArrowRight />
        </Link>

        <Link
          href={`/edit-opportunity/${opportunity.id}`}
          className="inline-flex items-center gap-2 rounded-xl bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-300 dark:hover:bg-yellow-900/40"
        >
          <FaEdit />
          Edit
        </Link>

        {onDelete && (
          <button
            onClick={() => onDelete(opportunity.id)}
            className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/40"
          >
            <FaTrash />
            Delete
          </button>
        )}
      </div>
    </div>
  );
}