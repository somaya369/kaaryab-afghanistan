import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SavedProvider } from "@/context/SavedContext";

export const metadata = {
  title: "KaarYab Afghanistan",
  description: "Opportunity Finder Platform for Afghan youth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <SavedProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SavedProvider>
      </body>
    </html>
  );
}