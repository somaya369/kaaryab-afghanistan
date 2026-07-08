import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SavedProvider } from "@/context/SavedContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastContext";

export const metadata = {
  title: "KaarYab Afghanistan",
  description: "Opportunity Finder Platform for Afghan youth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        {/* Global providers for theme and saved opportunities */}
        <ThemeProvider>
          <ToastProvider>
            <SavedProvider>
              {/* Navbar appears on all pages */}
              <Navbar />

              {/* Dynamic page content */}
              <main>{children}</main>

              {/* Footer appears on all pages */}
              <Footer />
            </SavedProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
