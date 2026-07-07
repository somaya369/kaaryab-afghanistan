"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaInfoCircle,
  FaLink,
  FaMapMarkerAlt,
  FaStar,
  FaTags,
} from "react-icons/fa";

/* Validation schema */
const opportunitySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  organization: z.string().min(3, "Organization name is required."),
  category: z.string().min(1, "Please select a category."),
  location: z.string().min(2, "Location is required."),
  type: z.string().min(1, "Please select a type."),
  deadline: z.string().min(1, "Deadline is required."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  requirements: z.string().min(5, "Requirements are required."),
  applyLink: z.string().url("Please enter a valid URL."),
  tags: z.string().min(2, "Tags are required."),
  featured: z.coerce.boolean().default(false),
});

/* Reusable text input component */
function TextInput({ label, icon, error, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>

      <div
        className={`flex items-center rounded-2xl border px-4 shadow-sm transition focus-within:ring-4 ${
          error
            ? "border-red-400 bg-white focus-within:ring-red-100 dark:bg-gray-800 dark:focus-within:ring-red-900/30"
            : "border-gray-200 bg-white focus-within:border-blue-500 focus-within:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:focus-within:ring-blue-900/30"
        }`}
      >
        <span className="mr-3 text-blue-500 dark:text-blue-400">{icon}</span>

        <input
          {...props}
          className="w-full bg-transparent py-4 text-gray-800 outline-none placeholder:text-gray-400 dark:text-white"
        />
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

/* Reusable select input component */
function SelectInput({ label, error, children, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>

      <select
        {...props}
        className={`w-full rounded-2xl border px-4 py-4 shadow-sm outline-none transition focus:ring-4 ${
          error
            ? "border-red-400 bg-white text-gray-800 focus:ring-red-100 dark:bg-gray-800 dark:text-white dark:focus:ring-red-900/30"
            : "border-gray-200 bg-white text-gray-800 focus:border-blue-500 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-900/30"
        }`}
      >
        {children}
      </select>

      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

/* Reusable textarea component */
function TextAreaInput({ label, error, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>

      <textarea
        {...props}
        className={`w-full rounded-2xl border px-4 py-4 shadow-sm outline-none transition placeholder:text-gray-400 focus:ring-4 ${
          error
            ? "border-red-400 bg-white text-gray-800 focus:ring-red-100 dark:bg-gray-800 dark:text-white dark:focus:ring-red-900/30"
            : "border-gray-200 bg-white text-gray-800 focus:border-blue-500 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-900/30"
        }`}
      />

      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

/* Main reusable opportunity form */
export default function OpportunityForm({
  onSubmit,
  defaultValues,
  formTitle = "Add New Opportunity",
  submitLabel = "Submit Opportunity",
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(opportunitySchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-bg border-soft overflow-hidden rounded-[2rem] shadow-xl"
    >
      {/* Form header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-6 py-10 text-white sm:px-10">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -bottom-12 left-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-2xl"></div>

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
            <FaInfoCircle />
            Opportunity Submission Form
          </span>

          <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">
            {formTitle}
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-blue-100">
            Share useful jobs, internships, scholarships, remote work, or
            learning opportunities with Afghan youth.
          </p>
        </div>
      </div>

      {/* Helpful information cards */}
      <div className="grid gap-4 border-b border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-950 sm:grid-cols-3 sm:p-8">
        <InfoCard
          icon={<FaCheckCircle />}
          title="Required Fields"
          text="Fill all required fields before submitting the opportunity."
        />

        <InfoCard
          icon={<FaCalendarAlt />}
          title="Valid Deadline"
          text="Add a clear deadline so users know when to apply."
        />

        <InfoCard
          icon={<FaLink />}
          title="Apply Link"
          text="Use a valid application link for users to apply safely."
        />
      </div>

      {/* Form body */}
      <div className="space-y-10 p-6 sm:p-10">
        {/* Basic information section */}
        <section>
          <SectionTitle
            title="Basic Information"
            text="Add the main details about the opportunity."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <TextInput label="Title" type="text" placeholder="Frontend Developer Intern" icon={<FaBriefcase />} error={errors.title} {...register("title")} />
            <TextInput label="Organization" type="text" placeholder="Kabul Tech Community" icon={<FaBuilding />} error={errors.organization} {...register("organization")} />

            <SelectInput label="Category" error={errors.category} {...register("category")}>
              <option value="">Select Category</option>
              <option>Job</option>
              <option>Internship</option>
              <option>Scholarship</option>
              <option>Online Course</option>
              <option>Remote Work</option>
              <option>Training Program</option>
              <option>Volunteer Work</option>
            </SelectInput>

            <SelectInput label="Type" error={errors.type} {...register("type")}>
              <option value="">Select Type</option>
              <option>Remote</option>
              <option>On-site</option>
            </SelectInput>

            <TextInput label="Location" type="text" placeholder="Kabul / Online" icon={<FaMapMarkerAlt />} error={errors.location} {...register("location")} />
            <TextInput label="Deadline" type="date" icon={<FaCalendarAlt />} error={errors.deadline} {...register("deadline")} />
          </div>
        </section>

        {/* Opportunity details section */}
        <section>
          <SectionTitle
            title="Opportunity Details"
            text="Explain the opportunity and list the main requirements."
          />

          <div className="space-y-6">
            <TextAreaInput label="Description" rows="5" placeholder="Write a clear description about this opportunity..." error={errors.description} {...register("description")} />
            <TextAreaInput label="Requirements" rows="4" placeholder="React, GitHub, HTML/CSS" error={errors.requirements} {...register("requirements")} />
          </div>
        </section>

        {/* Application information section */}
        <section>
          <SectionTitle
            title="Application Information"
            text="Add the application link and helpful tags."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <TextInput label="Apply Link" type="url" placeholder="https://example.com/apply" icon={<FaLink />} error={errors.applyLink} {...register("applyLink")} />
            <TextInput label="Tags" type="text" placeholder="React, Internship, Remote" icon={<FaTags />} error={errors.tags} {...register("tags")} />
          </div>
        </section>

        {/* Featured badge section */}
        <section>
          <SectionTitle
            title="Featured Badge"
            text="Mark strong opportunities so they appear in the featured section."
          />

          <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900 shadow-sm transition hover:border-amber-300 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-100">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
              {...register("featured")}
            />

            <span>
              <span className="inline-flex items-center gap-2 font-bold">
                <FaStar />
                Show Featured badge
              </span>

              <span className="mt-1 block text-sm text-amber-800 dark:text-amber-200">
                Featured opportunities are highlighted on cards and shown on the homepage.
              </span>
            </span>
          </label>
        </section>

        {/* Form actions */}
        <div className="flex flex-col gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 sm:flex-row">
          <button type="submit" disabled={isSubmitting} className="btn-primary px-8 py-4 disabled:cursor-not-allowed disabled:bg-blue-300">
            {isSubmitting ? "Submitting..." : submitLabel}
          </button>

          <button type="button" onClick={() => reset()} className="btn-secondary px-8 py-4">
            Reset Form
          </button>
        </div>
      </div>
    </form>
  );
}

/* Reusable information card */
function InfoCard({ icon, title, text }) {
  return (
    <div className="card-bg border-soft rounded-2xl p-5 shadow-sm">
      <div className="text-xl text-blue-600 dark:text-blue-400">{icon}</div>
      <h3 className="mt-3 font-bold">{title}</h3>
      <p className="text-muted mt-2 text-sm leading-6">{text}</p>
    </div>
  );
}

/* Reusable section title */
function SectionTitle({ title, text }) {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-muted mt-2">{text}</p>
    </div>
  );
}
