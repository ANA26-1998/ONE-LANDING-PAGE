import React, { useState } from 'react';
import { Mail, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Footer: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      setError('Please enter a message');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('contact_messages')
        .insert([{ message: message.trim() }]);

      if (supabaseError) {
        throw supabaseError;
      }

      setSuccess(true);
      setMessage('');
    } catch (err) {
      console.error('Error submitting message:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <img src="/one logo.png" alt="ONE Logo" className="h-8" />
              ONE
            </a>
            <p className="mb-6">
              Unlocking the world's potential by providing access to quality education for all.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#mission" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#prototype" className="hover:text-white transition-colors">Prototype</a></li>
              <li><a href="#signup" className="hover:text-white transition-colors">Sign Up</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Kigali, Rwanda</span>
              </li>
              <li>
                <form onSubmit={handleSubmit} className="mt-4">
                  <label className="block text-sm font-medium mb-2">Send us a message</label>
                  {error && (
                    <div className="mb-3 p-2 bg-red-900/50 text-red-200 text-sm rounded">
                      {error}
                    </div>
                  )}
                  {success && (
                    <div className="mb-3 p-2 bg-green-900/50 text-green-200 text-sm rounded">
                      Message sent successfully!
                    </div>
                  )}
                  <textarea 
                    className="w-full px-3 py-2 bg-gray-800 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    rows={3}
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                  ></textarea>
                  <button 
                    type="submit" 
                    className={`mt-2 w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p> 2025 ONE Education.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;