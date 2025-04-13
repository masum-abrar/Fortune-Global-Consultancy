'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaGraduationCap, FaGlobe, FaFlask, FaBriefcase, FaBook } from 'react-icons/fa';
import { LanguageContext } from '@/LanguageContext';

const University = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      heading1: "Featured",
      heading2: "Universities",
      description: "Explore top universities offering world-class education in Science, Business, Engineering, and Humanities.",
      showAll: "Show All Universities",
      subjects: {
        Science: "Science",
        Engineering: "Engineering",
        Business: "Business",
        Humanities: "Humanities",
      },
    },
    bn: {
      heading1: "বৈশিষ্ট্যযুক্ত",
      heading2: "বিশ্ববিদ্যালয়সমূহ",
      description: "বিজ্ঞান, ব্যবসা, প্রকৌশল এবং মানবিক বিষয়ে বিশ্বমানের শিক্ষা প্রদানকারী শীর্ষস্থানীয় বিশ্ববিদ্যালয়গুলি অন্বেষণ করুন।",
      showAll: "সকল বিশ্ববিদ্যালয় দেখুন",
      subjects: {
        Science: "বিজ্ঞান",
        Engineering: "প্রকৌশল",
        Business: "ব্যবসা",
        Humanities: "মানবিক",
      },
    },
    ru: {
      heading1: "Избранные",
      heading2: "Университеты",
      description: "Изучите лучшие университеты, предлагающие обучение мирового уровня в области науки, бизнеса, инженерии и гуманитарных наук.",
      showAll: "Показать все университеты",
      subjects: {
        Science: "Наука",
        Engineering: "Инженерия",
        Business: "Бизнес",
        Humanities: "Гуманитарные науки",
      },
    },
  };

  const t = translations[language];

  const universities = [
    {
      name: {
        en: 'North West Polytechnic University',
        ru: 'Северо-Западный политехнический университет',
      },
      location: 'Xi\'an, China',
      description: {
        en: 'A leading institution in engineering and technology education.',
        ru: 'Ведущее учебное заведение в области инженерного и технического образования.',
      },
      image: 'https://chinacampus.ru/wp-content/uploads/2018/01/HEJLUNTSZYANSKIJ-UNIVERSITET.jpg',
      subjects: ['Science', 'Engineering'],
    },
    {
      name: {
        en: 'Tianjin University',
        ru: 'Тяньцзиньский университет',
      },
      location: 'Tianjin, China',
      description: {
        en: 'One of the oldest and most prestigious universities in China.',
        ru: 'Один из самых старых и престижных университетов Китая.',
      },
      image: 'https://studychina.chinaservicesinfo.com/studychinaapp/static/focusPics/UC_00040.jpg',
      subjects: ['Business', 'Humanities'],
    },
    {
      name: {
        en: 'Xi\'an Jiaotong University',
        ru: 'Сианьский транспортный университет',
      },
      location: 'Xi\'an, China',
      description: {
        en: 'A top-tier university known for its research and innovation.',
        ru: 'Университет высшего уровня, известный своими исследованиями и инновациями.',
      },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMt2R50ozOVg9J7ZcAf9I8qNyBeijrjnKxg&s',
      subjects: ['Science', 'Engineering', 'Business'],
    },
    {
      name: {
        en: 'Peking University',
        ru: 'Пекинский университет',
      },
      location: 'Beijing, China',
      description: {
        en: 'A world-renowned university with a rich history and academic excellence.',
        ru: 'Всемирно известный университет с богатой историей и академическим превосходством.',
      },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmniKFsLOkFaXNGf_R3mYrMuycU_Hf-3Zwg&s',
      subjects: ['Humanities', 'Science'],
    },
    {
      name: {
        en: 'Tsinghua University',
        ru: 'Цинхуа университет',
      },
      location: 'Beijing, China',
      description: {
        en: 'A global leader in science, engineering, and technology.',
        ru: 'Мировой лидер в области науки, инженерии и технологий.',
      },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuW7W0NMRibjwjkzPdPtOWBaemsHNNOzntw&s',
      subjects: ['Engineering', 'Business'],
    },
    {
      name: {
        en: 'Fudan University',
        ru: 'Фуданьский университет',
      },
      location: 'Shanghai, China',
      description: {
        en: 'A prestigious university known for its comprehensive academic programs.',
        ru: 'Престижный университет, известный своими комплексными академическими программами.',
      },
      image: 'https://mcdonnell.wustl.edu/app/uploads/2020/10/Fudan-University.jpg',
      subjects: ['Humanities', 'Business'],
    },
  ];

  const subjectIcons = {
    Science: <FaFlask className="w-5 h-5 text-green-600" />,
    Engineering: <FaBriefcase className="w-5 h-5 text-green-600" />,
    Business: <FaGraduationCap className="w-5 h-5 text-green-600" />,
    Humanities: <FaBook className="w-5 h-5 text-green-600" />,
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-gray-100 py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-5xl font-extrabold mb-4">
          <span className="text-green-500">{t.heading1}</span>
          <span className="text-black ml-3">{t.heading2}</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
          {t.description}
        </p>
      </div>

      {/* University Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {universities.map((university, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative h-60">
              <img
                src={university.image}
                alt={university.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center space-x-2">
                <FaGlobe className="w-4 h-4" />
                <span>{university.location}</span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2"> {university.name[language]}</h3>
              <p className="text-gray-700 mb-4"> {university.description[language]}</p>
              <div className="flex flex-wrap gap-2">
                {university.subjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full flex items-center space-x-2"
                  >
                    {subjectIcons[subject]}
                    <span>{t.subjects[subject]}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <div className="mt-12 text-center">
        <Link href="/AllUniversity">
          <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            {t.showAll}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default University;
