import { BentoGridDemo } from "@/modules/bento-grid";
import CategoryCard from "@/modules/category/category-cards";
import CategoryTemplate from "@/modules/category/category-template";
import Hero, { BentoGrid } from "@/modules/hero";
import LandingPage from "@/modules/landing";
import { HeroBackgroundSvg } from "@/modules/landing/svg/svg";
import Testemonials from "@/modules/testemonials";

export default function Home() {
  return (
    <div className=" relative flex justify-center items-center py-28   overflow-x-hidden">
      <HeroBackgroundSvg />
      <div className="relative w-[calc(100vw_-_1rem)]  rounded-3xl">
        <div className="h-full w-full">
          <LandingPage />
          {/* <BentoGridDemo /> */}
          <CategoryTemplate />
          <Testemonials />
        </div>
      </div>
    </div>
  );
}
