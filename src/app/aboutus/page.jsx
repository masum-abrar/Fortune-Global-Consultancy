'use client'
import React, { useState } from 'react';
import { FaGraduationCap, FaGlobe, FaHandshake, FaUserTie, FaChartLine, FaUniversity } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdWorkOutline, MdOutlineEmojiEvents } from 'react-icons/md';

const AboutUs = () => {
  const [language, setLanguage] = useState('en');

  // Translations object
  const translations = {
    en: {
      heroTitle: "Transform Your Future With Global Education",
      heroSubtitle: "At FORTUNE GLOBAL EDU, we don't just process applications - we craft success stories across 15+ countries.",
      ctaButton: "Start Your Journey →",
      ourStory: "Our Story",
      storyText1: "Founded in 2010, FORTUNE GLOBAL EDU emerged from a simple idea: education should have no borders. What began as a small consultancy has blossomed into a global network helping thousands of students achieve their dreams.",
      storyText2: "We combine cutting-edge technology with human expertise to create personalized pathways for each student's unique aspirations.",
      partnerInstitutions: "200+ Partner Institutions",
      awardWinning: "Award-Winning Service",
      support24: "24/7 Support",
      countries: "15+ Countries",
      whyChooseUs: "WHY CHOOSE US",
      successBlueprint: "Your Success Is Our Blueprint",
      expertGuidance: "Expert Guidance",
      expertDesc: "Our team includes former admissions officers and visa specialists with insider knowledge.",
      trustedPartnerships: "Trusted Partnerships",
      trustedDesc: "Exclusive agreements with top universities mean better opportunities for our students.",
      provenResults: "Proven Results",
      provenDesc: "95% visa approval rate with 1000+ successful placements in the last year alone.",
      ourServices: "OUR SERVICES",
      comprehensiveSupport: "Comprehensive Support at Every Step",
      universityAdmissions: "University Admissions",
      admissionsDesc: "Strategic selection of programs that align with your goals and maximize admission chances.",
      workVisas: "Post-Study Work Visas",
      workDesc: "Guidance on countries with the best work opportunities after graduation.",
      scholarshipAssistance: "Scholarship Assistance",
      scholarshipDesc: "Access to exclusive scholarships and financial aid options.",
      departureBriefing: "Pre-Departure Briefing",
      departureDesc: "Comprehensive orientation to ensure you're prepared for life abroad.",
      studentsGuided: "Students Guided",
      visaSuccess: "Visa Success",
      yearsExperience: "Years Experience",
      beginJourney: "Begin Your Global Education Journey Today",
      scheduleConsultation: "Schedule a free consultation with our experts and take the first step toward your international education.",
      bookConsultation: "Book Free Consultation",
      contactTeam: "Contact Our Team"
    },
    ru: {
      heroTitle: "Измените свое будущее с глобальным образованием",
      heroSubtitle: "В FORTUNE GLOBAL EDU мы не просто обрабатываем заявки - мы создаем истории успеха в более чем 15 странах.",
      ctaButton: "Начните свой путь →",
      ourStory: "Наша история",
      storyText1: "Основанная в 2010 году, FORTUNE GLOBAL EDU возникла из простой идеи: образование не должно иметь границ. То, что начиналось как небольшое консультационное агентство, превратилось в глобальную сеть, помогающую тысячам студентов достичь своей мечты.",
      storyText2: "Мы сочетаем передовые технологии с человеческим опытом, чтобы создать индивидуальные пути для уникальных устремлений каждого студента.",
      partnerInstitutions: "200+ партнерских учреждений",
      awardWinning: "Награжденный сервис",
      support24: "Поддержка 24/7",
      countries: "15+ стран",
      whyChooseUs: "ПОЧЕМУ МЫ",
      successBlueprint: "Ваш успех - наш план",
      expertGuidance: "Экспертное руководство",
      expertDesc: "В нашу команду входят бывшие сотрудники приемных комиссий и специалисты по визам с инсайдерскими знаниями.",
      trustedPartnerships: "Проверенные партнерства",
      trustedDesc: "Эксклюзивные соглашения с ведущими университетами означают лучшие возможности для наших студентов.",
      provenResults: "Проверенные результаты",
      provenDesc: "95% успешных виз и более 1000 успешных размещений только в прошлом году.",
      ourServices: "НАШИ УСЛУГИ",
      comprehensiveSupport: "Всесторонняя поддержка на каждом этапе",
      universityAdmissions: "Поступление в университеты",
      admissionsDesc: "Стратегический выбор программ, соответствующих вашим целям и максимизирующих шансы на поступление.",
      workVisas: "Рабочие визы после учебы",
      workDesc: "Руководство по странам с лучшими возможностями для работы после окончания учебы.",
      scholarshipAssistance: "Помощь с стипендиями",
      scholarshipDesc: "Доступ к эксклюзивным стипендиям и вариантам финансовой помощи.",
      departureBriefing: "Предвыездной инструктаж",
      departureDesc: "Всесторонняя ориентация, чтобы убедиться, что вы готовы к жизни за границей.",
      studentsGuided: "Студентов направлено",
      visaSuccess: "Успешных виз",
      yearsExperience: "Лет опыта",
      beginJourney: "Начните свой путь к глобальному образованию сегодня",
      scheduleConsultation: "Запланируйте бесплатную консультацию с нашими экспертами и сделайте первый шаг к международному образованию.",
      bookConsultation: "Бесплатная консультация",
      contactTeam: "Связаться с нами"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Language Selector - You can move this to your navbar */}
      <div className="flex justify-end p-4">
        <select
          className='bg-[#107170] px-2 py-1 border border-gray-700 rounded-md outline-none text-white cursor-pointer'
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          <option value='en'>English</option>
          <option value='ru'>Русский</option>
        </select>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-95"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {t.heroTitle} <span className="text-emerald-200">{language === 'en' ? 'With Global Education' : 'С глобальным образованием'}</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl leading-relaxed">
              {t.heroSubtitle}
            </p>
            <button className="mt-8 bg-white text-emerald-700 hover:bg-emerald-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              {t.ctaButton}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl z-10 relative">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.ourStory}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.storyText1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.storyText2}
              </p>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full opacity-70"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-300 rounded-full opacity-50"></div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-emerald-500 p-6 rounded-2xl text-white flex flex-col items-center justify-center text-center shadow-lg">
              <FaUniversity className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold">{t.partnerInstitutions}</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center">
              <MdOutlineEmojiEvents className="text-emerald-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{t.awardWinning}</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center">
              <RiCustomerService2Fill className="text-emerald-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{t.support24}</h3>
            </div>
            <div className="bg-emerald-600 p-6 rounded-2xl text-white flex flex-col items-center justify-center text-center shadow-lg">
              <FaGlobe className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold">{t.countries}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 md:px-10 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-semibold">{t.whyChooseUs}</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">{t.successBlueprint}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaUserTie className="text-emerald-500 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">{t.expertGuidance}</h3>
              <p className="text-center text-gray-600">{t.expertDesc}</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaHandshake className="text-emerald-500 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">{t.trustedPartnerships}</h3>
              <p className="text-center text-gray-600">{t.trustedDesc}</p>
            </div>
            
            <div className="bg-emerald-500 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-white">
              <div className="w-16 h-16 bg-white text-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaChartLine className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-white">{t.provenResults}</h3>
              <p className="text-center text-emerald-100">{t.provenDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-semibold">{t.ourServices}</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">{t.comprehensiveSupport}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-6">
              <div className="bg-emerald-100 group-hover:bg-emerald-500 group-hover:text-white p-4 rounded-xl transition-all duration-300">
                <FaGraduationCap className="text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">{t.universityAdmissions}</h3>
                <p className="text-gray-600">{t.admissionsDesc}</p>
              </div>
            </div>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-6">
              <div className="bg-emerald-100 group-hover:bg-emerald-500 group-hover:text-white p-4 rounded-xl transition-all duration-300">
                <MdWorkOutline className="text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">{t.workVisas}</h3>
                <p className="text-gray-600">{t.workDesc}</p>
              </div>
            </div>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-6">
              <div className="bg-emerald-100 group-hover:bg-emerald-500 group-hover:text-white p-4 rounded-xl transition-all duration-300">
                <FaGlobe className="text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">{t.scholarshipAssistance}</h3>
                <p className="text-gray-600">{t.scholarshipDesc}</p>
              </div>
            </div>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-6">
              <div className="bg-emerald-100 group-hover:bg-emerald-500 group-hover:text-white p-4 rounded-xl transition-all duration-300">
                <RiCustomerService2Fill className="text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">{t.departureBriefing}</h3>
                <p className="text-gray-600">{t.departureDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-4 md:px-10 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 bg-emerald-900 opacity-80"></div>
        <div className="relative max-w-6xl mx-auto z-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold mb-2 text-emerald-300">5,000+</div>
              <div className="text-lg font-medium">{t.studentsGuided}</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2 text-emerald-300">95%</div>
              <div className="text-lg font-medium">{t.visaSuccess}</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2 text-emerald-300">15+</div>
              <div className="text-lg font-medium">{t.countries}</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2 text-emerald-300">10+</div>
              <div className="text-lg font-medium">{t.yearsExperience}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-emerald-500 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.beginJourney}</h2>
          <p className="text-xl text-emerald-100 mb-8">
            {t.scheduleConsultation}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 hover:bg-emerald-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              {t.bookConsultation}
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              {t.contactTeam}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;