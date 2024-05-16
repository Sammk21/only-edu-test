"use client";
import { categories } from "@/modules/category/category-template";
import TestCards from "@/modules/test-cards";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const cat = categories;
  const params = useParams();
  const [mainTitle, setMainTitle] = useState("");

  function getTestsByPostId(postId, slug) {
    const tests = [];
    cat.forEach((category) => {
      category.posts.forEach((post) => {
        const slugMatch = post.title.split(" ").join("");
        if (slugMatch == slug && post.id == postId) {
          tests.push(...post.tests);
        }
      });
    });
    return tests;
  }

  const newTests = getTestsByPostId(params.id, params.slug);

  return (
    <div className=" text-center py-28  overflow-hidden">
      <div className="flex flex-col gap-y-3 py-5 px-3 text-dark dark:text-light">
        <h1 className="capitalize  font-semibold sm:text-6xl lg:text-7xl tracking-tighter text-3xl m-0">
          {mainTitle || "subcategory"}
        </h1>
        <p>Designing the Future, One Blueprint at a Time.</p>
      </div>
      <div className="px-2  py-6 rounded-3xl">
        <div className="grid xl:grid-cols-4 py-2 gap-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 container mx-auto">
          {newTests.map((test) => (
            <TestCards key={test.id} test={test} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
