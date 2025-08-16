import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary", // primary, secondary, outline, ghost
  size = "md", // sm, md, lg
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-800 focus:ring-gray-500",
    secondary:
      "bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400",
    outline:
      "border border-gray-300 text-black hover:bg-gray-100 focus:ring-gray-300",
    ghost:
      "text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
