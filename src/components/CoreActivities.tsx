import React from "react";
import {
  Recycle,
  Leaf,
  Factory,
  Building2,
  Flame,
  Globe2,
  TrendingDown,
  Landmark,
  Users,
  ShoppingBag,
  Truck,
} from "lucide-react";

interface Activity {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const activities: Activity[] = [
  {
    title: "Waste Management & Collection",
    description:
      "Door-to-door collection, segregation, transportation, and disposal of municipal, industrial, commercial, agricultural, and biomedical waste — ensuring efficient, reliable, and eco-friendly service.",
    icon: Truck,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Composting & Bio-Processing",
    description:
      "We convert biodegradable waste into organic fertilizers, compost, and biogas, promoting soil health and renewable energy generation.",
    icon: Leaf,
    gradient: "from-lime-500 to-green-600",
  },
  {
    title: "Recycling & Material Recovery",
    description:
      "Our Material Recovery Facilities (MRFs) recover plastics, paper, glass, metals, and e-waste — reducing landfill dependency and creating value from waste.",
    icon: Recycle,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Plastic Reprocessing & Pelletizing",
    description:
      "We reprocess PET, HDPE, LDPE, and PP plastics into pellets and granules used in industrial applications, including plastic-to-plyboard innovation.",
    icon: Factory,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Landfill & Environmental Services",
    description:
      "We develop engineered sanitary landfills, remediate dumpsites, and undertake soil recovery projects to restore ecosystems and reduce pollution.",
    icon: Building2,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Renewable Energy & Biogas Production",
    description:
      "Our waste-to-energy and biogas plants convert organic and plastic waste into bio-CNG, syngas, and RDF — creating sustainable energy.",
    icon: Flame,
    gradient: "from-red-500 to-pink-600",
  },
  {
    title: "Carbon Reduction & Trading",
    description:
      "We capture methane, reduce emissions, and participate in carbon credit trading — contributing to India’s low-carbon future.",
    icon: TrendingDown,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Integrated Resource Park & Circular Economy",
    description:
      "Our vision: a Waste-to-Wealth Industrial Park integrating recycling, composting, energy recovery, aquaculture, and green zones.",
    icon: Landmark,
    gradient: "from-green-600 to-blue-600",
  },
  {
    title: "Consultancy & Community Engagement",
    description:
      "We collaborate with municipalities, NGOs, and partners to provide consultancy, training, and awareness programs promoting waste literacy.",
    icon: Users,
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    title: "Trading & Marketing",
    description:
      "We market compost, pellets, biogas, and recycled materials through retail and wholesale networks across India.",
    icon: ShoppingBag,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Ancillary Activities",
    description:
      "We invest in logistics, land, machinery, and digital infrastructure to scale sustainable waste management operations.",
    icon: Globe2,
    gradient: "from-gray-500 to-slate-700",
  },
];

const CoreActivities: React.FC = () => {
  return (
    <section
      id="our core activities"
      className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-green-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Our Core Activities
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Green Mani Waste Solutions operates across diverse sectors, driving
            sustainability through innovation and circular economy principles.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {activities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <div
                key={idx}
                className="group bg-white p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 transform hover:scale-[1.03]"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${act.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {act.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {act.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreActivities;
