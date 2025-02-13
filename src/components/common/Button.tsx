import React from "react";
import { FaArrowRight } from "react-icons/fa";

type ButtonVariant =
  | "primary"
  | "outline-primary"
  | "secondary"
  | "outline-secondary"
  | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  showArrow?: boolean;
  target?: "_blank" | "_self";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
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
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  showArrow = true,
  target = "_self",
  onClick,
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "btn flex items-center gap-2 font-medium transition-all duration-300";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

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
          <FaArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
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
        <FaArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;
