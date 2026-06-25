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
    // Read existing user-created opportunities from LocalStorage
    const storedOpportunities =
      JSON.parse(localStorage.getItem("customOpportunities")) || [];

    // Create a new opportunity object with a unique id
    const newOpportunity = {
      id: Date.now().toString(),
      ...data,

      // Convert comma-separated requirements text into an array
      requirements: data.requirements.split(",").map((item) => item.trim()),

      // Convert comma-separated tags text into an array
      tags: data.tags.split(",").map((item) => item.trim()),
    };

    // Add the new opportunity to the previous saved opportunities
    const updatedOpportunities = [...storedOpportunities, newOpportunity];

    // Save the updated opportunities list back to LocalStorage
    localStorage.setItem(
      "customOpportunities",
      JSON.stringify(updatedOpportunities)
    );

    // Show success message to the user
    alert("Opportunity submitted successfully!");

    // Redirect user to the opportunities page
    router.push("/opportunities");
  }
  

  return (
    <main className="bg-gray-50">
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
          <div>
            <OpportunityForm onSubmit={handleAddOpportunity} />
          </div>

          {/* Right side: information cards */}
          <aside className="space-y-6">
            {/* Submission guidelines card */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <FaClipboardList />
              </div>

              <h2 className="mt-5 text-xl font-bold text-gray-900">
                Submission Guidelines
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Make sure the opportunity information is clear, useful, and
                safe for users before submitting it.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-600">
                <li>• Use a clear and specific title.</li>
                <li>• Add the correct category and type.</li>
                <li>• Include a valid apply link.</li>
                <li>• Write requirements in a simple way.</li>
              </ul>
            </div>

            {/* Required information card */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <FaCheckCircle />
              </div>

              <h2 className="mt-5 text-xl font-bold text-gray-900">
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
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Helpful tip card */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600">
                <FaLightbulb />
              </div>

              <h2 className="mt-5 text-xl font-bold text-gray-900">
                Helpful Tip
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                If the data is only for testing, clearly treat it as demo data
                so users understand it is not a real opportunity.
              </p>
            </div>

            {/* Safety note card */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <FaShieldAlt />
              </div>

              <h2 className="mt-5 text-xl font-bold text-gray-900">
                Safety Note
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Avoid fake or unclear opportunities. Only submit information
                that looks accurate, useful, and appropriate for the platform.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}