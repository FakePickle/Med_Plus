import React from "react";

const sizes = {
  s: "text-[15px] font-black",
  md: "text-xl font-black",
  xs: "text-xs font-bold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-600 font-zenkakugothicantique ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
