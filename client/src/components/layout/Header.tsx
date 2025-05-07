import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#" },
    { label: "Temple", href: "#" },
    { label: "Activities", href: "#" },
    { label: "Offer Seva", href: "/" },
    { label: "Contact", href: "/" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4">
          <img className="h-14 w-auto" src="/src/public/hkm-logo.jpg" alt="ISKCON Logo" />
          <div>
            <h1 className="font-poppins text-primary text-lg md:text-2xl font-bold">ISKCON Bhilai</h1>
            <p className="text-xs md:text-sm text-gray-600">Service in Devotion</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center text-sm">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}>
              <a
                className={`relative font-medium transition-all duration-200 ${
                  location === href
                    ? "text-secondary font-bold"
                    : "text-primary hover:text-secondary"
                }`}
              >
                {label}
                {location === href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-secondary transition-all rounded-full" />
                )}
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg px-4 pb-4 pt-2 space-y-2 transition-all duration-300">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}>
              <a
                className={`block py-2 px-2 rounded-lg transition-all duration-150 ${
                  location === href
                    ? "text-secondary font-semibold bg-secondary/10"
                    : "text-primary hover:text-secondary hover:bg-secondary/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
