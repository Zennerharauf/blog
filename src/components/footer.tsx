import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#363b56] text-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg text-center font-semibold">FD-Blog</h2>
            <p className="text-sm text-gray-400">
            Full-Stack Web-Developer
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#090c1b]"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#090c1b]"
            >
              LinkedIn
            </Link>
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#090c1b]"
            >
              Vercel
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Zennerha Rauf. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
