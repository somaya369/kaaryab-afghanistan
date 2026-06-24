// Import Link component from Next.js for client-side navigation
import Link from "next/link";
// Array of navigation links used to generate the Navbar menu dynamically
const navLinks = [
    {label: "Home", href: "/"},
    {label: "Opportunities", href: "/opportunities"},
    {label: "Saved", href: "/saved"},
    {label: "Dashboard", href: "/dashboard"},
    {label: "About" , href: "/about"},
    {label: "Contact", href: "/contact"},
];
// Reusable Navbar component
export default function Navbar() {
    return (
        // Header element with styling for background, shadow, and border
        <header className="bg-white shadow border-b">
            {/* Navigation bar */}
            <nav className= "mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
               {/* website logo and home page link */}
                <Link href="/" className="text-xl font-bold text-blue-700">
                Kaaryab Afghanistan
                </Link>
                {/* Navigation links*/}
                <div className="hidden items-center gap-6 md:flex">
                  {/* Generate navigation links dynamically using map() */}
                    {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm font-medium text-gray-700 hover:text-blue-700"
                        >
                        {link.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
