import React from 'react';
import { UsersRound, School, BookOpen, Lightbulb } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At ONE, we believe that true educational transformation happens when all stakeholders 
            work together as a unified force. Our name embodies our core philosophy: students, 
            teachers, parents, and educational institutions must function as ONE entity to 
            create meaningful change in education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ValueCard 
            icon={<UsersRound size={24} />}
            title="Unified Approach"
            description="Bringing together all education stakeholders to create a collaborative ecosystem that benefits everyone."
          />
          <ValueCard 
            icon={<School size={24} />}
            title="Quality Education"
            description="Making high-quality educational resources accessible to all, regardless of geographical or socioeconomic barriers."
          />
          <ValueCard 
            icon={<BookOpen size={24} />}
            title="Innovation"
            description="Leveraging cutting-edge technology to transform how education is delivered and accessed across Africa."
          />
          <ValueCard 
            icon={<Lightbulb size={24} />}
            title="Impact"
            description="Creating lasting positive change in education through technology and creative thinking."
          />
        </div>
        
        <div className="bg-primary-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-primary-100 mb-6 leading-relaxed">
                We envision a world where quality education is a universal right, not a privilege. 
                Where every student has access to the tools and resources they need to succeed. 
                Where technology bridges the gap between potential and achievement.
              </p>
              
            </div>
            <div className="bg-gradient-to-r from-primary-700 to-primary-900 p-8 md:p-12 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute text-7xl md:text-9xl font-bold text-white/10">ONE</div>
                <div className="relative z-10 p-4">
                  <p className="text-white text-center text-xl md:text-2xl leading-tight max-w-md mx-auto">
                    "Education is the most powerful weapon which you can use to change the world."
                  </p>
                  <p className="text-primary-200 text-center mt-3">— Nelson Mandela</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;