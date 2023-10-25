import React from "react";

export default function CardFeatures({ title, desc, iconfeature, color }) {
  const containerStyle = { backgroundColor: color };

  return (
    <div className="p-8 border border-bgGray rounded-3xl">
      <div
        style={containerStyle}
        className="w-24 h-24 rounded-3xl flex justify-center items-center mb-8"
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
