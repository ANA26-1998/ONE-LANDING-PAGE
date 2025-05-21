import React, { useState } from 'react';
import { Play, ChevronRight, Zap, CheckCircle } from 'lucide-react';
import OptInModal from './OptInModal';

const Prototype: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showOptIn, setShowOptIn] = useState(false);

  const handlePrototypeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowOptIn(true);
  };

  const handleOptInSuccess = () => {
    setShowOptIn(false);
    const prototypeLink = 'https://studio--edone-rd5d3.us-central1.hosted.app/lesson-planner/dashboard';
    window.open(prototypeLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="prototype" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Experience the Prototype</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Below is the outline of how our AI-assisted lesson planning tool works in action. 
            Interact with our prototype afterwards to understand how ONE will revolutionize the way teachers create engaging lessons.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="flex overflow-x-auto scrollbar-hide border-b">
            <button 
              onClick={() => setActiveTab(1)} 
              className={`px-6 py-4 flex-shrink-0 font-medium transition-colors ${
                activeTab === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Step 1: Input
            </button>
            <button 
              onClick={() => setActiveTab(2)} 
              className={`px-6 py-4 flex-shrink-0 font-medium transition-colors ${
                activeTab === 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Step 2: AI Generation
            </button>
            <button 
              onClick={() => setActiveTab(3)} 
              className={`px-6 py-4 flex-shrink-0 font-medium transition-colors ${
                activeTab === 3 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Step 3: Edit
            </button>
            <button 
              onClick={() => setActiveTab(4)} 
              className={`px-6 py-4 flex-shrink-0 font-medium transition-colors ${
                activeTab === 4 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Step 4: Export
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 1 && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-semibold mb-4">Enter Your Lesson Details</h3>
                  <p className="text-gray-600 mb-6">
                    Simply provide the subject, grade level, topic, and any specific requirements. 
                    Our AI will handle the rest.
                  </p>
                  <button 
                    onClick={() => setActiveTab(2)} 
                    className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all flex items-center gap-2"
                  >
                    Next Step <ChevronRight size={16} />
                  </button>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select 
                        id="subject" 
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value="Science"
                        disabled
                      >
                        <option>Science</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">Grade Level</label>
                      <select 
                        id="grade" 
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value="Elementary (K-5)"
                        disabled
                      >
                        <option>Elementary (K-5)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                      <input 
                        type="text" 
                        value="Photosynthesis"
                        disabled
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements (Optional)</label>
                      <textarea 
                        value="Include hands-on activities and visual aids to help students understand the process of photosynthesis."
                        disabled
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        rows={3}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 2 && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-semibold mb-4">AI Generation in Progress</h3>
                  <p className="text-gray-600 mb-6">
                    Our advanced AI is generating a tailored lesson plan based on your inputs, 
                    considering best teaching practices and educational standards.
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setActiveTab(1)} 
                      className="px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => setActiveTab(3)} 
                      className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all flex items-center gap-2"
                    >
                      Next Step <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-md mb-8">
                    <div className="absolute inset-0 bg-blue-600 animate-spread rounded-full opacity-10"></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <div 
                        className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white"
                      >
                        <Zap size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full transition-all duration-1000"></div>
                  </div>
                  <p className="text-gray-600 text-sm">Generating lesson plan... 100% complete</p>
                </div>
              </div>
            )}
            
            {activeTab === 3 && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-semibold mb-4">Edit Your Lesson</h3>
                  <p className="text-gray-600 mb-6">
                    Refine the AI-generated lesson plan to match your teaching style and classroom needs. 
                    Add, remove, or modify any elements.
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setActiveTab(2)} 
                      className="px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => setActiveTab(4)} 
                      className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all flex items-center gap-2"
                    >
                      Next Step <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="border rounded-lg bg-white p-4">
                      <h4 className="font-semibold mb-2">Lesson Objectives</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-500" />
                          <span>Explain the process of photosynthesis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-500" />
                          <span>Identify the key components required for photosynthesis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-500" />
                          <span>Describe how plants use the products of photosynthesis</span>
                        </li>
                        <li className="flex items-center gap-2 text-blue-600 cursor-pointer hover:text-blue-800">
                          <span>+ Add new objective</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg bg-white p-4">
                      <h4 className="font-semibold mb-2">Activities</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-blue-500 pl-3 py-1">
                          <p className="font-medium">Introduction (10 min)</p>
                          <p className="text-sm text-gray-600">Brief discussion on what students know about how plants get energy</p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-3 py-1">
                          <p className="font-medium">Main Activity (25 min)</p>
                          <p className="text-sm text-gray-600">Hands-on experiment demonstrating plant's need for light</p>
                        </div>
                        <div className="text-blue-600 cursor-pointer hover:text-blue-800">
                          <span>+ Add new activity</span>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg bg-white p-4">
                      <h4 className="font-semibold mb-2">Materials Needed</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-500" />
                          <span>Plant samples</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-500" />
                          <span>Light source</span>
                        </li>
                        <li className="flex items-center gap-2 text-blue-600 cursor-pointer hover:text-blue-800">
                          <span>+ Add new material</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border rounded-lg bg-white p-4">
                      <h4 className="font-semibold mb-2">Games/Energizers</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-green-500 pl-3 py-1">
                          <p className="font-medium">Photosynthesis Race (5 min)</p>
                          <p className="text-sm text-gray-600">Students act out the process of photosynthesis</p>
                        </div>
                        <div className="text-blue-600 cursor-pointer hover:text-blue-800">
                          <span>+ Add new game</span>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg bg-white p-4">
                      <h4 className="font-semibold mb-2">Assignments</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-orange-500 pl-3 py-1">
                          <p className="font-medium">Homework</p>
                          <p className="text-sm text-gray-600">Create a diagram showing the process of photosynthesis</p>
                        </div>
                        <div className="text-blue-600 cursor-pointer hover:text-blue-800">
                          <span>+ Add new assignment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 4 && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-semibold mb-4">Export Your Lesson Plan</h3>
                  <p className="text-gray-600 mb-6">
                    Your lesson plan is ready! Export it in your preferred format or save it directly to your 
                    ONE account for future access and sharing.
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setActiveTab(3)} 
                      className="px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all"
                    >
                      Back
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center text-blue-600">PDF</div>
                      <div>
                        <p className="font-medium">Export as PDF</p>
                        <p className="text-sm text-gray-600">High-quality document for printing or sharing</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center text-green-600">DOC</div>
                      <div>
                        <p className="font-medium">Export as Word Document</p>
                        <p className="text-sm text-gray-600">Editable format for further customization</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center text-purple-600">ONE</div>
                      <div>
                        <p className="font-medium">Save to ONE Account</p>
                        <p className="text-sm text-gray-600">Access anywhere and share with colleagues</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-10 h-10 bg-orange-100 rounded-md flex items-center justify-center text-orange-600">LMS</div>
                      <div>
                        <p className="font-medium">Export to LMS</p>
                        <p className="text-sm text-gray-600">Send directly to Google Classroom, Canvas, etc.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={handlePrototypeClick}
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Try Prototype Now
          </button>
        </div>
      </div>

      <OptInModal 
        isOpen={showOptIn}
        onClose={() => setShowOptIn(false)}
        onSuccess={handleOptInSuccess}
      />
    </section>
  );
};

export default Prototype;