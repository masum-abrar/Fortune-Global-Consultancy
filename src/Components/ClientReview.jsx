'use client';
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { LanguageContext } from '@/LanguageContext';// Import the language context

const reviews = [
  {
    id: 1,
    name: "Omar Faruq",
    review:
      "Fortune Global completely transformed my life and opened doors I never knew existed! This experience was invaluable!",
    rating: 5,
    image: "https://fortuneglobaledu.com/Home/wp-content/uploads/2024/11/433933684_1795627917611605_4699537154031866690_n.jpg",
  },
  {
    id: 2,
    name: "Siam",
    review:
      "Studying abroad was the best decision I’ve made! The journey has enriched my life beyond measure.",
    rating: 4,
    image: "https://fortuneglobaledu.com/Home/wp-content/uploads/2024/11/Untitled-design-2.png",
  },
  {
    id: 3,
    name: "Raihan Ahmed",
    review:
      "A fantastic service that exceeded my expectations. I will definitely use it again.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
];

const ClientReview = () => {
  const { language } = useContext(LanguageContext); // Get the current language from the context

  // Define translations for English, Bangla, and Russian
  const translations = {
    en: {
      heading: "Client Reviews",
      subheading: "Hear what our happy clients have to say about our services.",
      button: "View All Reviews",
    },
    bn: {
      heading: "ক্লায়েন্ট রিভিউ",
      subheading: "আমাদের সেবা সম্পর্কে আমাদের খুশি ক্লায়েন্টদের কথা শুনুন।",
      button: "সব রিভিউ দেখুন",
    },
    ru: {
      heading: "Раскрываем Ваш Потенциал",
      subheading:
        "В FORTUNE GLOBAL EDU мы помогаем студентам достичь мечты об образовании и карьере. Наши эксперты консультируют по вопросам студенческих виз, работы за границей и подбирают индивидуальные образовательные маршруты.",
      button: "Узнать больше",
    },
  };

  return (
    <div className="py-16 bg-gradient-to-r from-green-50 to-gray-100 relative overflow-hidden">
      {/* Floating Bubbles */}
      <motion.div
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
      />

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl lg:text-6xl font-extrabold text-gray-900 mb-6 relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
            {translations[language].heading} {/* Use the correct language string */}
          </span>
          {/* Enhanced Double Wavy Underline */}
          <svg
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[220px] lg:w-[400px] h-10 wavy-underline"
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
            <path
              d="M0,40 C50,15 150,60 220,40"
              stroke="rgba(16,185,129,0.3)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,30 C50,10 150,50 220,30"
              stroke="url(#underline-gradient)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {translations[language].subheading} {/* Use the correct language string */}
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 relative z-10">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:border-green-500 transition-all overflow-hidden"
          >
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl blur-sm"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl"></div>
            </motion.div>

            {/* Client Image and Name */}
            <div className="flex items-center gap-4 relative z-10">
              <motion.img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-green-500"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {review.name}
                </h3>
                <div className="flex text-yellow-400">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <motion.p
              className="mt-4 text-gray-600 relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {review.review}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* View All Reviews Button */}
      <div className="mt-12 text-center relative z-10">
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {translations[language].button} {/* Use the correct language string */}
        </motion.button>
      </div>
    </div>
  );
};

export default ClientReview;
