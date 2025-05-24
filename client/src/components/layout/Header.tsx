import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, ChevronDown, ChevronUp, Facebook, Youtube, Instagram, Clock, MessageSquare, Bell, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavLink = {
  label: string;
  href: string;
  megaMenu?: MegaMenuSection[];
  narrowMenu?: boolean;
};

type MegaMenuSection = {
  title?: string;
  links: {
    label: string;
    href: string;
    subLinks?: {
      label: string;
      href: string;
    }[];
  }[];
};

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when location changes
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setExpandedMenu(null);
    setExpandedSubMenu(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 1000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleMegaMenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
    setExpandedSubMenu(null); // Reset sub-menu when toggling mega menu
  };

  const toggleSubMenu = (label: string) => {
    setExpandedSubMenu(expandedSubMenu === label ? null : label);
  };

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Our Vision", href: "/about/OurVision" },
            { label: "Our Objectives", href: "/about/Objectives" },
            { label: "Center List", href: "/about/CenterList" },
            { label: "About Us - History", href: "/about/History" }
          ]
        }
      ]
    },
    { label: "I Am New", href: "/IAmNew" },
    {
      label: "Philosophy",
      href: "./Srilaprabhupada",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Gaudiya Sampradaya", href: "/philosophy/Gaudiya" },
            { label: "Srila Prabhupada", href: "/philosophy/Sprabhpada" },
            { label: "Nityananda Prabhu", href: "/philosophy/nityanand" },
            { label: "Chaitanya Mahaprabhu", href: "/philosophy/Chaitanya" },
            { label: "Divine Couple", href: "/philosophy/Divinecouple" },
            { label: "Bhagavad Gita", href: "/philosophy/Bhagavadgita" },
            { label: "Chanting Hare Krishna", href: "/philosophy/Mahamantra" },
            { label: "Bhakti Yoga", href: "/philosophy/Bhaktiyoga" },
            { label: "Krishna Consciousness", href: "/philosophy/Krishna" }
          ]
        }
      ]
    },
    {
      label: "Temple",
      href: "#",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Temple Schedule(Bhilai)", href: "/temple/Tsbhilai" },
            { label: "Temple Schedule(Raipur)", href: "/temple/Tsraipur" },
            { label: "Vaishnava Calender", href: "/all-events" },
            { label: "Pranam Mantra", href: "/temple/Pranammantra" }
          ]
        }
      ]
    },
    {
      label: "Activities",
      href: "./Activitieslp",
      megaMenu: [
        {
          links: [
            { label: "Annadana Seva", href: "/donation/Annadana" },
            { label: "Gaushala", href: "/donation/Gaushala" },
            { label: "Youth's Corner", href: "/activities/Youthcorner" },
            { label: "Kid's Corner", href: "/activities/Kidscorner" },
            { label: "Family's Corner", href: "/activities/Familycorner" },
            { label: "Book Distribution", href: "/activities/Bookscorner" },
            { label: "Harinam Mantapa", href: "/activities/Harinam" },
            { label: "Gifts", href: "/activities/Gifts" },
            { label: "Catering Services", href: "/activities/Catering" },
            { label: "Akshaya Patra", href: "/activities/Akshaypatra" },
            { label: "Book a ceremony", href: "/activities/BookCeremony" },
            { label: "Pilgrimage Tours", href: "/activities/Pilgrimage" },
          ]
        }
      ]
    },
    {
      label: "Festival",
      href: "./Festival",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Gaura Purnima", href: "/festival/Gaurapurnima" },
            { label: "Ram Navami", href: "/festival/Ramnavami" },
            { label: "Narasimha Chaturdashi", href: "/festival/NarasimhaChaturdashi" },
            { label: "Panihati Chida-dahi Mahotsava", href: "/festival/Panihati" },
            { label: "Jhulan Yatra", href: "/festival/JhulanYatra" },
            { label: "Janmashtami", href: "/festival/Janmashtami" },
            { label: "SP's Vyasa Puja", href: "/festival/Vyasapuja" },
            { label: "Radhashtami", href: "/festival/Radhashtami" },
            { label: "Deepotsava", href: "/festival/Deepotsava" },
            { label: "Purushottam Maas", href: "/festival/Purushottam" },
            { label: "Govardhan Puja", href: "/festival/Govardhanpuja" },
            { label: "Gita Jayanti", href: "/festival/GitaJayanti" },
            { label: "Vaikuntha Ekadashi", href: "/festival/Vaikuntha" },
            { label: "Akhanda Harinaam Sankirtan", href: "/festival/Akhandaharinaam" },
            { label: "Nityananda Trayodashi", href: "/festival/Nityananda" },
          ]
        }
      ]
    },
    {
      label: "Media",
      href: "./Media",
      megaMenu: [
        {
          links: [
            { label: "Photo Gallery", href: "/media/Photo" },
            { label: "Video Gallery", href: "/media/Video" },
            { label: "Audio Gallery", href: "/media/Audio" },
            {
              label: "Media Downloads",
              href: "#",
              subLinks: [
                { label: "Quarterly Newsletter", href: "/media/downloads/wallpapers" },
                { label: "Mobile Wallpaper May Month-English", href: "/media/downloads/pdfs" },
                { label: "Desktop Wallpaper May Month-Hindi ", href: "/media/downloads/mp3s" }
              ]
            }
          ]
        }
      ]
    },
    {
      label: "Support Us",
      href: "./Donation",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Sri Vigraha Seva", href: "/donation/Vigrahaseva" },
            { label: "Gau Seva", href: "/donation/Gaushala" },
            { label: "Annadana Seva", href: "/donation/Annadana" },
            { label: "Nitya Seva", href: "/donation/Nityaseva" },
            { label: "Festival Seva", href: "/Festival" },
            { label: "Offline Donation", href: "/donation/Offlinedonation" },
            { label: "Corpus Donation Seva", href: "/donation/Corpusdonation" },
            { label: "Radharani Kitchen Seva", href: "/donation/Radharani" },
            { label: "Rajbhog Seva", href: "/donation/Rajbhog" },
            { label: "General Donation", href: "/donation/Generaldonation" },
            { label: "Youth Empowerment", href: "/donation/Youthempowerment" },
            {
              label: "Special Seva",
              href: "/donation/Specialseva",
              subLinks: [
                { label: "Sadhu Seva", href: "/Special Seva/Sadhuseva" },
                { label: "Ekadashi Seva", href: "/Special Seva/Ekadashiseva" },
                { label: "Gyaan Daan ", href: "/Special Seva/Gyaandaan" },
                { label: "Gita Daan ", href: "/Special Seva/Gitadaan" },
                { label: "Bhagavatam Daan ", href: "/Special Seva/Bhagavatam" },
                { label: "Sri Narasimha Yajna Seva ", href: "/Special Seva/SriNarasimha" },
                { label: "Maha Sudarshana Narsimha Yajna seva ", href: "/Special Seva/Mahanarasimha" }
              ]
            },
            { label: "Volunteer", href: "/donation/Volunteer" },
          ]
        }
      ]
    },
    { label: "Blogs", href: "./Bloglp" }
  ];

  return (
    <header className="sticky top-0 z-50">
          {/* Upper Header Section */}
          <div className="bg-indigo-600 text-white text-sm py-2 px-4 shadow-md">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/temple/Tsbhilai" className="flex items-center hover:text-yellow-300 transition-colors duration-300">
                  <Clock className="w-4 h-4 mr-1" /> Temple Schedule
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                  <a href="https://tinyurl.com/HKMWhatsapp01" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-yellow-300 transition-colors duration-300">
                    <MessageSquare className="w-4 h-4 mr-1" /> Join us on WhatsApp
                  </a>
                  <a href="https://tinyurl.com/HKMTelegram  " target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-yellow-300 transition-colors duration-300">
                    <Bell className="w-4 h-4 mr-1" /> Join us on Telegram
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex space-x-3">
                  <a href="https://www.facebook.com/HKMBHLRPR/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://www.youtube.com/@harekrishnabhlrpr/featured" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/hkm_bhilai_raipur/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <Link href="/Donation" className="flex items-center hover:text-yellow-300 transition-colors duration-300">
                    <HeartHandshake className="w-4 h-4 mr-1" /> Offer Seva
                  </Link>
                  <Link href="/donation/Nityaseva" className="flex items-center hover:text-yellow-300 transition-colors duration-300">
                    <HeartHandshake className="w-4 h-4 mr-1" /> Become a Nitya Sevak
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div ref={headerRef} className={`bg-white/90 backdrop-blur shadow transition-all duration-300 ${isScrolled ? 'py-1' : 'py-3'}`}>
            <div className="container mx-auto px-4 flex justify-center items-center relative">
              {/* Left Navigation */}
              <nav className="hidden md:flex flex-1 justify-end items-center text-sm" ref={dropdownRef} onMouseLeave={handleMouseLeave}>
                {navLinks.slice(0, 5).map((nav, index) => (
                  <div key={nav.label} className="relative group px-4" onMouseEnter={() => handleMouseEnter(nav.label)} onMouseLeave={handleMouseLeave}>
                    <Link href={nav.href} className={`font-medium transition-colors duration-300 ${location === nav.href ? 'text-indigo-600 font-semibold' : 'text-gray-800 hover:text-indigo-600'}`} onClick={() => setOpenDropdown(null)}>
                      {nav.label}
                    </Link>
                    {nav.megaMenu && openDropdown === nav.label && (
                      <div className="absolute z-[999] left-0 mt-2 bg-white shadow-xl rounded-lg border border-gray-200" style={{ minWidth: nav.narrowMenu ? '220px' : '280px' }}>
                        {nav.megaMenu.map((section, idx) => (
                          <div key={idx} className="p-2">
                            {section.title && <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-1">{section.title}</h4>}
                            <ul className="space-y-1">
                              {section.links.map((link) => (
                                <li key={link.label} className="group/submenu relative">
                                  <Link href={link.href} className="flex items-center justify-between text-sm text-gray-700 px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300 whitespace-nowrap" onClick={() => setOpenDropdown(null)}>
                                    <div className="flex items-center">
                                      <ChevronRight className="w-4 h-4 text-indigo-500 mr-2" />
                                      {link.label}
                                    </div>
                                    {link.subLinks && <ChevronRight className="w-4 h-4 text-gray-400 group-hover/submenu:text-indigo-500 transition-colors duration-300" />}
                                  </Link>
                                  {link.subLinks && (
                                    <div className="absolute left-full top-0 ml-1 hidden group-hover/submenu:block bg-white shadow-lg rounded-r-lg border border-gray-200 w-56">
                                      <ul className="py-1">
                                        {link.subLinks.map((subLink) => (
                                          <li key={subLink.label}>
                                            <Link href={subLink.href} className="flex items-center text-sm text-gray-700 px-3 py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300">
                                              <ChevronRight className="w-3 h-3 text-indigo-500 mr-2" />
                                              {subLink.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Logo */}
              <div className={`flex-shrink-0 mx-6 md:mx-10 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                <img src="/hkmheader.png" alt="Logo" className={`transition-all duration-300 ${isScrolled ? 'h-8 md:h-10' : 'h-12 md:h-16'}`} />
              </div>

              {/* Right Navigation */}
              <nav className="hidden md:flex flex-1 justify-start items-center text-sm" ref={dropdownRef} onMouseLeave={handleMouseLeave}>
                {navLinks.slice(5).map((nav) => (
                  <div key={nav.label} className="relative group px-4" onMouseEnter={() => handleMouseEnter(nav.label)} onMouseLeave={handleMouseLeave}>
                    <Link href={nav.href} className={`font-medium transition-colors duration-300 ${location === nav.href ? 'text-indigo-600 font-semibold' : 'text-gray-800 hover:text-indigo-600'}`} onClick={() => setOpenDropdown(null)}>
                      {nav.label}
                    </Link>
                    {nav.megaMenu && openDropdown === nav.label && (
                      <div className="absolute z-[999] right-0 mt-2 bg-white shadow-xl rounded-lg border border-gray-200" style={{ minWidth: nav.narrowMenu ? '220px' : '280px' }}>
                        {nav.megaMenu.map((section, idx) => (
                          <div key={idx} className="p-2">
                            {section.title && <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-1">{section.title}</h4>}
                            <ul className="space-y-1">
                              {section.links.map((link) => (
                                <li key={link.label} className="group/submenu relative">
                                  <Link href={link.href} className="flex items-center justify-between text-sm text-gray-700 px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300 whitespace-nowrap" onClick={() => setOpenDropdown(null)}>
                                    <div className="flex items-center">
                                      <ChevronRight className="w-4 h-4 text-indigo-500 mr-2" />
                                      {link.label}
                                    </div>
                                    {link.subLinks && <ChevronRight className="w-4 h-4 text-gray-400 group-hover/submenu:text-indigo-500 transition-colors duration-300" />}
                                  </Link>
                                  {link.subLinks && (
                                    <div className="absolute right-full top-0 mr-1 hidden group-hover/submenu:block bg-white shadow-lg rounded-l-lg border border-gray-200 w-56">
                                      <ul className="py-1">
                                        {link.subLinks.map((subLink) => (
                                          <li key={subLink.label}>
                                            <Link href={subLink.href} className="flex items-center text-sm text-gray-700 px-3 py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300">
                                              <ChevronRight className="w-3 h-3 text-indigo-500 mr-2" />
                                              {subLink.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden absolute top-4 right-4 z-[60]">
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-indigo-600 hover:bg-indigo-50">
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-black/60" onClick={() => setMobileMenuOpen(false)}></div>
          )}

          {/* Mobile Sidebar */}
          <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white z-[999] transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center p-4 bg-indigo-600 text-white">
              <img src="/hkm-logo.jpg" alt="Logo" className="h-10 w-auto" />
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="text-white hover:bg-indigo-700">
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="overflow-y-auto h-[calc(100%-4rem)] p-4 space-y-2">
              {navLinks.map((nav) => (
                <div key={nav.label} className="border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <Link href={nav.href} onClick={() => { if (!nav.megaMenu) setMobileMenuOpen(false); }} className="block flex-1 text-base font-medium text-gray-800 hover:text-indigo-600 py-3 transition-colors duration-300">
                      {nav.label}
                    </Link>
                    {nav.megaMenu && (
                      <Button variant="ghost" size="icon" onClick={() => toggleMegaMenu(nav.label)} className="text-indigo-600 hover:bg-indigo-100">
                        {expandedMenu === nav.label ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </Button>
                    )}
                  </div>
                  {expandedMenu === nav.label && nav.megaMenu && (
                    <div className="pl-4">
                      {nav.megaMenu.map((section, idx) => (
                        <div key={idx} className="py-2">
                          {section.title && <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider py-1">{section.title}</h4>}
                          <ul className="space-y-1">
                            {section.links.map((link) => (
                              <li key={link.label}>
                                <Link href={link.href} className="block text-sm text-gray-700 py-1 hover:text-indigo-600" onClick={() => setMobileMenuOpen(false)}>
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
    </header>
  );
}