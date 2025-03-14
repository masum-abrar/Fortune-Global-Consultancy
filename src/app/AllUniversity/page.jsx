'use client'
import Navbar from '@/Components/Navbar';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGraduationCap, FaGlobe, FaFlask, FaBriefcase, FaBook, FaSearch } from 'react-icons/fa';

const universities = [
    {
        name: 'North West Polytechnic University',
        location: "Xi'an, China",
        description: 'A leading institution in engineering and technology education.',
        image: 'https://chinacampus.ru/wp-content/uploads/2018/01/HEJLUNTSZYANSKIJ-UNIVERSITET.jpg',
        subjects: ['Science', 'Engineering'],
    },
    {
        name: 'Tianjin University',
        location: 'Tianjin, China',
        description: 'One of the oldest and most prestigious universities in China.',
        image: 'https://studychina.chinaservicesinfo.com/studychinaapp/static/focusPics/UC_00040.jpg',
        subjects: ['Business', 'Humanities'],
    },
    {
        name: "Xi'an Jiaotong University",
        location: "Xi'an, China",
        description: 'A top-tier university known for its research and innovation.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMt2R50ozOVg9J7ZcAf9I8qNyBeijrjnKxg&s',
        subjects: ['Science', 'Engineering', 'Business'],
    },
    {
        name: 'Peking University',
        location: 'Beijing, China',
        description: 'A world-renowned university with a rich history and academic excellence.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmniKFsLOkFaXNGf_R3mYrMuycU_Hf-3Zwg&s',
        subjects: ['Humanities', 'Science'],
    },
    {
        name: 'Tsinghua University',
        location: 'Beijing, China',
        description: 'A global leader in science, engineering, and technology.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuW7W0NMRibjwjkzPdPtOWBaemsHNNOzntw&s',
        subjects: ['Engineering', 'Business'],
    },
    {
        name: 'Fudan University',
        location: 'Shanghai, China',
        description: 'A prestigious university known for its comprehensive academic programs.',
        image: 'https://mcdonnell.wustl.edu/app/uploads/2020/10/Fudan-University.jpg',
        subjects: ['Humanities', 'Business'],
    },
    {
        name: 'Sichuan University',
        location: 'Chengdu, China',
        description: 'One of the top universities in Western China, known for its research excellence.',
        image: 'https://www.scut.edu.cn/en/_upload/article/images/82/28/2ffdc27849b38f13b2a077a9b6b9/0d1dbfad-1b86-4e5f-9b66-2441a05c9ad5.jpg',
        subjects: ['Science', 'Engineering', 'Business'],
    },
    {
        name: 'Lanzhou University',
        location: 'Lanzhou, China',
        description: 'A key national university with a strong emphasis on research.',
        image: 'https://www.lzu.edu.cn/images/2021/03/17/20210317110536542895.jpg',
        subjects: ['Science', 'Engineering', 'Humanities'],
    },
    {
        name: 'Guangxi Normal University',
        location: 'Guilin, China',
        description: 'A renowned university in Southern China known for teacher training programs.',
        image: 'https://www.law.stu.edu.cn/images/2023-01/22/E9DB7EEC86EEC30A8052C61785DBAC5F.jpg',
        subjects: ['Humanities', 'Science', 'Education'],
    },
    {
        name: 'South China University of Technology',
        location: 'Guangzhou, China',
        description: 'A leading institution in engineering and applied sciences.',
        image: 'https://www.scut.edu.cn/en/_upload/article/images/82/28/2ffdc27849b38f13b2a077a9b6b9/0d1dbfad-1b86-4e5f-9b66-2441a05c9ad5.jpg',
        subjects: ['Engineering', 'Technology'],
    },
    {
        name: 'Nanjing Agricultural University',
        location: 'Nanjing, China',
        description: 'A specialized university focused on agricultural and environmental sciences.',
        image: 'https://www.njau.edu.cn/images/2021/06/24/20210624165512611.jpg',
        subjects: ['Agriculture', 'Science'],
    },
    {
        name: 'Alibaba Business School',
        location: 'Hangzhou, China',
        description: 'A business school dedicated to digital economy and entrepreneurship.',
        image: 'https://www.alibabagroup.com/img/school_logo.png',
        subjects: ['Business', 'Entrepreneurship'],
    },
    {
        name: 'Southern Medical University',
        location: 'Guangzhou, China',
        description: 'One of China’s top medical universities.',
        image: 'https://www.smu.edu.cn/images/2021/06/22/20210622171607405.jpg',
        subjects: ['Medicine', 'Health Sciences'],
    },
    {
        name: 'Shandong University',
        location: 'Jinan, China',
        description: 'A comprehensive university with strong research capabilities.',
        image: 'https://www.sdu.edu.cn/images/2021/06/21/20210621164714178.jpg',
        subjects: ['Science', 'Engineering', 'Humanities'],
    },
    {
        name: 'Beijing Normal University',
        location: 'Beijing, China',
        description: 'A leading institution for teacher training and educational research.',
        image: 'https://www.bnu.edu.cn/images/2021/06/22/20210622145246346.jpg',
        subjects: ['Education', 'Humanities'],
    },
    {
        name: 'Nankai University',
        location: 'Tianjin, China',
        description: 'A prestigious university with strong programs in science and business.',
        image: 'https://www.nankai.edu.cn/images/2021/06/22/20210622152405242.jpg',
        subjects: ['Science', 'Business'],
    },
    {
        name: 'Beihua University',
        location: 'Jilin, China',
        description: 'A key provincial university known for its diverse academic offerings.',
        image: 'https://www.beihua.edu.cn/images/2021/06/22/20210622162504729.jpg',
        subjects: ['Science', 'Engineering', 'Humanities'],
    },
    {
        name: 'Harbin Institute of Technology',
        location: 'Harbin, China',
        description: 'One of China’s top engineering and aerospace research institutions.',
        image: 'https://www.hit.edu.cn/images/2021/06/22/20210622165805806.jpg',
        subjects: ['Engineering', 'Technology'],
    },
    {
        name: 'Heilongjiang University',
        location: 'Harbin, China',
        description: 'A major university in Northern China with a strong academic reputation.',
        image: 'https://www.hlju.edu.cn/images/2021/06/22/20210622170203446.jpg',
        subjects: ['Science', 'Humanities'],
    },
    {
        name: 'Jiangsu University',
        location: 'Zhenjiang, China',
        description: 'A comprehensive university with strong research in engineering and technology.',
        image: 'https://www.ujs.edu.cn/images/2021/06/22/20210622171452172.jpg',
        subjects: ['Engineering', 'Technology'],
    },
    {
        name: 'China University of Petroleum',
        location: 'Beijing, China',
        description: 'A top university specializing in petroleum engineering and energy sciences.',
        image: 'https://www.cup.edu.cn/images/2021/06/22/20210622171816258.jpg',
        subjects: ['Engineering', 'Energy Sciences'],
    }
];


