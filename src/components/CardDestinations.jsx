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
    <div className="w-80 bg-bgWhite rounded-3xl shadow-lg">
      <img src={imgUrl} alt="destination" className="w-full" />
      <div className="p-8">
        <h3 className="text-textSecondary font-bold text-xl mb-2">{price}</h3>
        <h2 className="text-textBlack font-bold text-xl mb-4">{title}</h2>
        <p className="text-textBlack75 mb-8">{location}</p>
        <p className="flex gap-2 items-center">
          <span className="text-textOrange font-bold text-xl">{rating}</span>
          <img src={icon} alt="" width={24} height={24} />
        </p>
      </div>
    </div>
  );
}
