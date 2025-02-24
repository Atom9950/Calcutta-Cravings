import Image from "next/image";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Headers />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/hero-bg.jpg"
          alt="Restaurant ambiance"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience Culinary Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Where every flavor tells a story and every meal becomes a memory
          </p>
          <Link
            href="/reservations"
            className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Book a Table
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Signature Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Truffle Risotto",
                description: "Creamy Arborio rice with black truffle and parmesan",
                image: "/dish1.jpg"
              },
              {
                name: "Wagyu Steak",
                description: "Premium grade Wagyu beef with seasonal vegetables",
                image: "/dish2.jpg"
              },
              {
                name: "Seafood Platter",
                description: "Fresh daily catch with house-made sauces",
                image: "/dish3.jpg"
              }
            ].map((dish, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-72 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px]">
            <Image
              src="/about-img.jpg"
              alt="Restaurant interior"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2010, our restaurant has been a beacon of culinary innovation
              and excellence. We believe in creating extraordinary dining experiences
              that combine traditional flavors with modern techniques.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every dish is crafted with passion and precision by our team of expert
              chefs, using only the finest seasonal ingredients sourced from local
              producers.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-300"
            >
              Learn more about us
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Cuisine?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us for an unforgettable dining experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Book a Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
