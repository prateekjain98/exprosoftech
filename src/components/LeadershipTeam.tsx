import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  linkedin: string;
  image: string;
}

// Data embedded directly in the component
const leadershipData = {
  subtitle: "Leadership",
  title: "Meet Our Leadership Team",
  description:
    "Our diverse team of experts brings decades of combined experience across sales, manufacturing, supply chain, and technology to drive transformational change.",
  leaders: [
    {
      name: "Subodh Shrivastava",
      title: "Co-founder",
      description:
        "A CII-certified Business Excellence expert with over 35 years of experience, Subodh has led transformational projects in sales, manufacturing, and supply chain for global and Indian enterprises. His expertise in TOC, Lean, and Six Sigma methodologies helps businesses unlock hidden capacity, reduce lead times, and improve operational efficiency.",
      linkedin: "https://www.linkedin.com/in/subodhshrivastava/",
      image: "/images/about-us/subodh.png",
    },
    {
      name: "Anadi Shrivastava",
      title: "Co-founder",
      description:
        "An expert in sales transformation and digital adoption, Anadi brings a strategic yet hands-on approach to business growth. With an MBA from IIM Lucknow, he has successfully implemented inside sales, sales acceleration, and demand-driven sales strategies across industries. His expertise in TOC and synchronized manufacturing systems helps businesses optimize sales processes, increase productivity, and expand market reach without increasing costs.",
      linkedin: "https://www.linkedin.com/in/anadi-shrivastava-1163a6a8/",
      image: "/images/about-us/anadi.png",
    },
    {
      name: "Asit Shrivastava",
      title: "Co-founder",
      description:
        "A Tech Leader, he heads Sales-tech and Supply Chain Product Development owing to a unique blend of experience in Software development, amalgamated with Sales and Supply Chain. He leads the strategy related to Digital transformation. He has guided the adoption of Intelligent Systems and Tech in Supply chain, Channel Sales, and B2B Sales to enable quick and data-backed decision-making.",
      linkedin: "https://www.linkedin.com/in/asit-shrivastava-78916715a/",
      image: "/images/about-us/asit.png",
    },
    {
      name: "Imran H. Shaikh",
      title: "Partner, Operations Transformation & Thought Leadership",
      description:
        "A seasoned leader with over 25 years of Industry experience. High Performance awards from various OEMs in India & Globally. He Champions the Scientific Business Management methodology - Theory of Constraints & other Business Excellence Practices. As COO, he transformed organizations like Fleetguard-Filtrum, Cummins Co.",
      linkedin: "https://www.linkedin.com/in/imranhshaikh-thoughtleader/",
      image: "/images/about-us/imran.png",
    },
    {
      name: "Anil Jain",
      title: "Partner, TOC Expert",
      description:
        "TOC Expert with 35+ years' experience, Anil Jain transforms business potential into 3x to 4x profit growth and near 100% on-time delivery. Known for simplifying complexity, he boosts throughput, eliminates delays, and delivers rapid results. A practical game-changer who partners with organizations for real, lasting performance breakthroughs.",
      linkedin: "https://www.linkedin.com/",
      image: "/images/about-us/anil.png",
    },
    {
      name: "Venkat Yechuri",
      title: "Partner, Advisory Board Member",
      description:
        "With global C-suite experience spanning two decades, Venkat is a business strategist and transformation expert. His ability to drive enterprise-wide efficiency, cost optimization, and strategic execution helps organizations scale sustainably.",
      linkedin: "https://www.linkedin.com/in/venkatyechuri/",
      image: "/images/about-us/venkat.png",
    },
    {
      name: "Rajendra Joshi",
      title: "Partner, Operations & Supply Chain",
      description:
        "A Lean and TQM expert, Rajendra has a proven track record of improving plant performance, material planning, and procurement strategies. His expertise ensures businesses achieve cost-effective procurement, optimized inventory, and manufacturing agility.",
      linkedin: "https://www.linkedin.com/in/rajendra-joshi-43756510/",
      image: "/images/about-us/rajendra.png",
    },
  ],
};

const LeadershipTeam: React.FC = () => {
  const { subtitle, title, description, leaders } = leadershipData;
  const [activeMember, setActiveMember] = useState<number>(0);

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <SectionHeader
            tagline={subtitle}
            heading={title}
            subheading={description}
          />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Team Member Navigation */}
          <div
            className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-4 max-w-sm sm:max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {leaders.map((leader, index) => (
              <button
                key={index}
                className={`relative rounded-full overflow-hidden w-16 h-16 mx-auto transition-all duration-300 ${
                  activeMember === index
                    ? "ring-4 ring-blue-500 scale-110"
                    : "grayscale hover:grayscale-0 hover:scale-105"
                }`}
                onClick={() => setActiveMember(index)}
                aria-label={`View details for ${leader.name}`}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>

          {/* Selected Member Details */}
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            {leaders[activeMember] && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-72 shrink-0">
                      <img
                        src={leaders[activeMember].image}
                        alt={leaders[activeMember].name}
                        className="w-full aspect-square object-cover object-top rounded-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            {leaders[activeMember].name}
                          </h2>
                          <p className="text-blue-600 font-medium">
                            {leaders[activeMember].title}
                          </p>
                        </div>
                        <a
                          href={leaders[activeMember].linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-50 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                          aria-label="LinkedIn Profile"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                      <div className="mb-6 h-px w-full bg-gray-100"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {leaders[activeMember].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons - Moved outside */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6">
              <div className="flex gap-3 bg-white rounded-full shadow-lg p-2">
                <button
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
                  onClick={() =>
                    setActiveMember((prev) =>
                      prev === 0 ? leaders.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous team member"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 15L7.5 10L12.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  onClick={() =>
                    setActiveMember((prev) =>
                      prev === leaders.length - 1 ? 0 : prev + 1
                    )
                  }
                  aria-label="Next team member"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
