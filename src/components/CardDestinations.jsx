import React from "react";

export default function CardDestinations({
  title,
  imgUrl,
  location,
  icon,
  price,
  rating,
}) {
  return (
    <div className="py-16">
      <div className="w-80 bg-bgWhite rounded-3xl shadow-lg">
        <div className="h-64 w-full rounded-t-3xl">
          <img
            src={imgUrl}
            alt="destination"
            width={320}
            height={252}
            className="object-cover h-full w-full rounded-t-3xl"
          />
        </div>
        <div className="p-8 text-left">
          <h3 className="text-textSecondary font-bold text-2xl mb-2">
            {price}
          </h3>
          <h2 className="text-textBlack font-bold text-2xl mb-4">{title}</h2>
          <p className="text-textBlack75 text-lg mb-8">{location}</p>
          <p className="flex gap-2 items-center justify-start">
            <span className="text-textOrange font-bold text-2xl">{rating}</span>
            <img
              src={icon}
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 pr-48"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
