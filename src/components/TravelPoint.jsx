import React from "react";
import { DATA_TRAVELPOINT } from "../Data";
import CardTravelPoint from "./CardTravelPoint";
import imgTravelPoint from "../assets/image-travelpoint.png";

export default function TravelPoint() {
  return (
    <section className="container mx-auto">
      <div className="px-4 xl:px-20 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-center">
          <div className="lg:-ml-10 xl:-ml-[7.25rem] lg:flex-1">
            <img
              src={imgTravelPoint}
              alt=""
              draggable={false}
              className="w-full"
            />
          </div>
          <div className="lg:w-[46%] xl:w-[40%]">
            <div className="text-center lg:text-start">
              <h3 className="font-bold text-textSecondary text-base md:text-xl uppercase tracking-[2px] mb-4">
                Travel Point
              </h3>
              <h2 className="text-textBlack font-bold text-3xl md:text-4xl">
                We helping you find your dream location
              </h2>
              <p className="text-textGray text-base md:text-lg my-8 md:mb-16">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8">
              {DATA_TRAVELPOINT.map((travelpoint) => {
                return (
                  <CardTravelPoint key={travelpoint.id} {...travelpoint} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
