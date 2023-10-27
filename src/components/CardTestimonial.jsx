import React from "react";

export default function CardTestimonial({
  name,
  work,
  iconTestimonial,
  testimonial,
  imgUrl,
}) {
  return (
    <div className="pt-8 pb-16 px-4">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="w-32 h-32 rounded-full">
          <img
            src={imgUrl}
            alt=""
            width={128}
            height={128}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="text-center">
          <h2 className="mb-8 text-textOrange text-2xl font-bold">
            {name}
            <span className="text-textDark text-[22px]"> / {work}</span>
          </h2>
          <div className="flex gap-4 items-center justify-center">
            <img
              src={iconTestimonial}
              alt=""
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <img
              src={iconTestimonial}
              alt=""
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <img
              src={iconTestimonial}
              alt=""
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <img
              src={iconTestimonial}
              alt=""
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <img
              src={iconTestimonial}
              alt=""
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
        </div>
        <p className="text-textBlack75 text-lg text-center">{testimonial}</p>
      </div>
    </div>
  );
}
