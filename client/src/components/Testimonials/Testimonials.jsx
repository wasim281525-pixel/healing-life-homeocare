import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialApi } from '../../utils/api';
import toast from 'react-hot-toast';

const defaultTestimonials = [
  {
    _id: '1',
    name: 'Priya Sharma',
    rating: 5,
    review:
      "After suffering from chronic skin allergies for years, Dr. SHubhangi treatment brought me relief within 2 months. The natural approach worked wonders without any side effects.",
    treatment: 'Skin Allergies',
    date: '2024-01-15',
  },
  {
    _id: '2',
    name: 'Rajesh Kumar',
    rating: 5,
    review:
      'Homeopathic treatment helped me recover from long-term acidity and digestion issues. Highly recommended!',
    treatment: 'Acidity',
    date: '2024-02-10',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [testimonials] = useState(defaultTestimonials);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 mt-2">
            Real stories from real patients who experienced healing
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white p-8 rounded-2xl shadow-lg">
          <Quote className="text-green-500 mb-4" size={32} />

          <p className="text-gray-700 text-lg mb-6">
            {testimonials[current].review}
          </p>

          {/* Name + Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {testimonials[current].name.charAt(0)}
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">
                {testimonials[current].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonials[current].treatment}
              </p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex mt-4">
            {Array(testimonials[current].rating)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="text-yellow-400" size={18} />
              ))}
          </div>

          {/* */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextTestimonial}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
