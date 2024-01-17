import React from "react";

import { Img, List, Text } from "components";

const WhatourclientssayPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-20 items-center justify-start mx-auto overflow-auto py-[120px] w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center md:px-5 px-[88px] w-full">
          <div className="flex flex-col items-end justify-start max-w-[1440px] w-full">
            <div className="flex flex-col gap-8 items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <Text
                  className="text-base text-blue-A700 text-center w-auto"
                  size="txtInterMedium16"
                >
                  Our customers speak volumes for us.
                </Text>
              </div>
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-auto"
                size="txtInterSemiBold56"
              >
                What our clients say
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-5 w-full">
          <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[88px] w-full">
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col items-start justify-start p-8 sm:px-5 rounded-lg w-[540px] sm:w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <div className="flex flex-row gap-6 items-start justify-start w-full">
                    <Img
                      className="h-[58px] md:h-auto object-cover rounded w-[58px]"
                      src="images/img_rectangle40316.png"
                      alt="rectangle40316"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-[268px]">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterMedium18"
                      >
                        Chris MacLean
                      </Text>
                      <Text
                        className="text-base text-gray-800_02 w-full"
                        size="txtInterMedium16Gray80002"
                      >
                        CEO, Pivotree
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[476px] md:max-w-full text-base text-gray-800_02"
                    size="txtInterRegular16Gray80002"
                  >
                    <>
                      “Their tools, particularly CloudScore and AI, have allowed
                      us
                      <br />
                      to optimize commitments for each customer with ease,
                      integrating seamlessly with our ERP system for accurate
                      billing. The time and cost savings have been substantial,
                      making Spot.io an invaluable partner in our financial
                      operations.”
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col h-[298px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[540px] sm:w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <div className="flex flex-row gap-6 items-start justify-start w-full">
                    <Img
                      className="h-[58px] md:h-auto object-cover rounded w-[58px]"
                      src="images/img_rectangle40316_58x58.png"
                      alt="rectangle40316"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-[268px]">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterMedium18"
                      >
                        Richard Marsh
                      </Text>
                      <Text
                        className="text-base text-gray-800_02 w-full"
                        size="txtInterMedium16Gray80002"
                      >
                        Director of Operations, Finova
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[476px] md:max-w-full text-base text-gray-800_02"
                    size="txtInterRegular16Gray80002"
                  >
                    “CloudScore was a revelation for us. Initially skeptical, we
                    were amazed at how well it integrated into our environment.
                    It helped us achieve nearly 70% savings in our Azure cloud
                    spend. The improved visibility and accountability have been
                    transformative, enabling us to innovate faster.”
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col h-[298px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[540px] sm:w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <div className="flex flex-row gap-6 items-start justify-start w-full">
                    <Img
                      className="h-[58px] md:h-auto object-cover rounded w-[58px]"
                      src="images/img_rectangle40316_1.png"
                      alt="rectangle40316"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-[268px]">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterMedium18"
                      >
                        Vincent Soerowintono
                      </Text>
                      <Text
                        className="text-base text-gray-800_02 w-full"
                        size="txtInterMedium16Gray80002"
                      >
                        {" "}
                        Solution Architect, inQdo Cloud
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[476px] md:max-w-full text-base text-gray-800_02"
                    size="txtInterRegular16Gray80002"
                  >
                    <>
                      “CloudScore automated billing engine has been a
                      game-changer for us. The ability to set it and forget it,
                      knowing that at the end of the month everything is taken
                      care of, has saved us countless hours. It&#39;s not just
                      the time savings - we’ve also uncovered new revenue
                      streams.”
                    </>
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatourclientssayPage;
