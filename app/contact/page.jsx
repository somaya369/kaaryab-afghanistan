export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      {/* Page Header */}
      <section className="bg-blue-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            Have questions, suggestions, or opportunities to share?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border bg-white p-8 shadow-sm">
          <form className="space-y-6">

            {/* Name Input */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}