const subjectIcons = {
    Science: <FaFlask className="w-5 h-5 text-green-600" />,
    Engineering: <FaBriefcase className="w-5 h-5 text-green-600" />,
    Business: <FaGraduationCap className="w-5 h-5 text-green-600" />,
    Humanities: <FaBook className="w-5 h-5 text-green-600" />,
};

const Page = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filter universities based on search input
    const filteredUniversities = universities.filter((university) =>
        university.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUniversities = filteredUniversities.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto px-6 mt-20">
                {/* Search Bar */}
                <div className="flex items-center bg-gray-100 p-3 rounded-full shadow-sm mb-8 w-full md:w-1/2 mx-auto">
                    <FaSearch className="text-gray-500 ml-3" />
                    <input
                        type="text"
                        placeholder="Search universities..."
                        className="w-full bg-transparent border-none focus:outline-none px-3 text-gray-800"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Universities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
                <Link key={index} href={`/AllUniversity/${encodeURIComponent(university.name)}`}>
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <div className="relative h-60">
                            <img src={university.image} alt={university.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center space-x-2">
                                <FaGlobe className="w-4 h-4" />
                                <span>{university.location}</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{university.name}</h3>
                            <p className="text-gray-700 mb-4">{university.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

                {/* Pagination Controls */}
                <div className="flex justify-center space-x-4 mt-8">
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="px-4 py-2 bg-green-600 text-white rounded-full disabled:opacity-50">
                        Previous
                    </button>
                    <span className="px-4 py-2 text-gray-800 font-semibold">Page {currentPage} of {totalPages}</span>
                    <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="px-4 py-2 bg-green-600 text-white rounded-full disabled:opacity-50">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
