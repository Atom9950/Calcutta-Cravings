'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiClock, FiHeart, FiStar } from 'react-icons/fi';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  preparationTime: string;
  spicyLevel?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  dietary?: string[];
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Truffle Infused Risotto",
    description: "Creamy Arborio rice with wild mushrooms and fresh truffle shavings",
    price: 28,
    image: "/images/menu/risotto.jpg",
    category: "Mains",
    preparationTime: "25 mins",
    isFeatured: true,
    dietary: ["vegetarian"]
  },
  {
    id: 2,
    name: "Pan-Seared Sea Bass",
    description: "Fresh sea bass with herb-infused butter sauce and seasonal vegetables",
    price: 32,
    image: "/images/menu/seabass.jpg",
    category: "Mains",
    preparationTime: "20 mins",
    isNew: true
  },
  {
    id: 3,
    name: "Burrata & Heritage Tomatoes",
    description: "Fresh burrata with colorful heritage tomatoes and basil pesto",
    price: 16,
    image: "/images/menu/burrata.jpg",
    category: "Starters",
    preparationTime: "15 mins",
    dietary: ["vegetarian"]
  },
  {
    id: 4,
    name: "Spicy Thai Curry",
    description: "Authentic Thai red curry with coconut milk and fresh vegetables",
    price: 24,
    image: "/images/menu/curry.jpg",
    category: "Mains",
    preparationTime: "25 mins",
    spicyLevel: 3,
    dietary: ["gluten-free"]
  },
  {
    id: 5,
    name: "Dark Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream",
    price: 14,
    image: "/images/menu/souffle.jpg",
    category: "Desserts",
    preparationTime: "20 mins",
    isFeatured: true,
    dietary: ["vegetarian"]
  }
];

const categories = ["All", ...new Set(menuItems.map(item => item.category))];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = menuItems
    .filter(item => selectedCategory === "All" || item.category === selectedCategory)
    .filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our carefully curated selection of dishes, crafted with passion and the finest ingredients
          </motion.p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-shadow"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {item.isNew && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  )}
                  {item.isFeatured && (
                    <span className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-gray-900">
                      ${item.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <FiClock className="mr-1" />
                      {item.preparationTime}
                    </div>
                    {item.spicyLevel && (
                      <div className="flex items-center">
                        {Array.from({ length: item.spicyLevel }).map((_, i) => (
                          <FiStar key={i} className="text-red-500" />
                        ))}
                      </div>
                    )}
                  </div>

                  {item.dietary && (
                    <div className="flex flex-wrap gap-2">
                      {item.dietary.map((diet) => (
                        <span
                          key={diet}
                          className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No dishes found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
