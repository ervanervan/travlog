import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Destination from "../components/Destination";
import TravelPoint from "../components/TravelPoint";
import Features from "../components/Features";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Destination />
      <TravelPoint />
      <Features />
    </>
  );
};

export default HomePage;
