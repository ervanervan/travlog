import React from "react";
import { DATA_TRAVELPOINT } from "../Data";
import CardTravelPoint from "./CardTravelPoint";
import imgTravelPoint from "../assets/image-travelpoint.png";

export default function TravelPoint() {
  return (
    <section className="container mx-auto">
      <div className="px-4 py-8">
        <div className="flex flex-col gap-16 items-center justify-center">
          <div>
            <img src={imgTravelPoint} alt="" className="w-full" />
          </div>
          <div>
            <div className="text-center">
              <h3 className="font-bold text-textSecondary text-base uppercase tracking-[2px] mb-4">
                Travel Point
              </h3>
              <h2 className="text-textBlack font-bold text-3xl">
                We helping you find your dream location
              </h2>
              <p className="text-textGray text-base my-8">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
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
