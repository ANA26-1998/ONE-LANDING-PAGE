import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Keep loading for UI feedback
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission initially
    setError(null); // Clear previous errors

    if (step === 1) {
      // Validate email format before proceeding to step 2
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }
      setStep(2);
    } else {
      // This is step 2: Collect name and role, then submit the form to Netlify
      if (!name || !role) {
        setError("Please fill in all required fields (Full Name and Your Role).");
        return;
      }

      setLoading(true);
      try {
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        
        // Use the current page's path for the fetch URL.
        // Netlify will intercept POST requests to this path if the form is configured correctly.
        const targetUrl = window.location.pathname;

        // Simulate form submission to Netlify
        // Netlify will process this POST request if the form has data-netlify="true"
        // and a hidden input named "form-name".
        await fetch(targetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as any).toString(),
        });

        setSubmitted(true); // Indicate successful submission
        setEmail(''); // Clear form fields
        setName('');
        setRole('');
      } catch (err) {
        console.error("Error submitting form to Netlify:", err);
        setError("Failed to submit your information. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const benefits = [
    "Early access to our AI lesson planning tool",
    "Priority support and onboarding",
    "Influence product development with your feedback",
    "Exclusive updates and news" // Updated benefit list
  ];

  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Early Access</h2> {/* Updated heading */}
              <p className="text-blue-100 mb-8 text-lg">
                Be among the first to experience the future of education.
                Join our community of forward-thinking educators and get notified when our MVP is ready.
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
                <form
                  onSubmit={handleSubmit}
                  className="p-8"
                  name="early-access-signup"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/"
                >
                  <input type="hidden" name="form-name" value="early-access-signup" />
                  <p className="hidden">
                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                  </p>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {step === 1 ? "Join the Waitlist" : "Tell Us More"}
                    </h3>
                    <p className="text-gray-600">
                      {step === 1
                        ? "Sign up to get early access to our revolutionary platform."
                        : "Just a few more details to help us understand our early adopters."}
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                      <strong className="font-bold">Error!</strong>
                      <span className="block sm:inline"> {error}</span>
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
                          type="email"
                          name="email"
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
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : (
                          <>
                            Continue <ArrowRight size={16} />
                          </>
                        )}
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
                          name="name"
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

                      {/* Removed the payment section entirely */}

                      <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                        disabled={loading}
                      >
                        {loading ? 'Submitting...' : (
                          <>
                            Submit <ArrowRight size={16} /> {/* Updated button text */}
                          </>
                        )}
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
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your information has been received! We'll be in touch with updates. {/* Updated message */}
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg text-left mb-6">
                    <p className="font-medium text-gray-900 mb-1">What's Next?</p>
                    <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                      <li>We'll send a confirmation email shortly.</li>
                      <li>You'll receive updates on our MVP's progress.</li>
                      <li>Get ready for early access!</li>
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
