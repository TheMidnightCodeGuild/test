import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import { BsWhatsapp, BsTelephoneFill } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal, MdSpeed } from "react-icons/md";
import Head from "next/head";
import Link from "next/link";

const Ourcars = () => {
  const carsList = [
    {
      name: "Mini Cooper",
      image: "/images/mini-cooper.png",
      description: "Luxury and style redefined",
      features: ["Automatic", "Premium Interior", "Sunroof"],
    },
    {
      name: "Fortuner (Automatic)",
      image: "/images/fortuner.png",
      description: "Premium SUV experience",
      features: ["7 Seater", "4x4 Available", "Premium Interior"],
    },
    {
      name: "Endeavour (Automatic)",
      image: "/images/endeavour.png",
      description: "Luxury SUV for ultimate comfort",
      features: ["7 Seater", "Premium Interior", "Panoramic Sunroof"],
    },
    {
      name: "Baleno (Automatic)",
      image: "/images/baleno.png",
      description: "Comfortable premium hatchback",
      features: ["5 Seater", "Automatic", "Good Mileage"],
    },
    {
      name: "Baleno (Manual)",
      image: "/images/baleno.png",
      description: "Comfortable premium hatchback",
      features: ["5 Seater", "Manual", "Good Mileage"],
    },
    {
      name: "Swift (Automatic)",
      image: "/images/swift.png",
      description: "Sporty and efficient hatchback",
      features: ["5 Seater", "Automatic", "Good Mileage"],
    },
    {
      name: "Swift (Manual)",
      image: "/images/swift.png",
      description: "Sporty and efficient hatchback",
      features: ["5 Seater", "Manual", "Good Mileage"],
    },
    {
      name: "i10 (Automatic)",
      image: "/images/i10.png",
      description: "Compact and efficient",
      features: ["5 Seater", "Automatic", "Good Mileage"],
    },
    {
      name: "i10 (Manual)",
      image: "/images/i10.png",
      description: "Compact and efficient",
      features: ["5 Seater", "Manual", "Good Mileage"],
    },
    {
      name: "i20 (Sunroofautomatic)",
      image: "/images/i20auto.png",
      description: "Premium hatchback with sunroof",
      features: ["5 Seater", "Automatic", "Sunroof"],
    },
    {
      name: "i20 (Manual)",
      image: "/images/i20m.png",
      description: "Premium hatchback",
      features: ["5 Seater", "Manual", "Good Mileage"],
    },
    {
      name: "Ertiga (Automatic)",
      image: "/images/ertiga.png",
      description: "Spacious family MPV",
      features: ["7 Seater", "Automatic", "Family Car"],
    },
    {
      name: "Ertiga (Manual)",
      image: "/images/ertiga.png",
      description: "Spacious family MPV",
      features: ["7 Seater", "Manual", "Family Car"],
    },
    {
      name: "Thar (Automatic)",
      image: "/images/tharauto.png",
      description: "Adventure ready off-roader",
      features: ["4 Seater", "Automatic", "4x4"],
    },
    {
      name: "Thar Hardtop (Automatic)",
      image: "/images/tharhardtop.avif",
      description: "Covered comfort with off-road capability",
      features: ["4 Seater", "Automatic", "4x4"],
    },
    {
      name: "Audi A4",
      image: "/images/audiA4.png",
      description: "Luxury and style redefined",
      features: ["4 Seater", "Automatic", "Luxury"],
    },
  ];

  return (
    <>
      <Head>
        <title>Our Premium Fleet | Luxury Car Rentals in india</title>
        <meta
          name="description"
          content="Explore our diverse range of premium vehicles for rent in india. From luxury SUVs to compact city cars, find the perfect ride for your journey."
        />
        <meta
          name="keywords"
          content="car rental india, luxury cars india, car hire india, premium car rental, self drive cars india"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Our Premium Fleet | Luxury Car Rentals in india"
        />
        <meta
          property="og:description"
          content="Explore our diverse range of premium vehicles for rent in india. From luxury SUVs to compact city cars, find the perfect ride for your journey."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://bestcarrentalindia.com/components/Our-cars"
        />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <section
          className="bg-cover min-h-[300px] lg:min-h-[550px] mt-10 lg:mt-0 flex items-center bg-center object-cover justify-center bg-black flex-col relative w-full"
          style={{
            backgroundImage: "url('/images/landingbg.png')",
            objectFit: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-filter backdrop-blur-[2px]"></div>
          <div className="lg:mt-10 flex items-center justify-center flex-col w-full mt-10 relative z-10 px-4 animate-fadeIn">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white mx-auto font-bold tracking-wider text-center drop-shadow-lg">
              Our <strong className="text-yellow-400">Premium</strong> Fleet
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white text-center mt-4 max-w-2xl font-light">
              Experience luxury and comfort with our diverse range of vehicles
            </p>
            <nav
              aria-label="breadcrumb"
              className="bg-gray-200/20 backdrop-blur-md rounded-full px-6 sm:px-8 md:px-10 mt-8 py-3 sm:py-4 border border-white/10"
            >
              <ol className="flex text-center justify-center items-center">
                <li>
                  <Link
                    className="text-xs sm:text-sm md:text-base text-white hover:text-yellow-400 transition-colors"
                    href="/"
                    aria-label="Home"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="mx-2 sm:mx-3 text-white">/</span>
                </li>
                <li>
                  <span
                    className="text-yellow-400 font-semibold text-xs sm:text-sm md:text-base"
                    aria-current="page"
                  >
                    Our Cars
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {carsList.map((car, index) => (
                <article
                  key={index}
                  className="overflow-hidden border border-yellow-600"
                >
                  <div className="relative h-56 sm:h-60 md:h-48 overflow-hidden">
                    <Image
                      src={car.image}
                      alt={`${car.name} - Car Rental in india`}
                      fill
                      className="object-cover scale-75"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      Book Now
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {car.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{car.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {car.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm flex items-center"
                        >
                          {idx === 0 && (
                            <MdAirlineSeatReclineNormal className="mr-1 text-yellow-500" />
                          )}
                          {idx === 1 && (
                            <FaGasPump className="mr-1 text-yellow-500" />
                          )}
                          {idx === 2 && (
                            <MdSpeed className="mr-1 text-yellow-500" />
                          )}
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Link
                          href="tel:+918149563913"
                          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-300/30 transform hover:-translate-y-1"
                          title={`Call to book ${car.name}`}
                          aria-label={`Call to book ${car.name}`}
                        >
                          <BsTelephoneFill size={18} />
                        </Link>
                        <Link
                          href="https://wa.me/918149563913"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-300/30 transform hover:-translate-y-1"
                          title={`WhatsApp to book ${car.name}`}
                          aria-label={`WhatsApp to book ${car.name}`}
                        >
                          <BsWhatsapp size={18} />
                        </Link>
                      </div>
                      <div
                        className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-xl"
                        aria-label={`WhatsApp booking for ${car.name}`}
                      >
                        WhatsApp Now
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Ourcars;
