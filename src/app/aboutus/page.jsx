import React from 'react';
import { FaGraduationCap, FaGlobe, FaHandshake, FaUserTie, FaChartLine, FaUniversity } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdWorkOutline, MdOutlineEmojiEvents } from 'react-icons/md';
import Navbar from '@/Components/Navbar';

const AboutUs = () => {
  return (
 <div>
    <Navbar/>
       <div className="min-h-screen bg-gradient-to-br from-green-50 to-white mt-16">
      {/* Hero Section with Animated Gradient */}
      <section className="relative py-24 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-95"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Transform Your Future <span className="text-emerald-200">With Global Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl leading-relaxed">
              At FORTUNE GLOBAL EDU, we don't just process applications - we craft success stories across 15+ countries.
            </p>
            <button className="mt-8 bg-white text-emerald-700 hover:bg-emerald-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Journey →
            </button>
          </div>
        </div>
      </section>

      {/* About Section with Floating Elements */}
      <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl z-10 relative">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, FORTUNE GLOBAL EDU emerged from a simple idea: education should have no borders. What began as a small consultancy has blossomed into a global network helping thousands of students achieve their dreams.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We combine cutting-edge technology with human expertise to create personalized pathways for each student's unique aspirations.
              </p>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full opacity-70"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-300 rounded-full opacity-50"></div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-emerald-500 p-6 rounded-2xl text-white flex flex-col items-center justify-center text-center shadow-lg">
              <FaUniversity className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold">200+ Partner Institutions</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center">
              <MdOutlineEmojiEvents className="text-emerald-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Award-Winning Service</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center">
              <RiCustomerService2Fill className="text-emerald-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
            </div>
            <div className="bg-emerald-600 p-6 rounded-2xl text-white flex flex-col items-center justify-center text-center shadow-lg">
              <FaGlobe className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold">15+ Countries</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Animated Cards */}
      <section className="py-16 px-4 md:px-10 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-semibold">WHY CHOOSE US</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Your Success Is Our Blueprint</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUserTie className="text-emerald-500 text-4xl" />,
                title: "Expert Guidance",
                desc: "Our team includes former admissions officers and visa specialists with insider knowledge.",
                bg: "bg-white"
              },
              {
                icon: <FaHandshake className="text-emerald-500 text-4xl" />,
                title: "Trusted Partnerships",
                desc: "Exclusive agreements with top universities mean better opportunities for our students.",
                bg: "bg-white"
              },
              {
                icon: <FaChartLine className="text-emerald-500 text-4xl" />,
                title: "Proven Results",
                desc: "95% visa approval rate with 1000+ successful placements in the last year alone.",
                bg: "bg-emerald-500 text-white",
                iconColor: "text-white"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`${item.bg} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${item.bg.includes('emerald') ? '' : 'border border-emerald-100'}`}
              >
                <div className={`w-16 h-16 ${item.bg.includes('emerald') ? 'bg-white text-emerald-500' : 'bg-emerald-100'} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 text-center ${item.bg.includes('emerald') ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                <p className={`text-center ${item.bg.includes('emerald') ? 'text-emerald-100' : 'text-gray-600'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Interactive Grid */}
      <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-semibold">OUR SERVICES</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Comprehensive Support at Every Step</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <FaGraduationCap className="text-emerald-500 text-3xl" />,
              title: "University Admissions",
              desc: "Strategic selection of programs that align with your goals and maximize admission chances."
            },
            {
              icon: <MdWorkOutline className="text-emerald-500 text-3xl" />,
              title: "Post-Study Work Visas",
              desc: "Guidance on countries with the best work opportunities after graduation."
            },
            {
              icon: <FaGlobe className="text-emerald-500 text-3xl" />,
              title: "Scholarship Assistance",
              desc: "Access to exclusive scholarships and financial aid options."
            },
            {
              icon: <RiCustomerService2Fill className="text-emerald-500 text-3xl" />,
              title: "Pre-Departure Briefing",
              desc: "Comprehensive orientation to ensure you're prepared for life abroad."
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="bg-emerald-100 group-hover:bg-emerald-500 group-hover:text-white p-4 rounded-xl transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section with Parallax Effect */}
      <section className="relative py-24 px-4 md:px-10 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 bg-emerald-900 opacity-80"></div>
        <div className="relative max-w-6xl mx-auto z-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5,000+", label: "Students Guided" },
              { number: "95%", label: "Visa Success" },
              { number: "15+", label: "Countries" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-5xl font-bold mb-2 text-emerald-300">{stat.number}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-emerald-500 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Begin Your Global Education Journey Today</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Schedule a free consultation with our experts and take the first step toward your international education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 hover:bg-emerald-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
 </div>
  );
};

export default AboutUs;