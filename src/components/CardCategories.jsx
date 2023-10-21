import React from "react";

export default function ({ title, desc, imgUrl }) {
  return (
    <div className="w-80 p-8 flex flex-col justify-center items-center border border-bgLight rounded-3xl">
      <img src={imgUrl} alt="" className="" />
      <h2 className="py-8 font-bold text-2xl text-textBlack">{title}</h2>
      <p className="text-textGray text-lg text-center">{desc}</p>
    </div>
  );
}
