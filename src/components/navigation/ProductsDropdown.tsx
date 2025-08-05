import React, { useState } from "react";
import type { ChildNavigationLink } from "../../layouts/components/Header";
import Button from "../common/Button";

interface ProductsDropdownProps {
  children: ChildNavigationLink[];
  hoveredProduct: string;
  selectedProduct: string;
  handleProductClick: (productName: string) => void;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  productDropdownData?: any[]; // Array of product data with title, slug, and description
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({
  children,
  hoveredProduct,
  selectedProduct,
  handleProductClick,
  setIsMobileMenuOpen,
  productDropdownData = [],
}) => {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  // Use hoveredProductId if available, otherwise fall back to hoveredProduct or selectedProduct
  const activeProduct = hoveredProductId || hoveredProduct || selectedProduct;
  
  return (  
    <div className="w-full min-w-[600px] max-w-2xl">
      {/* Products Section - Two Columns */}
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
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-primary">Our Products</h3>
        </div>
        <div className="grid gap-4">
          {children.map((child, index) => (
            <div
              key={index}
              className="w-full"
              onMouseEnter={() => setHoveredProductId(child.name)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <a
                href={child.url}
                className="block group w-full"
                onClick={() => {
                  handleProductClick(child.name);
                  setIsMobileMenuOpen(false);
                }}
              >
                <div
                  className={`w-full rounded-xl border transition-all duration-200 ${
                    activeProduct === child.name
                      ? "border-primary/30 bg-white shadow-lg shadow-blue-500/5"
                      : "border-slate-200 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5"
                  }`}
                >
                  <div className="p-4 w-full">
                    <div className="flex items-start gap-3 w-full">
                      <div className="flex-1 min-w-0 w-full">
                        <div className="flex items-center gap-2 w-full">
                          <h4 className="text-base font-medium text-slate-900 group-hover:text-primary transition-colors duration-200">
                            {child.name}
                          </h4>
                          <svg
                            className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors duration-200 shrink-0"
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
                        <p className="text-sm text-slate-600 mt-1 line-clamp-2 w-full">
                          {child.description}
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
        <div className="mt-6 pt-4 border-t border-slate-200 w-full">
          <div className="text-center w-full">
            <Button
              className="inline-flex items-center justify-center gap-2"
              hasOverlay={true}
              onClick={() => setIsMobileMenuOpen(false)}
              height="compact"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;
