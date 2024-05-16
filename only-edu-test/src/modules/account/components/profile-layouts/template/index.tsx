"use client";
import React, { Suspense, useState } from "react";
import AccountNav from "../../account-nav";
import MyAccount from "../components/MyAccount";
import AttemptedTests from "../components/AttemptedTests";
import OrderHistory from "../components/OrderHistory";

import MyTests from "../components/MyTests";
import { PiExamFill } from "react-icons/pi";

interface Tab {
  id: number;
  name: string;
  icons: React.ReactNode;
}

const tabs: Tab[] = [
  {
    id: 1,
    name: "My Tests",
    icons: <PiExamFill className="h-4 w-4 text-[#115e5d] " />,
  },
  {
    id: 2,
    name: "Attempted Tests",
    icons: <PiExamFill className="h-4 w-4 text-[#115e5d] " />,
  },
  {
    id: 3,
    name: "Order history",
    icons: <PiExamFill className="h-4 w-4 text-[#115e5d] " />,
  },
  {
    id: 4,
    name: "My Accounts",
    icons: <PiExamFill className="h-4 w-4 text-[#115e5d] " />,
  },
];

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const [activeId, setActiveId] = useState(tabs[0].id);

  const handleTabChange = (name: string, id: number) => {
    setSelectedTab(name);
    setActiveId(id);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <AccountNav
          handleTabChange={handleTabChange}
          tabs={tabs}
          selectedTab={selectedTab}
          activeId={activeId}
        />
        <div className="py-8">
          <section className="sm:grid flex flex-col grid-cols-8 w-full  gap-4 col-span-4">
            <div className="col-span-2 rounded-2xl bg-white">hello</div>
            {/* Suspense boundary with SkeletonLoader */}{" "}
            <div className="col-span-4 bg-white rounded-xl">
              <Suspense fallback={<Loader />}>
                {selectedTab === "My Tests" ? (
                  <MyTests />
                ) : selectedTab === "Attempted Tests" ? (
                  <AttemptedTests />
                ) : selectedTab === "Order history" ? (
                  <OrderHistory />
                ) : selectedTab === "My Accounts" ? (
                  <MyAccount />
                ) : null}
              </Suspense>
            </div>
            <div className="col-span-2 bg-white"> hello</div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TabComponent;
