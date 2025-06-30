import React, { useEffect } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

type ButtonVariant =
  | "primary"
  | "outline-primary"
  | "secondary"
  | "outline-secondary"
  | "white";
type ButtonSize = "sm" | "md" | "lg";
type ButtonHeight = "normal" | "compact";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  height?: ButtonHeight;
  href?: string;
  className?: string;
  showArrow?: boolean;
  arrowDown?: boolean;
  target?: "_blank" | "_self";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isCalendlyButton?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  "outline-primary": "btn-outline-primary hover:bg-primary hover:text-white",
  secondary: "btn-secondary",
  "outline-secondary":
    "btn-outline-secondary hover:bg-secondary hover:text-white",
  white: "btn-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 text-sm",
  md: "px-8 text-base",
  lg: "px-10 text-lg",
};

const heightStyles: Record<ButtonHeight, string> = {
  normal: "py-3",
  compact: "py-1.5",
};

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  height = "normal",
  href,
  className = "",
  showArrow = true,
  arrowDown = false,
  target = "_self",
  onClick,
  type = "button",
  disabled = false,
  isCalendlyButton = false,
}) => {
  const baseStyles =
    "btn flex items-center gap-2 font-medium transition-all duration-300";
  
  // Special styling for primary buttons with capsule design
  const isPrimary = variant === "primary";
  const capsuleStyles = isPrimary 
    ? "border-[#195dc1] bg-[#2e78e6] text-white border hover:border-[#4B83FB] hover:bg-[#4B83FB] hover:text-white hover:drop-shadow-[0_6px_4px_rgba(0,0,0,0.36)] hover:scale-[1.06] active:border-[#2251C5] active:bg-[#2251C5] drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-2 min-h-[52px] group transition-all duration-300"
    : `${variantStyles[variant]} ${sizeStyles[size]} ${heightStyles[height]}`;
  
  const styles = isPrimary 
    ? `${baseStyles} ${capsuleStyles} ${className}`
    : `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${heightStyles[height]} ${className}`;

  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/Exprosoftech/30min",
      });
    }
  };

  const ArrowIcon = arrowDown ? FaArrowDown : FaArrowRight;

  // Render function for button content
  const renderContent = () => {
    if (isPrimary && showArrow) {
      return (
        <>
          <span className="flex-1 text-left font-medium">{children}</span>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out group-hover:rotate-45 group-hover:scale-110">
            <ArrowIcon className="w-4 h-4 text-[#2e78e6]" />
          </div>
        </>
      );
    }
    
    return (
      <>
        {children}
        {showArrow && (
          <ArrowIcon
            className={`text-lg transition-transform ${
              arrowDown ? "group-hover:translate-y-1" : "group-hover:translate-x-1"
            } flex-shrink-0 self-center inline-block align-middle`}
          />
        )}
      </>
    );
  };

  if (isCalendlyButton) {
    return (
      <button
        className={styles}
        onClick={handleCalendlyClick}
        type={type}
        disabled={disabled}
        style={isPrimary ? { background: 'linear-gradient(to top, #387FE7, #5792EB)' } : undefined}
      >
        {renderContent()}
      </button>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        style={isPrimary ? { background: 'linear-gradient(to top, #387FE7, #5792EB)' } : undefined}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
      style={isPrimary ? { background: 'linear-gradient(to top, #387FE7, #5792EB)' } : undefined}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
