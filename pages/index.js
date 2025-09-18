import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Cars from "./components/Cars";
import About from "./components/About";
import Choose from "./components/Choose";
import Loader from "./components/Loader";
import Services from "./components/Services";

const Index = () => {
  return (
    <div>
      <Head>
        <title>
          Best Car Rental in india | Most Affordable Car Hire Services india
        </title>
        <meta
          name="description"
          content="Best car rental service in india offering luxury & budget cars. Top-rated car hire in North & South india. Book self-drive cars & chauffeur services at lowest prices."
        />
        <meta
          name="keywords"
          content="best car rental india, cheap car rental india, car hire india, india car rental service, car rental north india, car rental south india, luxury car rental india, budget car rental india, self drive car rental india, car lease india, airport car rental india, monthly car rental india, car rental packages india"
        />
        <meta
          property="og:title"
          content="Best Car Rental in india | Top-Rated Vehicle Hire Services"
        />
        <meta
          property="og:description"
          content="Leading car rental service in india offering wide range of vehicles. Best prices guaranteed for self-drive cars and chauffeur services across india."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bestcarrentalindia.com" />
        <link rel="canonical" href="https://www.bestcarrentalindia.com" />
      </Head>
      <Loader />
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Cars />
      <Choose />
      <Footer />
    </div>
  );
};

export default Index;
