import React from "react";
import Image from "next/image";

const Choose = () => {
  return (
    <section className="bg-yellow-50 border-2 py-8 sm:py-16 rounded-2xl sm:rounded-full m-2 sm:m-10">
      <div className="lg:max-w-[1200px] mx-auto px-4 mb-10">
        {/* Header Section */}
        <header className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose <span className="text-yellow-500">Us?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Experience the <strong>best cab rental service in india</strong>{" "}
            with our professional drivers and premium vehicles.
          </p>
        </header>

        {/* Cards Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Card 1 */}
          <article className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <figure className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/quality.png"
                alt="Quality Fleet"
                fill
                className="object-contain"
              />
            </figure>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Quality Fleet
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Well-maintained vehicles with professional drivers to ensure your
              safety and comfortable journey.
            </p>
          </article>

          {/* Card 2 */}
          <article className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <figure className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/support.png"
                alt="24/7 Support"
                fill
                className="object-contain"
              />
            </figure>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              24/7 Support
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Round-the-clock customer service to assist you with bookings,
              queries or emergency support.
            </p>
          </article>

          {/* Card 3 */}
          <article className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <figure className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/price.png"
                alt="Competitive Pricing"
                fill
                className="object-contain"
              />
            </figure>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Competitive Pricing
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Best cab rates in india with transparent pricing and no hidden
              charges for driver or vehicle.
            </p>
          </article>

          {/* Card 4 */}
          <article className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <figure className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/flexible.png"
                alt="Professional Drivers"
                fill
                className="object-contain"
              />
            </figure>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Professional Drivers
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Experienced and licensed drivers who know local routes and provide
              safe, comfortable rides.
            </p>
          </article>

          {/* Card 5 */}
          <article className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <figure className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/insurance.png"
                alt="Full Insurance"
                fill
                className="object-contain"
              />
            </figure>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Full Insurance
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Comprehensive insurance coverage for passengers and vehicles for
              complete peace of mind.
            </p>
          </article>

          {/* Card 6 */}
          <article className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <figure className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/location.png"
                alt="Wide Coverage"
                fill
                className="object-contain"
              />
            </figure>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Wide Coverage
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Cab service available across major cities and routes in india with
              door-to-door pickup.
            </p>
          </article>
        </main>
      </div>
    </section>
  );
};

export default Choose;
