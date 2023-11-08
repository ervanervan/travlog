import React, { useState } from "react";
import { DATA_TESTIMONIALS } from "../Data";
import CardTestimonial from "./CardTestimonial";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? DATA_TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === DATA_TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="container mx-auto">
      <div className="py-8">
        <div className="text-center">
          <h3 className="font-bold text-textSecondary text-base uppercase tracking-[2px] mb-4">
            Testimonials
          </h3>
          <h2 className="text-textBlack font-bold text-3xl mb-8">
            Trust our clients
          </h2>
        </div>
        <Carousel
          swipeable={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          selectedItem={activeIndex}
        >
          {DATA_TESTIMONIALS.map((testimonial) => {
            return <CardTestimonial key={testimonial.id} {...testimonial} />;
          })}
        </Carousel>
        <div className="flex justify-between items-center">
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
    </section>
  );
}
