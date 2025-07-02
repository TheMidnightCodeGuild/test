import React from 'react';
import Image from 'next/image';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Head from 'next/head';

const Blog4 = () => {
  return (
    <>
      <Head>
        <title>Hidden Beaches in india Accessible by Car | Best Car Rental india</title>
        <meta name="description" content="Discover secret beaches and hidden coves in india accessible by car. Get directions, parking info, and insider tips to find pristine beaches away from tourist crowds." />
        <meta name="keywords" content="hidden beaches india, secret beaches, india hidden coves, offbeat india beaches, india car rental beaches, beach parking india" />
        <meta property="og:title" content="Hidden Beaches in india Accessible by Car | Best Car Rental india" />
        <meta property="og:description" content="Discover secret beaches and hidden coves in india accessible by car. Get directions, parking info, and insider tips to find pristine beaches away from tourist crowds." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/blog4.png" />
        <link rel="canonical" href="https://www.bestcarrentalindia.com/components/Blogs/Blog4" />
      </Head>
      <Navbar />
      <div className="w-full max-w-[1300px] mx-auto py-8 sm:py-12 px-4 sm:px-6 mt-20">
        <article className="p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-96 sm:h-112 md:h-128 w-full mb-4 sm:mb-6">
            <Image
              src="/images/blog4.png"
              alt="Hidden Beaches in india"
              fill
              className="object-cover rounded-md sm:rounded-lg"
              priority
            />
          </div>
          <header className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
              Hidden Beaches Accessible by Car
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
              <p className="text-xs sm:text-sm">Published on Oct 1, 2023</p>
            </div>
          </header>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Explore india's secret beaches and coves that are best reached with your rental car. We'll guide you to lesser-known coastal gems away from the tourist crowds, complete with directions, parking information, and what to expect at each location. Discover pristine stretches of sand, hidden lagoons, and stunning viewpoints that most visitors miss.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Blog4;
