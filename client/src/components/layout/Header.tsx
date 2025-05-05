import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-3">
            <span className="text-white text-xl font-bold">ISKCON</span>
          </div>
          <div>
            <h1 className="font-poppins text-primary text-xl md:text-2xl font-bold">ISKCON Raipur-Bhilai</h1>
            <p className="text-sm text-gray-600">Service in Devotion</p>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-6 items-center text-sm">
          <Link href="/">
            <a className={`font-medium ${location === '/' ? 'text-secondary font-bold' : 'text-primary hover:text-secondary'} transition`}>
              Home
            </a>
          </Link>
          <a href="#" className="font-medium text-primary hover:text-secondary transition">About</a>
          <a href="#" className="font-medium text-primary hover:text-secondary transition">Temple</a>
          <a href="#" className="font-medium text-primary hover:text-secondary transition">Activities</a>
          <Link href="/">
            <a className={`font-medium ${location === '/' ? 'text-secondary font-bold' : 'text-primary hover:text-secondary'} transition`}>
              Offer Seva
            </a>
          </Link>
          <a href="#" className="font-medium text-primary hover:text-secondary transition">Contact</a>
        </nav>
        
        <Button 
          variant="ghost"
          size="icon"
          className="md:hidden text-primary"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <Link href="/">
              <a className={`block py-2 ${location === '/' ? 'text-secondary font-semibold' : 'text-primary hover:text-secondary'} transition`}>
                Home
              </a>
            </Link>
            <a href="#" className="block py-2 text-primary hover:text-secondary transition">About</a>
            <a href="#" className="block py-2 text-primary hover:text-secondary transition">Temple</a>
            <a href="#" className="block py-2 text-primary hover:text-secondary transition">Activities</a>
            <Link href="/">
              <a className={`block py-2 ${location === '/' ? 'text-secondary font-semibold' : 'text-primary hover:text-secondary'} transition`}>
                Offer Seva
              </a>
            </Link>
            <a href="#" className="block py-2 text-primary hover:text-secondary transition">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
