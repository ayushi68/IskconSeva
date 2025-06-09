import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, ChevronDown, ChevronUp, Facebook, Youtube, Instagram, Clock, CloudSun, HeartHandshake } from "lucide-react";
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

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const GoogleTranslate = () => {
  useEffect(() => {
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,bn,gu,ta,te,kn,ml,mr,pa',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 32, height: 32, minWidth: 0, minHeight: 0 }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200 transition-all duration-200 cursor-pointer"
        style={{ width: 32, height: 32, zIndex: 2 }}
        onMouseEnter={() => {
          const el = document.getElementById('google_translate_element');
          if (el) el.style.display = 'block';
        }}
        onMouseLeave={() => {
          const el = document.getElementById('google_translate_element');
          if (el) el.style.display = 'none';
        }}
      >
        <svg
          className="w-5 h-5 text-indigo-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0c2.5 2.5 2.5 6.5 0 9m0 0c-2.5-2.5-2.5-6.5 0-9"
          />
        </svg>
      </div>
      <div
        id="google_translate_element"
        className="absolute left-10 top-0 z-50"
        style={{
          display: 'none',
          minWidth: 120,
          background: 'white',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          padding: 4,
        }}
        onMouseEnter={e => (e.currentTarget.style.display = 'block')}
        onMouseLeave={e => (e.currentTarget.style.display = 'none')}
      />
    </div>
  );
};

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // State for weather (mock data for now)
  const [temperature, setTemperature] = useState<number | null>(28); // Mock temperature: 28°C

  // State for Darshan status
  const [isDarshanOpen, setIsDarshanOpen] = useState(false);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setExpandedMenu(null);
    setExpandedSubMenu(null);
  }, [location]);

  // Mock weather fetch (replace with real API if available)
  useEffect(() => {
    // Placeholder for weather API call
    // Example: fetch('https://api.openweathermap.org/data/2.5/weather?q=City&appid=YOUR_API_KEY')
    // For now, using mock data (28°C)
    setTemperature(28);
  }, []);

  // Check Darshan timing based on current time (07:41 PM IST on June 07, 2025)
  useEffect(() => {
    const currentTime = new Date('2025-06-07T19:41:00+05:30'); // Current date and time: 07:41 PM IST on June 07, 2025
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    // Define Darshan timings (5:00 AM to 12:00 PM and 4:00 PM to 9:00 PM IST)
    const morningStart = 5 * 60; // 5:00 AM
    const morningEnd = 12 * 60; // 12:00 PM
    const eveningStart = 16 * 60; // 4:00 PM
    const eveningEnd = 21 * 60; // 9:00 PM

    const isOpen =
      (currentTimeInMinutes >= morningStart && currentTimeInMinutes <= morningEnd) ||
      (currentTimeInMinutes >= eveningStart && currentTimeInMinutes <= eveningEnd);

    setIsDarshanOpen(isOpen);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 300);
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
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggleMegaMenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
    setExpandedSubMenu(null);
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
            { label: "Our Vision", href: "/OurVision" },
            { label: "Our Objectives", href: "/Objectives" },
            { label: "Center List", href: "/CenterList" },
            { label: "About Us - History", href: "/History" },
          ],
        },
      ],
    },
    { label: "I Am New", href: "/IAmNew" },
    {
      label: "Philosophy",
      href: "./Srilaprabhupada",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Gaudiya Sampradaya", href: "/Gaudiya" },
            { label: "Srila Prabhupada", href: "/Sprabhpada" },
            { label: "Nityananda Prabhu", href: "/nityanand" },
            { label: "Chaitanya Mahaprabhu", href: "/Chaitanya" },
            { label: "Divine Couple", href: "/Divinecouple" },
            { label: "Bhagavad Gita", href: "/Bhagavadgita" },
            { label: "Chanting Hare Krishna", href: "/Mahamantra" },
            { label: "Bhakti Yoga", href: "/Bhaktiyoga" },
            { label: "Krishna Consciousness", href: "/Krishna" },
          ],
        },
      ],
    },
    {
      label: "Temple",
      href: "#",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Temple Schedule", href: "/Templeschedule" },
            { label: "Temple Schedule(Bhilai)", href: "/Tsbhilai" },
            { label: "Temple Schedule(Raipur)", href: "/Tsraipur" },
            { label: "Vaishnava Calender", href: "/all-events" },
            { label: "Pranam Mantra", href: "/Pranammantra" },
            { label: "Invocation Prayers", href: "/Invocation" },
          ],
        },
      ],
    },
    {
      label: "Activities",
      href: "./Activitieslp",
      megaMenu: [
        {
          links: [
            { label: "Annadana Seva", href: "/Annadana" },
            { label: "Gaushala", href: "/Gaushala" },
            { label: "Youth's Corner", href: "/Youthcorner" },
            { label: "Kid's Corner", href: "/Kidscorner" },
            { label: "Family's Corner", href: "/Familycorner" },
            { label: "Book Distribution", href: "/Bookscorner" },
            { label: "Harinam Mantapa", href: "/Harinam" },
            { label: "Gifts", href: "/Gifts" },
            { label: "Catering Services", href: "/Catering" },
            { label: "Akshaya Patra", href: "/Akshaypatra" },
            { label: "Book a ceremony", href: "/BookCeremony" },
            { label: "Pilgrimage Tours", href: "/Pilgrimage" },
          ],
        },
      ],
    },
    {
      label: "Festival",
      href: "./Festival",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Gaura Purnima", href: "/Gaurapurnima" },
            { label: "Ram Navami", href: "/Ramnavami" },
            { label: "Narasimha Chaturdashi", href: "/NarasimhaChaturdashi" },
            { label: "Panihati Chida-dahi Mahotsava", href: "/Panihati" },
            { label: "Jhulan Yatra", href: "/JhulanYatra" },
            { label: "Janmashtami", href: "/Janmashtami" },
            { label: "SP's Vyasa Puja", href: "/Vyasapuja" },
            { label: "Radhashtami", href: "/Radhashtami" },
            { label: "Deepotsava", href: "/Deepotsava" },
            { label: "Purushottam Maas", href: "/Purushottam" },
            { label: "Govardhan Puja", href: "/Govardhanpuja" },
            { label: "Gita Jayanti", href: "/GitaJayanti" },
            { label: "Vaikuntha Ekadashi", href: "/Vaikuntha" },
            { label: "Akhanda Harinaam Sankirtan", href: "/Akhandaharinaam" },
            { label: "Nityananda Trayodashi", href: "/Nityananda" },
          ],
        },
      ],
    },
    {
      label: "Media",
      href: "./Media",
      megaMenu: [
        {
          links: [
            { label: "Photo Gallery", href: "/Photo" },
            { label: "Video Gallery", href: "/Video" },
            { label: "Audio Gallery", href: "/Audio" },
            { label: "Quarterly Newsletter", href: "/Newsletter" },
            { label: "Mobile Wallpaper", href: "/Mobilewallpaper" },
            { label: "Desktop Wallpaper", href: "/Desktopwallpaper" },
          ],
        },
      ],
    },
    {
      label: "Support Us",
      href: "./Donation",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Sri Vigraha Seva", href: "/Vigrahaseva" },
            { label: "Gau Seva", href: "/Gaushala" },
            { label: "Annadana Seva", href: "/Annadana" },
            { label: "Nitya Seva", href: "/Nityaseva" },
            { label: "Festival Seva", href: "/Festival" },
            { label: "Offline Donation", href: "/Offlinedonation" },
            { label: "Corpus Donation Seva", href: "/Corpusdonation" },
            { label: "Radharani Kitchen Seva", href: "/Radharani" },
            { label: "Rajbhog Seva", href: "/Rajbhog" },
            { label: "General Donation", href: "/Generaldonation" },
            { label: "Youth Empowerment", href: "/Youthempowerment" },
            {
              label: "Special Seva",
              href: "/Specialseva",
              subLinks: [
                { label: "Sadhu Seva", href: "/Sadhuseva" },
                { label: "Ekadashi Seva", href: "/Ekadashiseva" },
                { label: "Gyaan Daan", href: "/Gyaandaan" },
                { label: "Gita Daan", href: "/Gitadaan" },
                { label: "Bhagavatam Daan", href: "/Bhagavatam" },
                { label: "Sri Narasimha Yajna Seva", href: "/SriNarasimha" },
                { label: "Maha Sudarshana Narsimha Yajna seva", href: "/Mahanarasimha" },
              ],
            },
            { label: "Volunteer", href: "/Volunteer" },
          ],
        },
      ],
    },
    { label: "Blogs", href: "/Bloglp" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Upper Header Section - Fixed */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-sm py-3 px-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-5">
            <Link href="/temple/schedule-bhilai" className="flex items-center space-x-2 hover:text-yellow-200 transition-all duration-300 group">
              <Clock className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} group-hover:scale-110`} />
              <span className="font-medium">Temple Schedule</span>
            </Link>
            <div className="hidden md:flex items-center space-x-5">
              {/* Weather Section with Temperature */}
              <div className="flex items-center space-x-2 hover:text-yellow-200 transition-all duration-300 group">
                <CloudSun className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} group-hover:scale-110`} />
                <span className="font-medium">{temperature ? `${temperature}°C` : 'Loading...'}</span>
              </div>
              {/* Darshan Timing with Conditional Color */}
              <Link
                href="/darshan"
                className={`flex items-center space-x-2 transition-all duration-300 group ${
                  isDarshanOpen ? 'text-green-200 hover:text-green-100' : 'text-red-200 hover:text-red-100'
                }`}
              >
                <Clock className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} group-hover:scale-110`} />
                <span className="font-medium">{isDarshanOpen ? 'Darshan Open' : 'Darshan Closed'}</span>
              </Link>
            </div>
          </div>

          <div className={`flex-shrink-0 mx-6 md:mx-10 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            <img src="/hkmheader.png" alt="Logo" className={`transition-all duration-300 ${isScrolled ? 'h-9 md:h-11' : 'h-14 md:h-16'}`} />
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/HKMBHLRPR/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-all duration-300 group">
                <Facebook className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} group-hover:scale-110`} />
              </a>
              <a href="https://www.youtube.com/@harekrishnabhlrpr/featured" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-all duration-300 group">
                <Youtube className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} group-hover:scale-110`} />
              </a>
              <a href="https://www.instagram.com/hkm_bhilai_raipur/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-all duration-300 group">
                <Instagram className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} group-hover:scale-110`} />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-5">
              <Link href="/donation" className="flex items-center space-x-2 hover:text-yellow-200 transition-all duration-300 group">
                <HeartHandshake className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} group-hover:scale-110`} />
                <span className="font-medium">Offer Seva</span>
              </Link>
              <Link href="/donation/nitya-seva" className="flex items-center space-x-2 hover:text-yellow-200 transition-all duration-300 group">
                <HeartHandshake className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} group-hover:scale-110`} />
                <span className="font-medium">Become a Nitya Sevak</span>
              </Link>
              {/* Translation Section */}
              <GoogleTranslate />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Header Section (Navigation Bar) - Fixed */}
      <div
        ref={headerRef}
        className={`bg-white/95 backdrop-blur-lg shadow-md transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        } sticky top-[calc(theme(spacing.3)+theme(spacing.4)+theme(spacing.3))] z-40 border-b border-gray-100`}
      >
        <div className="container mx-auto px-4 flex justify-center items-center relative">
          <nav className="hidden md:flex justify-center items-center text-base font-semibold" ref={dropdownRef}>
            {navLinks.map((nav) => (
              <div
                key={nav.label}
                className="relative group px-5 py-2 rounded-lg hover:bg-indigo-50 transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(nav.label)}
                onMouseLeave={handleMouseLeave}
              >
                {nav.label === "Login/Register" ? (
                  <Button
                    asChild
                    variant="outline"
                    className="text-indigo-700 border-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 rounded-full px-5 py-1.5 transition-all duration-300 shadow-sm"
                  >
                    <Link
                      href={nav.href}
                      onClick={() => {
                        console.log(`Navigating to: ${nav.href}`);
                        setOpenDropdown(null);
                      }}
                      data-testid="login-button"
                    >
                      {nav.label}
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Link
                      href={nav.href}
                      className={`transition-all duration-300 ${
                        location === nav.href ? 'text-indigo-700 font-bold' : 'text-gray-900 hover:text-indigo-700'
                      } group-hover:scale-105 inline-block`}
                      onClick={() => {
                        console.log(`Navigating to top-level: ${nav.href}`);
                        setOpenDropdown(null);
                      }}
                      data-testid={`nav-link-${nav.label}`}
                    >
                      {nav.label}
                    </Link>
                    {nav.megaMenu && openDropdown === nav.label && (
                      <div
                        className="absolute z-[1000] left-0 mt-3 bg-white shadow-2xl rounded-xl border border-gray-100 pointer-events-auto transform animate-[dropdownFade_0.3s_ease-out]"
                        style={{ minWidth: nav.narrowMenu ? '240px' : '300px' }}
                        onMouseEnter={() => {
                          if (timeoutRef.current) clearTimeout(timeoutRef.current);
                        }}
                        onMouseLeave={handleMouseLeave}
                        role="menu"
                      >
                        {nav.megaMenu.map((section, idx) => (
                          <div key={idx} className="p-3">
                            {section.title && (
                              <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-widest px-4 py-2 border-b border-gray-100">
                                {section.title}
                              </h4>
                            )}
                            <ul className="space-y-1">
                              {section.links.map((link) => (
                                <li key={link.label} className="group/submenu relative">
                                  <Link
                                    href={link.href}
                                    className="flex items-center justify-between text-sm text-gray-800 px-4 py-2.5 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300 whitespace-nowrap pointer-events-auto"
                                    onClick={() => {
                                      console.log(`Navigating to megamenu item: ${link.href}`);
                                      setOpenDropdown(null);
                                    }}
                                    data-testid={`megamenu-link-${link.label}`}
                                    role="menuitem"
                                    aria-label={link.label}
                                  >
                                    <div className="flex items-center space-x-2">
                                      <ChevronRight className="w-4 h-4 text-indigo-600" />
                                      <span>{link.label}</span>
                                    </div>
                                    {link.subLinks && (
                                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover/submenu:text-indigo-600 transition-all duration-300" />
                                    )}
                                  </Link>
                                  {link.subLinks && (
                                    <div
                                      className="absolute left-full top-0 ml-2 hidden group-hover/submenu:block bg-white shadow-xl rounded-r-xl border border-gray-100 w-60 pointer-events-auto"
                                      role="menu"
                                    >
                                      <ul className="py-2">
                                        {link.subLinks.map((subLink) => (
                                          <li key={subLink.label}>
                                            <Link
                                              href={subLink.href}
                                              className="flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300 pointer-events-auto"
                                              onClick={() => {
                                                console.log(`Navigating to submenu item: ${subLink.href}`);
                                                setOpenDropdown(null);
                                              }}
                                              data-testid={`submenu-link-${subLink.label}`}
                                              role="menuitem"
                                              aria-label={subLink.label}
                                            >
                                              <ChevronRight className="w-4 h-4 text-indigo-600 mr-2" />
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
                  </>
                )}
              </div>
            ))}
          </nav>

          <div className="md:hidden absolute top-4 right-4 z-[60]">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-indigo-700 hover:bg-indigo-100 rounded-full">
              {mobileMenuOpen ? (
                <X className={`transition-all duration-300 ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`} />
              ) : (
                <Menu className={`transition-all duration-300 ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`} />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/70" onClick={() => setMobileMenuOpen(false)}></div>
      )}

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white z-[999] transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-2xl`}
      >
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
          <img src="/hkm-logo.jpg" alt="Logo" className="h-10 w-auto" />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="text-white hover:bg-indigo-700 rounded-full">
            <X className="w-6 h-6" />
          </Button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)] p-4 space-y-2 bg-gray-50">
          {navLinks.map((nav) => (
            <div key={nav.label} className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                {nav.label === "Login/Register" ? (
                  <Button
                    asChild
                    variant="outline"
                    className="block flex-1 text-base font-medium text-indigo-700 border-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 py-3 text-left rounded-lg"
                  >
                    <Link
                      href={nav.href}
                      onClick={() => {
                        console.log(`Navigating to: ${nav.href}`);
                        setMobileMenuOpen(false);
                      }}
                      data-testid="mobile-login-button"
                    >
                      {nav.label}
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Link
                      href={nav.href}
                      onClick={() => {
                        console.log(`Navigating to mobile nav: ${nav.href}`);
                        if (!nav.megaMenu) setMobileMenuOpen(false);
                      }}
                      className="block flex-1 text-base font-semibold text-gray-900 hover:text-indigo-700 py-3 transition-all duration-300"
                      data-testid={`mobile-nav-link-${nav.label}`}
                    >
                      {nav.label}
                    </Link>
                    {nav.megaMenu && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleMegaMenu(nav.label)}
                        className="text-indigo-700 hover:bg-indigo-100 rounded-full"
                      >
                        {expandedMenu === nav.label ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </Button>
                    )}
                  </>
                )}
              </div>
              {expandedMenu === nav.label && nav.megaMenu && (
                <div className="pl-4">
                  {nav.megaMenu.map((section, idx) => (
                    <div key={idx} className="py-2">
                      {section.title && (
                        <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-widest py-1">{section.title}</h4>
                      )}
                      <ul className="space-y-1">
                        {section.links.map((link) => (
                          <li key={link.label} className="relative">
                            <Link
                              href={link.href}
                              className="block text-sm text-gray-800 py-1.5 hover:text-indigo-700 pointer-events-auto"
                              onClick={() => {
                                console.log(`Navigating to mobile megamenu item: ${link.href}`);
                                setMobileMenuOpen(false);
                              }}
                              data-testid={`mobile-megamenu-link-${link.label}`}
                              role="menuitem"
                              aria-label={link.label}
                            >
                              {link.label}
                            </Link>
                            {link.subLinks && (
                              <>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => toggleSubMenu(link.label)}
                                  className="absolute right-0 top-1 text-indigo-700 hover:bg-indigo-100 rounded-full"
                                >
                                  {expandedSubMenu === link.label ? (
                                    <ChevronUp className="w-4 h-4" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4" />
                                  )}
                                </Button>
                                {expandedSubMenu === link.label && (
                                  <ul className="pl-4 space-y-1">
                                    {link.subLinks.map((subLink) => (
                                      <li key={subLink.label}>
                                        <Link
                                          href={subLink.href}
                                          className="block text-sm text-gray-700 py-1.5 hover:text-indigo-700 pointer-events-auto"
                                          onClick={() => {
                                            console.log(`Navigating to mobile submenu item: ${subLink.href}`);
                                            setMobileMenuOpen(false);
                                          }}
                                          data-testid={`mobile-submenu-link-${subLink.label}`}
                                          role="menuitem"
                                          aria-label={subLink.label}
                                        >
                                          {subLink.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
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
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes dropdownFade {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </header>
  );
}