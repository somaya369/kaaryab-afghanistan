"use client";

import { useRouter } from "next/navigation";
import OpportunityForm from "@/components/OpportunityForm";
import {
  FaCheckCircle,
  FaClipboardList,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";

export default function AddOpportunityPage() {
  const router = useRouter();

  // This function runs after the form validation is successful
  function handleAddOpportunity(data) {
    const storedOpportunities =
      JSON.parse(localStorage.getItem("customOpportunities")) || [];

    const newOpportunity = {
      id: Date.now().toString(),
      ...data,
      requirements: data.requirements.split(",").map((item) => item.trim()),
      tags: data.tags.split(",").map((item) => item.trim()),
    };

    const updatedOpportunities = [...storedOpportunities, newOpportunity];

    localStorage.setItem(
      "customOpportunities",
      JSON.stringify(updatedOpportunities)
    );

    alert("Opportunity submitted successfully!");
    router.push("/opportunities");
  }

  return (
    <main className="page-bg">
      {/* Page hero section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
            Add Opportunity
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            Share useful opportunities with Afghan youth
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-blue-100">
            Submit jobs, internships, scholarships, remote work, training
            programs, and volunteer opportunities to help users find everything
            in one place.
          </p>
        </div>
      </section>

      {/* Main content layout */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_380px]">
          {/* Left side: reusable opportunity form */}
          <OpportunityForm onSubmit={handleAddOpportunity} />

          {/* Right side: information cards */}
          <aside className="space-y-6">
            <InfoCard
              icon={<FaClipboardList />}
              iconClass="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
              title="Submission Guidelines"
              text="Make sure the opportunity information is clear, useful, and safe for users before submitting it."
              list={[
                "Use a clear and specific title.",
                "Add the correct category and type.",
                "Include a valid apply link.",
                "Write requirements in a simple way.",
              ]}
            />

            <div className="card-bg border-soft hover-card rounded-3xl p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-300">
                <FaCheckCircle />
              </div>

              <h2 className="mt-5 text-xl font-bold">
                Required Information
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Title",
                  "Organization",
                  "Category",
                  "Location",
                  "Type",
                  "Deadline",
                  "Description",
                  "Requirements",
                  "Apply Link",
                  "Tags",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <InfoCard
              icon={<FaLightbulb />}
              iconClass="bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300"
              title="Helpful Tip"
              text="If the data is only for testing, clearly treat it as demo data so users understand it is not a real opportunity."
            />

            <InfoCard
              icon={<FaShieldAlt />}
              iconClass="bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300"
              title="Safety Note"
              text="Avoid fake or unclear opportunities. Only submit information that looks accurate, useful, and appropriate for the platform."
            />
          </aside>
        </div>
      </section>
    </main>
  );
}

/* Reusable sidebar information card */
function InfoCard({ icon, iconClass, title, text, list }) {
  return (
    <div className="card-bg border-soft hover-card rounded-3xl p-6 shadow-sm">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClass}`}
      >
        {icon}
      </div>

      <h2 className="mt-5 text-xl font-bold">{title}</h2>

      <p className="text-muted mt-3 leading-7">{text}</p>

      {list && (
        <ul className="text-muted mt-5 space-y-3 text-sm">
          {list.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}