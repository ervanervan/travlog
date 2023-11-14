import React, { useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DATA_DESTINATIONS } from "../Data";
import CardDestinations from "./CardDestinations";

export default function Destination() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? DATA_DESTINATIONS.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === DATA_DESTINATIONS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="container mx-auto">
      <div className="px-4 xl:px-20 py-8 md:py-16">
        <div className="text-center xl:text-start">
          <div className="xl:flex xl:items-center xl:justify-between">
            <div>
              <h3 className="font-bold text-textSecondary text-base md:text-xl uppercase tracking-[2px] mb-4">
                Top Destination
              </h3>
              <h2 className="text-textBlack font-bold text-3xl md:text-4xl mb-8">
                Explore top destinations
              </h2>
            </div>
            <div className="flex justify-between md:justify-center md:gap-8 items-center">
              <button
                onClick={handlePrev}
                className="p-6 rounded-full bg-bgWhite border border-bgGray"
              >
                <ArrowLongLeftIcon className="h-6 w-6 text-slate-900" />
              </button>
              <button
                onClick={handleNext}
                className="p-6 rounded-full bg-bgPrimary"
              >
                <ArrowLongRightIcon className="h-6 w-6 text-textWhite" />
              </button>
            </div>
          </div>
          <div>
            <Carousel responsive={responsive}>
              {DATA_DESTINATIONS.map((destination) => (
                <CardDestinations key={destination.id} {...destination} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
