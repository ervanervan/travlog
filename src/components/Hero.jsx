import React from "react";
import heroImg from "../assets/hero-image.png";
import work from "../assets/icon-work.svg";
import play from "../assets/icon-play.svg";
import Button from "./Button";
import companies1 from "../assets/logo-tripadvisor.svg";
import companies2 from "../assets/logo-expedia.svg";
import companies3 from "../assets/logo-bookingcom.svg";
import companies4 from "../assets/logo-airbnb.svg";
import companies5 from "../assets/logo-orbitz.svg";

export default function Hero() {
  return (
    <section className="container mx-auto">
      <div className="px-4 xl:px-20 pt-8 gap-8 flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:flex-1 lg:order-2">
          <img
            src={heroImg}
            width={760}
            height={700}
            alt=""
            className="w-[25rem] lg:w-full"
          />
        </div>
        <div className="text-center lg:text-start lg:w-[36%] lg:order-1">
          <button className="bg-bgWhite py-4 px-8 text-sm rounded-full shadow-2xl flex gap-4 items-center font-bold text-textSecondary mb-4 lg:mb-10 mx-auto lg:mx-0">
            Explore the world!
            <span>
              <img src={work} alt="icon work" />
            </span>
          </button>
          <h1 className="text-textBlack font-bold text-4xl lg:text-6xl mb-6 lg:mb-10">
            Travel <span className="text-textSecondary">top destination </span>
            of the world
          </h1>
          <p className="text-textGray text-base lg:text-lg">
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div className="flex flex-col lg:items-center lg:flex-row gap-6 lg:gap-4 py-8 xl:py-10">
            <div className="shadow-2xl flex flex-col rounded-full">
              <Button isPrimary>Get started</Button>
            </div>
            <button className="bg-bgWhite py-4 px-8 text-sm rounded-full flex gap-2 justify-center items-center font-bold text-textDark">
              <span>
                <img src={play} alt="icon play" />
              </span>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div className="flex px-4 xl:px-20 py-8 xl:pt-8 gap-6 flex-wrap items-center justify-center xl:justify-between">
        <img
          src={companies1}
          alt=""
          height={20}
          className="object-contain xl:h-8"
        />
        <img
          src={companies2}
          alt=""
          height={20}
          className="object-contain xl:h-8"
        />
        <img
          src={companies3}
          alt=""
          height={20}
          className="object-contain xl:h-8"
        />
        <img
          src={companies4}
          alt=""
          height={20}
          className="object-contain xl:h-8"
        />
        <img
          src={companies5}
          alt=""
          height={20}
          className="object-contain xl:h-8"
        />
      </div>
    </section>
  );
}
