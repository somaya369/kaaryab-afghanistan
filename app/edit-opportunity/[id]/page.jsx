"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import OpportunityForm from "@/components/OpportunityForm";

export default function EditOpportunityPage() {
  const router = useRouter();
  const params = useParams();

  // Store selected opportunity data
  const [opportunity, setOpportunity] = useState(null);

  // Load opportunity from LocalStorage by id
  useEffect(() => {
    const storedOpportunities =
      JSON.parse(localStorage.getItem("customOpportunities")) || [];

    const foundOpportunity = storedOpportunities.find(
      (item) => item.id === params.id
    );

    setOpportunity(foundOpportunity);
  }, [params.id]);

  // Update opportunity after form submit
  function handleEditOpportunity(data) {
    const storedOpportunities =
      JSON.parse(localStorage.getItem("customOpportunities")) || [];

    const updatedOpportunities = storedOpportunities.map((item) =>
      item.id === params.id
        ? {
            ...item,
            ...data,
            requirements: data.requirements
              .split(",")
              .map((item) => item.trim()),
            tags: data.tags.split(",").map((item) => item.trim()),
          }
        : item
    );

    localStorage.setItem(
      "customOpportunities",
      JSON.stringify(updatedOpportunities)
    );

    alert("Opportunity updated successfully!");
    router.push("/opportunities");
  }

  if (!opportunity) {
    return (
      <main className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">
            Opportunity Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            Only opportunities created by the user can be edited.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50">
      {/* Page header */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            Edit Opportunity
          </span>

          <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Update Opportunity Information
          </h1>

          <p className="mt-4 max-w-2xl text-yellow-50">
            Edit the opportunity details and save the updated information.
          </p>
        </div>
      </section>

      {/* Edit form */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <OpportunityForm
            onSubmit={handleEditOpportunity}
            defaultValues={{
              ...opportunity,
              requirements: opportunity.requirements.join(", "),
              tags: opportunity.tags.join(", "),
            }}
            formTitle="Edit Opportunity"
            submitLabel="Update Opportunity"
          />
        </div>
      </section>
    </main>
  );
}