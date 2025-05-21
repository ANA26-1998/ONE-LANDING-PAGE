import React from 'react';
import { CheckCircle, Clock, Layout, Sparkles, PenTool, BarChart3 } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-primary-50">
      <div className="flex-shrink-0 text-primary-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">AI-Assisted Lesson Planning</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our first product focuses on empowering teachers with powerful AI tools that make 
            lesson planning effortless, engaging, and effective. Spend less time planning and 
            more time connecting with your students.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid md:grid-cols-2 gap-4">
              <Feature 
                icon={<Clock size={24} />}
                title="Save Time"
                description="Create comprehensive lesson plans in minutes instead of hours."
              />
              <Feature 
                icon={<CheckCircle size={24} />}
                title="Curriculum Aligned"
                description="Automatically align content with educational standards and curricula."
              />
              <Feature 
                icon={<Layout size={24} />}
                title="Smart Suggestions"
                description="Get intelligent recommendations based on your teaching context."
              />
              <Feature 
                icon={<Sparkles size={24} />}
                title="AI-Generated Content"
                description="Generate creative activities, discussion questions, and assessments."
              />
              <Feature 
                icon={<PenTool size={24} />}
                title="Easy Editing"
                description="Intuitive interface for quick adjustments and personalization."
              />
              <Feature 
                icon={<BarChart3 size={24} />}
                title="Progress Tracking"
                description="Monitor student outcomes and adjust future lessons accordingly."
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <img 
                  src="/one sis.jpg" 
                  alt="teacher supporting student"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-semibold mb-2">Intelligent Lesson Creator</h3>
                  <p className="text-gray-600 mb-4">Our AI understands your teaching style and creates personalized lesson plans that match your unique approach.</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-1 bg-primary-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 bg-green-100 rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-green-700 text-sm font-medium">Time Saved</p>
                </div>
                <p className="text-gray-700 text-sm">Teachers using ONE will save an average of 6 hours per week on lesson planning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;