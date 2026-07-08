"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function EmptyState({
  title = "No results found",
  text = "Try changing your search or filters.",
  actionLabel,
  actionHref,
}) {
  return (
    <div className="card-bg border-soft rounded-3xl p-10 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
        <FaSearch />
      </div>

      <h2 className="mt-5 text-xl font-bold">{title}</h2>

      <p className="text-muted mx-auto mt-3 max-w-md leading-7">{text}</p>

      {actionLabel && actionHref && (
        <Link href={actionHref} className="btn-primary mt-6 inline-block">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
