'use client'
import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-green-50 to-gray-100 relative overflow-hidden">
      {/* Floating Bubbles */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 bg-green-300 rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-32 h-32 bg-green-400 rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Contact Information */}
          <div className="space-y-8">
            {/* Heading */}
            <motion.h2
  className="text-5xl font-extrabold text-gray-900 relative"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
    Get in Touch
    <svg
      className="absolute -bottom-6 left-0 w-[340px] h-10 wavy-underline"
      viewBox="0 0 500 50"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" /> {/* Green-500 */}
          <stop offset="100%" stopColor="#059669" /> {/* Green-700 */}
        </linearGradient>
      </defs>
      {/* First Layer (Bottom) */}
      <path
        d="M0,40 C100,15 300,60 500,40"
        stroke="rgba(16,185,129,0.3)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Second Layer (Top) */}
      <path
        d="M0,30 C100,10 300,50 500,30"
        stroke="url(#underline-gradient)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </span>
</motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Have questions or need assistance? Reach out to us, and we'll get back to you as soon as possible.
            </motion.p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                className="flex items-center space-x-4 bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">Fortune.global@gmail.com</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-center space-x-4 bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">++880 188 660 458</p>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                className="flex items-center space-x-4 bg-white/80 backdrop-blur-3xl p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">Zhenjiang, China</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-3xl rounded-2xl shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;