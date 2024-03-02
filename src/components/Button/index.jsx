import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  link,
  children,
  variant = "primary",
  className = "",
  ...restProps
}) => {
  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass = "btn btn--primary";
      break;
    case "border":
      variantClass = "btn btn--border --black";
      break;
    case "default":
      variantClass = "btn btn--default";
      break;
    case "grey":
      variantClass = "btn btn--grey";
      break;
  }
  if (link) {
    return (
      <Link to={link} className={`${variantClass} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${variantClass} ${className}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
