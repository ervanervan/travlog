import React from "react";
import imgFeatures from "../assets/image-features.png";
import { DATA_FEATURES } from "../Data";
import CardFeatures from "./CardFeatures";

export default function Features() {
  return (
    <section className="container mx-auto">
      <div className="px-4 md:px-20 py-8">
        <div className="px-8">
          <div className="flex flex-col gap-16 items center">
            <div>
              <img src={imgFeatures} alt="" />
            </div>
            <div className="flex flex-col gap-8 items-center">
              <div className="text-center">
                <h3 className="font-bold text-textSecondary text-base uppercase tracking-[2px] mb-4">
                  Key features
                </h3>
                <h2 className="text-textBlack font-bold text-3xl">
                  We offer best services
                </h2>
                <p className="text-textGray text-base mt-8">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>
              <div className="flex flex-col gap-2">
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
