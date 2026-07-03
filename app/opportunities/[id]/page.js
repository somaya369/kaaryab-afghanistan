"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { opportunities } from "@/data/opportunities";

import {
  FaArrowLeft,
  FaBriefcase,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaTag,
} from "react-icons/fa";


export default function OpportunityDetailsPage() {
  const params = useParams();

  const [opportunity, setOpportunity] = useState(null);


  // Load opportunity data
  useEffect(() => {
    const storedOpportunities =
      JSON.parse(localStorage.getItem("customOpportunities")) || [];


    const allOpportunities = [
      ...opportunities,
      ...storedOpportunities,
    ];


    const selectedOpportunity = allOpportunities.find(
      (item) => String(item.id) === String(params.id)
    );


    setOpportunity(selectedOpportunity);
  }, [params.id]);



  // Not found page
  if (!opportunity) {
    return (
      <main className="page-bg px-4 py-16 sm:px-6 lg:px-8">
        <div className="card-bg border-soft mx-auto max-w-3xl rounded-3xl p-10 text-center shadow-sm">

          <h1 className="text-3xl font-bold">
            Opportunity Not Found
          </h1>


          <p className="text-muted mt-4">
            The opportunity you are looking for does not exist or was removed.
          </p>


          <Link
            href="/opportunities"
            className="btn-primary mt-8 inline-block"
          >
            Back to Opportunities
          </Link>

        </div>
      </main>
    );
  }



  return (
    <main className="page-bg">


      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-16 text-white sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white"
          >
            <FaArrowLeft />
            Back
          </Link>


          <span className="mt-8 inline-block rounded-full bg-white/20 px-4 py-2 text-sm">
            {opportunity.category}
          </span>


          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold md:text-5xl">
            {opportunity.title}
          </h1>


          <p className="mt-4 text-xl text-blue-100">
            {opportunity.organization}
          </p>

        </div>

      </section>




      {/* Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_350px]">


          {/* Left */}
          <div className="space-y-8">


            {/* Description */}
            <div className="card-bg border-soft rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold">
                Description
              </h2>


              <p className="text-muted mt-4 leading-8">
                {opportunity.description}
              </p>

            </div>




            {/* Requirements */}
            <div className="card-bg border-soft rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold">
                Requirements
              </h2>


              <ul className="text-muted mt-5 space-y-3">

                {opportunity.requirements.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}

              </ul>

            </div>




            {/* Tags */}
            <div className="card-bg border-soft rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold">
                Tags
              </h2>


              <div className="mt-5 flex flex-wrap gap-3">

                {opportunity.tags.map((tag) => (

                  <span
                    key={tag}
                    className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800"
                  >
                    <FaTag className="text-blue-600" />
                    {tag}
                  </span>

                ))}

              </div>

            </div>


          </div>





          {/* Sidebar */}
          <aside className="space-y-6">


            <div className="card-bg border-soft rounded-3xl p-6 shadow-sm">

              <h2 className="text-xl font-bold">
                Information
              </h2>


              <div className="text-muted mt-6 space-y-5">

                <Info
                  icon={<FaMapMarkerAlt />}
                  title="Location"
                  value={opportunity.location}
                />


                <Info
                  icon={<FaBriefcase />}
                  title="Type"
                  value={opportunity.type}
                />


                <Info
                  icon={<FaCalendarAlt />}
                  title="Deadline"
                  value={opportunity.deadline}
                />

              </div>

            </div>




            {/* Apply */}
            <div className="card-bg border-soft rounded-3xl p-6 shadow-sm">

              <h2 className="text-xl font-bold">
                Apply Now
              </h2>


              <p className="text-muted mt-3">
                Visit the official application link.
              </p>


              <a
                href={opportunity.applyLink}
                target="_blank"
                className="btn-primary mt-6 flex items-center justify-center gap-2"
              >
                Apply

                <FaExternalLinkAlt />

              </a>

            </div>


          </aside>


        </div>

      </section>


    </main>
  );
}




function Info({ icon, title, value }) {
  return (
    <div className="flex gap-3">

      <span className="text-blue-600 dark:text-blue-400">
        {icon}
      </span>


      <div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </p>

        <p className="font-semibold">
          {value}
        </p>

      </div>

    </div>
  );
}