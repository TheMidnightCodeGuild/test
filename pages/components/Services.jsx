import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Indore To Ujjain",
      destination: "UJJAIN",
      image: "/images/ujjain.jpg",
      alt: "Ujjain temple architecture",
      description:
        "Experience the spiritual journey from Indore to Ujjain with our reliable taxi service. Ujjain, one of the holiest cities in India, is famous for its ancient temples and rich cultural heritage. Our comfortable vehicles ensure a smooth ride to this sacred destination with experienced drivers who know the best routes and stops along the way.",
    },
    {
      id: 2,
      title: "Indore To Maheshwar",
      destination: "MAHESHWAR",
      image: "/images/maheshwar.jpg",
      alt: "Maheshwar riverside ghats",
      description:
        "Discover the serene beauty of Maheshwar with our premium taxi service. Known for its magnificent ghats on the Narmada River and historic Maheshwar Fort, this destination offers a perfect blend of spirituality and heritage. Our professional drivers ensure your journey is comfortable while you enjoy the scenic route to this beautiful Malwa region gem.",
    },
    {
      id: 3,
      title: "Indore To Mandu",
      destination: "MANDU",
      image: "/images/mandu.jpg",
      alt: "Mandu historical architecture",
      description:
        "Explore the romantic ruins of Mandu with our reliable transportation service. This historic hill station is renowned for its magnificent Afghan architecture, including the famous Jahaz Mahal and Hindola Mahal. Travel in comfort with our well-maintained vehicles as you witness one of Vindhya hills' most beautiful destinations with panoramic views and rich history.",
    },
    {
      id: 4,
      title: "Indore To Omkareshwar",
      destination: "OMKARESHWAR",
      image: "/images/omkareshwar.jpg",
      alt: "Omkareshwar island temple view",
      description:
        "Visit the sacred island of Omkareshwar with our reliable taxi service. Home to one of the 12 Jyotirlingas, this beautiful island formed by the Narmada river offers spiritual peace and breathtaking views. Our experienced drivers ensure a comfortable journey to this holy destination, known for its ancient temples and serene atmosphere.",
    },
    {
      id: 5,
      title: "In Indore City",
      destination: "INDORE CITY",
      image: "/images/indore.avif",
      alt: "Indore city landmarks and attractions",
      description:
        "Explore the vibrant city of Indore with our local taxi services. From the bustling Sarafa Bazaar to the magnificent Lal Bagh Palace, discover the commercial capital of Madhya Pradesh. Our local drivers know every corner of the city, ensuring you experience the best of Indore's culture, cuisine, and attractions comfortably and efficiently.",
    },
    {
      id: 6,
      title: "Indore To Mandleshwar",
      destination: "MANDLESHWAR",
      image: "/images/mandleshwar.avif",
      alt: "Mandheswar scenic landscape",
      description:
        "Journey to the peaceful town of Mandleshwar with our premium taxi service. This hidden gem offers stunning landscapes, ancient temples, and a tranquil environment perfect for spiritual retreat. Our professional drivers provide safe and comfortable transportation, allowing you to enjoy the scenic beauty and cultural richness of this beautiful destination in Madhya Pradesh.",
    },
  ];

  return (
    <main className="bg-gradient-to-br from-[#FEFCE8] via-[#FEF9C3] to-[#FDE68A] min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-amber-700 mb-3 font-semibold">
            popular destinations
          </h2>
          <h1 className="text-5xl md:text-5xl uppercase font-semibold text-gray-900 mb-4 ">
            our services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Carousel */}
        <div className="max-w-7xl mx-auto">
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              interval: 10000,
              pauseOnHover: true,
              resetProgress: false,
              perPage: 3,
              gap: "2rem",
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
                  gap: "1rem",
                },
                640: {
                  perPage: 1,
                  arrows: false,
                  gap: "1rem",
                },
                768: {
                  perPage: 2,
                  arrows: false,
                  gap: "1.5rem",
                },
                1024: {
                  perPage: 3,
                  gap: "2rem",
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            {services.map((service) => (
              <SplideSlide key={service.id}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        POPULAR
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-white text-2xl font-black tracking-wide drop-shadow-lg">
                        {service.destination}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-300/50 transform hover:scale-105">
                        Book Now
                      </button>
                      <div className="flex items-center text-amber-600">
                        <span className="text-sm font-semibold">
                          Learn More
                        </span>
                        <svg
                          className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </main>
  );
};

export default Services;
