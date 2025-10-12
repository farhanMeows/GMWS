import React from "react";
import { Leaf, Users, TrendingUp, LucideIcon } from "lucide-react";

interface ImpactItem {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  bg: string;
}

const impacts: ImpactItem[] = [
  {
    title: "Environmental",
    description:
      "90% waste diverted from landfills, reduced GHG emissions, cleaner air and water",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-600",
    bg: "from-green-50 to-emerald-50",
  },
  {
    title: "Social",
    description:
      "Clean neighborhoods, jobs for locals, community awareness campaigns",
    icon: Users,
    gradient: "from-blue-500 to-cyan-600",
    bg: "from-blue-50 to-cyan-50",
  },
  {
    title: "Economic",
    description:
      "Waste-to-wealth industry, reduced municipal burden, sustainable growth",
    icon: TrendingUp,
    gradient: "from-amber-500 to-orange-600",
    bg: "from-amber-50 to-orange-50",
  },
];

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Our Impact
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Making a difference in every dimension
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 px-4">
          {impacts.map((impact, idx) => {
            const Icon = impact.icon;
            return (
              <div
                key={idx}
                className={`group bg-gradient-to-br ${impact.bg} p-6 sm:p-10 rounded-3xl border-t-4 border-transparent hover:border-current shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${impact.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {impact.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  {impact.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
