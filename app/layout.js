// Import global CSS styles for the entire application
import "./globals.css";

// Import reusable Navbar component
import Navbar from "@/components/Navbar";

// Import reusable Footer component
import Footer from "@/components/Footer";

// Metadata for SEO and browser tab information
export const metadata = {
  title: "KaarYab Afghanistan",
  description: "Opportunity Finder Platform for Afghan youth",
};

// Root layout component that wraps all pages
export default function RootLayout({ children }) {
  return (
    // HTML structure with language attribute and body styling for background and text color
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* Website navigation displayed on all pages */}
        <Navbar />

        {/* Dynamic page content */}
        <main>
          {children}
        </main>

        {/* Website footer displayed on all pages */}
        <Footer />

      </body>
    </html>
  );
}