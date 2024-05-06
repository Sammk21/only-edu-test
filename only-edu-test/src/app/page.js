import CategoryCard from "@/modules/category-cards";

export default function Home() {
  return (
    <div className=" flex justify-center items-center py-28 bg-gradient-to-r from-orange-100 to-teal-100 overflow-hidden">
      <div className="relative w-[calc(100vw_-_1rem)]   rounded-3xl">
        <div className="h-full w-full ">
          <div className="font-semibold text-[4vw] flex justify-around items-center py-3  h-96  sticky">
            <div className="">
              <h1 className="">Online Test</h1>
              <h3 className="text-gray-400 text-sm">
                Take tests to show off your talent
              </h3>
            </div>
            <div>
              <svg
                width="288"
                height="284"
                viewBox="0 0 288 284"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M107.222 96.2222H54.4444V140.667H107.222V96.2222Z"
                  fill="#5E9E8C"
                />
                <path
                  d="M223.889 174V187.889H260V174H223.889Z"
                  fill="#242424"
                />
                <path
                  d="M98.8889 60.1111H76.6666V90.6667H98.8889V60.1111Z"
                  fill="#ED855F"
                />
                <path
                  d="M107.222 49.0667H76.6666V49H60V60.1111H43.3333V107.244H76.6666V98.2777V60.1111H107.222V49.0667Z"
                  fill="#242424"
                />
                <path
                  d="M165.556 140.667H48.8889V215.706H165.556V140.667Z"
                  fill="#242424"
                />
                <path
                  d="M60 215.667V226.778V249H79.4444V226.778H148.889V249H168.333V226.778V215.667H60Z"
                  fill="#945038"
                />
                <path
                  d="M165.556 126.778H85V140.667H165.556V126.778Z"
                  fill="#ED855F"
                />
                <path
                  d="M223.889 157.333H165.556V170.661V185.111H179.444V249H196.111V185.111V174H223.889V157.333Z"
                  fill="#D63335"
                />
                <path
                  d="M188.25 104.556H107.222V118.444H188.25V104.556Z"
                  fill="#ED855F"
                />
                <path
                  d="M196.111 82.3333H168.333V87.8889H196.111V82.3333Z"
                  fill="white"
                />
                <path
                  d="M179.444 185.111H148.022V215.706H179.444V185.111Z"
                  fill="#242424"
                />
                <path
                  d="M123.889 104.556H107.222V126.778H123.889V104.556Z"
                  fill="#5E9E8C"
                />
                <path
                  d="M196.111 79.5555H168.333V82.3333H196.111V87.8889H165.556V135.061H198.889V87.8889V79.5555H196.111Z"
                  fill="#576355"
                />
                <path
                  d="M182.222 115.667H165.556V132.333H182.222V115.667Z"
                  fill="#ED855F"
                />
              </svg>
            </div>
          </div>
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
                {/* <TestCards /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
