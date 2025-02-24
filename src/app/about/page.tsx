'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageCircle } from 'react-icons/fi';

interface Review {
  id: number;
  name: string;
  image: string;
  rating: number;
  comment: string;
  date: string;
  title: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/images/reviews/review1.jpg",
    rating: 5,
    comment: "The ambiance is absolutely stunning, and the food is out of this world. The truffle risotto is a must-try! The staff was incredibly attentive and made our anniversary dinner truly special.",
    date: "February 2025",
    title: "Exceptional Anniversary Dinner"
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/images/reviews/review2.jpg",
    rating: 5,
    comment: "As a food critic, I've dined at many restaurants, but this place stands out. The attention to detail in every dish is remarkable. The wine pairing suggestions were perfect.",
    date: "January 2025",
    title: "A Culinary Masterpiece"
  },
  {
    id: 3,
    name: "Emma Davis",
    image: "/images/reviews/review3.jpg",
    rating: 5,
    comment: "The tasting menu was an incredible journey of flavors. Each course was beautifully presented and told a story. The service was impeccable.",
    date: "December 2024",
    title: "Unforgettable Dining Experience"
  }
];

const AboutPage = () => {
  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/about/hero.jpg"
          alt="Restaurant interior"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              A journey of passion, flavor, and unforgettable moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting Culinary Excellence Since 2010
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey began with a simple vision: to create extraordinary dining
                experiences that combine traditional flavors with modern innovation.
                Every dish we serve is a reflection of our commitment to quality and
                creativity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We source the finest ingredients from local producers, ensuring that
                each plate tells a story of freshness and authenticity. Our team of
                passionate chefs brings years of expertise and creativity to create
                memorable culinary experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/about/story.jpg"
                alt="Our kitchen"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Guests Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of our valued guests and their memorable
              moments at our restaurant
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={activeReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={reviews[activeReview].image}
                    alt={reviews[activeReview].name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(reviews[activeReview].rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {reviews[activeReview].title}
                  </h3>
                  <div className="relative">
                    <FiMessageCircle className="absolute -top-4 -left-4 w-8 h-8 text-gray-200" />
                    <p className="text-gray-600 italic mb-4">
                      {reviews[activeReview].comment}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold">{reviews[activeReview].name}</p>
                    <p className="text-sm text-gray-500">
                      {reviews[activeReview].date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous review"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next review"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "50,000+", label: "Happy Customers" },
              { number: "100+", label: "Signature Dishes" },
              { number: "4.9", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
