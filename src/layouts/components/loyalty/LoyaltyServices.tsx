import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import SectionHeader from "@/components/SectionHeader";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-darkmode-theme-light"
    >
      <h3 className="mb-3 text-xl font-medium text-gray-900">{title}</h3>
      <p className="mb-6 text-gray-500">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FaRegCheckCircle className="mt-1 text-primary dark:text-darkmode-primary" />
            <span className="text-gray-500">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const services = [
  {
    title: "Program Development",
    description:
      "Create engaging loyalty programs that resonate with your target audience",
    features: [
      "Customer segmentation and targeting",
      "Reward structure design",
      "Program rules and mechanics",
      "Member communication strategy",
    ],
  },
  {
    title: "Program Management",
    description: "Efficiently operate and maintain your loyalty program",
    features: [
      "Day-to-day program administration",
      "Member enrollment and support",
      "Reward fulfillment management",
      "Program compliance monitoring",
    ],
  },
  {
    title: "Analytics & Optimization",
    description: "Data-driven insights to enhance program performance",
    features: [
      "Performance tracking and reporting",
      "Member behavior analysis",
      "ROI measurement",
      "Continuous program improvement",
    ],
  },
];

interface Props {
  className?: string;
}

export const LoyaltyServices: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={`bg-gradient-to-b from-gray-50 to-white py-20 dark:from-darkmode-body dark:to-darkmode-theme-light ${className}`}
    >
      <div className="container">
        <SectionHeader
          tagline="Our Services"
          heading="Core Loyalty Management Services"
          subheading="Comprehensive loyalty program management services designed to help businesses create and maintain successful customer retention programs."
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
