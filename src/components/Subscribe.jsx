import React from "react";
import graphicElement from "../assets/graphic-element.svg";

const Subscribe = () => {
  return (
    <section className="container mx-auto">
      <div className="relative px-4 xl:px-20 pt-16">
        <img
          src={graphicElement}
          alt=""
          className="absolute top-0 left-12 hidden md:block"
        />
        <div className="bg-bgOrange8 px-8 md:px-16 py-16 xl:py-32 rounded-3xl">
          <div className="text-center">
            <h3 className="font-bold text-textSecondary text-base md:text-xl leading-5 uppercase tracking-[2px] mb-8">
              subscribe to our newsletter
            </h3>
            <h2 className="text-textBlack font-bold text-3xl md:text-4xl xl:text-5xl md:leading-[3rem] xl:leading-[4rem] mb-16">
              Prepare yourself & let’s explore the{" "}
              <br className="hidden md:block" /> beauty of the world
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 xl:gap-16 justify-center">
            <input
              type="text"
              placeholder="Your Email"
              className="px-8 py-6 rounded-2xl font-bold text-sm outline-none md:flex-1"
            />
            <button className="px-8 py-6 rounded-2xl font-bold text-base bg-bgPrimary text-textWhite">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
