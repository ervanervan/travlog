import React from "react";
import imgFeatures from "../assets/image-features.png";
import { DATA_FEATURES } from "../Data";
import CardFeatures from "./CardFeatures";

export default function Features() {
  return (
    <section className="container mx-auto overflow-hidden">
      <div className="px-4 xl:px-20 py-8 md:py-16">
        <div className="px-8 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-6 xl:gap-14 items center">
            <div className="lg:order-2 lg:-mr-32">
              <img src={imgFeatures} alt="" />
            </div>
            <div className="flex flex-col gap-8 md:gap-16 items-center lg:order-1">
              <div className="text-center lg:text-start">
                <h3 className="font-bold text-textSecondary text-base md:text-xl uppercase tracking-[2px] mb-4">
                  Key features
                </h3>
                <h2 className="text-textBlack font-bold text-3xl md:text-4xl">
                  We offer best services
                </h2>
                <p className="text-textGray text-base md:text-lg mt-8">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:w-full">
                {DATA_FEATURES.map((feature) => {
                  return <CardFeatures key={feature.id} {...feature} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
