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
      <div className="px-4 pt-8 gap-8 flex flex-col justify-center items-center">
        <div>
          <img src={heroImg} alt="" className="w-[25rem]" />
        </div>
        <div className="text-center">
          <button className="bg-bgWhite py-4 px-8 text-sm rounded-full shadow-2xl flex gap-4 items-center font-bold text-textSecondary mb-4 mx-auto">
            Explore the world!
            <span>
              <img src={work} alt="icon work" />
            </span>
          </button>
          <h1 className="text-textBlack font-bold text-4xl mb-6">
            Travel <span className="text-textSecondary">top destination</span>
            of the world
          </h1>
          <p className="text-textGray text-base">
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div className="flex flex-col gap-6 py-8">
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
          <div className="flex py-8 gap-6 flex-wrap items-center justify-center">
            <img
              src={companies1}
              alt=""
              height={20}
              className="object-contain"
            />
            <img
              src={companies2}
              alt=""
              height={20}
              className="object-contain"
            />
            <img
              src={companies3}
              alt=""
              height={20}
              className="object-contain"
            />
            <img
              src={companies4}
              alt=""
              height={20}
              className="object-contain"
            />
            <img
              src={companies5}
              alt=""
              height={20}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
