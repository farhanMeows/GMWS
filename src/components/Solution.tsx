import React from "react";
import { Users, Recycle, CheckCircle, Leaf, LucideIcon } from "lucide-react";

interface Step {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    step: "1",
    title: "Subscribe",
    desc: "Choose your plan",
    icon: Users,
  },
  {
    step: "2",
    title: "Segregate",
    desc: "Sort your waste",
    icon: Recycle,
  },
  {
    step: "3",
    title: "We Collect",
    desc: "On schedule",
    icon: CheckCircle,
  },
  {
    step: "4",
    title: "We Transform",
    desc: "Into value",
    icon: Leaf,
  },
];

const Solution: React.FC = () => {
  return (
    <section id="solution" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-blue-700"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 tracking-tight">
            The Solution: Green Mani
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold opacity-95">
            Clean Homes. Clean Streets. Green Manipur.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {steps.map(({ step, title, desc, icon: Icon }) => (
            <div key={step} className="group text-center">
              <div className="relative mb-4 sm:mb-8">
                {/* Icon Container */}
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-white/30 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-8 h-8 sm:w-14 sm:h-14" />
                </div>

                {/* Step Badge */}
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 bg-white text-green-700 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-lg mx-auto left-0 right-0">
                  {step}
                </div>
              </div>

              {/* Step Text */}
              <div className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                {title}
              </div>
              <div className="text-sm sm:text-lg opacity-90">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
