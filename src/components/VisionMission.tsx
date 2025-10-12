import React from "react";
import { TrendingUp, CheckCircle } from "lucide-react";

const VisionMission: React.FC = () => {
  return (
    <section
      id="vision-mission"
      className="py-16 pt-0 sm:py-24 sm:pt-0 bg-gradient-to-br from-gray-50 to-green-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Vision & Mission
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Our purpose and commitment to a sustainable Manipur
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4">
          {/* Vision */}
          <div className="group bg-white p-6 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:shadow-green-500/50 transform group-hover:rotate-3 transition-all duration-300">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Zero dumpsites in Manipur by transforming waste into value,
              creating a sustainable circular economy for future generations.
            </p>
          </div>

          {/* Mission */}
          <div className="group bg-white p-6 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:rotate-3 transition-all duration-300">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Delivering the most efficient, customer-first waste management
              service through cutting-edge technology and unparalleled
              dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
