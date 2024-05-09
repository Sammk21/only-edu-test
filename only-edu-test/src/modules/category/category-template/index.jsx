import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import CategoryCard from "../category-cards";

const categories = [
  {
    name: "Engineering",
    posts: [
      {
        id: 1,
        svg: "",
        title: "Software Engineering",
        subTitle: "Software and programming",
        TestAttempts: "97k",
        rankedYouth: "50k",
      },
      {
        id: 2,
        title: "Mechanical Engineering",
        subTitle: "Wrenches and iron",
        TestAttempts: "45k",
        rankedYouth: "10k",
      },
      {
        id: 3,
        title: "Electronic Engineering",
        subTitle: "Circuits and transistors",
        TestAttempts: "40k",
        rankedYouth: "2k",
      },
      {
        id: 4,
        title: "Automobile Engineering",
        subTitle: "Cars and engines",
        TestAttempts: "10k",
        rankedYouth: "3k",
      },
      {
        id: 5,
        title: "Civil Engineering",
        subTitle: "Structures and infrastructure",
        TestAttempts: "60k",
        rankedYouth: "20k",
      },
      {
        id: 6,
        title: "Aeronautical Engineering",
        subTitle: "Aircraft and aerospace systems",
        TestAttempts: "55k",
        rankedYouth: "15k",
      },
      {
        id: 7,
        title: "Chemical Engineering",
        subTitle: "Reactions and processes",
        TestAttempts: "70k",
        rankedYouth: "25k",
      },
      {
        id: 8,
        title: "Biomedical Engineering",
        subTitle: "Medical devices and systems",
        TestAttempts: "80k",
        rankedYouth: "30k",
      },
    ],
  },
  {
    name: "Medical",
    posts: [
      {
        id: 1,
        title: "M.B.B.S",
        subTitle: "Full stack MBBS",
        TestAttempts: "50k",
        rankedYouth: "4k",
      },
      {
        id: 2,
        title: "Surgical Doc",
        subTitle: "Surgeries and procedures",
        TestAttempts: "40k",
        rankedYouth: "3k",
      },
      {
        id: 3,
        title: "Anesthesiologist",
        subTitle: "Injections and drugs",
        TestAttempts: "30k",
        rankedYouth: "3k",
      },
      {
        id: 4,
        title: "Medical",
        subTitle: "Medicine specialist",
        TestAttempts: "50k",
        rankedYouth: "30k",
      },
    ],
  },
  {
    name: "Finance",
    posts: [
      {
        id: 1,
        title: "Investment Banking",
        subTitle: "Financial markets and investments",
        TestAttempts: "60k",
        rankedYouth: "25k",
      },
      {
        id: 2,
        title: "Accounting",
        subTitle: "Financial statements and bookkeeping",
        TestAttempts: "55k",
        rankedYouth: "20k",
      },
      {
        id: 3,
        title: "Personal Finance",
        subTitle: "Budgeting and saving",
        TestAttempts: "70k",
        rankedYouth: "15k",
      },
      {
        id: 5,
        title: "Financial Analysis",
        subTitle: "Interpreting financial data",
        TestAttempts: "75k",
        rankedYouth: "22k",
      },
      {
        id: 6,
        title: "Financial Modeling",
        subTitle: "Forecasting and decision-making",
        TestAttempts: "85k",
        rankedYouth: "28k",
      },
      {
        id: 7,
        title: "Risk Management",
        subTitle: "Identifying and mitigating financial risks",
        TestAttempts: "90k",
        rankedYouth: "35k",
      },
      {
        id: 8,
        title: "Economics",
        subTitle: "Macroeconomic and microeconomic principles",
        TestAttempts: "80k",
        rankedYouth: "30k",
      },
    ],
  },
  {
    name: "Computers",
    posts: [
      {
        id: 1,
        title: "Computer Science Basics",
        subTitle: "Fundamentals of computing",
        TestAttempts: "80k",
        rankedYouth: "40k",
      },
      {
        id: 2,
        title: "Data Structures & Algorithms",
        subTitle: "Optimizing code and problem-solving",
        TestAttempts: "90k",
        rankedYouth: "35k",
      },
      {
        id: 3,
        title: "Machine Learning",
        subTitle: "Predictive analytics and pattern recognition",
        TestAttempts: "85k",
        rankedYouth: "30k",
      },
    ],
  },
  {
    name: "Miscellaneous",
    posts: [
      {
        id: 1,
        title: "Cooking",
        subTitle: "Recipes and culinary techniques",
        TestAttempts: "20k",
        rankedYouth: "5k",
      },
      {
        id: 2,
        title: "Photography",
        subTitle: "Composition and lighting",
        TestAttempts: "25k",
        rankedYouth: "8k",
      },
      {
        id: 3,
        title: "Fitness",
        subTitle: "Workouts and nutrition",
        TestAttempts: "30k",
        rankedYouth: "10k",
      },
    ],
  },
];

const CategoryTemplate = () => {
  return (
    <div className=" mx-auto bg-[#F5EFE6] border rounded-3xl py-12 shadow-md">
      <div className="sm:px-6 px-3">
        <h1 className="capitalize mb-5 sm:mb-10 font-semibold sm:text-8xl lg:text-9xl tracking-tighter line-clamp-1">
          Only tests
        </h1>
        <TabGroup>
          <div className="sort flex gap-x-2 text-[#115e5d] py-5 overflow-x-scroll">
            <TabList className="flex gap-4">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="bg-[#9dcdd3e0] px-4 py-2 rounded-full cursor-pointer data-[selected]:bg-[#fd7c22] data-[selected]:text-white hover:bg-[#fd7c22] hover:text-white transition-colors ease-in-out border active "
                >
                  {name}
                </Tab>
              ))}
            </TabList>
          </div>
          <TabPanels className="">
            {categories.map(({ name, posts }) => (
              <>
                <TabPanel
                  key={name}
                  className="grid xl:grid-cols-4 py-2 gap-3 lg:grid-cols-2 grid-cols-1"
                >
                  {posts.map((post) => (
                    <CategoryCard key={posts?.id} name={name} posts={post} />
                  ))}
                </TabPanel>
              </>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default CategoryTemplate;
