import React from "react";
import { Sparkles, ArrowUp } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

const Hero: React.FC = () => {
  const stats: Stat[] = [
    { value: "90%", label: "Waste Diverted" },
    { value: "1000+", label: "Subscribers" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Satisfaction" },
  ];

  const subscribeLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSek0uf4PmWI2Q3JWYFQUkDR1ROw0Q00E_NDorv0K3jaghnXgg/viewform";

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center px-4">
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 sm:px-6 py-2 rounded-full mb-6 sm:mb-8 border border-green-200">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-semibold">
              Technology for a Circular Tomorrow
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Green Mani
            </span>{" "}
            Waste Solutions
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-700 mb-3 sm:mb-4 tracking-tight">
            Clean Homes. Clean Streets. Green Manipur.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Subscription-based, tech-driven waste collection and upcycling
            service transforming urban waste management.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
              onClick={(e) => {
                e.stopPropagation(); // prevent triggering the card click
                window.open(subscribeLink, "_blank");
              }}
            >
              <span>Subscribe Now</span>
              <ArrowUp className="w-5 h-5 rotate-90 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-2xl sm:text-4xl font-bold text-green-600 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
