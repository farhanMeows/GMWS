import React from "react";
import {
  Globe,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
} from "lucide-react";

interface SocialLink {
  icon: LucideIcon;
  href: string;
}

const socials: SocialLink[] = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61581247888025#",
  },
  { icon: Instagram, href: "https://www.instagram.com/greenmanipur/?hl=en" },
  { icon: Linkedin, href: "#" }, // Replace later with real link
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            Get in touch with our team
          </p>
        </div>

        {/* Contact Sections */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 mb-12 sm:mb-16">
          {/* Subscriptions */}
          <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              For Subscriptions
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <a
                href="http://www.gmws.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors flex-shrink-0">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                </div>
                <span className="text-base sm:text-xl hover:text-green-400 transition-colors break-all">
                  www.gmws.in
                </span>
              </a>

              <a
                href="mailto:support@gmws.in"
                className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                </div>
                <span className="text-base sm:text-xl hover:text-green-400 transition-colors break-all">
                  support@gmws.in
                </span>
              </a>
            </div>
          </div>

          {/* Corporate & Investors */}
          <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              For Corporate & Investors
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <a
                href="mailto:contact@gmws.in"
                className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <span className="text-base sm:text-xl hover:text-blue-400 transition-colors break-all">
                  contact@gmws.in
                </span>
              </a>

              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <span className="text-base sm:text-xl text-gray-300">
                  C/o. Syed Ashad Ali, Kshetri Mayai Leikai, Porompat
                  Sub-division, Imphal East, Manipur, 795005
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 sm:pt-12 border-t border-white/10">
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 border border-white/20 hover:border-transparent"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg px-4">
            © 2025 Greenmani Waste Solutions Pvt. Ltd. Technology for a Circular
            Tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
