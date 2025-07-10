import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { sanityClient } from "sanity:client"; // Assuming you have a sanity client setup

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  companyLogo?: string;
}

interface TestimonialMarqueeProps {
  data?: {
    title?: string;
    subtitle?: string;
    description?: string;
    testimonials?: Testimonial[];
  };
}

// Default testimonials as fallback if data fetch fails
const testimonialsObject: Testimonial[] = [
  {
    name: "John Smith",
    role: "CTO",
    company: "TechCorp Inc.",
    content: "The loyalty engine has transformed how we engage with our customers. The ROI has been exceptional."
  },
  {
    name: "Sarah Johnson",
    role: "Head of Marketing",
    company: "Retail Giants",
    content: "Implementation was smooth, and our customer retention has improved by 40% since using this solution."
  },
  {
    name: "Mike Chen",
    role: "Product Manager",
    company: "E-commerce Plus",
    content: "The analytics and insights have been game-changing for our loyalty program strategy."
  },
  {
    name: "Emma Wilson",
    role: "Customer Success Manager",
    company: "RetailTech Solutions",
    content: "The customization options are incredible. We've been able to create unique reward programs that perfectly align with our brand."
  },
  {
    name: "David Kumar",
    role: "Operations Director",
    company: "Global Retail Chain",
    content: "The platform's analytics have helped us understand our customers better and make data-driven decisions."
  },
  {
    name: "Lisa Zhang",
    role: "Digital Marketing Head",
    company: "Fashion Forward",
    content: "Our customer engagement metrics have shown remarkable improvement since implementing this loyalty engine."
  }
];

export const TestimonialMarquee: React.FC<TestimonialMarqueeProps> = ({ data }) => {
  const [testimonialData, setTestimonialData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // GROQ query to fetch testimonial section data
        const query = `*[_type == "testimonialSection"][0]{
          title,
          subtitle,
          description,
          testimonials[]{
            name,
            role,
            company,
            content,
            "avatar": avatar.asset->url,
            "companyLogo": companyLogo.asset->url
          }
        }`;
        
        const fetchedData = await sanityClient.fetch(query);
        setTestimonialData(fetchedData);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to fetch testimonials');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Use fetched data, props data, or fallback to default testimonials
  const testimonials = testimonialData?.testimonials || 
                      data?.testimonials || 
                      testimonialsObject;

  // Split testimonials for two rows
  const firstRowTestimonials = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRowTestimonials = testimonials.slice(Math.ceil(testimonials.length / 2));

  // Show loading state
  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  // If no testimonials are available after all fallbacks, show a message
  if (testimonials.length === 0) {
    return <div className="py-20 text-center">No testimonials available.</div>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl xl:max-w-[100vw] mx-auto px-4 xl:px-0">
        <SectionHeader
          tagline={testimonialData?.subtitle || data?.subtitle || "Testimonials"}
          heading={testimonialData?.title || data?.title || "See What People Are Saying About Us"}
          subheading={testimonialData?.description || data?.description || ""}
        />

        <div className="mt-16 relative group">
          {/* Gradient overlays */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div> */}
          
          {/* First row */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-6 w-max">
              {[...firstRowTestimonials, ...firstRowTestimonials, ...firstRowTestimonials].map((testimonial, idx) => (
                <TestimonialCard key={`row1-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
          
          {/* Second row */}
          <div className="overflow-hidden mt-4">
            <div className="flex animate-marquee-reverse gap-6 w-max">
              {[...secondRowTestimonials, ...secondRowTestimonials, ...secondRowTestimonials].map((testimonial, idx) => (
                <TestimonialCard key={`row2-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.3333%); }
          100% { transform: translateX(0%); }
        }
        
        .animate-marquee, .animate-marquee-reverse {
          animation-duration: 40s; 
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .animate-marquee {
          animation-name: marquee;
        }

        .animate-marquee-reverse {
          animation-name: marquee-reverse;
        }

        @media (max-width: 768px) {
          .animate-marquee, .animate-marquee-reverse {
            animation-duration: 20s; 
          }
        }
        
        .group:hover .animate-marquee,
        .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[350px] bg-gray-900 rounded-lg border border-gray-700 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-blue-500/20 hover:shadow-lg hover:border-blue-500/50 ">
      <div className="p-5">
        {/* Author info at the top */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold mr-3">
              {testimonial.avatar ? (
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                testimonial.name.charAt(0)
              )}
            </div>
            <div>
              <p className="font-medium text-gray-100">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </div>
          <div className="text-sm font-medium text-gray-300">
            {testimonial.company}
          </div>
        </div>
        
        {/* Divider */}
        <hr className="my-4 border-gray-700" />
        
        {/* Testimonial content at the bottom */}
        <p className="text-gray-300 text-base leading-relaxed">
          "{testimonial.content}"
        </p>
      </div>
    </div>
  );
};