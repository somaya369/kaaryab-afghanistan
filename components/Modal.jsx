"use client";

// Reusable confirmation modal component
export default function Modal({ isOpen, title, message, onCancel, onConfirm }) {
  // If modal is not open, do not show anything
  if (!isOpen) return null;

  return (
    // Dark background overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      {/* Modal box */}
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
        {/* Modal title */}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

        {/* Modal message */}
        <p className="mt-3 text-gray-600">{message}</p>

        {/* Modal buttons */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-xl border border-gray-300 px-5 py-2 font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}