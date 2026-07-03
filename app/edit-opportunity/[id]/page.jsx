"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import OpportunityForm from "@/components/OpportunityForm";
import { opportunities } from "@/data/opportunities";


export default function EditOpportunityPage() {
  const router = useRouter();
  const params = useParams();

  const [opportunity, setOpportunity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  // Load opportunity from default data + LocalStorage
  useEffect(() => {
    const storedOpportunities =
      JSON.parse(localStorage.getItem("customOpportunities")) || [];


    const allOpportunities = [
      ...opportunities,
      ...storedOpportunities,
    ];


    const foundOpportunity = allOpportunities.find(
      (item) => String(item.id) === String(params.id)
    );


    setOpportunity(foundOpportunity);
    setIsLoading(false);

  }, [params.id]);



  // Update opportunity
  function handleEditOpportunity(data) {
    const storedOpportunities =
      JSON.parse(localStorage.getItem("customOpportunities")) || [];


    const updatedOpportunity = {
      ...opportunity,
      ...data,

      requirements: data.requirements
        .split(",")
        .map((item) => item.trim()),

      tags: data.tags
        .split(",")
        .map((item) => item.trim()),
    };



    // Check if opportunity already exists in localStorage
    const existsInStorage = storedOpportunities.some(
      (item) => String(item.id) === String(params.id)
    );



    let updatedOpportunities;


    if (existsInStorage) {
      // Update existing custom opportunity
      updatedOpportunities = storedOpportunities.map((item) =>
        String(item.id) === String(params.id)
          ? updatedOpportunity
          : item
      );
    } else {
      // Save edited default opportunity into LocalStorage
      updatedOpportunities = [
        ...storedOpportunities,
        updatedOpportunity,
      ];
    }



    localStorage.setItem(
      "customOpportunities",
      JSON.stringify(updatedOpportunities)
    );


    alert("Opportunity updated successfully!");

    router.push("/opportunities");
  }





  // Loading UI
  if (isLoading) {
    return (
      <main className="page-bg px-4 py-16">

        <div className="mx-auto max-w-5xl">

          <div className="h-10 w-64 animate-pulse rounded bg-gray-200 dark:bg-gray-800">
          </div>

          <div className="mt-8 h-96 animate-pulse rounded-3xl bg-gray-200 dark:bg-gray-800">
          </div>

        </div>

      </main>
    );
  }




  // Not found UI
  if (!opportunity) {
    return (
      <main className="page-bg px-4 py-16">

        <div className="card-bg border-soft mx-auto max-w-4xl rounded-3xl p-8 text-center shadow-sm">

          <h1 className="text-3xl font-bold">
            Opportunity Not Found
          </h1>


          <p className="text-muted mt-3">
            This opportunity does not exist.
          </p>


          <Link
            href="/opportunities"
            className="btn-primary mt-8 inline-flex items-center gap-2"
          >
            <FaArrowLeft />

            Back to Opportunities

          </Link>

        </div>

      </main>
    );
  }






  return (
    <main className="page-bg">


      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-16 text-white sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            Edit Opportunity
          </span>


          <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">

            Update Opportunity Information

          </h1>


          <p className="mt-4 max-w-2xl text-yellow-50">

            Edit the opportunity details and save your changes.

          </p>

        </div>

      </section>





      {/* Form */}
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