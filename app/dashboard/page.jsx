"use client";

import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopHouse,
  FaClipboardList,
  FaClock,
  FaRocket,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { opportunities } from "@/data/opportunities";

export default function DashboardPage() {
  const [allOpportunities, setAllOpportunities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Load opportunities from mock data and LocalStorage
  useEffect(() => {
    try {
      const storedOpportunities =
        JSON.parse(localStorage.getItem("customOpportunities")) || [];

      setAllOpportunities([...opportunities, ...storedOpportunities]);
      setIsLoading(false);
    } catch {
      setError("Something went wrong while loading dashboard data.");
      setIsLoading(false);
    }
  }, []);

  // Dashboard statistics
  const totalOpportunities = allOpportunities.length;
  const totalJobs = allOpportunities.filter((item) => item.category === "Job").length;
  const totalScholarships = allOpportunities.filter((item) => item.category === "Scholarship").length;
  const totalInternships = allOpportunities.filter((item) => item.category === "Internship").length;
  const totalRemote = allOpportunities.filter((item) => item.type === "Remote").length;
  const recentSubmissions = allOpportunities.slice(-5).reverse();

  // Chart data
  const chartData = [
    { name: "Jobs", total: totalJobs },
    { name: "Internships", total: totalInternships },
    { name: "Scholarships", total: totalScholarships },
    {
      name: "Online",
      total: allOpportunities.filter((item) => item.category === "Online Course").length,
    },
    {
      name: "Remote",
      total: allOpportunities.filter((item) => item.category === "Remote Work").length,
    },
    {
      name: "Training",
      total: allOpportunities.filter((item) => item.category === "Training Program").length,
    },
    {
      name: "Volunteer",
      total: allOpportunities.filter((item) => item.category === "Volunteer Work").length,
    },
  ];

  if (isLoading) {
    return (
      <main className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="h-10 w-64 animate-pulse rounded bg-gray-200"></div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-28 animate-pulse rounded-2xl bg-gray-200"
              ></div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-red-600">Error</h1>
          <p className="mt-4 text-gray-600">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50">
      {/* Dashboard hero section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            Dashboard
          </span>

          <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Opportunities Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100">
            Monitor opportunities, statistics, charts, and recent submissions.
          </p>
        </div>
      </section>

      {/* Statistics cards */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <DashboardCard
            title="Total Opportunities"
            value={totalOpportunities}
            icon={<FaClipboardList />}
          />

          <DashboardCard title="Jobs" value={totalJobs} icon={<FaBriefcase />} />

          <DashboardCard
            title="Scholarships"
            value={totalScholarships}
            icon={<FaGraduationCap />}
          />

          <DashboardCard
            title="Internships"
            value={totalInternships}
            icon={<FaRocket />}
          />

          <DashboardCard
            title="Remote Opportunities"
            value={totalRemote}
            icon={<FaLaptopHouse />}
          />

          <DashboardCard
            title="Recent Submissions"
            value={recentSubmissions.length}
            icon={<FaClock />}
          />
        </div>
      </section>

      {/* Chart section */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Opportunities by Category
          </h2>

          <p className="mt-2 text-gray-600">
            This chart shows the number of opportunities in each category.
          </p>

          <div className="mt-8 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#2563eb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Recent opportunities table */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Recent Opportunities
          </h2>

          {recentSubmissions.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed bg-gray-50 p-10 text-center">
              <h3 className="text-xl font-bold text-gray-900">
                No recent submissions yet
              </h3>

              <p className="mt-3 text-gray-600">
                Add a new opportunity to see recent submissions here.
              </p>
            </div>
          ) : (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b text-left text-gray-500">
                    <th className="pb-4">Title</th>
                    <th className="pb-4">Category</th>
                    <th className="pb-4">Location</th>
                    <th className="pb-4">Type</th>
                    <th className="pb-4">Deadline</th>
                  </tr>
                </thead>

                <tbody>
                  {recentSubmissions.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b transition hover:bg-gray-50"
                    >
                      <td className="py-5 font-medium text-gray-900">
                        {item.title}
                      </td>
                      <td className="py-5 text-gray-600">{item.category}</td>
                      <td className="py-5 text-gray-600">{item.location}</td>
                      <td className="py-5 text-gray-600">{item.type}</td>
                      <td className="py-5 text-gray-600">{item.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* Reusable short dashboard card */
function DashboardCard({ title, value, icon }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="h-1 bg-blue-600"></div>

      <div className="flex items-center justify-between p-5">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">{value}</h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
          {icon}
        </div>
      </div>
    </div>
  );
}