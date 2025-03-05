'use client'
import React from "react";
import { motion } from "framer-motion";

const universityLogos = [
  "/uni1.png",
  "/uni2.png",
  "/uni3.jpeg",
  "/uni4.png",
  "/uni5.jpeg",
];

const UniversityPartner = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-green-50 to-gray-100 relative overflow-hidden">
      {/* Floating Bubbles */}
      {/* <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 bg-green-300 rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-32 h-32 bg-green-400 rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      /> */}

      {/* Section Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
            Our University Partners
          </span>
          {/* Wavy Underline */}
          <svg
      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[380px] lg:w-[430px] h-10 wavy-underline"
      viewBox="0 0 220 50"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" /> {/* Green-500 */}
          <stop offset="100%" stopColor="#059669" /> {/* Green-700 */}
        </linearGradient>
      </defs>
      {/* First Layer (Bottom) */}
      <path
        d="M0,40 C50,15 150,60 220,40"
        stroke="rgba(16,185,129,0.3)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Second Layer (Top) */}
      <path
        d="M0,30 C50,10 150,50 220,30"
        stroke="url(#underline-gradient)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
          We collaborate with top universities worldwide to bring you the best education opportunities.
        </p>
      </div>

      {/* Scrolling Logo Section */}
      <div className="overflow-hidden relative w-screen">
  {/* First Scrolling Row */}
  <motion.div
    className="flex gap-x-6 flex-nowrap min-w-max"
    initial={{ x: "100%" }}
    animate={{ x: "-100%" }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
  >
    {universityLogos.concat(universityLogos).map((logo, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.1 }}
        className="bg-white/80 backdrop-blur-lg shadow-lg rounded-full p-4 flex justify-center items-center 
                   sm:w-24 sm:h-24 w-20 h-20 overflow-hidden"
      >
        <img 
          src={logo} 
          alt={`University ${index}`} 
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
    ))}
  </motion.div>

  {/* Second Scrolling Row (Reverse Direction) */}
  <motion.div
    className="flex gap-x-6 flex-nowrap min-w-max mt-4"
    initial={{ x: "-100%" }}
    animate={{ x: "100%" }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
  >
    {universityLogos.concat(universityLogos).map((logo, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.1 }}
        className="bg-white/80 backdrop-blur-lg shadow-lg rounded-full p-4 flex justify-center items-center 
                   sm:w-24 sm:h-24 w-20 h-20 overflow-hidden"
      >
        <img 
          src={logo} 
          alt={`University ${index}`} 
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
    ))}
  </motion.div>
</div>


    </div>
  );
};

export default UniversityPartner;