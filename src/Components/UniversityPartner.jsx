'use client';
import React, { useContext } from "react";
import { motion } from "framer-motion";
 // Import the language context
import { LanguageContext } from '@/LanguageContext';
const universityLogos = [
  "/uni1.png",
  "/uni2.png",
  "/uni3.jpeg",
  "/uni4.png",
  "/uni5.jpeg",
];

const UniversityPartner = () => {
   const { language } = useContext(LanguageContext);  // Get the current language from the context

  // Define translations for English, Bangla, and Russian
  const translations = {
    en: {
      heading: "Our University Partners",
      description:
        "We collaborate with top universities worldwide to bring you the best education opportunities.",
    },
    bn: {
      heading: "আমাদের বিশ্ববিদ্যালয় সহযোগী",
      description:
        "আমরা বিশ্বের শীর্ষস্থানীয় বিশ্ববিদ্যালয়গুলির সাথে সহযোগিতা করি আপনাকে সেরা শিক্ষা সুযোগ এনে দিতে।",
    },
    ru: {
      heading: "Наши университетские партнеры",
      description:
        "Мы сотрудничаем с ведущими университетами по всему миру, чтобы предоставить вам лучшие образовательные возможности.",
    },
  };

  return (
    <div className="py-16 bg-gradient-to-r from-green-50 to-gray-100 relative overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
            {translations[language].heading} {/* Use the correct language string */}
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
          {translations[language].description} {/* Use the correct language string */}
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
