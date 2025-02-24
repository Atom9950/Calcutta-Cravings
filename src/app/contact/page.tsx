'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitSuccess(true);
    setIsSubmitting(false);
    // Reset form after successful submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Contact Information Cards */}
    {[
      {
        icon: <FiMapPin className="w-6 h-6" />,
        title: "Location",
        content: "123 Restaurant Street, Foodie City, FC 12345",
        action: "Get Directions",
        link: "https://maps.google.com"
      },
      {
        icon: <FiPhone className="w-6 h-6" />,
        title: "Phone",
        content: "+1 (555) 123-4567",
        action: "Call Now",
        link: "tel:+15551234567"
      },
      {
        icon: <FiMail className="w-6 h-6" />,
        title: "Email",
        content: "info@restaurant.com",
        action: "Send Email",
        link: "mailto:info@restaurant.com"
      }
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-xl shadow-lg p-8 relative z-20"
      >
        <div className="text-gray-600 mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.content}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
        >
          {item.action} →
        </a>
      </motion.div>
    ))}
  </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-shadow"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
              {submitSuccess && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center mt-4"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Map and Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645756805183!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center text-gray-600 mb-6">
                <FiClock className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", hours: "11:00 AM - 10:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 11:00 PM" },
                  { day: "Sunday", hours: "10:00 AM - 9:00 PM" }
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-gray-600"
                  >
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <FiInstagram className="w-6 h-6" />, link: "#" },
                  { icon: <FiFacebook className="w-6 h-6" />, link: "#" },
                  { icon: <FiTwitter className="w-6 h-6" />, link: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
