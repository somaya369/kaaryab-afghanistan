import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="page-bg">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
            Contact Us
          </span>

          <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
            Get in Touch
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Have questions, suggestions, or opportunities to share? We would
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact information cards */}
          <aside className="space-y-6">
            <ContactInfoCard
              icon={<FaEnvelope />}
              title="Email"
              text="Send us your questions or suggestions."
              value="contact@kaaryab.af"
            />

            <ContactInfoCard
              icon={<FaPhoneAlt />}
              title="Phone"
              text="Reach out for support or platform questions."
              value="+93 700 000 000"
            />

            <ContactInfoCard
              icon={<FaMapMarkerAlt />}
              title="Location"
              text="Focused on opportunities for Afghan youth."
              value="Afghanistan / Online"
            />
          </aside>

          {/* Contact form */}
          <div className="card-bg border-soft rounded-3xl p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">Send a Message</h2>
              <p className="text-muted mt-3">
                Fill the form below and we will review your message.
              </p>
            </div>

            <form className="space-y-6">
              {/* Name input */}
              <div>
                <label className="mb-2 block font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input-style w-full"
                />
              </div>

              {/* Email input */}
              <div>
                <label className="mb-2 block font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-style w-full"
                />
              </div>

              {/* Message input */}
              <div>
                <label className="mb-2 block font-medium">Message</label>
                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="input-style w-full"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn-primary inline-flex items-center gap-2"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Reusable contact info card */
function ContactInfoCard({ icon, title, text, value }) {
  return (
    <div className="card-bg border-soft hover-card rounded-3xl p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
        {icon}
      </div>

      <h2 className="mt-5 text-xl font-bold">{title}</h2>

      <p className="text-muted mt-2">{text}</p>

      <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">
        {value}
      </p>
    </div>
  );
}
