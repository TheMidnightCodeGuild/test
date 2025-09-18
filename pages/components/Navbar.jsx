import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.fromTo(
        mobileNavRef.current,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(mobileNavRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav
        className="bg-[#FFBF00] py-2 border-4 border-white"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-24">
            <Link href="/" className="flex items-center" aria-label="Home">
              <Image
                src="/images/logo.png"
                alt="Best Car Rental Service in india"
                width={130}
                height={40}
                className="h-12 w-auto sm:h-28"
                priority
              />
              {/* <h1>your logo</h1> */}
            </Link>
            <h1 className="text-yellow-900 hover:text-white px-3 py-2 text-lg md:text-4xl font-bold relative group transition-colors duration-300 tracking-wide">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-800 to-yellow-950">
                {" "}
                Indore Prime Tour{" "}
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h1>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center space-x-8"
              role="navigation"
              aria-label="Desktop menu"
            >
              <Link
                href="/"
                className="text-yellow-900 hover:text-white px-3 py-2 text-sm font-semibold relative group"
                aria-label="Home page"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>

              <Link
                href="/components/About-us"
                className="text-yellow-900 hover:text-white px-3 py-2 text-sm font-semibold relative group"
                aria-label="About us page"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>

              <Link
                href="/components/Our-cars"
                className="text-yellow-900 hover:text-white px-3 py-2 text-sm font-semibold relative group"
                aria-label="Our cars page"
              >
                Our Cars
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link
                href="/components/Blogs"
                className="text-yellow-900 hover:text-white px-3 py-2 text-sm font-semibold relative group"
                aria-label="Blog posts"
              >
                Blogs
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>

              <Link
                href="/components/Contact-us"
                className="bg-white border text-yellow-900 hover:bg-yellow-50 px-4 py-2 rounded-lg text-sm font-semibold transition duration-150 ease-in-out shadow-sm hover:shadow-md"
                aria-label="Contact us page"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-yellow-900 hover:bg-yellow-100"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle mobile menu"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          ref={mobileNavRef}
          className="fixed inset-0 md:hidden bg-yellow-50 z-50 transform translate-x-full transition-transform duration-300 ease-in-out"
          role="navigation"
          aria-label="Mobile menu"
        >
          <div className="pt-5 pb-6 px-4">
            <div className="flex items-center justify-between mb-6">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Home"
              >
                <Image
                  src="/images/logo.png"
                  alt="Best Car Rental Service in india"
                  width={120}
                  height={35}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-yellow-900 hover:bg-yellow-100"
                aria-label="Close mobile menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block px-4 py-3 text-base font-medium text-yellow-900 hover:bg-yellow-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Home page"
              >
                Home
              </Link>
              <Link
                href="/components/About-us"
                className="block px-4 py-3 text-base font-medium text-yellow-900 hover:bg-yellow-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="About us page"
              >
                About Us
              </Link>
              <Link
                href="/components/Our-cars"
                className="block px-4 py-3 text-base font-medium text-yellow-900 hover:bg-yellow-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Our cars page"
              >
                Our Cars
              </Link>
              <Link
                href="/components/Contact-us"
                className="block px-4 py-3 text-base font-medium text-yellow-900 hover:bg-yellow-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Contact us page"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
