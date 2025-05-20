import React, { useState } from 'react';
import { X, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface OptInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const OptInModal: React.FC<OptInModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('early_access_submissions')
        .insert([{ 
          email: email.trim(),
          name: 'Prototype User',
          role: 'prototype_tester'
        }]);

      if (supabaseError) {
        if (supabaseError.code === '23505') { // Unique violation
          // If email already exists, consider it a success
          onSuccess();
          return;
        }
        throw supabaseError;
      }

      onSuccess();
    } catch (err) {
      console.error('Error submitting email:', err);
      setError('Failed to submit email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full relative animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Try Our Prototype
          </h3>
          <p className="text-gray-600 mb-6">
            Enter your email to get instant access to our AI-powered lesson planning prototype. 
            Be among the first to experience the future of education.
          </p>

          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md">
                {error}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white rounded-md px-4 py-2 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Get Access
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            <p className="mt-4 text-xs text-gray-500 text-center">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OptInModal;