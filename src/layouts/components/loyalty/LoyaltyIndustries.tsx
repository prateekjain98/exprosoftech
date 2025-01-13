import { motion } from "framer-motion";
import type { IconType } from "react-icons/lib";
import {
  FaStore,
  FaHotel,
  FaPlane,
  FaUtensils,
  FaShoppingBag,
  FaCarAlt,
  FaGamepad,
  FaGraduationCap,
} from "react-icons/fa";
import SectionHeader from "@/components/SectionHeader";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  description,
  icon: Icon,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group flex flex-col rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-darkmode-theme-light"
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 transition-colors duration-300 group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white dark:text-blue-400">
        <Icon size={28} />
      </div>
      <h3 className="mb-3 text-xl font-medium text-gray-900">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </motion.div>
  );
};

const industries = [
  {
    title: "Retail",
    description:
      "Drive repeat purchases and increase customer lifetime value in retail stores",
    icon: FaStore,
  },
  {
    title: "Hospitality",
    description: "Create memorable experiences and encourage repeat stays",
    icon: FaHotel,
  },
  {
    title: "Travel",
    description:
      "Build loyalty through personalized travel rewards and experiences",
    icon: FaPlane,
  },
  {
    title: "Restaurants",
    description: "Increase customer visits and average order value",
    icon: FaUtensils,
  },
  {
    title: "E-commerce",
    description: "Boost online sales and customer engagement",
    icon: FaShoppingBag,
  },
  {
    title: "Automotive",
    description: "Enhance service retention and parts sales",
    icon: FaCarAlt,
  },
  {
    title: "Entertainment",
    description: "Create engaging rewards for entertainment venues",
    icon: FaGamepad,
  },
  {
    title: "Education",
    description: "Build student and alumni engagement programs",
    icon: FaGraduationCap,
  },
];

interface Props {
  className?: string;
}

export const LoyaltyIndustries: React.FC<Props> = ({ className }) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <SectionHeader
          tagline="Industries"
          heading="Tailored Solutions for Every Industry"
          subheading="Our loyalty program management services are tailored to meet the unique needs of various industries and business models."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              {...industry}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
