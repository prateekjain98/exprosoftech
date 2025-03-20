import React from "react";
import SectionHeader from "./SectionHeader";

interface TeamMember {
  image: string;
  name: string;
  company: string;
}

interface OurTeamData {
  title: string;
  subtitle: string;
  description: string;
  list: TeamMember[];
}

// Data embedded directly in the component
const ourTeamData: OurTeamData = {
  subtitle: "Our Team",
  title: "Meet Our Team",
  description:
    "Your Trusted Partner in Data Protection with Cutting-Edge Solutions for <br> Comprehensive Data Security.",
  list: [
    {
      name: "Brooklyn Simmons",
      image: "/images/team/1.png",
      company: "Abstergo Ltd.",
    },
    {
      name: "Annette Black",
      image: "/images/team/2.png",
      company: "Biffco Enterprises Ltd.",
    },
    {
      name: "Darrell Steward",
      image: "/images/team/3.png",
      company: "Binford Ltd.",
    },
    {
      name: "Devon Lane",
      image: "/images/team/4.png",
      company: "Barone LLC.",
    },
  ],
};

const OurTeam: React.FC = () => {
  const { title, subtitle, description, list } = ourTeamData;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-10" data-aos="fade-up-sm">
            <SectionHeader
              tagline={subtitle}
              heading={title}
              subheading={description}
            />
          </div>
          <div
            className="col-12 pt-20"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="row g-4 justify-center">
              {list?.map((item, index) => (
                <div key={index} className="col-6 lg:col-3">
                  {item.image && (
                    <div className="mb-6 overflow-hidden rounded-xl bg-theme-light text-center md:rounded-3xl">
                      <img
                        className="w-full"
                        src={item.image}
                        alt={`photo of ${item.name}`}
                      />
                    </div>
                  )}
                  {item.name && (
                    <h3
                      className="h6 mb-1.5"
                      dangerouslySetInnerHTML={{ __html: item.name }}
                    />
                  )}
                  {item.company && (
                    <p dangerouslySetInnerHTML={{ __html: item.company }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
