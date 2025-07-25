import React from "react";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import SectionHeader from "../../../components/SectionHeader";

interface Service {
  title: string;
  description: string;
  features: any[]; // BlockContent array
}

interface ServicesContent {
  tagline: string;
  heading: string;
  subheading: string;
  services: Service[];
}

// Add interface for queried services
interface QueriedService {
  title: string;
  description: string;
  features: any[]; // BlockContent array
  index?: number;
}

const ServiceCard: React.FC<QueriedService> = ({
  title,
  description,
  features,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-3">
        <div className="text-gray-700 prose prose-sm max-w-none">
          <PortableText value={features} />
        </div>
      </div>
    </motion.div>
  );
};

interface HeadingProps {
  tagline: string;
  title: string;
  description: string;
}

interface Props {
  className?: string;
  heading: HeadingProps;
  services: QueriedService[];
}

export const ServicesServices: React.FC<Props> = ({ 
  className = "", 
  heading,
  services = []
}) => {
  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline={heading.tagline}
          heading={heading.title}
          subheading={heading.description}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
