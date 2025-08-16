import React, { useEffect } from "react";
import clsx from "clsx";

const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!duration) return;
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const styles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={clsx(
        "fixed bottom-5 right-5 z-50 rounded-xl px-4 py-3 shadow-lg transition-all",
        styles[type]
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-xl leading-none hover:opacity-70"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
