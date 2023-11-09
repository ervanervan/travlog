import React, { useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
            <Carousel
              swipeable={false}
              showArrows={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              selectedItem={activeIndex}
            >
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
