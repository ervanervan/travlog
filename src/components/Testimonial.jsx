import React, { useState } from "react";
import { DATA_TESTIMONIALS } from "../Data";
import CardTestimonial from "./CardTestimonial";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "./CustomDot";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import bgLayer from "../assets/bg-layer.svg";

export default function Testimonial() {
  const responsive = {
    superLargeDesktop: {
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
    <section className="relative">
      <img
        src={bgLayer}
        alt=""
        draggable={false}
        className="absolute w-full left-0 lg:-top-28 xl:-top-64 2xl:-top-[30rem] object-fill hidden md:block"
      />
      <div className="container mx-auto px-4 lg:px-20 py-8">
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
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          showDots={true}
          customDot={<CustomDot />}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {DATA_TESTIMONIALS.map((testimonial) => {
            return <CardTestimonial key={testimonial.id} {...testimonial} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}
