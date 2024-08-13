import React from "react";

interface ButtonProps {
  label?: string;
  iconSrc?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size: "small" | "medium";
  icon?: boolean; // primary for purple button, secondary for outlined buttons
}

const Button: React.FC<ButtonProps> = ({
  label,
  iconSrc,
  onClick,
  variant = "secondary",
  size,
  icon,
}) => {
  const baseClasses =
    "flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium focus:outline-none transition-colors duration-300";
  const primaryClasses = "bg-primary text-white hover:bg-primary";
  const secondaryClasses =
    "border border-primary text-primary hover:bg-primary";

  return (
    <button
      className={`${baseClasses} ${size === "small" ? "w-14" : "w-32"} ${
        variant === "primary" ? primaryClasses : secondaryClasses
      }`}
      onClick={onClick}
    >
      {iconSrc && <img src={iconSrc} alt={label} className="" />}
      {!icon && <p className="ml-2">{label}</p>}
    </button>
  );
};

export default Button;
