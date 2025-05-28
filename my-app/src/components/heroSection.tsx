import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-400 to-white py-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Discover the Best Deals Online
        </h1>
        <p className="text-gray-700 text-lg mb-6 max-w-lg">
          Shop the latest collections at unbeatable prices. Upgrade your
          lifestyle with our exclusive selections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Shop Now
          </Link>
          <Link
            to="/categories"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition"
          >
            Browse Categories
          </Link>
        </div>
      </div>

      {/* Image or Banner */}
      <div className="flex-1">
        <img
          src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ecommerce hero"
          className="w-full max-w-md mx-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
