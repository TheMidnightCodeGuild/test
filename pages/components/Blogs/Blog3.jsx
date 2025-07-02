import React from 'react';
import Image from 'next/image';

import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Blog3 = () => {
  return (
    <>
      <Head>
        <title>Luxury vs Economy Car Rentals in india - Compare & Choose | GoCars</title>
        <meta name="description" content="Compare luxury and economy car rentals in india. Learn about pros and cons, features, and costs to make the best choice for your india adventure. Expert guide by GoCars." />
        <meta name="keywords" content="luxury car rental india, economy car rental india, car rental comparison, india car hire, budget vs premium cars" />
        <meta property="og:title" content="Luxury vs Economy Car Rentals in india - Compare & Choose | GoCars" />
        <meta property="og:description" content="Compare luxury and economy car rentals in india. Learn about pros and cons, features, and costs to make the best choice for your india adventure." />
        <meta property="og:image" content="/images/blog3.webp" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div className="w-full max-w-[1300px] mx-auto py-8 sm:py-12 px-4 sm:px-6 mt-20">
        <article className="p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-96 sm:h-112 md:h-128  w-full mb-4 sm:mb-6">
            <Image  
              src="/images/blog3.webp"
              alt="Luxury vs Economy Car Rentals"
              fill
              className="object-cover rounded-md sm:rounded-lg"
              priority
            />
          </div>
          <header className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">Luxury vs. Economy: Choosing the Right Rental</h2>
            <div className="flex items-center text-gray-500">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xs sm:text-sm">Published on Oct 5, 2023</p>
            </div>
          </header>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              How to decide between premium and budget car options for your india adventure. We'll compare the pros and cons of luxury vehicles versus economy cars, helping you make an informed decision based on your travel plans, budget, and preferences. From fuel efficiency to comfort features, find the perfect rental car for your needs.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Blog3;
