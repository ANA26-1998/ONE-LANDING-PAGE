import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, rating, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <div className="relative mb-6">
          <Quote size={24} className="absolute -top-2 -left-2 text-primary-100" />
          <p className="text-gray-700 relative z-10 pl-4">{quote}</p>
        </div>
        <div className="flex items-center">
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <p className="font-medium text-gray-900">{author}</p>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "ONE has completely transformed my approach to lesson planning. I save hours each week while creating more engaging content for my students.",
      author: "Emmanuel Okonkwo",
      role: "8th Grade Science Teacher",
      rating: 5,
      image: "/one sis.jpg"
    },
    {
      quote: "The AI-generated activities are incredibly creative and my students love them. This tool has rekindled my passion for teaching.",
      author: "Amara Diallo",
      role: "Elementary School Teacher",
      rating: 5,
      image: "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg"
    },
    {
      quote: "As a principal, I've seen a remarkable improvement in teacher satisfaction and student engagement since implementing ONE across our school.",
      author: "Dr. Kwame Mensah",
      role: "High School Principal",
      rating: 4,
      image: "https://images.pexels.com/photos/8535239/pexels-photo-8535239.jpeg"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Educators Are Saying</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Don't just take our word for it. Hear from the teachers and administrators 
            who have already experienced the power of ONE.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary-50 rounded-full px-6 py-3 text-primary-700">
            Join 100+ educators already using ONE
          </div>
 <h3 className="text-2xl font-semibold mb-4">Ready to transform your teaching?</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join teachers who are saving hours each week while creating more engaging 
            and effective lessons for their students.
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default Testimonials;