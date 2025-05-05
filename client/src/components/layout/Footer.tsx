import { Link } from "wouter";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--deep-blue))] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">ISKCON Raipur-Bhilai</h3>
            <p className="text-gray-300 mb-4">International Society for Krishna Consciousness</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition" aria-label="Youtube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">About ISKCON</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Temple Schedule</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Activities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Seva Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/annadana-seva">
                  <a className="text-gray-300 hover:text-secondary transition">Annadana Seva</a>
                </Link>
              </li>
              <li>
                <Link href="/category/gaushala-seva">
                  <a className="text-gray-300 hover:text-secondary transition">Gaushala Seva</a>
                </Link>
              </li>
              <li>
                <Link href="/category/temple-development">
                  <a className="text-gray-300 hover:text-secondary transition">Temple Development</a>
                </Link>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Festival Seva</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Book Distribution</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Tax Exemption</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ISKCON Raipur-Bhilai. All rights reserved.</p>
          <p className="mt-2">Website designed and developed with devotion.</p>
        </div>
      </div>
    </footer>
  );
}
