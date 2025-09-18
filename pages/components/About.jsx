import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <section className="bg-yellow-50 border-4 border-gray-800">
      <div className="lg:max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <article className="order-2 lg:order-1 mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Your Trusted Cab Service Partner in India
            </h1>
            <main className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
              <p>
                Welcome to our Cab Services, your premier destination for
                hassle-free cab rentals in India. With years of experience in
                the industry, we pride ourselves on providing reliable,
                comfortable, and affordable transportation solutions with
                professional drivers.
              </p>
              <p>
                Our fleet consists of well-maintained vehicles with experienced
                drivers who undergo regular training and safety inspections.
                From compact cars for solo travelers to spacious SUVs for
                families, we provide the perfect vehicle with a skilled driver
                for every journey.
              </p>
            </main>
            <nav className="mt-6 sm:mt-8">
              <Link
                href="/components/Contact-us"
                className="inline-block bg-yellow-500 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </nav>
          </article>

          {/* Image Section */}
          <figure className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden ">
            <Image
              src="/images/about.png"
              alt="Cab Service with Professional Driver"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              quality={100}
              priority
              className="rounded-xl object-contain mt-5"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
