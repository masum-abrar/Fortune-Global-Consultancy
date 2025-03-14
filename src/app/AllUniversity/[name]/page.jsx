

import { FaGlobe } from 'react-icons/fa';
 // Import the university list
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

const UniversityDetail = ({params}) => {
    // Get the university name from the URL

    // Find the university by name
    const university = universities.find((uni) => uni.name === decodeURIComponent(name));

    if (!university) {
        return <div className="text-center text-2xl font-bold mt-10">University not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="relative h-80 rounded-lg overflow-hidden">
                <img src={university.image} alt={university.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mt-6">{university.name}</h1>
            <div className="flex items-center text-gray-600 mt-2">
                <FaGlobe className="w-5 h-5 mr-2 text-green-500" />
                <span>{university.location}</span>
            </div>
            <p className="text-gray-700 mt-4">{university.description}</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">Subjects Offered</h2>
            <div className="flex flex-wrap gap-2 mt-2">
                {university.subjects.map((subject, idx) => (
                    <span key={idx} className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {subject}
                    </span>
                ))}
            </div>

            <button
                onClick={() => window.history.back()}
                className="mt-6 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
            >
                Back to List
            </button>
        </div>
    );
};

export default UniversityDetail;
