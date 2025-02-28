import React from 'react';
import { FaGraduationCap, FaGlobe, FaFlask, FaBriefcase, FaBook } from 'react-icons/fa';

const University = () => {
  // University Data
  const universities = [
    {
      name: 'North West Polytechnic University',
      location: 'Xi\'an, China',
      description: 'A leading institution in engineering and technology education.',
      image: 'https://chinacampus.ru/wp-content/uploads/2018/01/HEJLUNTSZYANSKIJ-UNIVERSITET.jpg', // Replace with your image path
      subjects: ['Science', 'Engineering'],
    },
    {
      name: 'Tianjin University',
      location: 'Tianjin, China',
      description: 'One of the oldest and most prestigious universities in China.',
      image: 'https://studychina.chinaservicesinfo.com/studychinaapp/static/focusPics/UC_00040.jpg', // Replace with your image path
      subjects: ['Business', 'Humanities'],
    },
    {
      name: 'Xi\'an Jiaotong University',
      location: 'Xi\'an, China',
      description: 'A top-tier university known for its research and innovation.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMt2R50ozOVg9J7ZcAf9I8qNyBeijrjnKxg&s', // Replace with your image path
      subjects: ['Science', 'Engineering', 'Business'],
    },
    {
      name: 'Peking University',
      location: 'Beijing, China',
      description: 'A world-renowned university with a rich history and academic excellence.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmniKFsLOkFaXNGf_R3mYrMuycU_Hf-3Zwg&s', // Replace with your image path
      subjects: ['Humanities', 'Science'],
    },
    {
      name: 'Tsinghua University',
      location: 'Beijing, China',
      description: 'A global leader in science, engineering, and technology.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuW7W0NMRibjwjkzPdPtOWBaemsHNNOzntw&s', // Replace with your image path
      subjects: ['Engineering', 'Business'],
    },
    {
      name: 'Fudan University',
      location: 'Shanghai, China',
      description: 'A prestigious university known for its comprehensive academic programs.',
      image: 'https://mcdonnell.wustl.edu/app/uploads/2020/10/Fudan-University.jpg', // Replace with your image path
      subjects: ['Humanities', 'Business'],
    },
  ];

  // Icon Mapping for Subjects
  const subjectIcons = {
    Science: <FaFlask className="w-5 h-5 text-green-600" />,
    Engineering: <FaBriefcase className="w-5 h-5 text-green-600" />,
    Business: <FaGraduationCap className="w-5 h-5 text-green-600" />,
    Humanities: <FaBook className="w-5 h-5 text-green-600" />,
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-gray-100 py-16 px-6 md:px-12 lg:px-24">
      {/* Attractive Heading */}
      <div className="text-center mb-12">
  <h2 className="text-2xl lg:text-5xl font-extrabold mb-4">
    <span className="text-green-500">Featured</span> 
    <span className="text-black ml-3">Universities</span>
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
    Explore top universities offering world-class education in Science, Business, Engineering, and Humanities.
  </p>
</div>


      {/* University Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {universities.map((university, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* University Image */}
            <div className="relative h-60">
              <img
                src={university.image}
                alt={university.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              {/* Location Tag */}
              <div className="absolute bottom-4 left-4 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center space-x-2">
                <FaGlobe className="w-4 h-4" />
                <span>{university.location}</span>
              </div>
            </div>

            {/* University Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {university.name}
              </h3>
              <p className="text-gray-700 mb-4">{university.description}</p>
              {/* Subject Tags with Icons */}
              <div className="flex flex-wrap gap-2">
                {university.subjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full flex items-center space-x-2"
                  >
                    {subjectIcons[subject]}
                    <span>{subject}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Universities Button */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          Show All Universities
        </button>
      </div>
    </div>
  );
};

export default University;