import React from "react";

const sizeClasses = {
  txtInterSemiBold56WhiteA700: "font-inter font-semibold",
  txtInterRegular12Bluegray90002: "font-inter font-normal",
  txtInterRegular16Gray80002: "font-inter font-normal",
  txtInterRegular16Gray80003: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterBold32WhiteA700: "font-bold font-inter",
  txtInterRegular16Gray80090: "font-inter font-normal",
  txtInterMedium20Gray900: "font-inter font-medium",
  txtInterBold20: "font-bold font-inter",
  txtInterRegular7: "font-inter font-normal",
  txtInterSemiBold32: "font-inter font-semibold",
  txtInterSemiBold75: "font-inter font-semibold",
  txtInterMedium18: "font-inter font-medium",
  txtInterMedium16Gray80002: "font-inter font-medium",
  txtInterMedium12: "font-inter font-medium",
  txtInterSemiBold104: "font-inter font-semibold",
  txtInterMedium20WhiteA700: "font-inter font-medium",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtRobotoRomanRegular14Gray20001: "font-normal font-roboto",
  txtInterMedium14: "font-inter font-medium",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtInterSemiBold40: "font-inter font-semibold",
  txtInterRegular20Gray900: "font-inter font-normal",
  txtInterSemiBold43: "font-inter font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtRobotoRomanMedium14: "font-medium font-roboto",
  txtInterRegular16Black90001: "font-inter font-normal",
  txtInterBold16Black90001: "font-bold font-inter",
  txtInterRegular16Gray20001: "font-inter font-normal",
  txtInterSemiBold16Gray900: "font-inter font-semibold",
  txtCircularStdBold22: "font-bold font-circularstd",
  txtInterBold40: "font-bold font-inter",
  txtInterMedium20Black90001: "font-inter font-medium",
  txtInterSemiBold96: "font-inter font-semibold",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterMedium12Black90001: "font-inter font-medium",
  txtInterRegular14Gray900cc: "font-inter font-normal",
  txtInterSemiBold40WhiteA700: "font-inter font-semibold",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterSemiBold56: "font-inter font-semibold",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterBold32: "font-bold font-inter",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterBold34: "font-bold font-inter",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular20Gray80001: "font-inter font-normal",
  txtInterRegular20Gray80002: "font-inter font-normal",
  txtInterRegular12Gray900: "font-inter font-normal",
  txtInterSemiBold40Gray900: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
