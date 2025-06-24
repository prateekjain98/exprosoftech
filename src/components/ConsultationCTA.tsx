import React from "react";
// import { ArrowRight, ChartLine, Gauge, Clock } from "@phosphor-icons/react";
import Button from "./common/Button";
import { sanityClient } from "sanity:client";


// const iconMap: { [key: string]: React.ForwardRefExoticComponent<any> } = {
//   ChartLine,
//   Gauge,
//   Clock,
// };

interface MetricType {
  value: string;
  label: string;
  icon: string;
}



// const metrics: MetricType[] = [
//   {
//     value: "25%+",
//     label: "Average Revenue Growth",
//     icon: ChartLine,
//   },
//   {
//     value: "40%",
//     label: "Efficiency Boost",
//     icon: Gauge,
//   },
//   {
//     value: "3x",
//     label: "Faster Time-to-Market",
//     icon: Clock,
//   },
// ];

// const consultantationCTA = {
//   tagline:"Ready to Transform?",
//   title:"Elevate Your Business with",
//   subtitle:"Demand-Driven Excellence",
//   description:"Discover how Greymetre's Demand-Driven Business Transformation can align your organization with real-time market demands for sustained success.",
//   metrices: [
//     {
//       value: "25%+",
//       label: "Average Revenue Growth",
//       icon: ChartLine
//     },
//     {
//       value: "40%",
//       label: "Efficiency Boost",
//       icon: Gauge
//     },
//     {
//       value: "3x",
//       label: "Faster Time-to-Market",
//       icon: Clock
//     }
//   ],
//   buttonText: "Schedule Your Consultation",
//   image: {
//     src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1800",
//     alt: "Business Transformation"
//   }

// }

const consultationCTAQuery = `*[_type == "consultationCTA"][0]{
  tagline,
  title,
  subtitle,
  description,
  metrices[] {
    value,
    label,
    icon
  },
  buttonText,
  image {
    src,
    alt
  }
}`



const ConsultationCTA = async () => {

  // Fetch the data:
const consultantationCTA = await sanityClient.fetch(consultationCTAQuery); 
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] overflow-hidden border border-gray-800/50">
          {/* Background Gradients */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl" />
          </div>

          <div className="relative px-6 py-16 md:px-12 lg:px-16 lg:py-20">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Content Side */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wide text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                 {consultantationCTA.tagline}
                </span>
                <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-white">
                  {consultantationCTA.title}{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {consultantationCTA.subtitle}
                  </span>
                </h2>
                <p className="text-lg text-gray-300/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {consultantationCTA.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {consultantationCTA.metrices.map((metric: MetricType , index: number) => (
                    <div key={index} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl transform transition-transform group-hover:scale-105 duration-300" />
                      <div className="relative p-4">
                      <div className="flex items-center justify-center lg:justify-start mb-3">
                          {/* {iconMap[metric.icon] && React.createElement(iconMap[metric.icon], {
                            size: 24,
                            weight: "duotone",
                            className: "text-blue-400"
                          })} */}
                          <div className="w-6 h-6 bg-blue-400 rounded"></div>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  isCalendlyButton={true}
                  className="inline-flex items-center justify-center gap-2.5 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {consultantationCTA.buttonText}
                </Button>
              </div>

              {/* Image Side */}
              <div className="lg:col-span-2 relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={consultantationCTA.image.src}
                  alt={consultantationCTA.image.alt}
                  className="w-full h-[500px] object-cover object-center"
                />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-gray-900/5 to-gray-900/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
