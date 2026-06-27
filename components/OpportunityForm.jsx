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
  FaTags,
} from "react-icons/fa";

/* Validation schema for all required form fields */
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
});

/* Reusable text input component */
function TextInput({ label, icon, error, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <div
        className={`flex items-center rounded-2xl border bg-white px-4 shadow-sm transition focus-within:ring-4 ${
          error
            ? "border-red-400 focus-within:ring-red-100"
            : "border-gray-200 focus-within:border-blue-500 focus-within:ring-blue-100"
        }`}
      >
        <span className="mr-3 text-blue-500">{icon}</span>

        <input
          {...props}
          className="w-full bg-transparent py-4 text-gray-800 outline-none placeholder:text-gray-400"
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
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <select
        {...props}
        className={`w-full rounded-2xl border bg-white px-4 py-4 text-gray-800 shadow-sm outline-none transition focus:ring-4 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
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
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <textarea
        {...props}
        className={`w-full rounded-2xl border px-4 py-4 text-gray-800 shadow-sm outline-none transition placeholder:text-gray-400 focus:ring-4 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
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
}) {const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
} = useForm({
  resolver: zodResolver(opportunitySchema),
  defaultValues: defaultValues,
});

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl"
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
      <div className="grid gap-4 border-b bg-gray-50 p-6 sm:grid-cols-3 sm:p-8">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <FaCheckCircle className="text-xl text-blue-600" />
          <h3 className="mt-3 font-bold text-gray-900">Required Fields</h3>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Fill all required fields before submitting the opportunity.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <FaCalendarAlt className="text-xl text-blue-600" />
          <h3 className="mt-3 font-bold text-gray-900">Valid Deadline</h3>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Add a clear deadline so users know when to apply.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <FaLink className="text-xl text-blue-600" />
          <h3 className="mt-3 font-bold text-gray-900">Apply Link</h3>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Use a valid application link for users to apply safely.
          </p>
        </div>
      </div>

      {/* Form body */}
      <div className="space-y-10 p-6 sm:p-10">
        {/* Basic information section */}
        <section>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Basic Information
            </h3>
            <p className="mt-2 text-gray-600">
              Add the main details about the opportunity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <TextInput
              label="Title"
              type="text"
              placeholder="Frontend Developer Intern"
              icon={<FaBriefcase />}
              error={errors.title}
              {...register("title")}
            />

            <TextInput
              label="Organization"
              type="text"
              placeholder="Kabul Tech Community"
              icon={<FaBuilding />}
              error={errors.organization}
              {...register("organization")}
            />

            <SelectInput
              label="Category"
              error={errors.category}
              {...register("category")}
            >
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

            <TextInput
              label="Location"
              type="text"
              placeholder="Kabul / Online"
              icon={<FaMapMarkerAlt />}
              error={errors.location}
              {...register("location")}
            />

            <TextInput
              label="Deadline"
              type="date"
              icon={<FaCalendarAlt />}
              error={errors.deadline}
              {...register("deadline")}
            />
          </div>
        </section>

        {/* Opportunity details section */}
        <section>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Opportunity Details
            </h3>
            <p className="mt-2 text-gray-600">
              Explain the opportunity and list the main requirements.
            </p>
          </div>

          <div className="space-y-6">
            <TextAreaInput
              label="Description"
              rows="5"
              placeholder="Write a clear description about this opportunity..."
              error={errors.description}
              {...register("description")}
            />

            <TextAreaInput
              label="Requirements"
              rows="4"
              placeholder="React, GitHub, HTML/CSS"
              error={errors.requirements}
              {...register("requirements")}
            />
          </div>
        </section>

        {/* Application information section */}
        <section>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Application Information
            </h3>
            <p className="mt-2 text-gray-600">
              Add the application link and helpful tags.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <TextInput
              label="Apply Link"
              type="url"
              placeholder="https://example.com/apply"
              icon={<FaLink />}
              error={errors.applyLink}
              {...register("applyLink")}
            />

            <TextInput
              label="Tags"
              type="text"
              placeholder="React, Internship, Remote"
              icon={<FaTags />}
              error={errors.tags}
              {...register("tags")}
            />
          </div>
        </section>

        {/* Form actions */}
        <div className="flex flex-col gap-4 border-t pt-8 sm:flex-row">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
          >
        {isSubmitting ? "Submitting..." : submitLabel}
          </button>

          <button
            type="button"
            onClick={() => reset()}
            className="rounded-2xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:-translate-y-1 hover:bg-gray-50"
          >
            Reset Form
          </button>
        </div>
      </div>
    </form>
  );
}