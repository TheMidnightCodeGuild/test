import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 blur-xs">
          <Image
            src="/images/landingbg.png"
            alt="Urban cityscape with modern buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 " aria-hidden="true" />
        </div>

        <article className="relative flex items-center justify-center w-full mt-20">
          <div className="text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-yellow-400 uppercase">
                indore Prime Tour
              </span>
              <br />
              <span className="text-white uppercase">
                car rental services in indore
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium italic">
              Book with ease, arrive with style - your reliable car rental
              service
            </p>

            {/* Service Icons */}
            {/* <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
              <div className="bg-yellow-500 rounded-full p-3 sm:p-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <div className="bg-yellow-500 rounded-full p-3 sm:p-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="bg-yellow-500 rounded-full p-3 sm:p-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
              </div>
              <div className="bg-yellow-500 rounded-full p-3 sm:p-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H18V0h-2v2H8V0H6v2H4.5C3.67 2 3 2.67 3 3.5v17C3 21.33 3.67 22 4.5 22h15c.83 0 1.5-.67 1.5-1.5v-17C21 2.67 20.33 2 19.5 2z" />
                </svg>
              </div>
            </div> */}

            <nav className="flex justify-center">
              <Link
                href="/components/Contact-us"
                className="bg-yellow-500 text-black px-6 sm:px-8 md:px-5 py-3 sm:py-3 rounded-full font-bold hover:bg-yellow-400 transition duration-300 text-base sm:text-lg md:text-base shadow-lg uppercase"
                aria-label="Book your taxi service now"
              >
                book now
              </Link>
            </nav>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Landing;
