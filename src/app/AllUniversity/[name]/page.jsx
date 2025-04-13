'use client'
import Navbar from '@/Components/Navbar';
import { useParams } from 'next/navigation';
import { LanguageContext } from '@/LanguageContext';
import { FaGlobe, FaBookOpen, FaArrowLeft, FaPhone, FaEnvelope, FaUniversity,FaGraduationCap,  FaFlask, FaBriefcase, FaBook, FaSearch  } from 'react-icons/fa';

import { useContext } from 'react';
 // Import the university list
 const universities = [
    {
        name: {
            en: 'North West Polytechnic University',
            ru: 'Северо-западный политехнический университет',
        },
        location: "Xi'an, China",
        description: {
            en: 'A leading institution in engineering and technology education.',
            ru: 'Ведущее учебное заведение в области инженерного дела и технологий.',
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
            ru: 'Один из старейших и самых престижных университетов Китая.',
        },
        image: 'https://studychina.chinaservicesinfo.com/studychinaapp/static/focusPics/UC_00040.jpg',
        subjects: ['Business', 'Humanities'],
    },
    {
        name: {
            en: "Xi'an Jiaotong University",
            ru: 'Сианьский университет Цзяотун',
        },
        location: "Xi'an, China",
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
            ru: 'Мировоизвестный университет с богатой историей и академическим превосходством.',
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
            ru: 'Фуданский университет',
        },
        location: 'Shanghai, China',
        description: {
            en: 'A prestigious university known for its comprehensive academic programs.',
            ru: 'Престижный университет, известный своими комплексными академическими программами.',
        },
        image: 'https://mcdonnell.wustl.edu/app/uploads/2020/10/Fudan-University.jpg',
        subjects: ['Humanities', 'Business'],
    },
    {
        name: {
            en: 'Sichuan University',
            ru: 'Сычуаньский университет',
        },
        location: 'Chengdu, China',
        description: {
            en: 'One of the top universities in Western China, known for its research excellence.',
            ru: 'Один из лучших университетов Западного Китая, известный своими исследовательскими достижениями.',
        },
        image: 'https://www.scut.edu.cn/en/_upload/article/images/82/28/2ffdc27849b38f13b2a077a9b6b9/0d1dbfad-1b86-4e5f-9b66-2441a05c9ad5.jpg',
        subjects: ['Science', 'Engineering', 'Business'],
    },
    {
        name: {
            en: 'Lanzhou University',
            ru: 'Ланьчжоу университет',
        },
        location: 'Lanzhou, China',
        description: {
            en: 'A key national university with a strong emphasis on research.',
            ru: 'Ключевой национальный университет с сильным акцентом на исследования.',
        },
        image: 'https://www.lzu.edu.cn/images/2021/03/17/20210317110536542895.jpg',
        subjects: ['Science', 'Engineering', 'Humanities'],
    },
    {
        name: {
            en: 'Guangxi Normal University',
            ru: 'Гуанси нормальный университет',
        },
        location: 'Guilin, China',
        description: {
            en: 'A renowned university in Southern China known for teacher training programs.',
            ru: 'Известный университет в Южном Китае, известный своими программами подготовки учителей.',
        },
        image: 'https://www.law.stu.edu.cn/images/2023-01/22/E9DB7EEC86EEC30A8052C61785DBAC5F.jpg',
        subjects: ['Humanities', 'Science', 'Education'],
    },
    {
        name: {
            en: 'South China University of Technology',
            ru: 'Южно-Китайский университет технологий',
        },
        location: 'Guangzhou, China',
        description: {
            en: 'A leading institution in engineering and applied sciences.',
            ru: 'Ведущий институт в области инженерии и прикладных наук.',
        },
        image: 'https://www.scut.edu.cn/en/_upload/article/images/82/28/2ffdc27849b38f13b2a077a9b6b9/0d1dbfad-1b86-4e5f-9b66-2441a05c9ad5.jpg',
        subjects: ['Engineering', 'Technology'],
    },
    {
        name: {
            en: 'Nanjing Agricultural University',
            ru: 'Нанкинский сельскохозяйственный университет',
        },
        location: 'Nanjing, China',
        description: {
            en: 'A specialized university focused on agricultural and environmental sciences.',
            ru: 'Специализированный университет, ориентированный на сельское хозяйство и экологические науки.',
        },
        image: 'https://www.njau.edu.cn/images/2021/06/24/20210624165512611.jpg',
        subjects: ['Agriculture', 'Science'],
    },
    {
        name: {
            en: 'Alibaba Business School',
            ru: 'Бизнес-школа Alibaba',
        },
        location: 'Hangzhou, China',
        description: {
            en: 'A business school dedicated to digital economy and entrepreneurship.',
            ru: 'Бизнес-школа, ориентированная на цифровую экономику и предпринимательство.',
        },
        image: 'https://www.alibabagroup.com/img/school_logo.png',
        subjects: ['Business', 'Entrepreneurship'],
    },
    {
        name: {
            en: 'Southern Medical University',
            ru: 'Южный медицинский университет',
        },
        location: 'Guangzhou, China',
        description: {
            en: 'One of China’s top medical universities.',
            ru: 'Один из ведущих медицинских университетов Китая.',
        },
        image: 'https://www.smu.edu.cn/images/2021/06/22/20210622171607405.jpg',
        subjects: ['Medicine', 'Health Sciences'],
    },
    // Add similar translations for the remaining universities
];
const subjectIcons = {
    Science: <FaFlask className="w-5 h-5 text-green-600" />,
    Engineering: <FaBriefcase className="w-5 h-5 text-green-600" />,
    Business: <FaGraduationCap className="w-5 h-5 text-green-600" />,
    Humanities: <FaBook className="w-5 h-5 text-green-600" />,
};
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

const UniversityDetail = () => {
    const { language } = useContext(LanguageContext);
    const params = useParams();
    const t = translations[language];
    const universityName = decodeURIComponent(params.name);
    const university = universities.find((uni) => uni.name.en === universityName || uni.name.ru === universityName);
    if (!university) {
        return <div className="text-center text-3xl font-bold mt-10 text-gray-700">University Not Found</div>;
    }

    return (
      <div>
            <Navbar/>
          <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-14">
         
               
        
         <div className="max-w-4xl w-full bg-white shadow-xl rounded-3xl overflow-hidden">
             {/* Image Section */}
             <div className="relative h-96">
                 <img src={university.image} alt={university.name} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/40 "></div>
                 <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white drop-shadow-lg">
                 {university.name[language]}
                 </h1>
             </div>

             {/* Content Section */}
             <div className="p-8">
                 <div className="flex items-center space-x-3 text-gray-600">
                     <FaGlobe className="text-green-500 w-5 h-5" />
                     <span className="text-lg">{university.location}</span>
                 </div>
                 
                 <p className="text-gray-700 mt-4 leading-relaxed">{university.description[language]}</p>

                 {/* Subjects */}
                 {/* <h2 className="text-2xl font-semibold text-gray-900 mt-6 flex items-center">
                     <FaBookOpen className="text-green-500 w-6 h-6 mr-2" />
                     Subjects Offered
                 </h2> */}
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

                 {/* Back Button */}
                 <button
                     onClick={() => window.history.back()}
                     className="mt-6 flex items-center space-x-2 bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg"
                 >
                     <FaArrowLeft className="w-5 h-5" />
                     <span>{language === 'en' ? 'Back to List' : 'Назад к списку'}</span>

                 </button>
             </div>
         </div>
     </div>
      </div>
    );
};

export default UniversityDetail;
