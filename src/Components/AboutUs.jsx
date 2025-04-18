'use client';
import Image from 'next/image';
import { FaGraduationCap, FaGlobe, FaHandsHelping } from 'react-icons/fa';
import { useLanguage } from '@/LanguageContext';

const AboutUs = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      heading: 'Empowering Your Future',
      description: 'At FORTUNE GLOBAL EDU, we guide students toward their dream education and career. Our expert consultants assist with student visas, work abroad opportunities, and tailored educational pathways.',
      features: ['Expert Guidance', 'Global Reach', 'Trusted Support'],
      learnMore: 'Learn More',
    },
    ru: {
      heading: 'Раскрываем Ваш Потенциал',
      description: 'В FORTUNE GLOBAL EDU мы помогаем студентам достичь мечты об образовании и карьере. Наши эксперты консультируют по вопросам студенческих виз, работы за границей и подбирают индивидуальные образовательные маршруты.',
      features: ['Профессиональное Руководство', 'Мировой Охват', 'Надежная Поддержка'],
      learnMore: 'Узнать больше',
    }
  };

  const t = translations[language];

  return (
    <section className="relative bg-gradient-to-r from-green-50 to-gray-100 py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-green-300 rounded-full opacity-20 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-float animation-delay-4000"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-green-500 rounded-full opacity-20 animate-float animation-delay-3000"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-float animation-delay-5000"></div>

      {/* Dotted Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#ddd_1px,_transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        {/* Image Section */}
        <div className="relative w-full">
          <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/about-us.jpg"
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-green-500 opacity-20 rounded-full animate-float"></div>
        </div>

        {/* Content Section */}
        <div className="w-full text-center md:text-left relative">
          <h2 className="text-3xl lg:text-6xl font-extrabold text-gray-800 leading-tight relative">
            <span className="text-green-600">{t.heading.split(' ')[0]}</span> {t.heading.split(' ').slice(1).join(' ')}
            <div className="absolute -bottom-3 left-1/2 md:left-0 w-28 h-2 bg-green-500"></div>
          </h2>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            {t.description}
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
              <FaGraduationCap className="text-green-600 text-5xl" />
              <span className="text-gray-800 text-lg font-semibold">{t.features[0]}</span>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
              <FaGlobe className="text-green-600 text-5xl" />
              <span className="text-gray-800 text-lg font-semibold">{t.features[1]}</span>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
              <FaHandsHelping className="text-green-600 text-5xl" />
              <span className="text-gray-800 text-lg font-semibold">{t.features[2]}</span>
            </div>
          </div>
          <button className="mt-10 px-8 py-4 bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-bold rounded-xl shadow-lg hover:scale-105 transition-all">
            {t.learnMore}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
