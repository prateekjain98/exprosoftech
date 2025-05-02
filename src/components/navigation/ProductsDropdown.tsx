import React, { useState } from "react";
import type { ChildNavigationLink } from "../../layouts/components/Header";
import Button from "../../components/common/Button";

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
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  // Use hoveredProductId if available, otherwise fall back to hoveredProduct or selectedProduct
  const activeProduct = hoveredProductId || hoveredProduct || selectedProduct;

  return (
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-primary">Products</h3>
        </div>
        <div className="space-y-4">
          {children.map((child, childIndex) => (
            <a
              key={childIndex}
              href={child.url}
              className="block"
              onClick={() => {
                handleProductClick(child.name);
                setIsMobileMenuOpen(false);
              }}
            >
              <ProductCard
                child={child}
                childIndex={childIndex}
                isSelected={activeProduct === child.name}
                onMouseEnter={() => setHoveredProductId(child.name)}
                onMouseLeave={() => setHoveredProductId(null)}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Right Section - Product Previews */}
      <div className="col-span-5">
        <div className="h-full">
          {activeProduct === "Intuiflow" ? (
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
                  <Button
                    className="w-full flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white"
                    isCalendlyButton={true}
                    onClick={() => setIsMobileMenuOpen(false)}
                    height="compact"
                  >
                    Book a Call
                  </Button>
                </div>
              </div>
            </div>
          ) : activeProduct === "Loyalty Engine" ? (
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
                  <Button
                    className="w-full flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white"
                    isCalendlyButton={true}
                    onClick={() => setIsMobileMenuOpen(false)}
                    height="compact"
                  >
                    Book a Call
                  </Button>
                </div>
              </div>
            </div>
          ) : activeProduct === "SFA" ? (
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
                  <Button
                    className="w-full flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white"
                    isCalendlyButton={true}
                    onClick={() => setIsMobileMenuOpen(false)}
                    height="compact"
                  >
                    Book a Call
                  </Button>
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
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ child, childIndex, isSelected, onMouseEnter, onMouseLeave }) => (
  <div
    className={`group cursor-pointer rounded-xl border border-slate-200 hover:border-primary/30 transition-all duration-200 ${
      isSelected
        ? "bg-white shadow-lg shadow-blue-500/5 border-primary/30"
        : "hover:bg-white hover:shadow-lg hover:shadow-blue-500/5"
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
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
                Attendance and Geo tag
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
              <span className="text-sm text-slate-600">Route planning</span>
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
                KPI performance tracking
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
              <span className="text-sm text-slate-600">Gap analysis</span>
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
              <span className="text-sm text-slate-600">Channel app</span>
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
                Web panel for scheme creation
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
                Live KPI Dashboarding
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
                Gift Redemption & Cashback
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);

export default ProductsDropdown;
