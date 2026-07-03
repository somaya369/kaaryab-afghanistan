"use client";
import DashboardCard from "@/components/DashboardCard";
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

  const totalOpportunities = allOpportunities.length;
  const totalJobs = allOpportunities.filter((item) => item.category === "Job").length;
  const totalScholarships = allOpportunities.filter((item) => item.category === "Scholarship").length;
  const totalInternships = allOpportunities.filter((item) => item.category === "Internship").length;
  const totalRemote = allOpportunities.filter((item) => item.type === "Remote").length;
  const recentSubmissions = allOpportunities.slice(-5).reverse();

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
      <main className="page-bg px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="h-10 w-64 animate-pulse rounded bg-gray-200 dark:bg-gray-800"></div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-28 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800"
              ></div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page-bg px-4 py-16">
        <div className="card-bg border-soft mx-auto max-w-3xl rounded-3xl p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-red-600">Error</h1>
          <p className="text-muted mt-4">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-bg">
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
          <DashboardCard title="Total Opportunities" value={totalOpportunities} icon={<FaClipboardList />} />
          <DashboardCard title="Jobs" value={totalJobs} icon={<FaBriefcase />} />
          <DashboardCard title="Scholarships" value={totalScholarships} icon={<FaGraduationCap />} />
          <DashboardCard title="Internships" value={totalInternships} icon={<FaRocket />} />
          <DashboardCard title="Remote Opportunities" value={totalRemote} icon={<FaLaptopHouse />} />
          <DashboardCard title="Recent Submissions" value={recentSubmissions.length} icon={<FaClock />} />
        </div>
      </section>

      {/* Chart section */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="card-bg border-soft mx-auto max-w-7xl rounded-3xl p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">
            Opportunities by Category
          </h2>

          <p className="text-muted mt-2">
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
        <div className="card-bg border-soft mx-auto max-w-7xl rounded-3xl p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">
            Recent Opportunities
          </h2>

          {recentSubmissions.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-bold">
                No recent submissions yet
              </h3>

              <p className="text-muted mt-3">
                Add a new opportunity to see recent submissions here.
              </p>
            </div>
          ) : (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-gray-200 text-left text-gray-500 dark:border-gray-800 dark:text-gray-400">
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
                      className="border-b border-gray-200 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
                    >
                      <td className="py-5 font-medium">{item.title}</td>
                      <td className="text-muted py-5">{item.category}</td>
                      <td className="text-muted py-5">{item.location}</td>
                      <td className="text-muted py-5">{item.type}</td>
                      <td className="text-muted py-5">{item.deadline}</td>
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

