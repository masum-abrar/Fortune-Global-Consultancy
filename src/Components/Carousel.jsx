"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Carousel = () => {
    const slides = [
        {
          id: 1,
          title: "FORTUNE GLOBAL EDU",
          description: "Your Gateway to Studying in China",
          image: "https://i.ibb.co/04JLfp9/Whats-App-Image-2025-02-28-at-2-29-18-AM.jpg",
        },
        {
          id: 2,
          title: "Experience World-Class Education",
          description: "Join a diverse community of learners and professionals in China.",
          image: "https://i.ibb.co/tpmQN09w/entrepreneurs-meeting-office.jpg",
        },
        {
          id: 3,
          title: "Your Success Starts Here",
          description: "Get the guidance you need for a brighter future by studying at the best universities in China.",
          image: "https://i.ibb.co/tpmQN09w/entrepreneurs-meeting-office.jpg",
        },
      ];
      
  return (
    <div className="relative w-full h-[80vh]">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        speed={1000}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[90vh]">
              {/* Background Image with Next.js Optimization */}
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority
                className="absolute inset-0 bg-black bg-opacity-50"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 opacity-100 group-hover:opacity-0"></div>

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-6xl mb-4 lg:mb-6">
                  {slide.title}
                </h1>
                <p className="text-white text-sm sm:text-lg lg:text-xl max-w-2xl">
                  {slide.description}
                </p>
                <button className="bg-green-500 mt-5 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
                  Apply Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots Below the Slider */}
   
    </div>
  );
};

export default Carousel;
