import React from "react";

const sizes = {
  xs: "text-[46px] font-normal md:text-[42px] sm:text-4xl",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-viga ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
