"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSaved } from "@/context/SavedContext";
import { getDeadlineStatus } from "@/lib/utils";
import {
  FaBookmark,
  FaRegBookmark,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaArrowRight,
  FaTrash,
  FaEdit,
  FaStar,
} from "react-icons/fa";

export default function OpportunityCard({ opportunity, onDelete }) {
  const { saveOpportunity, removeOpportunity, isSaved } = useSaved();

  const saved = isSaved(opportunity.id);
  const deadlineStatus = getDeadlineStatus(opportunity.deadline);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="card-bg border-soft hover-card group relative overflow-hidden rounded-3xl p-6 shadow-sm"
    >
      {/* Top section: category badge and save button */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {opportunity.category}
          </span>

          {opportunity.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700 ring-1 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:ring-amber-800">
              <FaStar className="text-xs" />
              ⭐
              Featured
            </span>
          )}

          {deadlineStatus.isExpiringSoon && (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700 ring-1 ring-red-200 dark:bg-red-900/30 dark:text-red-300 dark:ring-red-800">
              🔥
              Expiring Soon
            </span>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
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
        </motion.button>
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

        <p
          className={`flex items-center gap-2 font-semibold ${
            deadlineStatus.isExpired
              ? "text-red-600 dark:text-red-400"
              : deadlineStatus.isExpiringSoon
                ? "text-orange-600 dark:text-orange-400"
                : "text-green-600 dark:text-green-400"
          }`}
        >
          <FaCalendarAlt />
          {deadlineStatus.text}
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
        <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
          <Link
            href={`/opportunities/${opportunity.id}`}
            className="inline-flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Details
            <FaArrowRight />
          </Link>
        </motion.div>

        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
          <Link
            href={`/edit-opportunity/${opportunity.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-300 dark:hover:bg-yellow-900/40"
          >
            <FaEdit />
            Edit
          </Link>
        </motion.div>

        {onDelete && (
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onDelete(opportunity.id)}
            className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/40"
          >
            <FaTrash />
            Delete
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
