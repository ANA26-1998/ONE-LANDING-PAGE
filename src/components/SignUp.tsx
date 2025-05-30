import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      try {
        setIsSubmitting(true);
        setError('');

        // Submit to Netlify forms
        const formData = {
          'form-name': 'early-access',
          email,
          name,
          role
        };

        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode(formData)
        });

        // Save to Supabase
        const { error: supabaseError } = await supabase
          .from('early_access_submissions')
          .insert([
            { email, name, role }
          ]);

        if (supabaseError) {
          if (supabaseError.code === '23505') { // Unique violation
            // If email already exists, consider it a success
            setSubmitted(true);
            return;
          }
          throw supabaseError;
        }

        setSubmitted(true);
      } catch (err) {
        console.error('Error submitting form:', err);
        setError('There was an error submitting your form. Please try again.');
      } finally {
        setIsSubmitting(false);
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join our Early Access Program</h2>
              <p className="text-blue-100 mb-8 text-lg">
               Sign up to be among the first to experience the future of education and join our community of forward-thinking educators.
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
                <form onSubmit={handleSubmit} className="p-8" data-netlify="true" name="early-access">
                  <input type="hidden" name="form-name" value="early-access" />
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {step === 1 ? "Join the Waitlist" : "Complete Your Profile"}
                    </h3>
                    <p className="text-gray-600">
                      {step === 1
                        ? "Sign up to get early access to our MVP."
                        : "Just a few more details to secure your spot."}
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
                      {error}
                    </div>
                  )}

                  {step === 1 ? (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          placeholder="your@email.com"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
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
                          name="name"
                          type="text"
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
                          name="role"
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

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? 'Submitting...' : 'Sign Up'} <ArrowRight size={16} />
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
                  <h3 className="text-2xl font-bold mb-2">Thank You for Signing Up!</h3>
                  <p className="text-gray-600 mb-6">
                    Your spot in our early access program has been reserved! we will reach out to you in the coming months!
                  </p>
                  
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