'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
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
    dietary: ["vegetarian"]
  },
  {
    id: 2,
    name: "Pan-Seared Sea Bass",
    description: "Fresh sea bass with herb-infused butter sauce and seasonal vegetables",
    price: 32,
    image: "/images/menu/seabass.jpg",
    category: "Mains"
  },
  {
    id: 3,
    name: "Burrata & Heritage Tomatoes",
    description: "Fresh burrata with colorful heritage tomatoes and basil pesto",
    price: 16,
    image: "/images/menu/burrata.jpg",
    category: "Starters",
    dietary: ["vegetarian"]
  },
  {
    id: 4,
    name: "Dark Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream",
    price: 14,
    image: "/images/menu/souffle.jpg",
    category: "Desserts",
    dietary: ["vegetarian"]
  },
  // Add more menu items as needed
];

const categories = ["All", ...new Set(menuItems.map(item => item.category))];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with passion and the finest ingredients
          </p>
        </div>

        {/* Category Navigation */}
        <nav className="flex justify-center space-x-6 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-gray-900 font-medium">
                    ${item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {item.description}
                </p>
                {item.dietary && (
                  <div className="flex gap-2">
                    {item.dietary.map((diet) => (
                      <span
                        key={diet}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
                      >
                        {diet}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
