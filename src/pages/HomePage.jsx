import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Destination from "../components/Destination";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Destination />
    </>
  );
};

export default HomePage;
