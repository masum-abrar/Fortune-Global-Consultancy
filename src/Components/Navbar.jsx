'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import {
  FaWeixin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/LanguageContext'; // adjust the path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: ''
  });

  const { language, setLanguage } = useLanguage();

  const translations = {
    en: {
      location: 'Zhenjiang, China',
      phone: '+880 188 660 458',
      weChat: '+861 755 503 0290',
      home: 'Home',
      universities: 'Universities',
      aboutUs: 'About FG',
      applyNow: 'Apply Now'
    },
    ru: {
      location: 'Чжэньцзян, Китай',
      phone: '+880 188 660 458',
      weChat: '+861 755 503 0290',
      home: 'Главная',
      universities: 'Университеты',
      aboutUs: 'О нас',
      applyNow: 'Подать заявку'
    }
  };

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
    <div>
      {/* Top Bar */}
      <div className='bg-[#116361]'>
        <div className='flex flex-wrap justify-between items-center bg-[#116361] mx-auto px-6 py-2 max-w-6xl text-white text-sm container'>
          {/* Left Side - Location */}
          <div className='flex items-center gap-2 text-gray-300'>
            <FaMapMarkerAlt className='text-blue-400 text-lg' />
            <span>{translations[language].location}</span>
          </div>

          {/* Center - Phone Numbers & WeChat */}
          <div className='hidden md:flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <FaPhoneAlt className='text-blue-400' />
              <span>{translations[language].phone}</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaWeixin className='text-green-400 text-lg' />
              <span>{translations[language].weChat}</span>
            </div>
          </div>

          {/* Right Side - Language Dropdown */}
          <div>
  <button
    onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
    className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md'
  >
    {language === 'en' ? 'Switch to Русский' : 'Переключить на English'}
  </button>
</div>

        </div>
      </div>

      {/* Main Navbar */}
      <header className='z-50 absolute bg-white shadow-md w-full'>
        <div className='flex justify-between items-center mx-auto px-6 max-w-6xl h-16 container'>
          {/* Logo & Brand Name */}
          <div className='flex items-center'>
            <Image src='/logo.png' width={80} height={600} alt='Fortune Logo' />
            <h1 className='font-bold text-gray-800 text-xl'>FORTUNE GLOBAL </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-6 font-medium text-gray-700'>
          <Link 
           href='/'
           className='hover:text-green-500 transition'>
        
              {translations[language].home}
         
           </Link>
            <Link
              href='/AllUniversity'
              className='hover:text-green-500 transition'
            >
              {translations[language].universities}
            </Link>
            <Link
              href='/aboutus'
              className='hover:text-green-500 transition'>
 {translations[language].aboutUs}
            </Link>
          </nav>

          {/* Apply Now Button */}
          <button
            className='hidden md:block bg-green-500 hover:bg-green-600 shadow-md px-4 py-2 rounded-lg text-white transition'
            onClick={() => setIsOpen(true)}
          >
            {translations[language].applyNow}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className='md:hidden focus:outline-none text-gray-700'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden bg-white shadow-md absolute top-16 left-0 w-full transition-all duration-300 ${
            menuOpen ? 'opacity-100 visible py-4' : 'opacity-0 invisible'
          }`}
        >
          <nav className='flex flex-col items-center space-y-4 font-medium text-gray-700'>
           <Link 
           href='/'
           className='hover:text-green-500 transition'>
        
              {translations[language].home}
         
           </Link>
            <Link
              href='/AllUniversity'
              className='hover:text-green-500 transition'
            >
              {translations[language].universities}
            </Link>
           
            <Link
              href='/aboutus'
              className='hover:text-green-500 transition'>
 {translations[language].aboutUs}
            </Link>
            <button
              className='bg-green-500 hover:bg-green-600 shadow-md px-4 py-2 rounded-lg text-white transition'
              onClick={() => setIsOpen(true)}
            >
              {translations[language].applyNow}
            </button>
          </nav>
        </div>
      </header>

      {isOpen && (
  <div className='z-50 fixed inset-0 flex justify-center items-center bg-opacity-50'>
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
  )
};

export default Navbar;
