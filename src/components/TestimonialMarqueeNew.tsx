import React from "react";
import SectionHeader from "./SectionHeader";

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

export const TestimonialMarquee: React.FC<TestimonialMarqueeProps> = ({ data }) => {
  // Default testimonials
  const testimonials: Testimonial[] = data?.testimonials || [
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

  // Split testimonials for two rows
  const firstRowTestimonials = testimonials.slice(0, 3);
  const secondRowTestimonials = testimonials.slice(3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          tagline={data?.subtitle || "Testimonials"}
          heading={data?.title || "See What People Are Saying About Us"}
          subheading={data?.description || ""}
        />

        <div className="mt-16 relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* First row */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-6 hover:animation-pause">
              {[...firstRowTestimonials, ...firstRowTestimonials, ...firstRowTestimonials].map((testimonial, idx) => (
                <TestimonialCard key={`row1-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
          
          {/* Second row */}
          <div className="overflow-hidden mt-4">
            <div className="flex animate-marquee-reverse gap-6 hover:animation-pause">
              {[...secondRowTestimonials, ...secondRowTestimonials, ...secondRowTestimonials].map((testimonial, idx) => (
                <TestimonialCard key={`row2-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        
        .hover\\:animation-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[350px] bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-blue-100/80 hover:shadow-lg hover:border-blue-100 ">
      <div className="p-5">
        {/* Author info at the top */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold mr-3">
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
              <p className="font-medium text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          <div className="text-sm font-medium text-gray-700">
            {testimonial.company}
          </div>
        </div>
        
        {/* Divider */}
        <hr className="my-4 " />
        
        {/* Testimonial content at the bottom */}
        <p className="text-gray-700 text-base leading-relaxed">
          "{testimonial.content}"
        </p>
      </div>
    </div>
  );
};