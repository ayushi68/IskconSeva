import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
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
  }[];
};

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const headerRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
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

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "#",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Our Vision", href: "#" },
            { label: "Our Objectives", href: "#" },
            { label: "Center List", href: "#" },
            { label: "About Us - History of HKM Bhilai", href: "#" }
          ]
        }
      ]
    },
    { label: "I Am New", href: "#" },
    {
      label: "Philosophy",
      href: "./Srilaprabhupada",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Gaudiya Sampradaya Chronology", href: "/philosophy/Gaudiya" },
            { label: "Srila Prabhupada", href: "/philosophy/Sprabhupada" },
            { label: "Nityananda Prabhu", href: "/philosophy/nityanand" },
            { label: "Chaitanya Mahaprabhu", href: "/philosophy/Chaitanya" },
            { label: "Divine Couple(Radha-Krishna)", href: "/philosophy/Divinecouple" },
            { label: "Bhagavad Gita", href: "/philosophy/Bhagavadgita" },
            { label: "Chanting Hare Krishna Maha Mantra", href: "/philosophy/Mahamantra" },
            { label: "Practicing Bhakti Yoga", href: "/philosophy/Bhaktiyoga" },
            { label: "Practice Krishna Consciousness at home", href: "/philosophy/Krishna" }
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
            { label: "Temple Schedule(Bhilai)", href: "#" },
            { label: "Temple Schedule(Raipur)", href: "#" },
            { label: "Vaishnava Calender", href: "#" },
            { label: "Pranam Mantra", href: "#" }
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
            { label: "Annadana Seva", href: "#" },
            { label: "Goshala", href: "#" },
            { label: "Youth's Corner", href: "#" },
            { label: "Kid's Corner", href: "#" },
            { label: "Family's Corner", href: "#" },
            { label: "Book Distribution", href: "#" },
            { label: "Harinam Mantapa", href: "#" },
            { label: "Gifts And Paraphernalia", href: "#" },
            { label: "Catering Services", href: "#" },
            { label: "Soulful Sunday", href: "#" },
            { label: "Hare Krishna Satsang", href: "#" },
            { label: "Nagar Sankirtana", href: "#" },
            { label: "Krishna Ashraya Program", href: "#" },
            { label: "Offer A Prayer", href: "#" },
            { label: "Gopal Sakha Camp", href: "#" },
            { label: "Cultural Camp", href: "#" },
            { label: "Heritage Fest", href: "#" },
            { label: "Jagannath Puri Mayapur Yatra", href: "#" },
            { label: "Kartik Vrindavan Dham Yatra", href: "#" }
          ]
        }
      ]
    },
    {
      label: "Festivals",
      href: "./Festival",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Gaura Purnima", href: "#" },
            { label: "Ram Navami", href: "#" },
            { label: "Narasimha Caturdashi", href: "#" },
            { label: "Panihati Chida-dahi Mahotsava", href: "#" },
            { label: "Jhulan Yatra", href: "#" },
            { label: "Sri Krishna Janmashtami", href: "#" },
            { label: "SP's Vyasa Puja", href: "#" },
            { label: "Radhashtami", href: "#" },
            { label: "Deepotsava", href: "#" },
            { label: "Purushottam Maas", href: "#" },
            { label: "Govardhan Puja", href: "#" },
            { label: "Gita Jayanti", href: "#" },
            { label: "Vaikuntha Ekadashi", href: "#" },
            { label: "Akhanda Harinaam Sankirtan", href: "#" },
            { label: "Nityananda Trayodashi", href: "#" }
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
            { label: "Photo Gallery", href: "#" },
            { label: "Video Gallery", href: "#" },
            { label: "Audio Gallery", href: "#" },
            { label: "Media Downloads", href: "#" }
          ]
        }
      ]
    },
    {
      label: "Support Us",
      href: "#",
      narrowMenu: true,
      megaMenu: [
        {
          links: [
            { label: "Deity Worship Seva", href: "#" },
            { label: "Gau Seva", href: "#" },
            { label: "Annadana Seva", href: "#" },
            { label: "Gyaan Daan Seva", href: "#" },
            { label: "Nitya Seva", href: "#" },
            { label: "Festival Seva", href: "#" },
            { label: "Offline Donation", href: "#" },
            { label: "Corpus Donation Seva", href: "#" },
            { label: "Volunteer", href: "#" }
          ]
        }
      ]
    },
    { label: "Blogs", href: "./Bloglp" }
  ];

  return (
    <header className="bg-white/90 backdrop-blur shadow sticky top-0 z-50" ref={headerRef}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/hkm-logo.jpg" alt="Logo" className="h-10" />
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-primary">Akshay Patra</h1>
            <p className="text-xs text-gray-500">Service in Devotion</p>
          </div>
        </div>

        <nav
          className="hidden md:flex gap-6 items-center text-sm relative"
          ref={dropdownRef}
          onMouseLeave={handleMouseLeave}
        >
          {navLinks.map((nav) => (
            <div
              key={nav.label}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(nav.label)}
            >
              <Link href={nav.href}>
                <a
                  className={`font-medium transition-colors duration-200 ${
                    location === nav.href
                      ? "text-secondary font-semibold"
                      : "text-primary hover:text-secondary"
                  }`}
                >
                  {nav.label}
                </a>
              </Link>

              {nav.megaMenu && openDropdown === nav.label && (
                <div
                  className="absolute z-[999] mt-2 bg-white shadow-xl rounded-lg border border-gray-200"
                  ref={(el) => {
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      const overflowRight = rect.left + rect.width > window.innerWidth;
                      if (overflowRight) {
                        el.style.left = "auto";
                        el.style.right = "0";
                      } else {
                        el.style.left = "0";
                        el.style.right = "auto";
                      }
                    }
                  }}
                  style={{
                    top: headerRef.current?.offsetHeight
                      ? `${headerRef.current.offsetHeight}px`
                      : "auto",
                    minWidth: nav.narrowMenu ? "220px" : "280px"
                  }}
                  onMouseEnter={() => handleMouseEnter(nav.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="p-2 space-y-1 max-h-[60vh] overflow-y-auto">
                    {nav.megaMenu.flatMap((section) =>
                      section.links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href}>
                            <a className="flex items-center gap-2 text-sm text-gray-700 px-3 py-2 rounded hover:bg-gray-100 hover:text-green-700 transition whitespace-nowrap">
                              <ChevronRight className="w-4 h-4 text-green-500" />
                              {link.label}
                            </a>
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

{/* Hamburger Menu with Dropdown */}
<div className="relative md:hidden">
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white z-40 p-6 max-h-[80vh] overflow-y-auto animate-fadeIn space-y-4 shadow-md rounded-b-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-primary">Menu</span>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </Button>
          </div>

          {navLinks.map((nav) => (
            <div key={nav.label}>
              <div className="flex items-center justify-between">
                <Link href={nav.href}>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 px-3 rounded-lg font-medium w-full ${
                      location === nav.href
                        ? "text-secondary bg-secondary/10"
                        : "text-primary hover:text-secondary hover:bg-secondary/10"
                    }`}
                  >
                    {nav.label}
                  </a>
                </Link>

                {/* Toggle submenu icon */}
                {nav.megaMenu && (
                  <button
                    onClick={() =>
                      setExpandedMenu(expandedMenu === nav.label ? null : nav.label)
                    }
                    className="ml-2 text-primary hover:text-secondary"
                  >
                    {expandedMenu === nav.label ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>

              {/* Submenu (if expanded) */}
              {nav.megaMenu && expandedMenu === nav.label && (
                <div className="mt-2 pl-4 space-y-4">
                  {nav.megaMenu.map((section) => (
                    <div key={section.title || "untitled-section"}>
                      {section.title && (
                        <h4 className="text-sm font-semibold text-secondary mb-1">
                          {section.title}
                        </h4>
                      )}
                      <div className="overflow-y-auto max-h-[40vh] pl-2 pr-2">
                        <ul className="space-y-1">
                          {section.links.map((link) => (
                            <li key={link.label}>
                              <Link href={link.href}>
                                <a className="block text-sm text-primary hover:text-secondary pl-2 py-1">
                                  {link.label}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
</div>

    </header>
  );
}
