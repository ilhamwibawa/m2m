import classNames from "classnames";
import React from "react";

function AppButton({ children, variant, apperance, ...props }) {
  const btnClass = classNames({
    "px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out": true,
    "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
    "rounded-full": apperance === "rounded",
  });

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
}

export default AppButton;
