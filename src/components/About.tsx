import React from "react";
import { Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-green-50/60"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 sm:px-5 py-2 rounded-full mb-5 sm:mb-8 border border-blue-200 shadow-sm">
            <Award className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Leading Innovation
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 sm:mb-8 leading-tight">
            Revolutionizing Waste
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-emerald-500 bg-clip-text text-transparent">
              Management in Manipur
            </span>
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-left sm:text-center space-y-6 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              <span className="font-semibold text-gray-900">
                GreenShift Manipur,
              </span>{" "}
              powered by{" "}
              <span className="text-green-700 font-semibold">
                Green Mani Waste Solutions Pvt. Ltd.
              </span>
              , is transforming how Manipur handles waste. A fully autonomous
              Municipal Solid Waste (MSW) management company registered under
              the Ministry of Corporate Affairs, Government of India, we manage
              the entire waste lifecycle — from door-to-door collection to
              advanced upcycling into plyboard, compost, and biogas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
