import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import SectionHeader from "./SectionHeader";

export interface CloudSpecializationSimple {
  title: string;
  description: string;
}

interface Props {
  className?: string;
  cloudSpecializations?: CloudSpecializationSimple[];
  heading?: {
    subtitle: string;
    title: string;
    description: string;
  };
}

const CloudCardSimple: React.FC<{ cloud: CloudSpecializationSimple; index: number }> = ({ cloud, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]"
    >
      <div 
        className={`relative overflow-hidden rounded-3xl backdrop-blur-lg bg-blue-100 transition-all duration-500 h-full
          ${isHovered ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'}`}
      >
        {/* Animated gradient background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br bg-blue-200 opacity-[0.03] 
            group-hover:opacity-[0.08] transition-opacity duration-500`}
        />
        {/* Content container */}
        <div className="relative z-10 p-6 sm:p-8 flex flex-col items-start gap-6">
          {/* Number, Title, and Description section */}
          
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-blue-600 shadow-lg transform-gpu text-white text-2xl font-bold">
              {index + 1}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {cloud.title}
            </h3>
          
          <div className="mb-2">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {cloud.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MarqueeCardsSimple: React.FC<{ cards: CloudSpecializationSimple[] }> = ({ cards }) => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();
  
  // Ensure we have enough cards for smooth animation
  const duplicatedCards = cards.length > 0 ? [...cards, ...cards, ...cards] : [];

  useEffect(() => {
    if (duplicatedCards.length === 0) return;
    
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: "-33.333%", // Move by 1/3 since we have 3 sets of cards
        transition: {
          duration: 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    }
  }, [isPaused, controls, duplicatedCards.length]);

  // Start animation on mount
  useEffect(() => {
    if (duplicatedCards.length > 0) {
      controls.start({
        x: "-33.333%",
        transition: {
          duration: 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    }
  }, [controls, duplicatedCards.length]);

  if (cards.length === 0) {
    return <div className="text-center py-8 text-gray-500">No items to display</div>;
  }

  return (
    <div 
      className="relative overflow-hidden w-full py-4 sm:py-6 lg:py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left blur effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 z-10 bg-gradient-to-r from-white to-transparent" />
      {/* Right blur effect */}
      <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 z-10 bg-gradient-to-l from-white to-transparent" />
      {/* Marquee container */}
      <motion.div
        className="flex gap-4 sm:gap-6 lg:gap-8"
        initial={{ x: 0 }}
        animate={controls}
        style={{ width: "max-content" }}
      >
        {duplicatedCards.map((card, idx) => (
          <CloudCardSimple 
            key={`card-${idx}`} 
            cloud={card} 
            index={idx % cards.length} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export const DynamicCloudSpecialization: React.FC<Props> = ({
  className = "",
  cloudSpecializations = [],
  heading 
}) => {
  return (
    <section className={`py-16 relative overflow-hidden ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-white" />
      <div className="max-w-[80vw] lg:max-w-7xl mx-auto  relative">
        <SectionHeader
          tagline={heading?.subtitle ?? ""}
          heading={heading?.title ?? ""}
          subheading={heading?.description ?? ""}
        />
        {/* Marquee Cards */}
        <MarqueeCardsSimple cards={cloudSpecializations} />
      </div>
    </section>
  );
}; 