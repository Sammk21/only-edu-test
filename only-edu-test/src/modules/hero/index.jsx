"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1498631906572-66c58d46ecf7?q=80&w=3383&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Engineering",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Medical",
  },
  {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=3411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Finance",
  },
  // Add more slides as needed
];

const Hero = () => {
  return (
    <div className="font-semibold text-[4vw] flex items-center py-3 sticky justify-center">
      <Swiper
        speed={700}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={1.2}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-auto lg:aspect-video h-[50vh] sm:h-[80vh] relative">
              <Image
                src={slide.src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="object-cover object-center rounded-3xl"
                style={{ filter: "brightness(50%)" }} // Adjust image brightness
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                {slide.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;

{
  /* <div className="">
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
          <path d="M223.889 174V187.889H260V174H223.889Z" fill="#242424" />
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
      </div> */
}
