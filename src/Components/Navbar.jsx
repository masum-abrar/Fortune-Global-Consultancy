"use client";
import React, { useState } from "react";
import { FaWeixin, FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // Default to English

  // Language text options
  const translations = {
    en: {
      location: "Zhenjiang, China",
      phone: "+123 456 7890",
      weChat: "+987 654 3210",
      home: "Home",
      universities: "Universities",
      aboutUs: "About Us",
      applyNow: "Apply Now",
    },
    ru: {
      location: "Чжэньцзян, Китай",
      phone: "+123 456 7890",
      weChat: "+987 654 3210",
      home: "Главная",
      universities: "Университеты",
      aboutUs: "О нас",
      applyNow: "Подать заявку",
    },
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#116361]">
        <div className="bg-[#116361] text-white text-sm py-2 px-6 flex flex-wrap justify-between items-center container max-w-6xl mx-auto">
          {/* Left Side - Location */}
          <div className="flex items-center gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-lg text-blue-400" />
            <span>{translations[language].location}</span>
          </div>

          {/* Center - Phone Numbers & WeChat */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" />
              <span>{translations[language].phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWeixin className="text-green-400 text-lg" />
              <span>{translations[language].weChat}</span>
            </div>
          </div>

          {/* Right Side - Language Dropdown */}
          <div>
            <select
              className="bg-[#107170] text-white px-2 py-1 rounded-md border border-gray-700 outline-none cursor-pointer"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-md absolute w-full z-50">
        <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo & Brand Name */}
          <div className="flex items-center">
            <Image src="/logo.png" width={60} height={40} alt="Fortune Logo" />
            <h1 className="text-2xl font-bold text-gray-800">FORTUNE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-500 transition">{translations[language].home}</a>
            <a href="#" className="hover:text-green-500 transition">{translations[language].universities}</a>
            <a href="#" className="hover:text-green-500 transition">{translations[language].aboutUs}</a>
          </nav>

          {/* Apply Button (Desktop) */}
          <button className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
            {translations[language].applyNow}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden bg-white shadow-md absolute top-16 left-0 w-full transition-all duration-300 ${
            menuOpen ? "opacity-100 visible py-4" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-500 transition">{translations[language].home}</a>
            <a href="#" className="hover:text-green-500 transition">{translations[language].universities}</a>
            <a href="#" className="hover:text-green-500 transition">{translations[language].aboutUs}</a>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
              {translations[language].applyNow}
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
