import React from "react";
import clsx from "clsx";

const Input = React.forwardRef(
  ({ type = "text", className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          type={type}
          className={clsx(
            "w-full rounded-xl border px-4 py-2 text-sm outline-none transition-all focus:ring-2",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-black",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
