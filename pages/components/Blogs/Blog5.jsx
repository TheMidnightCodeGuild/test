import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Blog5 = () => {
  return (
    <>
      <Head>
        <title>Monsoon Driving Safety in india | Essential Tips for Rainy Season</title>
        <meta name="description" content="Learn essential safety tips for driving rental cars during india's monsoon season. Get expert advice on handling road conditions, visibility challenges, and flooded streets." />
        <meta name="keywords" content="monsoon driving, india safety tips, rainy season driving, rental car safety, flood safety, road conditions india" />
        <meta property="og:title" content="Monsoon Driving Safety in india | Essential Tips for Rainy Season" />
        <meta property="og:description" content="Learn essential safety tips for driving rental cars during india's monsoon season. Get expert advice on handling road conditions, visibility challenges, and flooded streets." />
        <meta property="og:image" content="/images/blog5.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div className="w-full max-w-[1300px] mx-auto py-8 sm:py-12 px-4 sm:px-6 mt-20">
        <article className="p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-96 sm:h-112 md:h-128 w-full mb-4 sm:mb-6">
            <Image
              src="/images/blog5.jpg"
              alt="Monsoon Driving in india"
              fill
              className="object-cover rounded-md sm:rounded-lg"
              priority
            />
          </div>
          <header className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
              Monsoon Driving Safety in india
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
              <p className="text-xs sm:text-sm">Published on Sep 28, 2023</p>
            </div>
          </header>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Important safety considerations when driving rental cars during india's rainy season. Learn about road conditions, visibility challenges, and how to handle flooded streets. Discover which routes to avoid during heavy rains, essential vehicle checks before monsoon drives, and emergency preparedness tips to ensure a safe journey.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Blog5;
