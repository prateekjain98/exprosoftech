import React from "react";
import SectionHeader from "./SectionHeader";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  stars?: number;
  avatar?: string;
}

interface TestimonialMarqueeProps {
  data?: {
    title?: string;
    subtitle?: string;
    description?: string;
    testimonials?: Testimonial[];
  };
}

// Default testimonials as fallback if no data is provided
const testimonialsObject: Testimonial[] = [
  {
    name: "John Smith",
    role: "CTO",
    company: "TechCorp Inc.",
    content: "The loyalty engine has transformed how we engage with our customers. The ROI has been exceptional.",
    stars: 5
  },
  {
    name: "Sarah Johnson",
    role: "Head of Marketing",
    company: "Retail Giants",
    content: "Implementation was smooth, and our customer retention has improved by 40% since using this solution.",
    stars: 5
  },
  {
    name: "Mike Chen",
    role: "Product Manager",
    company: "E-commerce Plus",
    content: "The analytics and insights have been game-changing for our loyalty program strategy.",
    stars: 5
  },
  {
    name: "Emma Wilson",
    role: "Customer Success Manager",
    company: "RetailTech Solutions",
    content: "The customization options are incredible. We've been able to create unique reward programs that perfectly align with our brand.",
    stars: 5
  },
  {
    name: "David Kumar",
    role: "Operations Director",
    company: "Global Retail Chain",
    content: "The platform's analytics have helped us understand our customers better and make data-driven decisions.",
    stars: 5
  },
  {
    name: "Lisa Zhang",
    role: "Digital Marketing Head",
    company: "Fashion Forward",
    content: "Our customer engagement metrics have shown remarkable improvement since implementing this loyalty engine.",
    stars: 5
  }
];

export const TestimonialMarquee: React.FC<TestimonialMarqueeProps> = ({ data }) => {
  // Use provided data or fallback to default testimonials
  const testimonials = data?.testimonials || testimonialsObject;

  // If no testimonials are available after all fallbacks, show a message
  if (testimonials.length === 0) {
    return <div className="py-20 text-center">No testimonials available.</div>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl xl:max-w-[100vw] mx-auto  xl:px-0">
        <SectionHeader
          tagline={data?.subtitle || "Testimonials"}
          heading={data?.title || "See What People Are Saying About Us"}
          subheading={data?.description || ""}
        />

        <div className="mt-16 relative group">
          {/* Single row with all testimonials */}
          <div className="overflow-x-hidden">
            <div className="flex animate-marquee gap-6 w-max">
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
                <TestimonialCard key={`testimonial-${idx}`} testimonial={testimonial} />
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
  // Generate 5 stars with filled or unfilled state
  const renderStars = () => {
    return Array(5).fill(0).map((_, index) => (
      <svg 
        key={index}
        className={`w-6 h-6 ${index < (testimonial.stars || 5) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="flex-shrink-0 w-[350px] group">
      <div className="relative rounded-2xl bg-gray-100 p-8 transition-all duration-500 h-full hover:shadow-xl flex flex-col justify-between">
        {/* Stars and content container */}
        <div>
          {/* Star Rating */}
          <div className="flex gap-1 mb-6">
            {renderStars()}
          </div>

          {/* Testimonial content */}
          <p className="text-gray-900 text-xl font-semibold">
            {testimonial.content}
          </p>
        </div>

        {/* Author info container */}
        <div className="flex items-start gap-4 mt-8">
          {/* Avatar with image or initials */}
          <div className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-gray-600 font-semibold text-2xl">
                {testimonial.name.charAt(0)}
              </span>
            )}
          </div>

          <div>
            <p className="font-semibold text-gray-900">
              {testimonial.name}
            </p>
            <p className="text-gray-600 leading-5">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};