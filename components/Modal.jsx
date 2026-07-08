"use client";

import { FaExclamationTriangle } from "react-icons/fa";

// Reusable confirmation modal component
export default function Modal({
  isOpen,
  title,
  message,
  onCancel,
  onConfirm,
}) {
  // Hide modal when it is closed
  if (!isOpen) return null;

  return (
    // Modal background overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      
      {/* Modal content box */}
      <div className="card-bg border-soft w-full max-w-md rounded-3xl p-6 shadow-2xl">
        
        {/* Warning icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl text-red-600 dark:bg-red-900/30 dark:text-red-300">
          <FaExclamationTriangle />
        </div>


        {/* Modal title */}
        <h2 className="mt-5 text-2xl font-bold">
          {title}
        </h2>


        {/* Modal message */}
        <p className="text-muted mt-3 leading-7">
          {message}
        </p>


        {/* Modal buttons */}
        <div className="mt-8 flex justify-end gap-3">
          
          <button
            onClick={onCancel}
            aria-label="Cancel action"
            className="btn-secondary"
          >
            Cancel
          </button>


          <button
            onClick={onConfirm}
            aria-label="Confirm delete"
            className="rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}
