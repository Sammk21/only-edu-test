import React from "react";
import CategoryCard from "../category-cards";

const CategoryTemplate = () => {
  return (
    <div className="container mx-auto bg-white rounded-3xl py-12">
      <div className="sm:px-6 px-3">
        <h1 className="capitalize mb-5 sm:mb-10 font-semibold sm:text-8xl lg:text-9xl tracking-tighter line-clamp-1">
          Only tests
        </h1>
        <div className="sort flex gap-x-2 text-[#115e5d] py-5 overflow-x-scroll">
          <span className="bg-[#fd7c22] px-4 py-2 rounded-full cursor-pointer hover:bg-[#fd7c22] text-white transition-colors ease-in-out border active ">
            Engneering
          </span>
          <span className="bg-[#9dcdd3e0] px-4 py-2 rounded-full cursor-pointer hover:bg-[#fd7c22] hover:text-white transition-colors ease-in-out border">
            Medical
          </span>
          <span className="bg-[#9dced3e0] px-4 py-2 rounded-full cursor-pointer hover:bg-[#fd7c22] hover:text-white transition-colors ease-in-out border">
            Computer
          </span>
          <span className="bg-[#9dced3E0] px-4 py-2 rounded-full cursor-pointer hover:bg-[#fd7c22] hover:text-white transition-colors ease-in-out border">
            Finance
          </span>
        </div>
        <div className="grid xl:grid-cols-3 py-2 gap-3 lg:grid-cols-2 grid-cols-1">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
};

export default CategoryTemplate;
