import React, { useState } from "react";
import type { ChildNavigationLink } from "../../layouts/components/Header";
import Button from "../../components/common/Button";

interface ServicesDropdownProps {
  children: ChildNavigationLink[];
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({
  children,
  setIsMobileMenuOpen,
}) => {
  const [hoveredServiceId, setHoveredServiceId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-12">
      {/* Left Section - Main Services */}
      <div className="col-span-7 p-6 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-primary">Our Services</h3>
        </div>
        <div className="space-y-4">
          {children.map((child, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredServiceId(index)}
              onMouseLeave={() => setHoveredServiceId(null)}
            >
              <a
                href={child.url}
                className="block group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div
                  className={`rounded-xl border transition-all duration-200 ${
                    hoveredServiceId === index
                      ? "border-primary/30 bg-white shadow-lg shadow-blue-500/5"
                      : "border-slate-200 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5"
                  }`}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-[#111b57]/5 to-primary/5 flex items-center justify-center group-hover:from-[#111b57]/10 group-hover:to-primary/10">
                        {index === 0 ? (
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
                        ) : index === 1 ? (
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
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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
                  <div className="px-4 py-3 bg-slate-50/80 border-t border-slate-100">
                    <h5 className="text-xs font-medium text-slate-900 mb-2">
                      Key Features
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      {child.name === "Channel Loyalty Management" ? (
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
                              Increase Active Reach
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
                              Increase Range sold
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
                              Integrate Channels
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
                              Increase Touch points
                            </span>
                          </div>
                        </>
                      ) : child.name === "Channel Reach Expansion" ? (
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
                              Channel Mapping
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
                              Onboard Partners
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
                              Order Taking
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
                              FOS Training
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
                              Build Prospect Lists
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
                              Multi-Channel Outreach
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
                              Improve Lead Flow
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
                              Increase Conversion
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Case Studies */}
      <div className="col-span-5">
        <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-r-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3')] bg-cover bg-center opacity-50 mix-blend-overlay" />
          <div className="relative flex flex-col h-full">
            <div className="flex-1 p-6">
              {hoveredServiceId === null && (
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
                    Client Success Stories
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Transforming Businesses
                  </h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all duration-200">
                      <h4 className="text-xl font-bold text-white">5x</h4>
                      <p className="text-xs text-slate-300">
                        Mechanics Engagement
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all duration-200">
                      <h4 className="text-xl font-bold text-white">3x</h4>
                      <p className="text-xs text-slate-300">Retailer Loyalty</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all duration-200">
                      <h4 className="text-xl font-bold text-white">60+</h4>
                      <p className="text-xs text-slate-300">
                        Corporate Clients
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Discover how we've helped industry leaders achieve
                      remarkable growth:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center">
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
                        <span>
                          Gajra Gears: 5x increase in active mechanics
                          engagement
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center">
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
                        <span>
                          Silver Group: 3x boost in retailer loyalty & 60%
                          network growth
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center">
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
                        <span>
                          Godrej: 60+ new corporate partnerships established
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-3 border border-blue-400/20">
                    <p className="text-blue-200 text-sm">
                      <span className="font-semibold">
                        Hover over any service
                      </span>{" "}
                      to explore the detailed success story and results
                      achieved.
                    </p>
                  </div>
                </div>
              )}

              {hoveredServiceId === 0 && (
                <div>
                  <div className="w-16 h-16 bg-white rounded-xl p-3 mb-4">
                    <img
                      src="/images/case-studies/logos/gajra.png"
                      alt="Gajra Gears"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
                    Mechanics Loyalty Program
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Gajra Gears Success Story
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Transforming mechanics engagement and program visibility
                    through innovative loyalty solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                      <h4 className="text-xl font-bold text-white">5x</h4>
                      <p className="text-xs text-slate-300">
                        Increase in Active Mechanics
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                      <h4 className="text-xl font-bold text-white">100%</h4>
                      <p className="text-xs text-slate-300">
                        Improved Program Visibility
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {hoveredServiceId === 1 && (
                <div>
                  <div className="w-16 h-16 bg-white rounded-xl p-3 mb-4">
                    <img
                      src="/images/case-studies/logos/silver.png"
                      alt="Silver Group"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
                    Retail Network Expansion
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Silver Group Success Story
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Achieving remarkable growth in retail network and loyalty
                    program engagement.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                      <h4 className="text-xl font-bold text-white">3x</h4>
                      <p className="text-xs text-slate-300">
                        Increase in Retailer Loyalty
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                      <h4 className="text-xl font-bold text-white">60%</h4>
                      <p className="text-xs text-slate-300">
                        Growth in Active Network
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {hoveredServiceId === 2 && (
                <div>
                  <div className="w-16 h-16 bg-white rounded-xl p-3 mb-4">
                    <img
                      src="/images/case-studies/logos/godrej.png"
                      alt="Godrej"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
                    Market Expansion
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Godrej Success Story
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Revolutionizing B2B lead generation and market penetration
                    strategies.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                      <h4 className="text-xl font-bold text-white">60+</h4>
                      <p className="text-xs text-slate-300">
                        New Corporate Partnerships
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                        <h4 className="text-lg font-bold text-white">100%</h4>
                        <p className="text-xs text-slate-300">Team Alignment</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                        <h4 className="text-lg font-bold text-white">New</h4>
                        <p className="text-xs text-slate-300">Market Entry</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 pt-0">
              <Button
                className="w-full flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white"
                isCalendlyButton={true}
                onClick={() => setIsMobileMenuOpen(false)}
                height="compact"
              >
                Book a Call
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
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
