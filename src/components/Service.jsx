import React from "react";
import { DATA_CATEGORIES } from "../Data";
import CardCategories from "./CardCategories";

export default function Service() {
  return (
    <section className="container mx-auto">
      <div className="px-4 xl:px-20 py-8 md:py-16">
        <div className="text-center">
          <h3 className="font-bold text-textSecondary text-base md:text-xl uppercase tracking-[2px] mb-4">
            Services
          </h3>
          <h2 className="text-textBlack font-bold text-3xl md:text-4xl mb-8 xl:mb-16">
            Our top value categories for you
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {DATA_CATEGORIES.map((category) => {
            return <CardCategories key={category.id} {...category} />;
          })}
        </div>
      </div>
    </section>
  );
}
