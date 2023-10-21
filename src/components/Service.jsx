import React from "react";
import { DATA_CATEGORIES } from "../Data";
import CardCategories from "./CardCategories";

export default function Service() {
  return (
    <section className="container mx-auto">
      <div className="px-4 py-8">
        <div className="text-center">
          <h3 className="font-bold text-textSecondary text-base uppercase mb-4">
            Services
          </h3>
          <h2 className="text-textBlack font-bold text-3xl mb-8">
            Our top value categories for you
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          {DATA_CATEGORIES.map((category) => {
            return <CardCategories key={category.id} {...category} />;
          })}
        </div>
      </div>
    </section>
  );
}
