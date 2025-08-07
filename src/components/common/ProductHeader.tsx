import React from "react";
import Button from "../common/Button";

interface ButtonProps {
  label: string;
  link: string;
  variant: "primary" | "outline-primary";
  isOpenBooking?: boolean;
}

interface ProductHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  buttons: ButtonProps[];
  className?: string;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({
  badge,
  title,
  subtitle,
  description,
  image,
  buttons,
  className,
}) => {
  return (
    <section className="relative z-[1] pb-0 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 max-w-[1440px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span
              className="inline-block px-4 py-2 mb-4 lg:mb-6 text-xs font-medium tracking-wide text-primary bg-primary/10 rounded-full"
              data-aos="fade-up-sm"
            >
              {badge}
            </span>
            <h1
              className="mb-3 lg:mb-4 text-3xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#111b57] to-primary bg-clip-text text-transparent"
              data-aos="fade-up-sm"
            >
              {title}
            </h1>
            <h2
              className="mb-4 lg:mb-6 text-lg lg:text-2xl text-gray-700 font-medium"
              data-aos="fade-up-sm"
            >
              {subtitle}
            </h2>
            <p
              className="mb-6 lg:mb-10 text-base text-gray-600/90 leading-relaxed max-w-xl"
              data-aos="fade-up-sm"
            >
              {description}
            </p>
            {buttons && buttons.length > 0 && (
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 lg:mb-0"
                data-aos="fade-up-sm"
              >
                {buttons.map(({ label, link, variant, isOpenBooking }, index) => (
                  <Button
                    key={index}
                    href={link}
                    variant={variant}
                    target={link.startsWith("http") ? "_blank" : "_self"}
                    hasOverlay={isOpenBooking}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          <div className="relative px-4 md:px-0 order-1 lg:order-2">
            <div
              className="relative w-full mx-auto min-h-[200px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[800px] flex items-center"
              data-aos="fade-up-sm"
              data-aos-delay="400"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] bg-gradient-to-br from-blue-100/30 via-blue-200/10 to-transparent rounded-full blur-xl animate-morph" />
                <div className="absolute -bottom-[5%] -right-[5%] w-[110%] h-[110%] bg-gradient-to-bl from-indigo-100/30 via-purple-200/10 to-transparent rounded-full blur-xl animate-morph-delayed" />

                {/* Particles - Hide on mobile */}
                <div className="hidden lg:block">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400/60 to-indigo-400/60 rounded-full animate-particle"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${15 + Math.random() * 70}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${4 + Math.random() * 4}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Glowing Ring - Hide on mobile */}
                <div className="hidden lg:block">
                  <div
                    className="absolute inset-[8%] rounded-full border border-blue-100/20 animate-spin-slow"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 70%)",
                    }}
                  />
                </div>
              </div>

              {/* Glass Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-[2px] rounded-lg lg:rounded-xl border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />

              {/* Accent Lines - Hide on mobile */}
              <div className="hidden lg:block">
                <div className="absolute inset-0 rounded-xl overflow-hidden opacity-30 pointer-events-none">
                  <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-blue-100/50 to-transparent" />
                  <div className="absolute bottom-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-indigo-100/50 to-transparent" />
                  <div className="absolute left-0 top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-blue-100/50 to-transparent" />
                  <div className="absolute right-0 top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-indigo-100/50 to-transparent" />
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full h-full p-2 sm:p-4">
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={800}
                    className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none h-auto object-contain transform transition-all duration-1000 scale-100 lg:scale-110"
                    style={{
                      filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.12))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add animations
const styles = `
  @keyframes morph {
    0%, 100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      transform: rotate(0deg);
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      transform: rotate(180deg);
    }
  }

  .animate-morph {
    animation: morph 15s ease-in-out infinite;
  }

  .animate-morph-delayed {
    animation: morph 15s ease-in-out infinite reverse;
    animation-delay: 5s;
  }

  @keyframes particle {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0;
    }
    25% {
      transform: translate(10px, -10px) scale(1.2);
      opacity: 1;
    }
    50% {
      transform: translate(20px, 0) scale(1);
      opacity: 0.5;
    }
    75% {
      transform: translate(10px, 10px) scale(1.2);
      opacity: 1;
    }
  }

  .animate-particle {
    animation: particle 6s ease-in-out infinite;
  }

  .animate-spin-slow {
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// Add style tag to the document
if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}

export default ProductHeader;
