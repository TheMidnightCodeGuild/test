import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp, BsTelephoneFill } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Head from "next/head";

import "@splidejs/react-splide/css";

const Cars = () => {
  const [carPrices, setCarPrices] = useState({
    miniCooper: 20000,
    fortunerAuto: 8000,
    endeavourAuto: 7000,
    balenoAuto: 1600,
    balenoManual: 1300,
    swiftAuto: 1600,
    swiftManual: 1300,
    i10Auto: 1500,
    i10Manual: 1200,
    i20AutoSunRoof: 1700,
    i20Manual: 1400,
    ertigaAuto: 2500,
    ertigaManual: 2200,
    tharAuto: 4000,
    tharHardTopAuto: 4000,
    audiA4: 12000,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const docRef = doc(db, "carPrice", "carPrice");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCarPrices(docSnap.data());
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching prices:", err);
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  const carData = [
    {
      name: "Mini Cooper",
      priceKey: "miniCooper",
      image: "/images/mini-cooper.png",
      features: ["Automatic", "Premium Interior", "Sunroof"],
    },
    {
      name: "Fortuner (Automatic)",
      priceKey: "fortunerAuto",
      image: "/images/fortuner.png",
      features: ["7 Seater", "4x4 Available", "Premium Interior"],
    },
    {
      name: "Endeavour (Automatic)",
      priceKey: "endeavourAuto",
      image: "/images/endeavour.png",
      features: ["7 Seater", "Premium Interior", "Panoramic Sunroof"],
    },
    {
      name: "Baleno (Automatic)",
      priceKey: "balenoAuto",
      image: "/images/baleno.png",
      features: ["5 Seater", "Automatic", "Good Mileage"],
    },
    {
      name: "Baleno (Manual)",
      priceKey: "balenoManual",
      image: "/images/baleno.png",
      features: ["5 Seater", "Manual", "Good Mileage"],
    },
    {
      name: "Swift (Automatic)",
      priceKey: "swiftAuto",
      image: "/images/swift.png",
      features: ["5 Seater", "Automatic", "Good Mileage"],
    },
    {
      name: "Swift (Manual)",
      priceKey: "swiftManual",
      image: "/images/swift.png",
      features: ["5 Seater", "Manual", "Good Mileage"],
    },
    {
      name: "i10 (Automatic)",
      priceKey: "i10Auto",
      image: "/images/i10.png",
      features: ["5 Seater", "Automatic", "Good Mileage"],
    },
    {
      name: "i10 (Manual)",
      priceKey: "i10Manual",
      image: "/images/i10.png",
      features: ["5 Seater", "Manual", "Good Mileage"],
    },
    {
      name: "i20 (Sunroofautomatic)",
      priceKey: "i20AutoSunRoof",
      image: "/images/i20auto.png",
      features: ["5 Seater", "Automatic", "Sunroof"],
    },
    {
      name: "i20 (Manual)",
      priceKey: "i20Manual",
      image: "/images/i20m.png",
      features: ["5 Seater", "Manual", "Good Mileage"],
    },
    {
      name: "Ertiga (Automatic)",
      priceKey: "ertigaAuto",
      image: "/images/ertiga.png",
      features: ["7 Seater", "Automatic", "Family Car"],
    },
    {
      name: "Ertiga (Manual)",
      priceKey: "ertigaManual",
      image: "/images/ertiga.png",
      features: ["7 Seater", "Manual", "Family Car"],
    },
    {
      name: "Thar (Automatic)",
      priceKey: "tharAuto",
      image: "/images/tharauto.png",
      features: ["4 Seater", "Automatic", "4x4"],
    },
    {
      name: "Thar Hardtop (Automatic)",
      priceKey: "tharHardTopAuto",
      image: "/images/tharhardtop.avif",
      features: ["4 Seater", "Automatic", "4x4"],
    },
    {
      name: "Audi A4",
      priceKey: "audiA4",
      image: "/images/audiA4.png",
      features: ["4 Seater", "Automatic", "Luxury"],
    },
  ];

  return (
    <>
      <Head>
        <title>Premium Car Rental Fleet in india | Best Car Rental india</title>
        <meta
          name="description"
          content="Explore our premium fleet of well-maintained luxury vehicles for rent in india. From Mini Cooper to Audi A4, find the perfect car for your india adventure."
        />
        <meta
          name="keywords"
          content="car rental india, luxury car rental, premium cars, rent a car, india car hire, self drive cars india"
        />
        <meta
          property="og:title"
          content="Premium Car Rental Fleet in india | Best Car Rental india"
        />
        <meta
          property="og:description"
          content="Explore our premium fleet of well-maintained luxury vehicles for rent in india. From Mini Cooper to Audi A4, find the perfect car for your india adventure."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/mini-cooper.png" />
        <link
          rel="canonical"
          href="https://www.bestcarrentalindia.com/components/Cars"
        />
      </Head>
      <main>
        <section className="bg-yellow-50">
          <div className="w-full lg:max-w-[1300px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
            <header className="text-center sm:text-left mb-8 sm:mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our Premium Fleet
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto sm:mx-0">
                Choose from our selection of well-maintained luxury vehicles
                perfect for your india adventure
              </p>
            </header>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-xl text-gray-600">
                  Loading our premium fleet...
                </p>
              </div>
            ) : (
              <article>
                <Splide
                  options={{
                    type: "loop",
                    autoplay: true,
                    interval: 10000,
                    pauseOnHover: true,
                    resetProgress: false,
                    perPage: 3,
                    gap: "1rem",
                    arrows: false,
                    pagination: false,
                    autoScroll: {
                      speed: 1,
                      pauseOnHover: true,
                    },
                    breakpoints: {
                      480: {
                        perPage: 1,
                        arrows: false,
                        gap: "0.5rem",
                      },
                      640: {
                        perPage: 1,
                        arrows: false,
                      },
                      768: {
                        perPage: 2,
                        arrows: false,
                      },
                      1024: {
                        perPage: 3,
                      },
                    },
                  }}
                  extensions={{ AutoScroll }}
                  className="mb-8"
                >
                  {carData.map((car, index) => (
                    <SplideSlide key={index}>
                      <article className="bg-white rounded-xl overflow-hidden border border-yellow-600 h-full flex flex-col mx-auto max-w-sm">
                        <figure className="relative h-48 sm:h-56 bg-gray-100">
                          <Image
                            src={car.image}
                            alt={`Rent ${car.name} in india`}
                            fill
                            sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1200px) 30vw, 25vw"
                            style={{ objectFit: "cover" }}
                            className="scale-75"
                            priority={index < 3}
                          />
                        </figure>
                        <div className="p-4 sm:p-6 flex flex-col flex-grow">
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                            {car.name}
                          </h2>
                          <ul className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                            {car.features.map((feature, i) => (
                              <li
                                key={i}
                                className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm"
                              >
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">
                            To book cab for rent contact us on WhatsApp
                          </p>
                          <nav className="flex justify-between items-center mt-auto">
                            <div className="flex gap-2">
                              <Link
                                href="tel:+918208563913"
                                className="bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-300/30 transform hover:-translate-y-1"
                                title={`Call to rent ${car.name}`}
                                aria-label={`Call to book ${car.name}`}
                              >
                                <BsTelephoneFill
                                  size={16}
                                  className="sm:hidden"
                                />
                                <BsTelephoneFill
                                  size={18}
                                  className="hidden sm:block"
                                />
                              </Link>
                              <Link
                                href="https://wa.me/918149563913"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white p-2 sm:p-3 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-300/30 transform hover:-translate-y-1"
                                title={`WhatsApp to rent ${car.name}`}
                                aria-label={`WhatsApp to book ${car.name}`}
                              >
                                <BsWhatsapp size={16} className="sm:hidden" />
                                <BsWhatsapp
                                  size={18}
                                  className="hidden sm:block"
                                />
                              </Link>
                            </div>
                          </nav>
                        </div>
                      </article>
                    </SplideSlide>
                  ))}
                </Splide>
              </article>
            )}

            <footer className="text-center mt-8 sm:mt-10">
              <Link
                href="/components/Our-cars"
                className="bg-yellow-500 text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                View All Cars
              </Link>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cars;
