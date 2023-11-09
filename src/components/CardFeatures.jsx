import React from "react";

export default function CardFeatures({
  title,
  desc,
  iconfeature,
  color,
  border,
}) {
  const containerStyle = { backgroundColor: color };
  const cardClass = border ? "border rounded-3xl" : "";

  return (
    <div
      className={`p-8 border-bgGray ${cardClass} md:flex md:gap-8 md:items-center flex-1`}
    >
      <div
        style={containerStyle}
        className={`w-24 h-24 rounded-3xl flex justify-center items-center mb-8 md:mb-0`}
      >
        <img src={iconfeature} alt="" width={48} height={48} />
      </div>
      <div>
        <h2 className="text-textBlack font-bold text-2xl mb-2">{title}</h2>
        <p className="text-textGray text-base">{desc}</p>
      </div>
    </div>
  );
}
