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
} from "react-icons/fa";

export default function OpportunityCard({ opportunity }) {
  const { saveOpportunity, removeOpportunity, isSaved } = useSaved();

  const saved = isSaved(opportunity.id);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
      {/* Category badge */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          {opportunity.category}
        </span>

        <button
          onClick={() =>
            saved
              ? removeOpportunity(opportunity.id)
              : saveOpportunity(opportunity)
          }
          className={`rounded-full p-2 transition ${
            saved
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          {saved ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-blue-700">
        {opportunity.title}
      </h3>

      {/* Organization */}
      <p className="mt-2 text-sm font-medium text-gray-600">
        {opportunity.organization}
      </p>

      {/* Details */}
      <div className="mt-5 space-y-3 text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-600" />
          {opportunity.location}
        </p>

        <p className="flex items-center gap-2">
          <FaBriefcase className="text-blue-600" />
          {opportunity.type}
        </p>

        <p className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-600" />
          Deadline: {opportunity.deadline}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {opportunity.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View details */}
      <Link
        href={`/opportunities/${opportunity.id}`}
        className="mt-6 inline-flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3 hover:text-blue-800"
      >
        View Details
        <FaArrowRight />
      </Link>
    </div>
  );
}