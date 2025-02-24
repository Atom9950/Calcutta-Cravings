'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiUsers, FiCalendar, FiClock, FiCheck } from 'react-icons/fi';
import Headers from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

interface TableOption {
  id: string;
  seats: number;
  image: string;
  description: string;
  price: number;
}

const tableOptions: TableOption[] = [
  {
    id: 'table-2',
    seats: 2,
    image: '/images/tables/table-2.jpg',
    description: 'Perfect for couples or intimate business meetings',
    price: 0, // No additional charge
  },
  {
    id: 'table-4',
    seats: 4,
    image: '/images/tables/table-4.jpg',
    description: 'Ideal for small families or friend gatherings',
    price: 0,
  },
  {
    id: 'table-6',
    seats: 6,
    image: '/images/tables/table-6.jpg',
    description: 'Great for larger groups and celebrations',
    price: 0,
  },
];

const ReservationPage = () => {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    console.log({ selectedTable, ...formData });
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <Headers />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Make a Reservation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Select your preferred table and book your dining experience
          </motion.p>
        </div>

        {/* Table Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Choose Your Table
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tableOptions.map((table) => (
              <motion.div
                key={table.id}
                whileHover={{ scale: 1.02 }}
                className={`relative cursor-pointer rounded-xl overflow-hidden ${
                  selectedTable === table.id
                    ? 'ring-4 ring-gray-900'
                    : 'hover:shadow-xl'
                }`}
                onClick={() => setSelectedTable(table.id)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={table.image}
                    alt={`${table.seats} person table`}
                    fill
                    className="object-cover"
                  />
                  {selectedTable === table.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <FiCheck className="text-white w-12 h-12" />
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {table.seats} Person Table
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{table.description}</p>
                  <div className="flex items-center text-gray-500">
                    <FiUsers className="mr-2" />
                    <span>Seats {table.seats} people</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reservation Form */}
        {selectedTable && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <div className="relative">
                    <FiClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData({ ...formData, specialRequests: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Confirm Reservation
              </button>
            </form>
          </motion.div>
        )}
      </div>
      <Chatbot />
      <Footer />
    </main>
  );
};

export default ReservationPage;
