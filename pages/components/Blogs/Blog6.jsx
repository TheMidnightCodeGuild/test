import React from 'react';
import Image from 'next/image';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Head from 'next/head';

const Blog6 = () => {
  return (
    <>
      <Head>
        <title>Best Weekend Road Trips from india | Car Rental Travel Guide</title>
        <meta name="description" content="Plan amazing weekend getaways from india by car. Discover nearby destinations in Karnataka and Maharashtra, complete with driving routes, times, and attraction guides." />
        <meta name="keywords" content="weekend trips from india, india road trips, karnataka maharashtra drives, car rental india, weekend getaways, driving routes india" />
        <meta property="og:title" content="Best Weekend Road Trips from india | Car Rental Travel Guide" />
        <meta property="og:description" content="Plan amazing weekend getaways from india by car. Discover nearby destinations in Karnataka and Maharashtra, complete with driving routes, times, and attraction guides." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/blog6.jpg" />
        <link rel="canonical" href="https://www.bestcarrentalindia.com/components/Blogs/Blog6" />
      </Head>
      <Navbar />
      <div className="w-full max-w-[1300px] mx-auto py-8 sm:py-12 px-4 sm:px-6 mt-20">
        <article className="p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-96 sm:h-112 md:h-128 w-full mb-4 sm:mb-6">
            <Image
              src="/images/blog6.jpg"
              alt="Weekend Road Trips from india"
              fill
              className="object-cover rounded-md sm:rounded-lg"
              priority
            />
          </div>
          <header className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
              Weekend Road Trips from india
            </h2>
            <div className="flex items-center text-gray-500">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-xs sm:text-sm">Published on Sep 20, 2023</p>
            </div>
          </header>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              The best destinations within driving distance for weekend getaways from india. Explore nearby states like Karnataka and Maharashtra with your rental car, discovering waterfalls, wildlife sanctuaries, and historic sites. We'll provide detailed itineraries, driving times, accommodation recommendations, and must-see attractions for each destination.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Blog6;
