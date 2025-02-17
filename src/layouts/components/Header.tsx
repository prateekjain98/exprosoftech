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
  {
    name: "Products",
    url: "",
    hasChildren: true,
    children: [
      {
        name: "Intuiflow",
        url: "/intuiflow/",
        description:
          "Build an agile supply chain with AI/ML-powered planning software for improved operational stability",
      },
      {
        name: "Sales Force Automation",
        url: "/sfa/",
        description:
          "Empower your field force with real-time tracking, route optimization, and performance analytics",
      },
      {
        name: "Loyalty Engine",
        url: "/loyalty-engine/",
        description:
          "Drive customer retention with personalized rewards, gamification, and engagement analytics",
      },
    ],
  },
  {
    name: "Services",
    url: "",
    hasChildren: true,
    children: [
      {
        name: "Loyalty Management",
        url: "/services/loyalty-management/",
        description:
          "End-to-end loyalty program management to drive customer retention and engagement",
      },
      {
        name: "Channel Reach Expansion",
        url: "/services/channel-reach/",
        description:
          "Strategic services to expand your market reach through effective channel partnerships",
      },
      {
        name: "B2B Sales",
        url: "/services/b2b-sales/",
        description:
          "Comprehensive B2B sales solutions to accelerate your business growth",
      },
    ],
  },
  {
    name: "Consulting",
    url: "",
    hasChildren: true,
    children: [
      {
        name: "Demand-Driven Business Transformation",
        url: "/demand-driven-transformation/",
        description:
          "Transform your supply chain with DDMRP methodology and cutting-edge tools",
      },
    ],
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
}

