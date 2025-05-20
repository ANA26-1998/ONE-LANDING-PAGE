import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Function to encode form data for Netlify
  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Netlify form submission
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "early-access", email, name, role })
        });
        setSubmitted(true);
      } catch (error) {
        console.error("Netlify form submission failed:", error);
        // Handle error, e.g., show an error message to the user
      }
    }
  };

  const benefits = [
    "Early access to our AI lesson planning tool",
    "Priority support and onboarding",
    "Influence product development with your feedback",
    "Exclusive community access" 
  ];

  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Early Access Program</h2> {/* Modified heading */}
              <p className="text-blue-100 mb-8 text-lg">
                Be among the first to experience the future of education.
                Sign up to join our community of forward-thinking educators. {/* Modified text */}
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Early Access Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden">
              {!submitted ? (
                // Add data-netlify="true" and name="early-access" to the form
                <form onSubmit={handleSubmit} className="p-8" data-netlify="true" name="early-access">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {step === 1 ? "Join the Waitlist" : "Complete Your Profile"}
                    </h3>
                    <p className="text-gray-600">
                      {step === 1
                        ? "Sign up to get early access to our revolutionary platform."
                        : "Just a few more details to secure your spot."}
                    </p>
                  </div>

                  {step === 1 ? (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email" // Added name attribute for Netlify
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          placeholder="your@email.com"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                      >
                        Continue <ArrowRight size={16} />
                      </button>

                      <p className="text-xs text-gray-500 text-center mt-4">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name" // Added name attribute for Netlify
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Role in Education
                        </label>
                        <select
                          id="role"
                          name="role" // Added name attribute for Netlify
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        >
                          <option value="">Select your role</option>
                          <option value="teacher">Teacher</option>
                          <option value="administrator">School Administrator</option>
                          <option value="district">District Official</option>
                          <option value="parent">Parent</option>
                          <option value="student">Student</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Removed the payment section entirely */}

                      <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                      >
                        Sign Up <ArrowRight size={16} /> {/* Modified button text */}
                      </button>

                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-sm text-gray-500 hover:text-gray-700"
                        >
                          Back to previous step
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You for Signing Up!</h3> {/* Modified heading */}
                  <p className="text-gray-600 mb-6">
                    Your spot in our early access program has been reserved! Check your email for confirmation and next steps.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg text-left mb-6">
                    <p className="font-medium text-gray-900 mb-1">What's Next?</p>
                    <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                      <li>Check your email for a welcome message</li>
                      <li>Complete your profile setup</li>
                      <li>Join our exclusive early access community</li>
                      <li>Get ready for the full experience in the coming weeks</li>
                    </ol>
                  </div>
                  <a
                    href="#"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all"
                  >
                    Return to Home
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
