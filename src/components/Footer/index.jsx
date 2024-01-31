import React from "react";
import { Link } from "react-router-dom";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col relative w-full">
          <Img
            className="h-[801px] mx-auto object-cover w-full"
            src="images/img_numcloud1.png"
            alt="numcloudOne"
          />
          <div className="bg-black-900 flex flex-col items-center justify-center  mt-[-236px] mx-auto w-full z-[1]">
            <div className="flex flex-col items-start justify-start max-w-[1440px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[152.1px] items-start justify-between pt-[120px] w-full">
                <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-12 md:h-auto object-cover w-16 sm:w-full"
                      src="images/img_denlogoprode_48x64.svg"
                      alt="denlogoprode_One"
                    />
                    <Text
                      className="leading-[140.00%] md:max-w-full max-w-xs text-sm text-white-A700_a2"
                      size="txtRobotoRomanRegular14"
                    >
                      Powerful multi-cloud management platform, optimizing cloud
                      resources and costs for businesses of all sizes and
                      industries
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-6 h-52 md:h-auto items-start justify-start pb-[60px] pr-4 w-[200px]">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtRobotoRomanMedium14"
                      >
                        Menu
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[103px]">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-gray-200_01 text-sm w-auto"
                          size="txtRobotoRomanRegular14Gray20001"
                        >
                          <Link to="/whycs">Why CloudScore</Link>
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-gray-200_01 text-sm w-auto"
                          size="txtRobotoRomanRegular14Gray20001"
                        >
                          Services{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-gray-200_01 text-sm w-auto"
                          size="txtRobotoRomanRegular14Gray20001"
                        >
                          Blog
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-gray-200_01 text-sm w-auto"
                          size="txtRobotoRomanRegular14Gray20001"
                        >
                          Contact
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 h-52 md:h-auto items-start justify-start pb-[60px] pr-4 w-[200px]">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[143px] w-full">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtRobotoRomanMedium14"
                      >
                        Contact:
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[74px] w-full">
                        <Text
                          className="text-gray-200_01 text-sm w-auto"
                          size="txtRobotoRomanRegular14Gray20001"
                        >
                          408 973 7240
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
                        <Text
                          className="text-gray-200_01 text-sm w-auto"
                          size="txtRobotoRomanRegular14Gray20001"
                        >
                          info@cloud.score.co
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start pb-[60px] pr-4 w-[200px]">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[135px] w-full">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtRobotoRomanMedium14"
                      >
                        Address:
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[158px] w-full">
                        <Text
                          className="leading-[140.00%] text-gray-200_01 text-sm"
                          size="txtRobotoRomanRegular14Gray20001"
                        >
                          <>
                            United States
                            <br />
                            Stevens Creek Blvd, Suite 100 <br />
                            Cupertino, CA 95014
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between pb-20 pt-10 w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] h-6 md:h-auto items-center justify-start">
                  <div className="flex flex-col h-6 md:h-auto items-start justify-center">
                    <Text
                      className="text-gray-200_01 text-sm w-auto"
                      size="txtRobotoRomanRegular14Gray20001"
                    >
                      ©2023 CLOUDSCORE
                    </Text>
                  </div>
                  <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-[119px]">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-gray-200_01 text-sm w-auto"
                          size="txtRobotoRomanRegular14Gray20001"
                        >
                          Terms of Services
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-gray-200_01 text-sm w-auto"
                          size="txtRobotoRomanRegular14Gray20001"
                        >
                          Privacy Policy
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_info.svg"
                    alt="info"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_link.svg"
                    alt="link"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