const Header: React.FC<HeaderProps> = ({
  banner = false,
  errorPage = false,
  pathname: initialPathname = "/",
}) => {
  const [pathname, setPathname] = useState(initialPathname);
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState("Loyalty Engine");
  const [selectedProduct, setSelectedProduct] = useState("Loyalty Engine");
  const [isAnyMenuOpen, setIsAnyMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { navigation_button } = config;

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

  useEffect(() => {
    if (isAnyMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isAnyMenuOpen]);

  const getProductImage = (productName: string): string => {
    switch (productName) {
      case "Intuiflow":
        return "/images/mobile3.png";
      case "Sales Force Automation":
        return "/images/loyalty-engine.png";
      case "Loyalty Engine":
        return "/images/loyalty-engine.png";
      case "Demand-Driven Business Transformation":
        return "/images/consulting/demand-driven-business-transformation/hero.png";
      default:
        return "/images/banner-bg.png";
    }
  };

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

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle dropdown toggle for mobile
  const toggleDropdown = (
    event: React.MouseEvent<HTMLSpanElement>,
    menuName: string
  ) => {
    event.stopPropagation();
    if (window.innerWidth < 1024) {
      setOpenMobileDropdown(openMobileDropdown === menuName ? "" : menuName);
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
    <div className={`header-wrapper ${!errorPage && "pb-6"}`}>
      <header
        className={`header z-[999] transition-all duration-300 shadow-sm ${isHidden ? "header-hidden" : ""}`}
      >
        <nav className="navbar relative z-[9999] px-3 py-1 max-w-[85rem] mx-auto">
          {/* logo */}
          <div className="order-0 transition-transform duration-300 hover:scale-105">
            <a href="/" className="navbar-brand block">
              <img
                src={config.site.logo}
                className="h-auto w-[100px] md:w-[120px]"
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
            className="order-3 flex cursor-pointer items-center text-slate-700 hover:text-primary transition-colors duration-200 lg:order-1 lg:hidden"
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
            className={`navbar-nav order-3 ${
              isMobileMenuOpen
                ? "fixed inset-0 top-[48px] bg-gradient-to-b from-white to-slate-50/95 backdrop-blur-sm z-50 px-4 py-6 overflow-y-auto"
                : "hidden"
            } lg:static lg:flex lg:order-1 lg:w-auto lg:space-x-1 lg:p-0 xl:space-x-6`}
          >
            {mainMenu.map((menu, index) => (
              <React.Fragment key={index}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span
                      onClick={(e) => toggleDropdown(e, menu.name)}
                      onMouseEnter={() => handleDropdownVisibility(true)}
                      onMouseLeave={() => handleDropdownVisibility(false)}
                      className={`nav-link inline-flex items-center justify-between w-full lg:w-auto cursor-pointer text-slate-600 hover:text-primary transition-colors duration-200 py-1.5 lg:py-0.5 ${
                        menu.children?.some(
                          ({ url }) =>
                            url === pathname || `${url}/` === pathname
                        )
                          ? "text-primary font-medium"
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
                      className={`lg:hidden ${openMobileDropdown === menu.name ? "block" : "hidden"}`}
                    >
                      <div className="mt-2 space-y-3 px-2">
                        {menu.name === "Products" ? (
                          <>
                            {/* Supply Chain Solutions Section */}
                            <div className="px-2 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                              Supply Chain Solutions
                            </div>
                            {menu.children
                              ?.slice(0, 1)
                              .map((child, childIndex) => (
                                <ProductMenuItem
                                  key={`supply-chain-${childIndex}`}
                                  child={child}
                                  childIndex={childIndex}
                                  menuName={menu.name}
                                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                                />
                              ))}

                            {/* Sales Solutions Section */}
                            <div className="px-2 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                              Sales Solutions
                            </div>
                            {menu.children
                              ?.slice(1)
                              .map((child, childIndex) => (
                                <ProductMenuItem
                                  key={`sales-${childIndex}`}
                                  child={child}
                                  childIndex={childIndex}
                                  menuName={menu.name}
                                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                                />
                              ))}
                          </>
                        ) : (
                          menu.children?.map((child, childIndex) => (
                            <ProductMenuItem
                              key={childIndex}
                              child={child}
                              childIndex={childIndex}
                              menuName={menu.name}
                              setIsMobileMenuOpen={setIsMobileMenuOpen}
                            />
                          ))
                        )}
                      </div>
                    </div>
                    {/* Desktop Menu Dropdown */}
                    <div
                      className="hidden lg:group-hover:block absolute left-1/2 -translate-x-1/2 top-full pt-[12px]"
                      onMouseEnter={() => handleDropdownVisibility(true)}
                      onMouseLeave={() => handleDropdownVisibility(false)}
                    >
                      <div className="bg-white rounded-2xl shadow-xl border-0 overflow-hidden w-[1000px] transition-all duration-300">
                        {menu.name === "Products" && (
                          <ProductsDropdown
                            children={menu.children || []}
                            hoveredProduct={hoveredProduct}
                            selectedProduct={selectedProduct}
                            handleProductClick={handleProductClick}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                          />
                        )}
                        {menu.name === "Services" && (
                          <ServicesDropdown
                            children={menu.children || []}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                          />
                        )}
                        {menu.name === "Consulting" && (
                          <ConsultingDropdown
                            children={menu.children || []}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            scrollToCaseStudies={scrollToCaseStudies}
                          />
                        )}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li className="nav-item">
                    <a
                      href={menu.url}
                      className={`nav-link block py-1.5 lg:py-0.5 text-slate-600 hover:text-primary transition-colors duration-200 ${
                        pathname === `${menu.url}/` || pathname === menu.url
                          ? "text-primary font-medium"
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
              <li className="lg:hidden">
                <Button
                  className="mt-2"
                  href={navigation_button.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  height="compact"
                >
                  {navigation_button.label}
                </Button>
              </li>
            )}
          </ul>

          {/* right button */}
          <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
            {navigation_button.enable && (
              <Button
                className="hidden lg:flex items-center gap-2 group"
                href={navigation_button.link}
                height="compact"
              >
                {navigation_button.label}
              </Button>
            )}
          </div>
        </nav>
      </header>

      {/* Background Image */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover object-top"
          src={"/images/page-header.png"}
          alt="header image"
        />
      </div>
    </div>
  );
};

const ProductMenuItem: React.FC<{
  child: ChildNavigationLink;
  childIndex: number;
  menuName: string;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}> = ({ child, childIndex, menuName, setIsMobileMenuOpen }) => (
  <a
    href={child.url}
    onClick={() => setIsMobileMenuOpen(false)}
    className="group block relative overflow-hidden rounded-xl bg-white hover:bg-gradient-to-br hover:from-slate-50 hover:to-white transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.01] to-blue-500/[0.01]" />
    <div className="relative p-4">
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={
                    menuName === "Products"
                      ? childIndex === 0
                        ? "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        : "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      : "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  }
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0 text-left">
          <h4 className="text-[15px] font-medium text-slate-800 mb-1 group-hover:text-primary transition-colors duration-200">
            {child.name}
          </h4>
          <p className="text-sm text-slate-500 line-clamp-2 group-hover:text-slate-600 transition-colors duration-200">
            {child.description}
          </p>
        </div>
      </div>
    </div>
  </a>
);

export default Header;
