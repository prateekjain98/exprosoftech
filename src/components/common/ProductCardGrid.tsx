import React from "react";
import { Card } from "./Card";
import SectionHeader  from "../SectionHeader";

interface CardData {
  title: string;
  description: string;  
  linkText: string;
  linkHref: string;
  image?: string;
}

interface HeadingData {
  subtitle: string;
  title: string;
  description: string;
}

interface CardGridProps {
  heading: HeadingData;
  cards: CardData[];
  className?: string;
  cardClassName?: string;
}

export const ProductCardGrid: React.FC<CardGridProps> = ({
  heading,
  cards,
  className = "",
  cardClassName = "",
}) => {
  const getGridClasses = () => {
    return "flex flex-wrap justify-center gap-6";
  };

  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {/* Section Heading */}
      {heading && (
        <div className="mb-12">
          <SectionHeader
            tagline={heading.subtitle}
            heading={heading.title}
            subheading={heading.description}
            alignment="center"
          />
        </div>
      )}

      {/* Cards Grid */}
      <div className={getGridClasses()}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            linkText={card.linkText}
            linkHref={card.linkHref}
            image={card.image}
            className={`${cardClassName} w-full max-w-sm flex-shrink-0`}
          />
        ))}
      </div>
    </div>
  );
}; 