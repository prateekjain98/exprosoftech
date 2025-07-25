import React, { useEffect, useState } from "react";
import DynamicIcon from "@/helpers/DynamicIcon";
import config from "@/config/config.json";
import ProductsDropdown from "../../components/navigation/ProductsDropdown";
import ServicesDropdown from "../../components/navigation/ServicesDropdown";
import ConsultingDropdown from "../../components/navigation/ConsultingDropdown";
import Button from "../../components/common/Button";

export interface ChildNavigationLink {
  name: string;
  url: string;
  description?: string;
}

export interface NavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: ChildNavigationLink[];
}

export const mainMenu: NavigationLink[] = [
  // {
  //   name: "Consulting",
  //   url: "",
  //   hasChildren: true,
  //   children: [
  //     {
  //       name: "Demand-Driven Business Transformation",
  //       url: "/consulting/demand-driven-business-transformation/",
  //       description:
  //         "Transform your supply chain with DDMRP methodology and cutting-edge tools",
  //     },
  //   ],
  // },
  // {
  //   name: "Services",
  //   url: "",
  //   hasChildren: true,
  //   children: [
  //     {
  //       name: "Channel Loyalty Management",
  //       url: "/services/loyalty-managementt/",
  //       description:
  //         "End to end Channel Loyalty Management to Maximize Channel Reach X Range to Increase Market Share",
  //     },
  //     {
  //       name: "Channel Reach Expansion",
  //       url: "/services/channel-reach-expansion/",
  //       description:
  //         "Expand retail footprint across channels to increase market share",
  //     },
  //     {
  //       name: "B2B Sales",
  //       url: "/services/b2b-saless/",
  //       description:
  //         "Comprehensive B2B sales solutions to accelerate your business growth",
  //     },
  //   ],
  // },
  {
    name: "Services",
    url: "",
    hasChildren: true,
    children: [
      // {
      //   name: "Intuiflow",
      //   url: "/intuiflow/",
      //   description:
      //     "Build an agile supply chain with AI/ML-powered planning software for improved operational stability",
      // },
      {
        name: "Salesforce Development",
        url: "/services/salesforce-development/",
        description:
          "Empower your field force with real-time tracking, route optimization, and performance analytics",
      },
      {
        name: "Salesforce Implementation",
        url: "/services/salesforce-implementation/",
        description:
          "Drive customer retention with personalized rewards, gamification, and engagement analytics",
      },
      {
        name: "Salesforce Consulting",
        url: "/services/salesforce-consulting/",
        description:
          "Drive customer retention with personalized rewards, gamification, and engagement analytics",
      },
      {
        name: "Salesforce Integration",
        url: "/services/salesforce-integration/",
        description:
          "Drive customer retention with personalized rewards, gamification, and engagement analytics",
      },
      {
        name: "Salesforce Data & AI",
        url: "/services/salesforce-data-cloud-and-ai/",
        description:
          "Drive customer retention with personalized rewards, gamification, and engagement analytics",
      },
      {
        name: "AppExchange App Development",
        url: "/services/appexchange-app-development/",
      }
    ],
  },
  {
    name: "Products",
    url: "",
    hasChildren: true,
    children: [
      {
        name: "FlexiToast",
        url: "/products/flexi-toast/",
      },
      
      
    ],
  },
  {
    name: "Industries",
    url: "/industries/",
  },
  {
    name: "Blogs",
    url: "/blog/",
  },
  {
    name: "About Us",
    url: "/about/",
  },
  {
    name: "Contact Us",
    url: "/contact/",
  },
];

interface HeaderProps {
  banner?: boolean;
  errorPage?: boolean;
  pathname?: string;
  navigationData?: NavigationLink[];
  productDropdownData?: any[];
  serviceDropdownData?: any[];
  consultingDropdownData?: any[];
  }

