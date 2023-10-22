import React from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";
import { DATA_DESTINATIONS } from "../Data";
import CardDestinations from "./CardDestinations";

export default function Destination() {
  return (
    <section className="container mx-auto">
      <div className="px-4 py-8">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="text-center">
            <h3 className="font-bold text-textSecondary text-base uppercase mb-4">
              Top Destination
            </h3>
            <h2 className="text-textBlack font-bold text-3xl mb-8">
              Explore top destination
            </h2>
            <div className="flex justify-between items-center">
              <button className="p-6 rounded-full bg-bgWhite border border-bgGray">
                <ArrowLongLeftIcon className="h-6 w-6 text-slate-900" />
              </button>
              <button className="p-6 rounded-full bg-bgPrimary">
                <ArrowLongRightIcon className="h-6 w-6 text-textWhite" />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            {DATA_DESTINATIONS.map((destination) => {
              return <CardDestinations key={destination.id} {...destination} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
