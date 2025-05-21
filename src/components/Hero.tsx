import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white -z-10"></div>
      
      {/* Background shapes */}
      <div className="absolute -z-10 top-1/3 left-1/4 w-64 h-64 rounded-full bg-green-200 opacity-20 blur-3xl"></div>
      <div className="absolute -z-10 top-1/2 right-1/4 w-72 h-72 rounded-full bg-primary-200 opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              <span className="text-green-600">ONE</span>, 
              <br />  
              <span>
                Unlocking the world's <span className="text-orange-600">potential!</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Unlocking the world's potential by providing access to quality education for all. 
              Bringing students, teachers, parents, and schools together as one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#prototype" 
                className="px-6 py-3 bg-green-600 text-white rounded-md text-center hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Try the Prototype
              </a>
              <a 
                href="#mission" 
                className="px-6 py-3 bg-orange-600 text-white rounded-md text-center hover:bg-orange-700 transition-all flex items-center justify-center gap-2"
              >
                Learn More <ArrowDownCircle size={18} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
                <img 
                  src="/one t.jpg" 
                  alt="Students learning together" 
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm text-green-600 font-medium">AI-Powered</span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Education Made Simple</h2>
                  <p className="text-gray-600">Transforming education through innovative technology.</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-200 rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-200 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;