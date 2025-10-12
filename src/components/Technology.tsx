import React from "react";
import {
  Shield,
  Sparkles,
  Award,
  CheckCircle,
  Leaf,
  Recycle,
  Factory,
} from "lucide-react";

const Technology: React.FC = () => {
  const softwareFeatures: string[] = [
    "AI-based route optimization",
    "Real-time tracking & analytics",
    "Advanced data dashboard",
  ];

  const hardwareFeatures: string[] = [
    "Automated segregation machines",
    "Plastic-to-Wowboard conversion",
    "Composting & biogas generation",
  ];

  return (
    <section
      id="technology"
      className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Section Header --- */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 sm:px-5 py-2 rounded-full mb-4 sm:mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-semibold">
              Cutting-Edge Innovation
            </span>
          </div>

          <section className="text-center px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-transparent bg-clip-text mb-6">
              Our Technology
            </h2>

            <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              <span className="text-indigo-600 font-semibold">
                AI-powered systems
              </span>{" "}
              and
              <span className="text-purple-600 font-semibold">
                {" "}
                patented hardware
              </span>{" "}
              drive our
              <span className="text-gray-900 font-semibold">
                {" "}
                state-of-the-art MRF
              </span>{" "}
              — transforming waste into valuable resources with precision and
              sustainability.
            </p>
          </section>
        </div>

        {/* --- Technology Cards Grid --- */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4">
          {/* --- Proprietary Software --- */}
          <div className="group bg-white p-6 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                Proprietary Software
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-5">
              {softwareFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start group/item">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover/item:bg-green-500 transition-colors">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover/item:text-white transition-colors" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Patented Hardware --- */}
          <div className="group bg-white p-6 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                Patented Hardware
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-5">
              {hardwareFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start group/item">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover/item:bg-blue-500 transition-colors">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover/item:text-white transition-colors" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Our MRF Facility --- */}
          <div className="group bg-white p-6 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 md:col-span-2">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Left Image */}
              <div className="md:w-1/2 w-full flex justify-center items-center rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/Mrf.jpeg"
                  alt="MRF Facility"
                  className="max-w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our MRF Facility
                </h3>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
                  Green Mani's Material Recovery Facility uses cutting-edge
                  technology developed in partnership with global technology
                  leaders to ensure maximum efficiency and minimal environmental
                  impact.
                </p>

                <ul className="space-y-6">
                  {/* Organic Waste Treatment */}
                  <li className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-green-100 p-3 rounded-xl shadow-md">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-green-700">
                        Organic Waste Treatment
                      </h4>
                      <p className="text-gray-600">
                        Advanced composting and biogas generation from organic
                        waste
                      </p>
                    </div>
                  </li>

                  {/* Recyclable Materials */}
                  <li className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-xl shadow-md">
                      <Recycle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-blue-700">
                        Recyclable Materials
                      </h4>
                      <p className="text-gray-600">
                        Plastics, e-waste, cardboard, glass, and metals sorted
                        and resold
                      </p>
                    </div>
                  </li>

                  {/* Non-Recyclable Processing */}
                  <li className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-xl shadow-md">
                      <Factory className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-indigo-700">
                        Non-Recyclable Processing
                      </h4>
                      <p className="text-gray-600">
                        Converted into useful industrial and construction
                        materials
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
