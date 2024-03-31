import React from "react";

const sizes = {
  s: "text-xs font-bold",
  md: "text-sm font-bold",
  xs: "text-[10px] font-black",
  lg: "text-xl font-black",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-600 font-zenkakugothicantique ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
