import React, { useState } from "react";
import { DATA_TESTIMONIALS } from "../Data";
import CardTestimonial from "./CardTestimonial";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "./CustomDot";

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="container mx-auto">
      <div className="px-4 md:px-20 py-8">
        <div className="text-center">
          <h3 className="font-bold text-textSecondary text-base uppercase tracking-[2px] mb-4">
            Testimonials
          </h3>
          <h2 className="text-textBlack font-bold text-3xl mb-8">
            Trust our clients
          </h2>
        </div>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          customDot={<CustomDot />}
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
