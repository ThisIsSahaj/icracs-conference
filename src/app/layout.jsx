"use client";
import "./globals.css";
import Link from 'next/link';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


export default function RootLayout({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <html lang="en">
      <body>
      <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        {/* ICRACS 2024 */}
      <Image src="/pietLogo.png" height={80} width={220}></Image>
      </Link>
      
      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Menu Links */}
      <ul
        className={`flex-col sm:flex-row sm:flex space-x-0 sm:space-x-4 space-y-2 sm:space-y-0 absolute sm:relative bg-white sm:bg-transparent top-16 left-0 sm:top-0 w-full sm:w-auto items-center sm:items-center sm:space-x-4 py-4 sm:py-0 transition-all duration-200 ease-in-out ${
          isOpen ? "flex" : "hidden sm:flex"
        }`}
      >
        <li>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-blue-600 hover:text-blue-800">
            About
          </Link>
        </li>
        <li>
          <Link href="/speakers" className="text-blue-600 hover:text-blue-800">
            Speakers
          </Link>
        </li>
        <li>
          <Link href="/schedule" className="text-blue-600 hover:text-blue-800">
            Schedule
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-blue-600 hover:text-blue-800">
            Contact
          </Link>
        </li>
      </ul>

      {/* Register Button (Only visible on larger screens) */}
      <Button variant="outline" className="hidden sm:block">
        Register Now
      </Button>
    </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-blue-600 text-white py-4">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h3 className="text-xl font-bold">International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems (ICRACS)</h3>
        <p>Exploring the Future of Technology</p>
      </div>
      <div className="flex space-x-4">
        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link href="/terms" className="hover:underline">Terms of Service</Link>
      </div>
    </div>
    <div className="mt-4 text-center">
      <p>&copy; 2024 TechConf. All rights reserved.</p>
      <p className="mt-2">Developed by The Cyborgs</p>
    </div>
  </div>
</footer>
    </div>
      </body>
    </html>
  );
}
