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
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${heightStyles[height]} ${className}`;

  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/greymetre/30min",
      });
    }
  };

  const ArrowIcon = arrowDown ? FaArrowDown : FaArrowRight;

  if (isCalendlyButton) {
    return (
      <button
        className={styles}
        onClick={handleCalendlyClick}
        type={type}
        disabled={disabled}
      >
        {children}
        {showArrow && (
          <ArrowIcon className="text-lg transition-transform group-hover:translate-y-1" />
        )}
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
      >
        {children}
        {showArrow && (
          <ArrowIcon
            className={`text-lg transition-transform ${arrowDown ? "group-hover:translate-y-1" : "group-hover:translate-x-1"}`}
          />
        )}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {showArrow && (
        <ArrowIcon
          className={`text-lg transition-transform ${arrowDown ? "group-hover:translate-y-1" : "group-hover:translate-x-1"}`}
        />
      )}
    </button>
  );
};

export default Button;
