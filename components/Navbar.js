import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-blue-600">PublicAdis</a>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/">
                  <a className="hover:text-blue-600 transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-blue-600 transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/sectors">
                  <a className="hover:text-blue-600 transition-colors">Sectors</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-blue-600 transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <a className="block hover:text-blue-600 transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="block hover:text-blue-600 transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/sectors">
                  <a className="block hover:text-blue-600 transition-colors">Sectors</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="block hover:text-blue-600 transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
