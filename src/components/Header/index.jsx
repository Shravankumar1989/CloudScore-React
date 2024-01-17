import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1264px] w-full">
          <div className="flex flex-col items-start justify-center w-60">
            <Img
              className="h-[60px] md:h-auto object-cover w-[103px] sm:w-full"
              src="images/img_denlogoprode.png"
              alt="denlogoprode"
            />
          </div>
          <div className="flex flex-1 sm:flex-col flex-row gap-2 items-start justify-center w-full">
            <div className="flex flex-col items-center justify-center sm:px-5 px-6 py-3 w-auto">
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtInterMedium16Gray900"
              >
                Why CloudScore
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center sm:px-5 px-6 py-3 w-auto">
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtInterMedium16Gray900"
              >
                Solutions
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center sm:px-5 px-6 py-3 w-auto">
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtInterMedium16Gray900"
              >
                About
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center sm:px-5 px-6 py-3 w-auto">
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtInterMedium16Gray900"
              >
                Blog
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start w-60">
            <div className="flex flex-col items-end justify-start w-full">
              <div className="flex flex-col items-center justify-center px-4 py-2 w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtInterSemiBold16Gray900"
                >
                  Log in
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-inter font-semibold min-w-[142px] text-base text-center"
              shape="round"
              color="blue_A700_01"
              size="sm"
              variant="fill"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
