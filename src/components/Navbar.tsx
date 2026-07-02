import React, { useState, useEffect } from "react";
import { Menu, X, Flame, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  logoSrc: string;
}

export default function Navbar({ logoSrc }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["home", "about", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { label: "Beranda", id: "home" },
    { label: "Tentang Kami", id: "about" },
    { label: "FAQ", id: "faq" },
    { label: "Hubungi Kami", id: "contact" }
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-brand-purple/15 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-purple transition-transform duration-300 group-hover:scale-105">
              <img
                src={logoSrc}
                alt="Elvin Store Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-purple/5 mix-blend-color"></div>
            </div>
            <div>
              <span className="font-display font-black text-xl tracking-wider bg-gradient-to-r from-brand-purple via-violet-700 to-brand-yellow bg-clip-text text-transparent group-hover:brightness-110">
                ELVIN STORE
              </span>
              <div className="flex items-center space-x-1 -mt-1">
                <ShieldCheck className="w-3 h-3 text-violet-700" />
                <span className="text-[9px] font-mono font-bold tracking-widest text-violet-700 uppercase">
                  100% AMANAH
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-sans text-sm font-semibold transition-all duration-300 relative ${
                  activeSection === item.id
                    ? "text-brand-purple font-bold"
                    : "text-slate-600 hover:text-brand-purple hover:bg-brand-purple/5"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-purple to-brand-yellow"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-brand-purple to-brand-yellow text-white font-display font-bold text-xs rounded-lg tracking-wider hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              ORDER NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-brand-purple hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-brand-purple/10 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition-colors ${
                    activeSection === item.id
                      ? "bg-brand-purple/10 text-brand-purple font-bold border-l-4 border-brand-purple"
                      : "text-slate-600 hover:bg-slate-50 hover:text-brand-purple"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 px-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-3 bg-gradient-to-r from-brand-purple to-brand-yellow text-white text-center font-display font-bold text-sm rounded-lg tracking-wider shadow-md"
                >
                  HUBUNGI WHATSAPP
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
