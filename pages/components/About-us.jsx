import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import Head from "next/head";
import { FaCar, FaUserShield, FaPhoneAlt } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import Link from "next/link";

const Aboutus = () => {
  const features = [
    {
      icon: <FaCar className="w-6 h-6 text-yellow-500" />,
      title: "Premium Fleet",
      description:
        "From compact cars to luxury SUVs, our diverse and well-maintained fleet caters to every need.",
    },
    {
      icon: <FaUserShield className="w-6 h-6 text-yellow-500" />,
      title: "Safety First",
      description:
        "All our vehicles undergo rigorous safety inspections to ensure your journey is worry-free.",
    },
    {
      icon: <MdSupportAgent className="w-6 h-6 text-yellow-500" />,
      title: "24/7 Support",
      description:
        "Our dedicated team is always available to assist you throughout your rental experience.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          About Us - Premier Car Rental Service in India | Best Rates & Fleet
        </title>
        <meta
          name="description"
          content="Learn about India's most trusted car rental service. We offer well-maintained vehicles, competitive rates, and 24/7 support for a comfortable and safe journey."
        />
        <meta
          name="keywords"
          content="car rental India, vehicle rental service, luxury car rental, budget car hire, India transportation, trusted car rental"
        />
        <meta
          property="og:title"
          content="About Us - Premier Car Rental Service in India"
        />
        <meta
          property="og:description"
          content="Your trusted car rental partner in India offering well-maintained vehicles, competitive rates and 24/7 support."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://bestcarrentalindia.com/components/About-us"
        />
      </Head>

      <Navbar />
      <main>
        <header
          className="bg-cover min-h-[400px] lg:min-h-[600px] mt-10 lg:mt-0 flex items-center bg-center object-cover justify-center bg-black flex-col relative w-full backdrop-blur-sm"
          style={{
            backgroundImage: "url('/images/landingbg.png')",
            objectFit: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-filter backdrop-blur-[2px]"></div>
          <div className="lg:mt-10 flex items-center justify-center flex-col w-full mt-10 relative z-10 px-4 animate-fadeIn">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white mx-auto font-bold tracking-wider text-center drop-shadow-lg">
              Our <span className="text-yellow-400">Story</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-white text-center mt-6 max-w-2xl font-light">
              Discover the journey behind India's most trusted car rental
              service
            </p>
            <nav
              aria-label="breadcrumb"
              className="bg-gray-200/20 backdrop-blur-md rounded-full px-6 sm:px-8 md:px-10 mt-8 py-3 sm:py-4 border border-white/10"
            >
              <ol className="flex text-center justify-center items-center">
                <li>
                  <a
                    className="text-xs sm:text-sm md:text-base text-white hover:text-yellow-400 transition-colors"
                    href="/"
                    aria-label="Home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <span className="mx-2 sm:mx-3 text-white">/</span>
                </li>
                <li>
                  <span
                    className="text-yellow-400 font-semibold text-xs sm:text-sm md:text-base"
                    aria-current="page"
                  >
                    About Us
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </header>

        <article className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <figure className="relative h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about2.png"
                  alt="Professional car rental service in India showing a fleet of well-maintained vehicles"
                  fill
                  className="object-cover"
                  priority
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Serving India since many years
                  </p>
                </figcaption>
              </figure>

              <div className="space-y-8">
                <header>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Your <span className="text-yellow-500">Trusted</span> Car
                    Rental Partner in India
                  </h2>
                  <div className="h-1 w-20 bg-yellow-500 mt-4 rounded-full"></div>
                </header>

                <div className="space-y-5 text-gray-700">
                  <p className="text-base sm:text-lg md:text-xl">
                    Welcome to India's premier car rental service. Since our
                    establishment, we have been committed to providing
                    exceptional car rental experiences to both tourists and
                    locals alike.
                  </p>
                  <p className="text-base sm:text-lg">
                    Our fleet consists of well-maintained vehicles ranging from
                    economical cars to luxury vehicles, ensuring we have the
                    perfect option for every need and budget.
                  </p>
                  <p className="text-base sm:text-lg">
                    With our customer-first approach, competitive rates, and
                    24/7 support, we make sure your journey in India is
                    comfortable, safe, and memorable.
                  </p>
                </div>

                <footer className="flex">
                  <Link
                    href="/components/Contact-us"
                    className="bg-yellow-500 text-white px-8 sm:px-10 py-4 rounded-full hover:bg-yellow-600 transition-all duration-300 font-semibold text-sm sm:text-base shadow-xl hover:shadow-yellow-300/30 flex items-center gap-3 transform hover:-translate-y-1 relative overflow-hidden group"
                    aria-label="Contact our car rental service"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <FaPhoneAlt className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Contact Us</span>
                    <span className="absolute right-0 top-0 h-full w-12 bg-yellow-600 opacity-0 group-hover:opacity-20 transform translate-x-full group-hover:translate-x-0 transition-all duration-300"></span>
                  </Link>
                </footer>
              </div>
            </section>

            <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="bg-gray-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </article>
              ))}
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default Aboutus;