const Header: React.FC<HeaderProps> = ({
  banner = false,
  errorPage = false,
  pathname: initialPathname = "/",
  navigationData = [],
  productDropdownData = [],
  serviceDropdownData = [],
  consultingDropdownData = [],
}): JSX.Element => {
  const [pathname, setPathname] = useState(initialPathname);
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState("Loyalty Engine");
  const [selectedProduct, setSelectedProduct] = useState("Loyalty Engine");
  const [isAnyMenuOpen, setIsAnyMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [closedDropdowns, setClosedDropdowns] = useState<string[]>([]);
  const { navigation_button } = config;
  
  // Use the navigationData from props or fallback to mainMenu
  const menuItems = navigationData.length > 0 ? navigationData : mainMenu;

  // Update pathname when it changes
  useEffect(() => {
    setPathname(initialPathname);
  }, [initialPathname]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if should be sticky (scrolled past 80px)
      setIsSticky(currentScrollY > 80);

      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Removed the menu-open class effect to prevent background color changes

  // const getProductImage = (productName: string): string => {
  //   switch (productName) {
  //     case "Intuiflow":
  //       return "/images/mobile3.png";
  //     case "Sales Force Automation":
  //       return "/images/loyalty-engine.png";
  //     case "Loyalty Engine":
  //       return "/images/loyalty-engine.png";
  //     case "Demand-Driven Business Transformation":
  //       return "/images/consulting/demand-driven-business-transformation/hero.png";
  //     default:
  //       return "/images/banner-bg.png";
  //   }
  // };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navMenu = document.getElementById("nav-menu");
      const navToggle = document.getElementById("nav-toggle-label");
      if (
        navMenu &&
        !navMenu.contains(event.target as Node) &&
        navToggle &&
        !navToggle.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu and restore scroll on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isMobileMenuOpen]);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  // Handle dropdown toggle for mobile
  // Update the toggle function
  const toggleDropdown = (
    event: React.MouseEvent<HTMLSpanElement>,
    menuName: string
  ) => {
    event.stopPropagation();
    if (window.innerWidth < 1024) {
      setClosedDropdowns(prev =>
        prev.includes(menuName)
          ? prev.filter(name => name !== menuName)
          : [...prev, menuName]
      );
    }
  };

  // Update the product click handler
  const handleProductClick = (productName: string) => {
    // Always set both states to the clicked product name
    setSelectedProduct(productName);
    setHoveredProduct(productName);
  };

  // Add a handler for when the dropdown menu appears/disappears
  const handleDropdownVisibility = (isVisible: boolean) => {
    setIsAnyMenuOpen(isVisible);
    if (isVisible) {
      setSelectedProduct("Loyalty Engine");
      setHoveredProduct("Loyalty Engine");
    } else {
      setSelectedProduct("");
      setHoveredProduct("");
    }
  };

  // Update the scroll handler for case studies
  const scrollToCaseStudies = (e: React.MouseEvent) => {
    e.preventDefault();
    const currentPath = window.location.pathname;
    const targetPath = "/demand-driven-transformation/";

    if (currentPath !== targetPath) {
      // If we're not on the target page, navigate and then scroll
      window.location.href = `${targetPath}#case-studies`;
    } else {
      // If we're already on the target page, just scroll
      const caseStudiesSection = document.querySelector("#case-studies");
      if (caseStudiesSection) {
        caseStudiesSection.scrollIntoView({ behavior: "smooth" });
      }
    } 
  };

  return (
    <div className={`header-wrapper ${!errorPage && "pb-0"}`}>
      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[990] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          onTouchMove={(e) => e.preventDefault()}
          style={{ touchAction: 'none' }}
        />
      )}
      
      <header
        className={`header z-[999] transition-all duration-300 ${isHidden ? "header-hidden" : ""}`}
      >
        {/* Pill-shaped navbar container */}
        <div className="pill-navbar-container">
          <nav className="pill-navbar">
            {/* logo */}
            <div className="navbar-logo">
              <a href="/" className="navbar-brand block">
                <img
                  src={config.site.logo}
                  className="h-auto w-[150px] md:w-[160px]"
                  width={Number(config.site.logo_width.replace("px", "")) * 2}
                  height={Number(config.site.logo_height.replace("px", "")) * 2}
                  alt={config.site.title}
                />
              </a>
            </div>

            {/* navbar toggler */}
            <button
              id="nav-toggle-label"
              onClick={toggleMobileMenu}
              className="mobile-menu-toggle lg:hidden"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <svg
                className={`h-5 fill-current ${isMobileMenuOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
              >
                <title>Menu Open</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
              </svg>
              <svg
                className={`h-5 fill-current ${isMobileMenuOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
              >
                <title>Menu Close</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                ></polygon>
              </svg>
            </button>
            
            {/* navigation menu */}
            <ul
              id="nav-menu"
              className={`pill-navbar-nav ${
                isMobileMenuOpen
                  ? "block opacity-100"
                  : "hidden lg:flex"
              }`}
              style={isMobileMenuOpen ? { touchAction: 'pan-y' } : {}}
            >
              {menuItems.map((menu, index) => (
                <React.Fragment key={index}>
                  {menu.hasChildren ? (
                    <li className="nav-item nav-dropdown group relative">
                      <span
                        onClick={(e) => toggleDropdown(e, menu.name)}
                        onMouseEnter={() => handleDropdownVisibility(true)}
                        onMouseLeave={() => handleDropdownVisibility(false)}
                        className={`pill-nav-link ${
                          menu.children?.some(
                            ({ url }) =>
                              url === pathname || `${url}/` === pathname
                          )
                            ? "active"
                            : ""
                        }`}
                      >
                        {menu.name}
                        <span
                          className={`arrow-icon transition-transform duration-200 ml-1 ${openMobileDropdown === menu.name ? "rotate-180" : ""} lg:group-hover:rotate-180`}
                        >
                          <svg
                            className="h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </span>
                      {/* Mobile Menu Dropdown */}
                      <div
                        className={`lg:hidden mt-2 space-y-3 px-2 ${closedDropdowns.includes(menu.name) ? 'hidden' : 'block'}`}
                      >
                        {menu.children?.map((child, childIndex) => (
                          <ProductMenuItem
                            key={childIndex}
                            child={child}
                            childIndex={childIndex}
                            menuName={menu.name}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                          />
                        ))}
                      </div>
                      {/* Desktop Menu Dropdown */}
                      <div
                        className={`hidden lg:group-hover:block absolute left-1/2 ${
                          menu.name === "Consulting" ? "-translate-x-1/3" : 
                          menu.name === "Services" ? "" : "-translate-x-1/2"
                        } top-full ${menu.name === "Services" ? "" : "pt-[12px]"}`}
                        onMouseEnter={() => handleDropdownVisibility(true)}
                        onMouseLeave={() => handleDropdownVisibility(false)}
                        style={menu.name === "Services" ? { 
                          position: 'fixed',
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          top: '64px',
                          maxWidth: 'calc(100vw - 6rem)',
                          width: 'min(900px, calc(100vw - 6rem))',
                          zIndex: 9999
                        } : undefined}
                      >
                        <div className="bg-white rounded-2xl shadow-xl border-0 overflow-hidden w-full transition-all duration-300">
                          {menu.name === "Products" && (
                            <ProductsDropdown
                              children={menu.children || []}
                              hoveredProduct={hoveredProduct}
                              selectedProduct={selectedProduct}
                              handleProductClick={handleProductClick}
                              setIsMobileMenuOpen={setIsMobileMenuOpen}
                              productDropdownData={productDropdownData}
                            />
                          )}
                          {menu.name === "Services" && (
                            <ServicesDropdown
                              children={menu.children || []}
                              setIsMobileMenuOpen={setIsMobileMenuOpen}
                              serviceDropdownData={serviceDropdownData}
                            />
                          )}
                          {menu.name === "Consulting" && (
                            <ConsultingDropdown
                              children={menu.children || []}
                              setIsMobileMenuOpen={setIsMobileMenuOpen}
                              scrollToCaseStudies={scrollToCaseStudies}
                              consultingDropdownData={consultingDropdownData}
                            />
                          )}
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <a
                        href={menu.url}
                        className={`pill-nav-link ${
                          pathname === `${menu.url}/` || pathname === menu.url
                            ? "active"
                            : ""
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {menu.name}
                      </a>
                    </li>
                  )}
                </React.Fragment>
              ))}
              {navigation_button.enable && (
                <li className="lg:hidden flex justify-start mt-4"> 
                  <Button
                    className="pill-cta-button-mobile"
                    hasOverlay={true}
                    onClick={() => setIsMobileMenuOpen(false)}
                    height="compact"
                  >
                    {navigation_button.label}
                  </Button>
                </li>
              )}
            </ul>

            {/* right button */}
            <div className="navbar-cta">
              {navigation_button.enable && (
                <Button
                  className="pill-cta-button hidden lg:flex"
                  hasOverlay={true}
                  height="compact"
                >
                  {navigation_button.label}
                </Button>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Background Image */}
      {/* <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover object-top"
          src={"/images/page-header.png"}
          alt="header image"
        />
      </div> */}
    </div>
  );
};

const ProductMenuItem: React.FC<{
  child: ChildNavigationLink;
  childIndex: number;
  menuName: string;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}> = ({ child, childIndex, menuName, setIsMobileMenuOpen }) => {
  const getMenuIcon = (menuName: string, childName: string): JSX.Element => {
    switch (menuName) {
      case "Products":
        switch (childName) {
          case "Intuiflow":
            return (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            );
          case "Sales Force Automation":
            return (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            );
          case "Loyalty Engine":
            return (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15V3m0 12l-4-4m4 4l4-4M3 21h18M12 3a2 2 0 100-4 2 2 0 000 4z"
              />
            );
          default:
            return (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            );
        }
      case "Services":
        switch (childName) {
          case "Channel Loyalty Management":
            return (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            );
          case "Channel Reach Expansion":
            return (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            );
          case "B2B Sales":
            return (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            );
          default:
            return (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            );
        }
      case "Consulting":
        switch (childName) {
          case "Demand-Driven Business Transformation":
            return (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            );
          default:
            return (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            );
        }
      default:
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        );
    }
  };

  return (
    <a
      href={child.url}
      onClick={() => setIsMobileMenuOpen(false)}
      className="group block relative overflow-hidden rounded-xl lg:bg-white lg:hover:bg-gradient-to-br lg:hover:from-slate-50 lg:hover:to-white transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.01] to-blue-500/[0.01] hidden lg:block" />
      <div className="relative pl-12 pr-4 py-2 lg:p-4">
        <div className="flex items-start gap-4">
          <div className="relative shrink-0 hidden lg:block">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-slate-50 to-white shadow-sm ring-1 ring-slate-100/80 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-blue-500/[0.05]" />
              <div className="relative w-6 h-6 text-primary transform group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {getMenuIcon(menuName, child.name)}
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0 text-left">
            <h4 className="text-base font-medium text-white lg:text-slate-800 lg:text-[15px] lg:group-hover:text-primary transition-colors duration-200">
              {child.name}
            </h4>
            <p className="text-sm text-slate-500 line-clamp-2 group-hover:text-slate-600 transition-colors duration-200 hidden lg:block">
              {child.description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Header;