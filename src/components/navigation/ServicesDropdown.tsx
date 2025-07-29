import React, { useState, useEffect } from "react";
import type { ChildNavigationLink } from "../../layouts/components/Header";
import Button from "../../components/common/Button";

interface ServicesDropdownProps {
  children: ChildNavigationLink[];
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  serviceDropdownData: any[]; // Array of service data with title and description
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({
  children,
  setIsMobileMenuOpen,
  serviceDropdownData,
}) => {
  const [hoveredServiceId, setHoveredServiceId] = useState<number | null>(null);
  
  // Use children data as the primary source since it now comes from serviceDropdownData
  const allServices = children;

  return (
    <div className="w-full">
      {/* Services Section - Two Columns */}
      <div className="p-6 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 border-2">
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-primary">Our Services</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {allServices.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredServiceId(index)}
              onMouseLeave={() => setHoveredServiceId(null)}
            >
              <a
                href={service.url || "#"}
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
                      {/* <div className="shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-[#111b57]/5 to-primary/5 flex items-center justify-center group-hover:from-[#111b57]/10 group-hover:to-primary/10">
                        
                      </div> */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-medium text-slate-900 group-hover:text-primary transition-colors duration-200">
                            {service.name}
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
                        <p className="text-sm text-slate-600 mt-1 line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-6 pt-4 border-t border-slate-200">
          <div className="text-center">
            <Button
              className="inline-flex items-center justify-center gap-2"
              hasOverlay={true}
              onClick={() => setIsMobileMenuOpen(false)}
              height="compact"
              
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
