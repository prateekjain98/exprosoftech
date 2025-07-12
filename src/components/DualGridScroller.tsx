import React from "react";
import SectionHeader from "./SectionHeader";

// Define interfaces for the props
interface GridItem {
  description: string;
}

interface DualGridScrollerProps {
  data: {
    isVisible: boolean;
    heading: string;
    items: GridItem[];
  };
}

export const DualGridScroller: React.FC<DualGridScrollerProps> = ({ data }) => {
  // Helper function to split items into left and right grids
  const splitItems = (items: GridItem[] = []) => {
    if (!items || !Array.isArray(items)) {
      return { leftGrid: [], rightGrid: [] };
    }
    const mid = Math.ceil(items.length / 2);
    return {
      leftGrid: items.slice(0, mid),
      rightGrid: items.slice(mid)
    };
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-10" />
      </div>

      <div className="container lg:max-w-4xl mx-auto px-4 relative z-10">
        <SectionHeader
          tagline=""
          heading={data.heading}
          subheading=""
          theme="dark"
        />

        <div className="mt-24">
          {/* Desktop View */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            {/* Left Grid */}
            <div className="space-y-6">
              {splitItems(data.items).leftGrid.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center bg-white backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 shadow-2xl transition-all duration-500 hover:border-blue-500/30 hover:transform hover:scale-[1.02] group"
                >
                  <div className="min-h-[60px] flex items-center">
                    <p className="text-dark text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Grid */}
            <div className="space-y-6">
              {splitItems(data.items).rightGrid.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center bg-white backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 shadow-2xl transition-all duration-500 hover:border-purple-500/30 hover:transform hover:scale-[1.02] group"
                >
                  <div className="min-h-[60px] flex items-center">
                    <p className="text-dark text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {data.items?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 shadow-2xl"
              >
                <div className="min-h-[60px] flex items-center">
                  <p className="text-white text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualGridScroller; 