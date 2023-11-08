import React from "react";

const Subscribe = () => {
  return (
    <section className="container mx-auto">
      <div className="px-4">
        <div className="bg-bgOrange8 px-8 py-16 rounded-3xl">
          <div className="text-center">
            <h3 className="font-bold text-textSecondary text-base leading-5 uppercase tracking-[2px] mb-8">
              subscribe to our newsletter
            </h3>
            <h2 className="text-textBlack font-bold text-3xl mb-16">
              Prepare yourself & let’s explore the beauty of the world
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <input
              type="text"
              placeholder="Your Email"
              className="px-8 py-6 rounded-2xl font-bold text-sm"
            />
            <button className="px-8 py-6 rounded-2xl font-bold text-base bg-bgPrimary text-textWhite outline-none border-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
