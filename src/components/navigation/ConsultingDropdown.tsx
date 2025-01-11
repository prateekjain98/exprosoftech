import React from "react";
import type { ChildNavigationLink } from "../../layouts/components/Header";

interface ConsultingDropdownProps {
  children: ChildNavigationLink[];
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  scrollToCaseStudies: (e: React.MouseEvent) => void;
}

const ConsultingDropdown: React.FC<ConsultingDropdownProps> = ({
  children,
  setIsMobileMenuOpen,
  scrollToCaseStudies,
}) => {
  return (
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
          <h3 className="text-base font-semibold text-primary">Services</h3>
        </div>
        <div className="space-y-6">
          {children.map((child, childIndex) => (
            <div key={childIndex}>
              <a
                href={child.url}
                className="block group"
                onClick={() => setIsMobileMenuOpen(false)}
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
                  36% growth in manufacturing efficiency and 60% faster
                  production timelines.
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
  );
};

export default ConsultingDropdown;
