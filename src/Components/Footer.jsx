'use client';
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LanguageContext } from '@/LanguageContext';

const Footer = () => {
  const { language } = useContext(LanguageContext); 

  const translations = {
    en: {
      aboutUs: "About Us",
      aboutDesc: "We are dedicated to providing the best service and solutions for our clients.",
      quickLinks: "Quick Links",
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      followUs: "Follow Us",
      copyright: `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
    },
    bn: {
      aboutUs: "আমাদের সম্পর্কে",
      aboutDesc: "আমরা আমাদের ক্লায়েন্টদের জন্য সর্বোত্তম সেবা ও সমাধান প্রদানে নিবেদিত।",
      quickLinks: "দ্রুত লিঙ্ক",
      home: "হোম",
      services: "সেবা",
      about: "আমাদের সম্পর্কে",
      contact: "যোগাযোগ",
      followUs: "আমাদের অনুসরণ করুন",
      copyright: `© ${new Date().getFullYear()} আপনার কোম্পানি। সর্বস্বত্ব সংরক্ষিত।`,
    },
    ru: {
      aboutUs: "О нас",
      aboutDesc: "Мы стремимся предоставить наилучшие услуги и решения для наших клиентов.",
      quickLinks: "Быстрые ссылки",
      home: "Главная",
      services: "Услуги",
      about: "О нас",
      contact: "Контакты",
      followUs: "Подписывайтесь на нас",
      copyright: `© ${new Date().getFullYear()} Ваша компания. Все права защищены.`,
    },
  };

  const t = translations[language];

  return (
    <footer className="relative bg-[#116361] text-white py-12 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/10 rounded-full"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold">{t.aboutUs}</h3>
            <p className="text-sm text-gray-300">{t.aboutDesc}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold">{t.quickLinks}</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">{t.home}</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">{t.services}</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">{t.about}</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">{t.contact}</a></li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold">{t.followUs}</h3>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full h-px bg-gray-700 my-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-gray-300"
        >
          {t.copyright}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
