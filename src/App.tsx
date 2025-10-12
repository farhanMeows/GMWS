import { useState, useEffect } from "react";
import {
  Recycle,
  Leaf,
  TrendingUp,
  Users,
  CheckCircle,
  Globe,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  Sparkles,
  Award,
  Shield,
  Factory,
  Menu, // ✅ Added
  X, // ✅ Added
} from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Problem from "./components/Problem";
import Technology from "./components/Technology";
import CircularEconomy from "./components/CircularEconomy";
import Solution from "./components/Solution";
import Plans from "./components/Plans";
import Impact from "./components/Impact";
import Contact from "./components/Contact";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-gradient-to-r from-green-600 to-green-700 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        } hover:scale-110 group`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
      </button>

      {/* Hero Section */}
      <Hero />

      {/* Executive Summary */}
      <About />

      {/* Vision & Mission */}
      <VisionMission />

      {/* The Problem */}
      <Problem />

      {/* The Solution */}
      <Solution />

      {/* Technology */}
      <Technology />

      {/* Circular Economy */}
      <CircularEconomy />

      {/* Subscription Plans */}
      <Plans />

      {/* Impact */}
      <Impact />

      {/* Contact */}
      <Contact />
    </div>
  );
}

export default App;
