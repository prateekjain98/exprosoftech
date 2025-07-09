import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";
import { Timeline } from "../Timeline";
import { useId } from "react";

// Container data for each step
interface ContainerData {
  title: string;
  description: string;
}

// Process step from Sanity query
interface ProcessStepData {
  title: string;
  description: string;
  containers: ContainerData[];
}

interface HeadingProps {
  tagline: string;
  title: string;
  description: string;
}

interface Props {
  className?: string;
  heading: HeadingProps;
  process: ProcessStepData[];
}

// Grid components from Offerings.tsx
export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-50/20 to-zinc-100/20 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay stroke-primary/5 fill-primary/20"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export const ServicesSteps: React.FC<Props> = ({ 
  className = "", 
  heading,
  process = []
}) => {
  // Don't render if no data
  if (!process || process.length === 0) {
    return null;
  }

  // Transform process data to Timeline format
  const timelineData = process.map((step) => ({
    title: step.title,
    content: (
      <div className="space-y-6">
        {step.containers?.map((container, index) => (
          <motion.div
            key={`container-${container.title}-${index}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group"
          >
            <div className="relative bg-white rounded-2xl overflow-hidden border border-blue-700/50 hover:border-blue-500/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              {/* Grid Background Pattern */}
              <Grid size={25} />
              
              <div className="relative p-8 z-20">
                {/* Header with number */}
                <div className="flex flex-col justify-start gap-5 mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-fit items-center justify-start rounded-xl  text-black font-bold text-2xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:border-blue-400/40 transition-all duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-3 ">
                      {container.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {container.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }));

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={heading?.tagline}
          heading={heading?.title}
          subheading={heading?.description}
        />

        <div className="mt-16">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
}; 