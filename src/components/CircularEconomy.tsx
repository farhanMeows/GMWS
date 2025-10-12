import React from "react";
import { Recycle } from "lucide-react";

const CircularEconomy: React.FC = () => {
  const products: string[] = [
    "Non-Recyclable Plastic to Plyboard",
    "Recyclable plastics",
    "Metals & glass",
    "Paper products",
    "Organic compost",
    "Biogas energy",
  ];

  return (
    <section id="circular-economy" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Circular Economy in Action
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
            Products Made from Your Waste
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 px-4">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-green-100 hover:border-green-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <Recycle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>

              {/* Product Label */}
              <p className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">
                {product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircularEconomy;
