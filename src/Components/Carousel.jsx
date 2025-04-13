'use client';
import React, { useContext ,useState} from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { LanguageContext } from '@/LanguageContext';
import Swal from 'sweetalert2';

 // Update this path if needed

const Carousel = () => {
  const { language } = useContext(LanguageContext);
const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: ''
  });
  const translations = {
    en: {
      slides: [
        {
          title: 'FORTUNE GLOBAL EDU',
          description: 'Your Gateway to Studying in China',
        },
        {
          title: 'Experience World-Class Education',
          description: 'Join a diverse community of learners and professionals in China.',
        },
        {
          title: 'Your Success Starts Here',
          description:
            'Get the guidance you need for a brighter future by studying at the best universities in China.',
        },
      ],
      applyNow: 'Apply Now',
    },
    ru: {
      slides: [
        {
          title: 'ФОРТУНА ГЛОБАЛ ЭДУ',
          description: 'Ваш путь к обучению в Китае',
        },
        {
          title: 'Получите образование мирового уровня',
          description: 'Присоединяйтесь к разнообразному сообществу учащихся и профессионалов в Китае.',
        },
        {
          title: 'Ваш успех начинается здесь',
          description:
            'Получите руководство, необходимое для светлого будущего, обучаясь в лучших университетах Китая.',
        },
      ],
      applyNow: 'Подать заявку',
    },
  };

  const images = [
    'https://i.ibb.co/04JLfp9/Whats-App-Image-2025-02-28-at-2-29-18-AM.jpg',
    'https://i.ibb.co/tpmQN09w/entrepreneurs-meeting-office.jpg',
    'https://i.ibb.co/tpmQN09w/entrepreneurs-meeting-office.jpg',
  ];

  const currentTexts = translations[language];
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbybTnewTP9gOHCr5UPfnICnIIs_iW1VtOb9N4Vj1kCJwf2JScQLv_ezVPrhLl4_dFBZUQ/exec';

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      Swal.fire({
        title: 'Success!',
        text: 'Application submitted successfully! We will contact you shortly.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      setFormData({ name: '', email: '', phone: '', university: '' });
    } catch (error) {
      console.error('Error submitting application:', error);

      Swal.fire({
        title: 'Error!',
        text: 'There was an error submitting your application. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  return (
    <div className="relative w-full h-[80vh]">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        speed={1000}
        className="w-full h-full"
      >
        {currentTexts.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh]">
              <Image
                src={images[index]}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority
                className="absolute inset-0"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-6xl mb-4 lg:mb-6">
                  {slide.title}
                </h1>
                <p className="text-white text-sm sm:text-lg lg:text-xl max-w-2xl">
                  {slide.description}
                </p>
                <button
              className='bg-green-500 hover:bg-green-600 shadow-md px-4 py-2 rounded-lg text-white transition'
              onClick={() => setIsOpen(true)}
            >
              {translations[language].applyNow}
            </button>
              </div>
              

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        {/* Apply Now Modal */}
        {isOpen && (
  <div className='z-50 fixed inset-0 flex justify-center items-center bg-opacity-50 mt-14'>
    <div className='bg-white shadow-lg p-6 rounded-lg w-96'>
      <h2 className='mb-4 font-semibold text-xl'>
        {language === 'en' ? 'Apply Now' : 'Подать заявку'}
      </h2>
      <p className='mb-4 text-gray-600 text-sm'>
        {language === 'en'
          ? 'Fill out the form, and we will contact you shortly.'
          : 'Заполните форму, и мы свяжемся с вами в ближайшее время.'}
      </p>

      {/* FormSubmit Form */}
      <form onSubmit={handleFormSubmit} className='space-y-3'>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          placeholder={language === 'en' ? 'Full Name' : 'Полное имя'}
          className='p-2 border rounded w-full'
          required
        />
        <input
          type='email'
          name='email'
          onChange={handleChange}
          placeholder={language === 'en' ? 'Email' : 'Эл. почта'}
          className='p-2 border rounded w-full'
          required
        />
        <input
          type='tel'
          name='phone'
          onChange={handleChange}
          placeholder={language === 'en' ? 'Phone Number' : 'Номер телефона'}
          className='p-2 border rounded w-full'
          required
        />

        {/* University Dropdown */}
        <select
          name='university'
          onChange={handleChange}
          className='p-2 border rounded w-full'
          required
        >
          <option value=''>
            {language === 'en' ? 'Select a university' : 'Выберите университет'}
          </option>
          <option value='North West Polytechnic University'>
            {language === 'en'
              ? 'North West Polytechnic University'
              : 'Северо-западный политехнический университет'}
          </option>
          <option value='Tianjin University'>
            {language === 'en' ? 'Tianjin University' : 'Тяньцзиньский университет'}
          </option>
          <option value="Xi'an Jiaotong University">
            {language === 'en'
              ? "Xi'an Jiaotong University"
              : 'Сианьский транспортный университет'}
          </option>
          <option value='Peking University'>
            {language === 'en' ? 'Peking University' : 'Пекинский университет'}
          </option>
          <option value='Tsinghua University'>
            {language === 'en' ? 'Tsinghua University' : 'Университет Цинхуа'}
          </option>
          <option value='Fudan University'>
            {language === 'en' ? 'Fudan University' : 'Университет Фудань'}
          </option>
        </select>

        {/* Submit Button */}
        <button
          type='submit'
          className='bg-green-500 hover:bg-green-600 py-2 rounded-lg w-full text-white'
        >
          {language === 'en' ? 'Submit' : 'Отправить'}
        </button>
      </form>

      {/* Close Button */}
      <button
        className='mt-3 w-full text-gray-500 text-sm hover:underline'
        onClick={() => setIsOpen(false)}
      >
        {language === 'en' ? 'Cancel' : 'Отмена'}
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default Carousel;
