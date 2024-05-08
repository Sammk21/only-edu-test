import CategoryCard from "@/modules/category/category-cards";
import CategoryTemplate from "@/modules/category/category-template";
import Hero from "@/modules/hero";
import Testemonials from "@/modules/testemonials";

export default function Home() {
  return (
    <div className=" flex justify-center items-center py-28 bg-gradient-to-r from-orange-100 to-teal-100 overflow-hidden">
      <div className="relative w-[calc(100vw_-_1rem)]  rounded-3xl">
        <div className="h-full w-full ">
          <Hero />
          <CategoryTemplate />
          <Testemonials />
        </div>
      </div>
    </div>
  );
}
