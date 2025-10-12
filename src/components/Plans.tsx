import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  ideal: string;
  features: string[];
  featured?: boolean;
}

const plans: Plan[] = [
  {
    name: "Residential",
    price: "₹200",
    ideal: "Homes & Apartments",
    features: [
      "Weekly pickup",
      "Segregation support",
      "Customer app access",
      "Monthly impact report",
    ],
  },
  {
    name: "Business",
    price: "₹300",
    ideal: "Shops & Clinics",
    features: [
      "Weekly pickup",
      "Higher waste volume",
      "Priority support",
      "Detailed analytics",
    ],
    featured: true,
  },
  {
    name: "Commercial",
    price: "₹500",
    ideal: "Hotels, Schools, Institutions",
    features: [
      "Customized schedule",
      "Waste audits",
      "Dedicated manager",
      "Quarterly consulting",
    ],
  },
];

const Plans: React.FC = () => {
  const [activePlan, setActivePlan] = useState<string>("");

  const handleSelect = (planName: string) => {
    setActivePlan(planName);
  };

  const subscribeLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSek0uf4PmWI2Q3JWYFQUkDR1ROw0Q00E_NDorv0K3jaghnXgg/viewform";

  return (
    <section
      id="plans"
      className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-green-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Subscription Plans
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 px-4">
          {plans.map((plan, idx) => {
            const isActive = activePlan === plan.name;
            return (
              <div
                key={idx}
                onClick={() => handleSelect(plan.name)}
                className={`
                  bg-white p-6 sm:p-10 rounded-3xl border 
                  transition-all duration-300 transform 
                  cursor-pointer
                  ${plan.featured ? "ring-4 ring-green-600" : "border-gray-100"}
                  ${isActive ? "border-green-500 ring-2 ring-green-400" : ""}
                  hover:scale-105 hover:shadow-2xl
                  md:hover:scale-105 md:hover:shadow-2xl
                  sm:hover:scale-100 sm:hover:shadow-none
                  active:scale-[1.02]
                `}
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white text-xs sm:text-sm font-bold py-2 px-4 sm:px-8 rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    {plan.ideal}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl sm:text-6xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-base sm:text-xl text-gray-600 ml-2">
                      /month
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Subscribe Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent triggering the card click
                    window.open(subscribeLink, "_blank");
                  }}
                  className={`w-full py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-[1.02] ${
                    plan.featured || isActive
                      ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  } md:hover:scale-105 sm:hover:scale-100 sm:hover:shadow-none`}
                >
                  Subscribe Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plans;
