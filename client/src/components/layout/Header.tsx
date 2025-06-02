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

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setExpandedMenu(null);
    setExpandedSubMenu(null);
  }, [location]);

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
            { label: "About Us - History", href: "/History" }
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
            { label: "Gaudiya Sampradaya", href: "/Gaudiya" },
            { label: "Srila Prabhupada", href: "/Sprabhpada" },
            { label: "Nityananda Prabhu", href: "/nityanand" },
            { label: "Chaitanya Mahaprabhu", href: "/Chaitanya" },
            { label: "Divine Couple", href: "/Divinecouple" },
            { label: "Bhagavad Gita", href: "/Bhagavadgita" },
            { label: "Chanting Hare Krishna", href: "/Mahamantra" },
            { label: "Bhakti Yoga", href: "/Bhaktiyoga" },
            { label: "Krishna Consciousness", href: "/Krishna" }
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
            { label: "Temple Schedule(Bhilai)", href: "/Tsbhilai" },
            { label: "Temple Schedule(Raipur)", href: "/Tsraipur" },
            { label: "Vaishnava Calender", href: "/all-events" },
            { label: "Pranam Mantra", href: "/Pranammantra" }
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
            { label: "Photo Gallery", href: "/Photo" },
            { label: "Video Gallery", href: "/Video" },
            { label: "Audio Gallery", href: "/Audio" },
            { label: "Quarterly Newsletter", href: "/Newsletter" },
            { label: "Mobile Wallpaper", href: "/Mobilewallpaper" },
            { label: "Desktop Wallpaper", href: "/Desktopwallpaper" },
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
                { label: "Gyaan Daan ", href: "/Gyaandaan" },
                { label: "Gita Daan ", href: "/Gitadaan" },
                { label: "Bhagavatam Daan ", href: "/Bhagavatam" },
                { label: "Sri Narasimha Yajna Seva ", href: "/SriNarasimha" },
                { label: "Maha Sudarshana Narsimha Yajna seva ", href: "/Mahanarasimha" }
              ]
            },
            { label: "Volunteer", href: "/Volunteer" },
          ]
        }
      ]
    },
    { label: "Blogs", href: "/Bloglp" }
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Upper Header Section - Fixed */}
      <div className="bg-indigo-600 text-white text-sm py-2 px-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/temple/schedule-bhilai" className="flex items-center hover:text-yellow-300 transition-colors duration-300">
              <Clock className={`mr-1 transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} /> Temple Schedule
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              {/* Weather Section */}
              <div className="flex items-center hover:text-yellow-300 transition-colors duration-300">
                <CloudSun className={`mr-1 transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
                <span>Weather</span>
              </div>
              {/* Darshan Timing */}
              <Link href="/darshan" className="flex items-center hover:text-yellow-300 transition-colors duration-300">
                <Clock className={`mr-1 transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
                Darshan Timing
              </Link>
            </div>
          </div>

          <div className={`flex-shrink-0 mx-6 md:mx-10 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            <img src="/hkmheader.png" alt="Logo" className={`transition-all duration-300 ${isScrolled ? 'h-8 md:h-10' : 'h-12 md:h-16'}`} />
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/HKMBHLRPR/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
                <Facebook className={`transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
              </a>
              <a href="https://www.youtube.com/@harekrishnabhlrpr/featured" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
                <Youtube className={`transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
              </a>
              <a href="https://www.instagram.com/hkm_bhilai_raipur/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
                <Instagram className={`transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/donation" className="flex items-center hover:text-yellow-300 transition-colors duration-300">
                <HeartHandshake className={`mr-1 transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} /> Offer Seva
              </Link>
              <Link href="/donation/nitya-seva" className="flex items-center hover:text-yellow-300 transition-colors duration-300">
                <HeartHandshake className={`mr-1 transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} /> Become a Nitya Sevak
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Header Section (Navigation Bar) - Fixed */}
      <div
        ref={headerRef}
        className={`bg-white/90 backdrop-blur shadow transition-all duration-300 ${
          isScrolled ? 'py-1' : 'py-3'
        } sticky top-[calc(theme(spacing.2)+theme(spacing.4)+theme(spacing.2))] z-40`}
      >
        <div className="container mx-auto px-4 flex justify-center items-center relative">
          <nav className="hidden md:flex justify-center items-center text-sm" ref={dropdownRef}>
            {navLinks.map((nav) => (
              <div
                key={nav.label}
                className="relative group px-4"
                onMouseEnter={() => handleMouseEnter(nav.label)}
                onMouseLeave={handleMouseLeave}
              >
                {nav.label === "Login/Register" ? (
                  <Button
                    asChild
                    variant="outline"
                    className="text-indigo-600 border border-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
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
                      className={`font-medium transition-colors duration-300 ${
                        location === nav.href ? 'text-indigo-600 font-semibold' : 'text-gray-800 hover:text-indigo-600'
                      }`}
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
                        className="absolute z-[1000] left-0 mt-2 bg-white shadow-xl rounded-lg border border-gray-200 pointer-events-auto"
                        style={{ minWidth: nav.narrowMenu ? '220px' : '280px' }}
                        onMouseEnter={() => {
                          if (timeoutRef.current) clearTimeout(timeoutRef.current);
                        }}
                        onMouseLeave={handleMouseLeave}
                        role="menu"
                      >
                        {nav.megaMenu.map((section, idx) => (
                          <div key={idx} className="p-2">
                            {section.title && (
                              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-1">
                                {section.title}
                              </h4>
                            )}
                            <ul className="space-y-1">
                              {section.links.map((link) => (
                                <li key={link.label} className="group/submenu relative">
                                  <Link
                                    href={link.href}
                                    className="flex items-center justify-between text-sm text-gray-700 px-4 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300 whitespace-nowrap pointer-events-auto"
                                    onClick={() => {
                                      console.log(`Navigating to megamenu item: ${link.href}`);
                                      setOpenDropdown(null);
                                    }}
                                    data-testid={`megamenu-link-${link.label}`}
                                    role="menuitem"
                                    aria-label={link.label}
                                  >
                                    <div className="flex items-center">
                                      <ChevronRight className="w-4 h-4 text-indigo-500 mr-2" />
                                      {link.label}
                                    </div>
                                    {link.subLinks && (
                                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover/submenu:text-indigo-500 transition-colors duration-300" />
                                    )}
                                  </Link>
                                  {link.subLinks && (
                                    <div
                                      className="absolute left-full top-0 ml-2 hidden group-hover/submenu:block bg-white shadow-lg rounded-r-lg border border-gray-200 w-56 pointer-events-auto"
                                      role="menu"
                                    >
                                      <ul className="py-1">
                                        {link.subLinks.map((subLink) => (
                                          <li key={subLink.label}>
                                            <Link
                                              href={subLink.href}
                                              className="flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300 pointer-events-auto"
                                              onClick={() => {
                                                console.log(`Navigating to submenu item: ${subLink.href}`);
                                                setOpenDropdown(null);
                                              }}
                                              data-testid={`submenu-link-${subLink.label}`}
                                              role="menuitem"
                                              aria-label={subLink.label}
                                            >
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
                  </>
                )}
              </div>
            ))}
          </nav>

          <div className="md:hidden absolute top-4 right-4 z-[60]">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-indigo-600 hover:bg-indigo-50">
              {mobileMenuOpen ? (
                <X className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-6 h-6'}`} />
              ) : (
                <Menu className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-6 h-6'}`} />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60" onClick={() => setMobileMenuOpen(false)}></div>
      )}

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white z-[999] transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
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
                {nav.label === "Login/Register" ? (
                  <Button
                    asChild
                    variant="outline"
                    className="block flex-1 text-base font-medium text-indigo-600 border-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 py-3 text-left"
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
                      className="block flex-1 text-base font-medium text-gray-800 hover:text-indigo-600 py-3 transition-colors duration-300"
                      data-testid={`mobile-nav-link-${nav.label}`}
                    >
                      {nav.label}
                    </Link>
                    {nav.megaMenu && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleMegaMenu(nav.label)}
                        className="text-indigo-600 hover:bg-indigo-100"
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
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider py-1">{section.title}</h4>
                      )}
                      <ul className="space-y-1">
                        {section.links.map((link) => (
                          <li key={link.label} className="relative">
                            <Link
                              href={link.href}
                              className="block text-sm text-gray-700 py-1 hover:text-indigo-600 pointer-events-auto"
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
                                  className="absolute right-0 top-1 text-indigo-600 hover:bg-indigo-100"
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
                                          className="block text-sm text-gray-600 py-1 hover:text-indigo-600 pointer-events-auto"
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
    </header>
  );
}