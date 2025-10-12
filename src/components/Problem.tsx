import React from "react";

const Problem: React.FC = () => {
  const problems: string[] = [
    "Inefficient collection & irregular pickups",
    "No segregation at source",
    "Overflowing landfills → pollution & health hazards",
    "Economic loss: Valuable resources wasted",
  ];

  return (
    <section id="problem" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center tracking-tight px-4">
          Manipur&apos;s Urban Waste Challenge
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          Understanding the critical issues we&apos;re solving
        </p>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="group p-4 sm:p-8 border-l-4 border-red-500 bg-gradient-to-br from-red-50 to-orange-50 rounded-r-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start space-x-2 sm:space-x-3">
                {/* Number Circle */}
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm sm:text-base">
                  {idx + 1}
                </div>

                {/* Problem Text */}
                <p className="text-gray-800 font-semibold leading-relaxed text-sm sm:text-base">
                  {problem}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
