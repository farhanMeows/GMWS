import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const subscribeLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSek0uf4PmWI2Q3JWYFQUkDR1ROw0Q00E_NDorv0K3jaghnXgg/viewform";

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm shadow-sm"
      }`}
    >
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            onClick={() => window.location.reload()}
            className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer"
          >
            <img
              src="/555586715_122100709629041596_6868443300280693468_n.jpg"
              alt="Green Mani Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Green Mani
              </span>
              <p className="text-xs text-gray-500 -mt-1">Waste Solutions</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-1">
            {["About", "Solution", "Plans", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Subscribe */}
          <button
            className="hidden lg:inline-flex bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-sm sm:text-base"
            onClick={(e) => {
              e.stopPropagation(); // prevent triggering the card click
              window.open(subscribeLink, "_blank");
            }}
          >
            Subscribe
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Full-Screen Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <span className="text-xl font-bold text-gray-900">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-500 hover:text-red-500 transition-all"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col bg-white space-y-3 p-6 overflow-y-auto h-[calc(100vh-80px)]">
          {["About", "Solution", "Plans", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 hover:text-green-600 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-green-100 transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
