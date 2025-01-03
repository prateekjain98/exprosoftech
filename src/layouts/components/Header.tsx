import React, { useEffect, useState } from "react";
import DynamicIcon from "@/helpers/DynamicIcon";
import config from "@/config/config.json";

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
        name: "Loyalty Engine",
        url: "/loyalty-engine/",
        description:
          "Drive customer retention with personalized rewards, gamification, and engagement analytics",
      },
      {
        name: "Sales Force Automation",
        url: "/sfa/",
        description:
          "Empower your field force with real-time tracking, route optimization, and performance analytics",
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
  const [lastScroll, setLastScroll] = useState<number>(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string>("");
  const [pathname, setPathname] = useState<string>(initialPathname);
  const [hoveredProduct, setHoveredProduct] =
    useState<string>("Loyalty Engine");
  const [selectedProduct, setSelectedProduct] =
    useState<string>("Loyalty Engine");
  const { navigation_button } = config;

  const getProductImage = (productName: string): string => {
    switch (productName) {
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

  useEffect(() => {
    // Set initial pathname
    setPathname(window.location.pathname);

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Make header sticky after scrolling down 100px
      if (currentScroll > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Hide header when scrolling down, show when scrolling up
      if (currentScroll > lastScroll && currentScroll > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

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
    if (selectedProduct === productName) {
      setSelectedProduct("");
      setHoveredProduct("");
    } else {
      setSelectedProduct(productName);
      setHoveredProduct(productName);
    }
  };

  // Add a handler for when the dropdown menu appears/disappears
  const handleDropdownVisibility = (isVisible: boolean) => {
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
        className={`header bg-white shadow-lg z-[999] transition-all duration-300 ${
          isSticky ? "header-sticky shadow-blue-500/5" : ""
        } ${isHidden ? "header-hidden" : ""}`}
      >
        <nav className="navbar relative z-[9999] px-4 py-3 max-w-[85rem] mx-auto">
          {/* logo */}
          <div className="order-0 transition-transform duration-300 hover:scale-105">
            <a href="/" className="navbar-brand block">
              <img
                src={config.site.logo}
                className="h-auto w-[140px] md:w-[160px]"
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
              className={`h-6 fill-current ${isMobileMenuOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
            >
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
            </svg>
            <svg
              className={`h-6 fill-current ${isMobileMenuOpen ? "block" : "hidden"}`}
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
                ? "fixed inset-0 top-[72px] bg-gradient-to-b from-white to-slate-50/95 backdrop-blur-sm z-50 px-4 py-6 overflow-y-auto"
                : "hidden"
            } lg:static lg:flex lg:order-1 lg:w-auto lg:space-x-2 lg:p-0 xl:space-x-8`}
          >
            {mainMenu.map((menu, index) => (
              <React.Fragment key={index}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span
                      onClick={(e) => toggleDropdown(e, menu.name)}
                      onMouseEnter={() => handleDropdownVisibility(true)}
                      onMouseLeave={() => handleDropdownVisibility(false)}
                      className={`nav-link inline-flex items-center justify-between w-full lg:w-auto cursor-pointer text-slate-600 hover:text-primary transition-colors duration-200 py-3 lg:py-2 ${
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
                        {menu.children?.map((child, childIndex) => (
                          <a
                            key={childIndex}
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
                                      {menu.name === "Products" ? (
                                        childIndex === 0 ? (
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
                                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                          </svg>
                                        ) : (
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
                                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                          </svg>
                                        )
                                      ) : (
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
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                          />
                                        </svg>
                                      )}
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
                        ))}
                      </div>
                    </div>
                    {/* Desktop Menu Dropdown */}
                    <div
                      className="hidden lg:group-hover:block absolute left-1/2 -translate-x-1/2 top-full pt-6"
                      onMouseEnter={() => handleDropdownVisibility(true)}
                      onMouseLeave={() => handleDropdownVisibility(false)}
                    >
                      <div className="bg-white rounded-2xl shadow-xl border-0 overflow-hidden w-[1000px] transition-all duration-300">
                        {menu.name === "Products" && (
                          <div className="grid grid-cols-12">
                            {/* Left Section - Main Products */}
                            <div className="col-span-7 p-8 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
                              <div className="flex items-center gap-2 mb-6">
                                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                    />
                                  </svg>
                                </div>
                                <h3 className="text-base font-semibold text-primary">
                                  Solutions
                                </h3>
                              </div>
                              <div className="space-y-6">
                                {menu.children?.map((child, childIndex) => (
                                  <div key={childIndex}>
                                    <div
                                      className={`group cursor-pointer rounded-xl border border-slate-200 hover:border-primary/30 transition-all duration-200 ${
                                        selectedProduct === child.name
                                          ? "bg-white shadow-lg shadow-blue-500/5 border-primary/30"
                                          : "hover:bg-white hover:shadow-lg hover:shadow-blue-500/5"
                                      }`}
                                      onClick={() =>
                                        handleProductClick(child.name)
                                      }
                                      onMouseEnter={() =>
                                        !selectedProduct &&
                                        setHoveredProduct(child.name)
                                      }
                                      onMouseLeave={() =>
                                        !selectedProduct &&
                                        setHoveredProduct("")
                                      }
                                    >
                                      <div className="p-5">
                                        <div className="flex items-start gap-4">
                                          <div className="shrink-0 h-12 w-12 rounded-lg bg-gradient-to-br from-[#111b57]/5 to-primary/5 flex items-center justify-center group-hover:from-[#111b57]/10 group-hover:to-primary/10">
                                            {childIndex === 0 ? (
                                              <svg
                                                className="w-6 h-6 text-primary"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={1.5}
                                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                />
                                              </svg>
                                            ) : (
                                              <svg
                                                className="w-6 h-6 text-primary"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={1.5}
                                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                              </svg>
                                            )}
                                          </div>
                                          <div>
                                            <div className="flex items-center gap-2">
                                              <h4 className="text-base font-medium text-slate-900 group-hover:text-primary transition-colors duration-200">
                                                {child.name}
                                              </h4>
                                              <svg
                                                className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors duration-200"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                  clipRule="evenodd"
                                                />
                                              </svg>
                                            </div>
                                            <p className="text-sm text-slate-600 mt-1">
                                              {child.description}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="px-5 py-4 bg-slate-50/80 border-t border-slate-100">
                                        <div className="grid grid-cols-2 gap-4">
                                          {childIndex === 0 ? (
                                            <>
                                              <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center">
                                                  <svg
                                                    className="w-3 h-3 text-primary"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M10 3L4.5 8.5L2 6"
                                                      stroke="currentColor"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                    />
                                                  </svg>
                                                </div>
                                                <span className="text-sm text-slate-600">
                                                  Enhanced Productivity
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center">
                                                  <svg
                                                    className="w-3 h-3 text-primary"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M10 3L4.5 8.5L2 6"
                                                      stroke="currentColor"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                    />
                                                  </svg>
                                                </div>
                                                <span className="text-sm text-slate-600">
                                                  Real-time Insights
                                                </span>
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center">
                                                  <svg
                                                    className="w-3 h-3 text-primary"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M10 3L4.5 8.5L2 6"
                                                      stroke="currentColor"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                    />
                                                  </svg>
                                                </div>
                                                <span className="text-sm text-slate-600">
                                                  Personalized Rewards
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center">
                                                  <svg
                                                    className="w-3 h-3 text-primary"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                  >
                                                    <path
                                                      d="M10 3L4.5 8.5L2 6"
                                                      stroke="currentColor"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                    />
                                                  </svg>
                                                </div>
                                                <span className="text-sm text-slate-600">
                                                  Engagement Analytics
                                                </span>
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Right Section - Product Previews */}
                            <div className="col-span-5">
                              <div className="h-full">
                                {hoveredProduct === "Loyalty Engine" ||
                                selectedProduct === "Loyalty Engine" ? (
                                  <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-r-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('/images/loyalty-engine.png')] bg-cover bg-center opacity-50 mix-blend-overlay" />
                                    <div className="relative p-8 flex flex-col h-full">
                                      <div className="mb-auto">
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-xs font-semibold mb-4">
                                          Customer Engagement
                                        </span>
                                        <h3 className="text-2xl font-semibold text-white mb-4">
                                          Drive Customer Loyalty
                                        </h3>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                          Build lasting customer relationships
                                          with personalized rewards,
                                          gamification, and engagement
                                          analytics.
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                          <img
                                            src="/images/mobile-blue-bg.png"
                                            alt="Loyalty App"
                                            className="w-full h-48 object-contain transform -rotate-12 hover:rotate-0 transition-transform duration-500"
                                          />
                                          <img
                                            src="/images/mobile-blue-bg2.png"
                                            alt="Rewards Dashboard"
                                            className="w-full h-48 object-contain transform rotate-12 hover:rotate-0 transition-transform duration-500"
                                          />
                                        </div>
                                      </div>
                                      <div className="mt-6">
                                        <a
                                          href="/loyalty-engine/"
                                          className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-600/30"
                                        >
                                          Learn More About Loyalty Engine
                                          <span className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                                            <svg
                                              className="w-4 h-4"
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                ) : hoveredProduct ===
                                    "Sales Force Automation" ||
                                  selectedProduct ===
                                    "Sales Force Automation" ? (
                                  <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-r-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('/images/field-konnect.png')] bg-cover bg-center opacity-50 mix-blend-overlay" />
                                    <div className="relative p-8 flex flex-col h-full">
                                      <div className="mb-auto">
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-xs font-semibold mb-4">
                                          Field Force Management
                                        </span>
                                        <h3 className="text-2xl font-semibold text-white mb-4">
                                          Empower Your Field Force
                                        </h3>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                          Transform your field operations with
                                          real-time tracking, route
                                          optimization, and performance
                                          analytics.
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                          <img
                                            src="/images/mobile-hand.png"
                                            alt="Mobile App"
                                            className="w-full h-48 object-contain transform -rotate-12 hover:rotate-0 transition-transform duration-500"
                                          />
                                          <img
                                            src="/images/mobile-hand-2.png"
                                            alt="Dashboard"
                                            className="w-full h-48 object-contain transform rotate-12 hover:rotate-0 transition-transform duration-500"
                                          />
                                        </div>
                                      </div>
                                      <div className="mt-6">
                                        <a
                                          href="/sfa/"
                                          className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-600/30"
                                        >
                                          Learn More About SFA
                                          <span className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                                            <svg
                                              className="w-4 h-4"
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        )}
                        {menu.name === "Consulting" && (
                          <div className="grid grid-cols-12">
                            {/* Left Section - Main Services */}
                            <div className="col-span-7 p-8 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
                              <div className="flex items-center gap-2 mb-6">
                                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                  </svg>
                                </div>
                                <h3 className="text-base font-semibold text-primary">
                                  Services
                                </h3>
                              </div>
                              <div className="space-y-6">
                                {menu.children?.map((child, childIndex) => (
                                  <div key={childIndex}>
                                    <a
                                      href={child.url}
                                      className="block group"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      onMouseEnter={() =>
                                        setHoveredProduct(child.name)
                                      }
                                      onMouseLeave={() => setHoveredProduct("")}
                                    >
                                      <div className="rounded-xl border border-slate-200 hover:border-primary/30 transition-all duration-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5">
                                        <div className="p-5">
                                          <div className="flex items-start gap-4">
                                            <div className="shrink-0 h-12 w-12 rounded-lg bg-gradient-to-br from-[#111b57]/5 to-primary/5 flex items-center justify-center group-hover:from-[#111b57]/10 group-hover:to-primary/10">
                                              <svg
                                                className="w-6 h-6 text-primary"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={1.5}
                                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div className="flex items-center gap-2">
                                                <h4 className="text-base font-medium text-slate-900 group-hover:text-primary transition-colors duration-200">
                                                  {child.name}
                                                </h4>
                                                <svg
                                                  className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors duration-200"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor"
                                                >
                                                  <path
                                                    fillRule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                  />
                                                </svg>
                                              </div>
                                              <p className="text-sm text-slate-600 mt-1">
                                                {child.description}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="px-5 py-4 bg-slate-50/80 border-t border-slate-100">
                                          <h5 className="text-sm font-medium text-slate-900 mb-3">
                                            Key Challenges We Address
                                          </h5>
                                          <div className="grid grid-cols-2 gap-3">
                                            <div className="flex items-center gap-2">
                                              <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center">
                                                <svg
                                                  className="w-3 h-3 text-primary"
                                                  viewBox="0 0 12 12"
                                                  fill="none"
                                                >
                                                  <path
                                                    d="M10 3L4.5 8.5L2 6"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </div>
                                              <span className="text-sm text-slate-600">
                                                Stagnant Growth
                                              </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center">
                                                <svg
                                                  className="w-3 h-3 text-primary"
                                                  viewBox="0 0 12 12"
                                                  fill="none"
                                                >
                                                  <path
                                                    d="M10 3L4.5 8.5L2 6"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </div>
                                              <span className="text-sm text-slate-600">
                                                Market Share
                                              </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center">
                                                <svg
                                                  className="w-3 h-3 text-primary"
                                                  viewBox="0 0 12 12"
                                                  fill="none"
                                                >
                                                  <path
                                                    d="M10 3L4.5 8.5L2 6"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </div>
                                              <span className="text-sm text-slate-600">
                                                Cash Flow
                                              </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center">
                                                <svg
                                                  className="w-3 h-3 text-primary"
                                                  viewBox="0 0 12 12"
                                                  fill="none"
                                                >
                                                  <path
                                                    d="M10 3L4.5 8.5L2 6"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </div>
                                              <span className="text-sm text-slate-600">
                                                Variability
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Right Section - Featured Case Study */}
                            <div className="col-span-5 bg-gradient-to-br from-slate-50 to-white">
                              <div className="relative h-full">
                                {/* Background Image with Gradient Overlay */}
                                <div
                                  className="absolute inset-0 bg-cover bg-center"
                                  style={{
                                    backgroundImage:
                                      "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3270&auto=format&fit=crop')",
                                  }}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-900/70" />
                                </div>

                                {/* Content */}
                                <div className="relative p-8 h-full flex flex-col">
                                  <div className="mb-auto">
                                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-6">
                                      Featured Success Story
                                    </h3>

                                    {/* Company Logo */}
                                    <div className="w-20 h-20 bg-white rounded-xl p-3 mb-6">
                                      <img
                                        src="/images/company-logos/rotex.png"
                                        alt="Rotex Automation"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>

                                    {/* Case Study Details */}
                                    <div className="space-y-4">
                                      <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-xs font-semibold">
                                        Manufacturing Excellence
                                      </span>
                                      <h4 className="text-xl font-semibold text-white">
                                        Rotex Automation
                                      </h4>
                                      <p className="text-slate-300 text-sm leading-relaxed">
                                        36% growth in manufacturing efficiency
                                        and 60% faster production timelines.
                                      </p>
                                    </div>
                                  </div>

                                  {/* CTA Section */}
                                  <div className="mt-8">
                                    <a
                                      href="/demand-driven-transformation/#case-studies"
                                      onClick={scrollToCaseStudies}
                                      className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200"
                                    >
                                      View All Case Studies
                                      <svg
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li className="nav-item">
                    <a
                      href={menu.url}
                      className={`nav-link block py-3 lg:py-2 text-slate-600 hover:text-primary transition-colors duration-200 ${
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
                <a
                  className="btn btn-primary mt-2"
                  href={navigation_button.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation_button.label}
                  <span className="ml-2">
                    <DynamicIcon icon="FaArrowRight" />
                  </span>
                </a>
              </li>
            )}
          </ul>

          {/* right button */}
          <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
            {navigation_button.enable && (
              <a
                className="btn btn-primary hidden lg:flex items-center gap-2 group"
                href={navigation_button.link}
              >
                {navigation_button.label}
                <span className="icon-wrapper transition-transform duration-200 group-hover:translate-x-1">
                  <span className="icon">
                    <DynamicIcon icon="FaArrowRight" />
                  </span>
                </span>
              </a>
            )}
          </div>
        </nav>
      </header>

      {/* Background Image */}
      <div aria-hidden="true">
        <img
          className="pointer-events-none absolute top-0 -z-10 h-full w-full object-cover object-top"
          src={
            pathname === "/"
              ? "/images/banner-bg.png"
              : "/images/page-header.png"
          }
          alt="header image"
        />
      </div>
    </div>
  );
};

export default Header;
