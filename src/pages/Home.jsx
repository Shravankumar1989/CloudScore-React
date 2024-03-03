import React from "react";
import { Link } from "react-router-dom";


import { Button, FloatingInput, Img, Line, List, Text } from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import HomeColumn from "components/HomeColumn";
import HomeColumnlanguageThree from "components/HomeColumnlanguageThree";
import HomeVP from "components/HomeVP";

const HomePage = () => {
  
  const scrollToHome = () => {
    const homeElement = document.getElementById('homeSection');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const homeColumnPropList = [
    {},
    { mariotext: "|", firstname: "Last Name" },
    { mariotext: "mario.papa@gmail.com", firstname: "Work Email" },
    { mariotext: "Google Inc.", firstname: "Company" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 h-[1024px] sm:h-[539px] md:h-[794px] pb-[38px] md:px-5 relative w-full">
          <div className="absolute flex sm:h-[539px] md:h-[726px] h-[932px] inset-[0] justify-center m-auto pt-[437px] w-full">
            <HomeVP></HomeVP>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start pb-[106px] rounded-bl-[40px] rounded-br-[40px] shadow-bs2 w-full">
              <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start w-full">
                <Header className="flex flex-col gap-2 items-center justify-center px-2 py-8 w-full" />
                <div className="flex md:flex-col flex-row gap-8 items-end justify-start max-w-[1440px] w-full">
                  <div className="flex md:flex-1 flex-col gap-8 items-start justify-end w-auto md:w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_sparklessoft.svg"
                        alt="sparklessoft"
                      />
                      <Text
                        className="flex-1 text-base text-blue-A700 w-auto"
                        size="txtInterMedium16"
                      >
                        {" "}
                        Intelligent Cloud Cost Control System
                      </Text>
                    </div>
                    <Text
                      className="leading-[64.00px] max-w-[723px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-0.56px]"
                      size="txtInterSemiBold56"
                    >
                      Efficiency and savings with CloudScore
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end w-full">
                    <Text
                      className="leading-[28.00px] max-w-[509px] md:max-w-full text-gray-800 text-xl tracking-[-0.20px]"
                      size="txtInterRegular20"
                    >
                      <>
                        CloudScore provides a comprehensive multi-cloud
                        management platform that empowers enterprise leaders to
                        optimize their cloud spend, improve operational
                        efficiencies, and drive measurable <br />
                        impacts across various aspects of their business.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-roboto h-[8121px] mt-[5px] md:px-5 relative w-full">
          <div className="flex flex-col font-inter items-center justify-start mb-[-550px] mx-auto w-auto md:w-full z-[1]">
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1440px] py-[120px] w-full">
              <div className="flex flex-col items-center justify-center max-w-[1440px] w-full">
                <div className="flex flex-col gap-8 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue-A700 text-center w-auto"
                      size="txtInterMedium16"
                    >
                      Benefits
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-full"
                    size="txtInterSemiBold56"
                  >
                    What your company gains
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-lg w-[335px]">
                  <Img
                    className="h-[76px] w-[76px]"
                    src="images/img_desktop.svg"
                    alt="layerOne"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="leading-[31.00px] max-w-[244px] md:max-w-full text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtInterBold20"
                    >
                      <>
                        Generate Savings <br />
                        and Efficiently
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[244px] md:max-w-full text-base text-gray-900_cc"
                      size="txtInterRegular16"
                    >
                      Immediately lower cloud expenses and progressively enhance
                      savings by adopting optimal pricing models, right-sizing
                      resources, and eliminating spending.
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-lg w-[335px]">
                  <div className="bg-blue-A700 flex flex-col h-[76px] items-center justify-end p-[15px] rounded-[50%] w-[76px]">
                    <Img
                      className="h-[43px]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="leading-[31.00px] max-w-[244px] md:max-w-full text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtInterBold20"
                    >
                      <>
                        Continual Efficiency <br />
                        in Cloud Workloads
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[244px] md:max-w-full text-base text-gray-900_cc"
                      size="txtInterRegular16"
                    >
                      Maintain constant optimization of cloud workloads,
                      ensuring a cost-effective mix of resources that supports
                      both application performance and reliability, powered by
                      AI/ML automation.
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-lg w-[335px]">
                  <div className="bg-blue-A700 flex flex-col h-[76px] items-center justify-start p-[15px] rounded-[50%] w-[76px]">
                    <Img
                      className="h-[43px] w-[43px]"
                      src="images/img_settings_white_a700.svg"
                      alt="settings"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="leading-[31.00px] max-w-[244px] md:max-w-full text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtInterBold20"
                    >
                      Enhanced Accuracy and Productivity
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[244px] md:max-w-full text-base text-gray-900_cc"
                      size="txtInterRegular16"
                    >
                      Significantly reduce the complexity, risk, and manual
                      effort involved in an effective FinOps strategy, thereby
                      increasing accuracy and productivity.
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-lg w-[335px]">
                  <div className="bg-blue-A700 flex flex-col h-[76px] items-center justify-end p-[15px] rounded-[50%] w-[76px]">
                    <Img
                      className="h-[43px] mt-0.5"
                      src="images/img_search_white_a700.svg"
                      alt="search"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="leading-[31.00px] max-w-[244px] md:max-w-full text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtInterBold20"
                    >
                      <>
                        Actionable Insights
                        <br />
                        for Stakeholders
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[244px] md:max-w-full text-base text-gray-900_cc"
                      size="txtInterRegular16"
                    >
                      Provide stakeholders with clear, actionable insights to
                      foster accountability and support informed decision-making
                      for application and business optimization.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1440px] py-[120px] w-full">
              <div className="flex flex-col items-center justify-center max-w-[1440px] w-full">
                <div className="flex flex-col gap-8 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue-A700 text-center w-auto"
                      size="txtInterMedium16"
                    >
                      About us
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-full"
                    size="txtInterSemiBold56"
                  >
                    We optimises everything
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[140px] items-center justify-start max-w-[1440px] w-full">
                <Img
                  className="md:flex-1 h-[530px] sm:h-auto object-cover rounded-lg w-[508px] md:w-full"
                  src="images/img_rectangle40308.png"
                  alt="rectangle40308"
                />
                <div className="flex sm:flex-1 flex-col gap-8 items-start justify-center w-[508px] sm:w-full">
                  <Text
                    className="leading-[48.00px] max-w-[508px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900 tracking-[-0.32px]"
                    size="txtInterSemiBold32"
                  >
                    <>
                      We&#39;re your go-to for efficient
                      <br />
                      cloud management.{" "}
                    </>
                  </Text>
                  <Text
                    className="leading-[28.00px] max-w-[508px] md:max-w-full text-gray-900 text-xl tracking-[-0.20px]"
                    size="txtInterSemiBold20"
                  >
                    <span className="text-gray-900 font-inter text-left font-normal">
                      Our platform optimizes spending, enhances efficiency, and
                      delivers measurable impacts.
                    </span>
                    <span className="text-gray-900 font-inter text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-gray-900 font-inter text-left font-normal">
                      With integrations across major Cloud Service Providers and
                      AI/ML optimization, CloudScore ensures granular cost
                      visibility. Trust us for a powerful, versatile, and
                      cost-effective multi-cloud management solution.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start md:px-10 sm:px-5 px-[88px] py-[120px] w-auto md:w-full">
              <div className="flex flex-col items-end justify-start max-w-[1440px] w-full">
                <div className="flex flex-col gap-8 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <Text
                      className="text-base text-blue-A700 text-center w-auto"
                      size="txtInterMedium16"
                    >
                      How we can help
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-auto"
                    size="txtInterSemiBold56"
                  >
                    Services We Offer
                  </Text>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1440px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[120px] items-center justify-center w-full">
                  <div className="flex sm:flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-[527px] sm:w-full">
                    <Text
                      className="leading-[56.00px] max-w-[527px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900_01"
                      size="txtInterSemiBold40"
                    >
                      Perfect for any cloud provider
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[527px] md:max-w-full text-gray-800_01 text-xl tracking-[-0.20px]"
                      size="txtInterRegular20Gray80001"
                    >
                      CloudScore specializes in cloud optimization for key Cloud
                      Service Providers (CSPs) such as AWS, Azure, GCP, and OCI.
                      We provide tailored solutions to maximize the efficiency
                      of your cloud operations.
                    </Text>
                  </div>
                  <Img
                    className="h-[400px] w-[400px]"
                    src="images/img_group1000004155.svg"
                    alt="group1000004155"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[120px] items-center justify-center max-w-[1440px] w-full">
                  <div className="bg-gray-50 border border-gray-200_01 border-solid h-[400px] md:h-auto p-8 sm:px-5 relative rounded-lg w-[400px] sm:w-full">
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[8%] w-[82%] md:w-full">
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <div className="flex flex-col md:gap-10 gap-[103px] items-center justify-start mb-[37px] w-[6%]">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[91px] items-start justify-start pr-1.5 pt-1.5 rounded-md w-full"
                            style={{
                              backgroundImage: "url('images/img_group6.svg')",
                            }}
                          >
                            <Img
                              className="h-[13px] md:h-auto mt-[72px] object-cover rounded-md w-[13px]"
                              src="images/img_vector209.png"
                              alt="vector209"
                            />
                          </div>
                          <Img
                            className="h-[113px] md:h-auto object-cover"
                            src="images/img_group1000004154.png"
                            alt="group1000004154"
                          />
                        </div>
                        <div className="flex flex-col gap-6 items-start justify-start mt-11 w-72">
                          <div className="border border-gray-200_01 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-lg w-full">
                            <Img
                              className="h-8 w-8"
                              src="images/img_chart5statistics.svg"
                              alt="chart5statistic"
                            />
                            <Text
                              className="flex-1 leading-[26.00px] max-w-[208px] md:max-w-full text-gray-900 text-lg"
                              size="txtInterMedium18"
                            >
                              Cost Insights & observability
                            </Text>
                          </div>
                          <div className="border border-gray-200_01 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-lg w-full">
                            <Img
                              className="h-8 w-8"
                              src="images/img_dollarcurrency.svg"
                              alt="dollarcurrency"
                            />
                            <Text
                              className="flex-1 leading-[26.00px] max-w-[208px] md:max-w-full text-gray-900 text-lg"
                              size="txtInterMedium18"
                            >
                              Automate cost optimisation
                            </Text>
                          </div>
                          <div className="border border-gray-200_01 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-lg w-full">
                            <Img
                              className="h-8 w-8"
                              src="images/img_shieldcheck2.svg"
                              alt="shieldcheckTwo"
                            />
                            <Text
                              className="flex-1 leading-[26.00px] max-w-[208px] md:max-w-full text-gray-900 text-lg"
                              size="txtInterMedium18"
                            >
                              Advanced security & compliance
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-[107px] mt-[91px] rounded-md"
                          src="images/img_vector206.svg"
                          alt="vector206"
                        />
                        <Line className="bg-gradient1  h-8 mt-[88px] w-px" />
                      </div>
                    </div>
                    <div className="bottom-[8%] h-[77px] inset-x-[0] mx-auto w-full"></div>
                  </div>
                  <div className="flex sm:flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-[527px] sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 w-full"
                      size="txtInterSemiBold40"
                    >
                      All-in-one platform
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[527px] md:max-w-full text-gray-800_01 text-xl tracking-[-0.20px]"
                      size="txtInterRegular20Gray80001"
                    >
                      This all-in-one platform delivers a wide array of tools
                      and functionalities, providing users with a seamless
                      experience for all their operational, analytical, and
                      management needs.
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[120px] items-center justify-center max-w-[1440px] w-full">
                  <div className="flex sm:flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-[527px] sm:w-full">
                    <Text
                      className="leading-[56.00px] max-w-[527px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900_01"
                      size="txtInterSemiBold40"
                    >
                      Optimization Up to 50% Maximum
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[527px] md:max-w-full text-gray-800_01 text-xl tracking-[-0.20px]"
                      size="txtInterRegular20Gray80001"
                    >
                      Experience unparalleled optimization in your business
                      operations. Our platform is dedicated to reducing data
                      center consumption, contributing to sustainability by
                      lowering carbon emissions.
                    </Text>
                  </div>
                  <div className="bg-gray-50 border border-gray-200_01 border-solid md:h-[336px] h-[400px] p-8 sm:px-5 relative rounded-lg w-[400px] sm:w-full">
                    <div className="absolute flex flex-row gap-[23px] inset-x-[0] items-end justify-start mx-auto top-[8%] w-[86%] md:w-full">
                      <div className="relative w-[10%]">
                        <Line className="absolute bg-gray-200_01 h-[336px] inset-[0] justify-center m-auto w-px" />
                        <Line className="absolute bg-gradient3  h-12 right-[44%] top-[5%] w-px" />
                        <div className="flex flex-col items-center justify-start mb-5 mt-auto mx-auto relative w-full">
                          <Button
                            className="border border-gray-200_01 border-solid flex h-8 items-center justify-center w-8"
                            shape="circle"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </Button>
                          <Button
                            className="border border-gray-200_01 border-solid flex h-8 items-center justify-center mt-[84px] w-8"
                            shape="circle"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_close.svg"
                              alt="close_One"
                            />
                          </Button>
                          <Button
                            className="border border-gray-200_01 border-solid flex h-8 items-center justify-center mt-[72px] w-8"
                            shape="circle"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_close.svg"
                              alt="close_Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start mt-7 w-[286px]">
                        <div className="border border-gray-200_01 border-solid flex flex-row gap-6 items-center justify-start sm:px-5 px-6 py-3 rounded-lg w-full">
                          <div className="h-[65px] relative w-[65px]">
                            <Img
                              className="absolute h-8 inset-[0] justify-center m-auto w-8"
                              src="images/img_dollarcurrency_blue_a700.svg"
                              alt="dollarcurrency_One"
                            />
                            <Img
                              className="absolute h-[65px] inset-y-[0] left-[0] my-auto"
                              src="images/img_contrast_blue_a700_65x32.svg"
                              alt="contrast_Two"
                            />
                            <Img
                              className="absolute h-[65px] inset-y-[0] my-auto right-[0]"
                              src="images/img_contrast_light_blue_700_01.svg"
                              alt="contrast_Three"
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-800_02 w-auto"
                              size="txtInterRegular16Gray80002"
                            >
                              You can save
                            </Text>
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                              size="txtInterSemiBold32"
                            >
                              50%
                            </Text>
                          </div>
                        </div>
                        <div className="border border-gray-200_01 border-solid flex flex-col items-center justify-start sm:px-5 px-6 py-3 rounded-lg w-full">
                          <FloatingInput
                            wrapClassName="placeholder:bg-gray-50 font-medium placeholder:left-[0] p-0 text-2xl placeholder:text-gray-800_02 text-gray-900 text-left placeholder:top-[0] w-full"
                            className="font-medium p-0 text-2xl text-gray-900 text-left w-full"
                            name="price_Three"
                            labelClasses="bg-gray-50 left-[0] top-[0] text-gray-800_02"
                            focusedClasses="translate-y-[30px] scale-[1]"
                            wrapperClasses="sm:w-full sm:mx-0 w-[69%] top-[0]"
                            labelText="Annual savings"
                            defaultText="$2,313,414.25"
                          ></FloatingInput>
                        </div>
                        <div className="border border-gray-200_01 border-solid flex flex-col items-center justify-start sm:px-5 px-6 py-3 rounded-lg w-full">
                          <FloatingInput
                            wrapClassName="placeholder:bg-gray-50 font-medium placeholder:left-[0] p-0 text-2xl placeholder:text-gray-800_02 text-gray-900 text-left placeholder:top-[0] w-full"
                            className="font-medium p-0 text-2xl text-gray-900 text-left w-full"
                            name="price_Four"
                            labelClasses="bg-gray-50 left-[0] top-[0] text-gray-800_02"
                            focusedClasses="translate-y-[30px] scale-[1]"
                            wrapperClasses="sm:w-full sm:mx-0 w-[57%] top-[0]"
                            labelText="Monthly savings"
                            defaultText="$32,422.35"
                          ></FloatingInput>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient2  bottom-[8%] h-[77px] inset-x-[0] mx-auto w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[1440px] py-[120px] w-full">
              <div className="bg-blue-A700 flex flex-col items-start justify-start max-w-[1440px] md:px-10 sm:px-5 px-[88px] py-[120px] rounded-lg w-full">
                <div className="relative w-full">
                  <Text
                    className="leading-[48.00px] md:max-w-full mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.40px]"
                    size="txtInterBold40"
                  >
                    <>
                      Ready to save up to 40% on your <br />
                      current cost of operations?
                    </>
                  </Text>
                  <Button
                    style={{marginTop:'30px'}}
                    className="!text-gray-900 cursor-pointer font-semibold min-w-[142px] mt-auto text-base text-center"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                    onClick={scrollToHome}
                  >
                    Book a Demo
                  </Button>
                  <Img
                    className="absolute h-48 inset-y-[0] my-auto object-cover right-[0] w-[331px] md:w-full"
                    src="images/img_denlogoprode_48x64.svg"
                    alt="denlogoprode_Three"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start overflow-auto py-[120px] w-auto md:w-full">
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
                          “Their tools, particularly CloudScore and AI, have
                          allowed us
                          <br />
                          to optimize commitments for each customer with ease,
                          integrating seamlessly with our ERP system for
                          accurate billing. The time and cost savings have been
                          substantial, making Spot.io an invaluable partner in
                          our financial operations.”
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
                        “CloudScore was a revelation for us. Initially
                        skeptical, we were amazed at how well it integrated into
                        our environment. It helped us achieve nearly 70% savings
                        in our Azure cloud spend. The improved visibility and
                        accountability have been transformative, enabling us to
                        innovate faster.”
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
                          game-changer for us. The ability to set it and forget
                          it, knowing that at the end of the month everything is
                          taken care of, has saved us countless hours. It&#39;s
                          not just the time savings - we’ve also uncovered new
                          revenue streams.”
                        </>
                      </Text>
                    </div>
                  </div>
                </List>
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
                  <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-[72px] items-start justify-start sm:px-5 px-6 py-8 rounded-lg w-[335px]">
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
                  <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-[72px] items-start justify-start sm:px-5 px-6 py-8 rounded-lg w-[335px]">
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
                  <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-[72px] items-start justify-start sm:px-5 px-6 py-8 rounded-lg w-[335px]">
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
                  <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-[72px] items-start justify-start sm:px-5 px-6 py-8 rounded-lg w-[335px]">
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
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1440px] py-[120px] w-full">
              <div className="flex flex-col items-end justify-start max-w-[1440px] w-full">
                <div className="flex flex-col gap-8 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue-A700 text-center w-auto"
                      size="txtInterMedium16"
                    >
                      Insights Hub
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-auto"
                    size="txtInterSemiBold56"
                  >
                    Our Blog
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-10 items-center justify-center w-auto md:w-full">
                <div className="flex md:flex-col flex-row gap-8 h-[460px] md:h-auto items-end justify-start w-auto md:w-full">
                  <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[695px] md:w-full">
                    <div className="flex flex-col gap-10 h-full items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="leading-[46.00px] max-w-[552px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                          size="txtInterBold32"
                        >
                          Know all about Wolken Care Launch
                        </Text>
                      </div>
                      <Text
                        className="leading-[24.00px] max-w-[552px] md:max-w-full text-base text-gray-800_02"
                        size="txtInterRegular16Gray80002"
                      >
                        Explore strategies for effective implementation,
                        resource optimization, and achieving seamless
                        integration across cloud providers.
                      </Text>
                    </div>
                    <Text
                      className="text-base text-gray-800_02 w-auto"
                      size="txtInterRegular16Gray80002"
                    >
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-blue-A700 border border-gray-300 border-solid flex flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[335px]">
                      <div className="flex flex-col gap-10 h-full items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="leading-[46.00px] max-w-[228px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                            size="txtInterBold32WhiteA700"
                          >
                            FinOps Demystified
                          </Text>
                        </div>
                        <Text
                          className="leading-[24.00px] max-w-[228px] md:max-w-full text-base text-gray-200_01"
                          size="txtInterRegular16Gray20001"
                        >
                          Dive deep into FinOps principles, gaining insights
                          into best practices and tools for effective cloud cost
                          management.
                        </Text>
                      </div>
                      <Text
                        className="text-base text-gray-200_01 w-auto"
                        size="txtInterRegular16Gray20001"
                      >
                      </Text>
                    </div>
                    <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[335px]">
                      <div className="flex flex-col gap-10 h-full items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="leading-[46.00px] max-w-[228px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                            size="txtInterBold32"
                          >
                            Cloud Solutions
                          </Text>
                        </div>
                        <Text
                          className="leading-[24.00px] max-w-[228px] md:max-w-full text-base text-gray-800_02"
                          size="txtInterRegular16Gray80002"
                        >
                          Tailored insights on how cloud solutions are
                          transforming businesses in your specific industry.
                        </Text>
                      </div>
                      <Text
                        className="text-base text-gray-800_02 w-auto"
                        size="txtInterRegular16Gray80002"
                      >
                      </Text>
                    </div>
                  </List>
                </div>
                <Text
                  className="text-base text-black-900_01 underline w-auto"
                  size="txtInterBold16Black90001"
                >
                  Explore All
                </Text>
              </div>
            </div>
            <div className="bg-cover bg-no-repeat flex flex-col  items-center justify-start  py-[120px] md:px-10 sm:px-5 w-full " id="homeSection" style={{ backgroundImage:`url(${'images/img_numcloud1.png'})`,backgroundRepeat:"no-repeat" }}>
              <div className="flex flex-col items-end justify-start max-w-[1440px] w-full">
                <div className="flex flex-col gap-8 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue-A700 text-center w-auto"
                      size="txtInterMedium16"
                    >
                      Cloud Score
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-auto mb-[100px]"
                    size="txtInterSemiBold56"
                  >
                    Get our Demo
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-300 border-solid flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-start max-w-[1440px] md:pr-10 sm:pr-5 pr-[60px] rounded-lg shadow-bs3 w-full">
                <div className="bg-blue-A700 flex flex-col h-[600px] md:h-auto items-start justify-between p-10 sm:px-5 rounded-bl-lg rounded-tl-lg" style={{zIndex: '1'}}>
                  <div className="flex flex-col h-[408px] md:h-auto items-start justify-between w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="leading-[140.00%] mt-[125px] max-w-[364px] md:max-w-full sm:text-3xl md:text-[32px] text-[34px] text-gray-100"
                        size="txtInterBold34"
                      >
                        <>
                          Reach out for personalized support – ensuring your
                          needs are met with
                          <br />
                          excellence and care!
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-10 h-full items-start justify-start py-[60px] w-full">
                  <div className="md:gap-5 gap-[40px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    {homeColumnPropList.map((props, index) => (
                      <React.Fragment key={`HomeColumn${index}`}>
                        <HomeColumn
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="md:gap-5 gap-[90px] grid md:grid-cols-1 grid-cols-1 justify-left min-h-[auto] w-full">
                    <HomeColumnlanguageThree/>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold min-w-[147px] text-base text-center"
                    shape="round"
                    color="blue_A700"
                    size="sm"
                    variant="fill"
                  >
                    Get the Demo
                  </Button>
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

export default HomePage;
