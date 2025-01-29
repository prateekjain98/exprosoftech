import React from "react";
import type { ChildNavigationLink } from "../../layouts/components/Header";

interface ProductsDropdownProps {
  children: ChildNavigationLink[];
  hoveredProduct: string;
  selectedProduct: string;
  handleProductClick: (productName: string) => void;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({
  children,
  hoveredProduct,
  selectedProduct,
  handleProductClick,
  setIsMobileMenuOpen,
}) => {
  const supplyChainProducts = children.slice(0, 1);
  const salesProducts = children.slice(1);

  return (
    <div className="grid grid-cols-12">
      {/* Left Section - Main Products */}
      <div className="col-span-7 p-8 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
        {/* Supply Chain Solutions */}
        <div className="mb-8">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-primary">
              Supply Chain Solutions
            </h3>
          </div>
          <div className="space-y-4">
            {supplyChainProducts.map((child, childIndex) => (
              <ProductCard
                key={childIndex}
                child={child}
                childIndex={childIndex}
                isSelected={selectedProduct === child.name}
                onClick={() => handleProductClick(child.name)}
                onMouseEnter={() =>
                  !selectedProduct && handleProductClick(child.name)
                }
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            ))}
          </div>
        </div>

        {/* Sales Solutions */}
        <div>
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-primary">
              Sales Solutions
            </h3>
          </div>
          <div className="space-y-4">
            {salesProducts.map((child, childIndex) => (
              <ProductCard
                key={childIndex}
                child={child}
                childIndex={childIndex + 1} // Add 1 to maintain correct indexing for icons
                isSelected={selectedProduct === child.name}
                onClick={() => handleProductClick(child.name)}
                onMouseEnter={() =>
                  !selectedProduct && handleProductClick(child.name)
                }
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Product Previews */}
      <div className="col-span-5">
        <div className="h-full">
          {hoveredProduct === "Intuiflow" || selectedProduct === "Intuiflow" ? (
            <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-r-2xl overflow-hidden">
              <div className="relative p-8 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-xs font-semibold mb-4">
                    Supply Chain Solution
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Build an Agile Supply Chain
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Get actionable insights and improve operational stability
                    with our AI/ML-powered planning software, from strategy to
                    shop floor.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-blue-300"
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
                        <span className="text-sm text-slate-300">
                          Materials Planning
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-blue-300"
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
                        <span className="text-sm text-slate-300">
                          Demand Planning
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-blue-300"
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
                        <span className="text-sm text-slate-300">
                          S&OP Planning
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-blue-300"
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
                        <span className="text-sm text-slate-300">
                          Auto Pilot
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <img
                      src="https://demanddriventech.com/wp-content/uploads/2024/07/intuiflow-screen-1.png"
                      alt="Intuiflow Dashboard"
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="/intuiflow/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-600/30"
                  >
                    Book Simulation
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
          ) : hoveredProduct === "Loyalty Engine" ||
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
                    Build lasting customer relationships with personalized
                    rewards, gamification, and engagement analytics.
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
                    onClick={() => setIsMobileMenuOpen(false)}
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
          ) : hoveredProduct === "Sales Force Automation" ||
            selectedProduct === "Sales Force Automation" ? (
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
                    Transform your field operations with real-time tracking,
                    route optimization, and performance analytics.
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
                    onClick={() => setIsMobileMenuOpen(false)}
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
  );
};

// Helper component for product cards
const ProductCard: React.FC<{
  child: ChildNavigationLink;
  childIndex: number;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}> = ({
  child,
  childIndex,
  isSelected,
  onClick,
  onMouseEnter,
  setIsMobileMenuOpen,
}) => (
  <div
    className={`group cursor-pointer rounded-xl border border-slate-200 hover:border-primary/30 transition-all duration-200 ${
      isSelected
        ? "bg-white shadow-lg shadow-blue-500/5 border-primary/30"
        : "hover:bg-white hover:shadow-lg hover:shadow-blue-500/5"
    }`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
  >
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
              d={
                childIndex === 0
                  ? "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  : "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }
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
          <p className="text-sm text-slate-600 mt-1">{child.description}</p>
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
              <span className="text-sm text-slate-600">Real-time Insights</span>
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
);

export default ProductsDropdown;
