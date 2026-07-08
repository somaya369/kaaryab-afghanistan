"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";

export default function Toast({ toast }) {
  const styles = {
    success: {
      icon: <FaCheckCircle />,
      className: "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-900/40 dark:text-green-100",
    },
    error: {
      icon: <FaTimesCircle />,
      className: "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/40 dark:text-red-100",
    },
    info: {
      icon: <FaInfoCircle />,
      className: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-100",
    },
  };

  const toastStyle = styles[toast?.type] || styles.info;

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className={`fixed right-4 top-5 z-50 flex max-w-sm items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-medium shadow-lg ${toastStyle.className}`}
        >
          <span className="text-lg">{toastStyle.icon}</span>
          <span>{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
