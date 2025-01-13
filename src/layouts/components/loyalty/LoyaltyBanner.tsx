import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify } from "@/lib/utils/textConverter";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

export const LoyaltyBanner: React.FC<Props> = ({ className }) => {
  return (
    <section className="relative z-[1] pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1
              dangerouslySetInnerHTML={{
                __html: markdownify(
                  "Transform Customer Loyalty into Lasting Growth"
                ),
              }}
              data-aos="fade-up-sm"
              className="mb-6 text-h3 lg:text-h1 bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent font-medium"
            />
            <p
              data-aos="fade-up-sm"
              className="mb-10 text-lg/[inherit] font-medium"
            >
              Elevate your customer relationships with our comprehensive loyalty
              program management services. We help you design, implement, and
              optimize loyalty programs that drive retention and maximize
              customer lifetime value.
            </p>
            <ul className="flex flex-wrap lg:justify-start justify-center gap-4">
              <li data-aos="fade-up-sm" data-aos-delay={100}>
                <a className="btn btn-primary" href="/contact" rel="noopener">
                  Get Started
                  <span className="sr-only">Get Started</span>
                  <DynamicIcon icon="FaArrowRight" />
                </a>
              </li>
            </ul>
          </div>

          <div className="relative px-4 md:px-0 order-1 lg:order-2">
            <div
              className="relative max-w-[580px] mx-auto"
              data-aos="fade-up-sm"
              data-aos-delay="400"
            >
              <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-300/10 to-transparent rounded-full blur-3xl" />

              <div className="relative">
                <div className="absolute -inset-4 border-2 border-primary/10 rounded-2xl transform rotate-2" />
                <div className="absolute -inset-4 border-2 border-secondary-300/10 rounded-2xl transform -rotate-2" />

                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&h=1800&fit=crop"
                    alt="Loyalty Management Solutions"
                    width={580}
                    height={480}
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary-300/20" />

                  {/* Floating Elements */}
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <DynamicIcon
                          icon="FaUsers"
                          className="w-6 h-6 text-white"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-600">
                          Customer Growth
                        </div>
                        <div className="text-xl font-bold text-blue-600">
                          +45%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <DynamicIcon
                          icon="FaChartLine"
                          className="w-6 h-6 text-white"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-600">
                          Retention Rate
                        </div>
                        <div className="text-xl font-bold text-purple-600">
                          92%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
