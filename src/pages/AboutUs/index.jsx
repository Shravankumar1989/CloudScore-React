import React from "react";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <Header className="flex flex-col gap-2 items-center justify-center px-2 md:px-5 py-8 w-full" />
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[787px] items-center justify-start p-[263px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_frame1597882240.png')" }}
        >
          <div className="flex flex-col items-center justify-start mb-[133px] w-auto md:w-full">
            <div className="flex flex-col items-start justify-end w-auto md:w-full">
              <Text
                className="leading-[64.00px] max-w-[723px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 tracking-[-0.56px]"
                size="txtInterSemiBold56WhiteA700"
              >
                Unlocking the Full Potential of Cloud Technologies
              </Text>
            </div>
          </div>
        </div>
        <div className="font-roboto h-[5379px] md:px-5 relative w-full">
          <div className="flex flex-col font-inter items-center justify-start mb-[-555px] mx-auto w-auto md:w-full z-[1]">
            <div className="flex flex-col items-center justify-center max-w-[1440px] py-[120px] w-full">
              <Text
                className="leading-[56.00px] max-w-[1049px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 tracking-[-0.40px]"
                size="txtInterSemiBold40"
              >
                <span className="text-gray-900 font-inter text-left font-semibold">
                  <>
                    We&#39;re your go-to for efficient cloud management. <br />
                    Our platform optimizes spending, enhances efficiency, and
                    delivers measurable impacts.
                  </>
                </span>
                <span className="text-black-900_01 font-inter text-left font-bold">
                  {" "}
                </span>
                <span className="text-gray-700 font-inter text-left font-medium">
                  With integrations across major Cloud Service Providers and
                  AI/ML optimization, CloudScore ensures granular cost
                  visibility. Trust us for a powerful, versatile, and
                  cost-effective multi-cloud management solution.
                </span>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-start justify-start py-20 w-auto md:w-full">
              <Img
                className="h-[453px] sm:h-auto object-cover w-[616px] md:w-full"
                src="images/img_lycsarchitectu.png"
                alt="lycsarchitectu"
              />
              <Img
                className="h-[328px] md:h-auto object-cover w-[274px] sm:w-full"
                src="images/img_lalaazizlidjw.png"
                alt="lalaazizlidjw"
              />
              <Img
                className="h-[459px] sm:h-auto object-cover w-[308px] md:w-full"
                src="images/img_trueagencyo4u.png"
                alt="trueagencyo4u"
              />
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1440px] py-[120px] w-full">
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
                    Adapted and Approved
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-[72px] items-start justify-start sm:px-5 px-6 py-8 rounded-lg w-[292px]">
                    <Text
                      className="md:text-5xl text-[75px] text-blue-A700 w-auto"
                      size="txtInterSemiBold75"
                    >
                      4
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                        size="txtInterBold20"
                      >
                        Cloud Providers
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[244px] md:max-w-full text-base text-gray-900_cc"
                        size="txtInterRegular16"
                      >
                        Seamlessly integrating with AWS, Azure, GCP, and OCI, we
                        offer a multi-cloud approach.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-[72px] items-start justify-start sm:px-5 px-6 py-8 rounded-lg w-[292px]">
                    <Text
                      className="md:text-5xl text-[75px] text-blue-A700 w-auto"
                      size="txtInterSemiBold75"
                    >
                      150
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                        size="txtInterBold20"
                      >
                        Skilled Professionals
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[244px] md:max-w-full text-base text-gray-900_cc"
                        size="txtInterRegular16"
                      >
                        We foster innovation daily, creating forward-thinking
                        solutions.
                      </Text>
                    </div>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-[72px] items-start justify-start sm:px-5 px-6 py-8 rounded-lg w-[292px]">
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="md:text-5xl text-[75px] text-blue-A700 w-auto"
                        size="txtInterSemiBold75"
                      >
                        95
                      </Text>
                      <Text
                        className="sm:text-[33px] md:text-[39px] text-[43px] text-blue-A700 w-auto"
                        size="txtInterSemiBold43"
                      >
                        %
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                        size="txtInterBold20"
                      >
                        Satisfaction Rate
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[244px] md:max-w-full text-base text-gray-900_cc"
                        size="txtInterRegular16"
                      >
                        We foster innovation daily, creating forward-thinking
                        solutions.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-[72px] items-start justify-start sm:px-5 px-6 py-8 rounded-lg w-[292px]">
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="md:text-5xl text-[75px] text-blue-A700 w-auto"
                        size="txtInterSemiBold75"
                      >
                        100m
                      </Text>
                      <Text
                        className="sm:text-[33px] md:text-[39px] text-[43px] text-blue-A700 w-auto"
                        size="txtInterSemiBold43"
                      >
                        +
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                        size="txtInterBold20"
                      >
                        Analized expenses
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[244px] md:max-w-full text-base text-gray-900_cc"
                        size="txtInterRegular16"
                      >
                        This showcases our expertise in providing valuable
                        insights and strategies for our clients.
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-[1440px] pt-[120px] w-full">
              <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1286px] pb-[120px] w-full">
                <div className="flex flex-col items-end justify-start max-w-[1440px] w-full">
                  <div className="flex flex-col gap-8 items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      <Text
                        className="text-base text-blue-A700 text-center w-auto"
                        size="txtInterMedium16"
                      >
                        Who we are
                      </Text>
                    </div>
                    <Text
                      className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-auto"
                      size="txtInterSemiBold56"
                    >
                      Our Story
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[53px] items-start justify-start w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[53px] items-start justify-start w-[617px] md:w-full">
                    <Text
                      className="md:text-5xl text-[104px] text-gray-900 w-auto"
                      size="txtInterSemiBold104"
                    >
                      2011
                    </Text>
                    <div className="flex flex-row gap-8 items-start justify-start w-auto">
                      <Text
                        className="text-gray-800_02 text-xl w-auto"
                        size="txtInterMedium20"
                      >
                        2015
                      </Text>
                      <Text
                        className="text-gray-800_02 text-xl w-auto"
                        size="txtInterMedium20"
                      >
                        2018
                      </Text>
                      <Text
                        className="text-gray-800_02 text-xl w-auto"
                        size="txtInterMedium20"
                      >
                        2021
                      </Text>
                      <Text
                        className="text-gray-800_02 text-xl w-auto"
                        size="txtInterMedium20"
                      >
                        2023
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[28.00px] max-w-[577px] md:max-w-full text-gray-800_01 text-xl"
                    size="txtInterRegular20Gray80001"
                  >
                    CloudScore was founded by a team of industry veterans with a
                    shared vision of simplifying and optimizing cloud management
                    for businesses. Fueled by the desire to address the
                    complexities of cloud operations, they combined their
                    expertise to create a versatile platform.
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                  orientation="horizontal"
                >
                  <div className="bg-blue-A700 flex flex-1 flex-col h-[460px] md:h-auto items-end justify-start p-8 sm:px-5 rounded-lg w-full">
                    <div className="flex flex-col md:gap-10 gap-[200px] h-[396px] md:h-auto items-start justify-end">
                      <div className="flex flex-col items-start justify-between w-[553px] sm:w-full">
                        <Text
                          className="text-white-A700 text-xl tracking-[-0.20px] w-auto"
                          size="txtInterMedium20WhiteA700"
                        >
                          Our mission
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-end w-[553px] sm:w-full">
                        <Text
                          className="leading-[48.00px] max-w-[553px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.40px]"
                          size="txtInterSemiBold40WhiteA700"
                        >
                          Revolutionizing cloud management for business success
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-300 border-solid flex flex-1 flex-col h-[460px] md:h-auto items-end justify-start p-8 sm:px-5 rounded-lg w-full">
                    <div className="flex flex-col md:gap-10 gap-[200px] h-[396px] md:h-auto items-start justify-end">
                      <div className="flex flex-col items-start justify-between w-[553px] sm:w-full">
                        <Text
                          className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                          size="txtInterMedium20Gray900"
                        >
                          Our vision
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-end w-[553px] sm:w-full">
                        <Text
                          className="leading-[48.00px] max-w-[553px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-900 tracking-[-0.40px]"
                          size="txtInterSemiBold40Gray900"
                        >
                          Empowering businesses with tailored cloud solutions
                          and strategic insights.
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col items-center justify-center max-w-[1440px] py-[120px] w-full">
                <div className="flex md:flex-col flex-row gap-[17px] items-start justify-center w-[61%] md:w-full">
                  <Img
                    className="h-[22px]"
                    src="images/img_settings_black_900_01.svg"
                    alt="settings"
                  />
                  <div className="md:h-[247px] h-[268px] md:mt-0 mt-[11px] relative w-[95%] md:w-full">
                    <Text
                      className="absolute inset-x-[0] leading-[56.00px] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 top-[0] tracking-[-0.40px] w-full"
                      size="txtInterSemiBold40"
                    >
                      CloudScore differentiates by delivering tailored,
                      industry-agnostic cloud solutions for optimal cost
                      efficiency, performance, and seamless integration.
                    </Text>
                    <Img
                      className="absolute bottom-[2%] h-[22px] right-[0]"
                      src="images/img_user_black_900_01.svg"
                      alt="user"
                    />
                    <Text
                      className="absolute bottom-[0] right-[14%] text-gray-800_02 text-xl tracking-[-0.20px]"
                      size="txtInterRegular20Gray80002"
                    >
                      CEO, CloudScore{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1440px] py-[120px] w-full">
              <div className="flex flex-col items-end justify-start max-w-[1440px] w-full">
                <div className="flex flex-col gap-8 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <Text
                      className="text-base text-blue-A700 text-center w-auto"
                      size="txtInterMedium16"
                    >
                      Proffessional{" "}
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-auto"
                    size="txtInterSemiBold56"
                  >
                    Our Team
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[88%] md:w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Img
                      className="h-[397px] md:h-auto object-cover"
                      src="images/img_rectangle33.png"
                      alt="rectangleThirtyThree"
                    />
                    <Img
                      className="h-[397px] md:h-auto object-cover"
                      src="images/img_rectangle23.png"
                      alt="rectangleTwentyThree"
                    />
                    <Img
                      className="h-[397px] md:h-auto object-cover"
                      src="images/img_rectangle24.png"
                      alt="rectangleTwentyFour"
                    />
                    <Img
                      className="h-[397px] md:h-auto object-cover"
                      src="images/img_rectangle34.png"
                      alt="rectangleThirtyFour"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                    <div className="h-[397px] relative w-1/4 md:w-full">
                      <Img
                        className="h-[397px] m-auto object-cover w-full"
                        src="images/img_rectangle33.png"
                        alt="rectangleThirtyTwo"
                      />
                      <Img
                        className="absolute h-[397px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_rectangle25.png"
                        alt="rectangleTwentyFive"
                      />
                    </div>
                    <Img
                      className="h-[397px] sm:h-auto md:ml-[0] ml-[33px] object-cover w-1/4 md:w-full"
                      src="images/img_rectangle29.png"
                      alt="rectangleTwentyNine"
                    />
                    <Img
                      className="h-[397px] sm:h-auto ml-8 md:ml-[0] object-cover w-1/4 md:w-full"
                      src="images/img_rectangle26.png"
                      alt="rectangleTwentySix"
                    />
                    <Text
                      className="md:ml-[0] ml-[62px] md:text-5xl text-8xl text-black-900_01 text-center"
                      size="txtInterSemiBold96"
                    >
                      + 10
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-auto mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
