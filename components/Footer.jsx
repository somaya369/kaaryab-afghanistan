// Import Link component from Next.js for navigation
import Link from "next/link";
//Arry of footer links used to generate the Footer menu dynamically
const footerLinks = [
    {label: "Home", href: "/"},
    {label: "Opportunities", href: "/opportunities"},
    {label: "About", href: "/about"},
    {label: "Contact", href: "/contact"},
];
 // Reusable Footer component
export default function Footer() {
    return (
        //website footer section with styling for background, shadow, and border
        <footer className="bg-gray-50 shadow border-t">
            {/*Main footer content*/}
            <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
                {/*Branding and description section*/}
                <div>
                    <h2 className="text-lg font-bold text-blue-700">Kaaryab Afghanistan</h2>
                    <p className="mt-2 text-sm text-gray-600">
                          A platform that helps Afghan youth find jobs, internships,
            scholarships, remote work, and learning opportunities.
                    </p>
                </div>
                {/*Navigation links section*/}
                <div>
                    <h3 className=" font-semibold text-gray-900">Quick Links</h3>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        {/* Generate footer links dynamically using map() */}
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:text-blue-700">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
        
            {/*Contact information section*/}
            <div>
                <h3 className=" font-semibold text-gray-900">Contact </h3>
                <p className="mt-3 text-sm text-gray-600">
                    For messages or suggestions, please use the contact page.
                </p>
            </div>
                </div>
           
           {/* Copyright section with automatically updated current year */}
            <div className="border-t py-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Kaaryab Afghanistan. All rights reserved.
            </div>
        </footer>
    );
}
