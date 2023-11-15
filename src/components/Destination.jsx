import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DATA_DESTINATIONS } from "../Data";
import CardDestinations from "./CardDestinations";
import CustomDot from "./CustomDot";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";

export default function Destination() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1279, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
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
          </div>
          <div>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1500}
              showDots={true}
              customDot={<CustomDot />}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
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
