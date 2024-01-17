import React from "react";

import { Button, FloatingInput, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeColumn from "components/HomeColumn";
import HomeColumnlanguageThree from "components/HomeColumnlanguageThree";

const SolutionsPage = () => {
  const homeColumnPropList = [
    {},
    { mariotext: "|", firstname: "Last Name" },
    { mariotext: "mario.papa@gmail.com", firstname: "Work Email" },
    { mariotext: "Google Inc.", firstname: "Company" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <Header className="flex flex-col gap-2 items-center justify-center px-2 md:px-5 py-8 w-full" />
        <div className="flex flex-col gap-10 items-center justify-start mt-[68px] md:px-5 w-auto md:w-full">
          <div className="flex flex-col gap-8 items-start justify-end w-auto md:w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <Text
                className="text-base text-blue-A700 text-center w-auto"
                size="txtInterMedium16"
              >
                Solution
              </Text>
            </div>
            <Text
              className="leading-[64.00px] max-w-[723px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px]"
              size="txtInterSemiBold56"
            >
              Simplified Cloud Cost Management
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Button
              className="!text-gray-900 border border-gray-800_02 border-solid cursor-pointer font-semibold h-10 text-base text-center w-[142px]"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Get Started
            </Button>
            <Button
              className="cursor-pointer font-semibold h-10 text-base text-center w-[142px]"
              shape="round"
              color="blue_A700_01"
              size="sm"
              variant="fill"
            >
              Book a Demo
            </Button>
          </div>
        </div>
        <div className="h-[457px] md:h-[471px] sm:h-[940px] max-w-[1440px] mt-[27px] mx-auto md:px-5 relative w-full">
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto sm:px-5 px-[37px] w-[58%]"
            style={{ backgroundImage: "url('images/img_group2.svg')" }}
          >
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[73%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[241px] justify-start w-[32%] sm:w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="bg-blue-A700_ab h-1.5 mb-[3px] rounded-[50%] w-1.5"></div>
                  <div className="bg-blue-A700_90 h-1.5 mb-[3px] rounded-[50%] w-1.5"></div>
                  <div className="bg-gray-900_90 h-1.5 mb-[3px] rounded-[50%] w-1.5"></div>
                  <div className="bg-blue-A700 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                </div>
                <div className="flex flex-row gap-[39px] items-center justify-start md:ml-[0] ml-[7px] w-[35%] md:w-full">
                  <div className="bg-blue-A700_a2 h-1.5 rounded-[50%] w-1.5"></div>
                  <div className="bg-blue-A700 h-1.5 rounded-[50%] w-1.5"></div>
                </div>
              </div>
              <div className="bg-blue-A700 h-1.5 mb-[27px] sm:ml-[0] ml-[26px] sm:mt-0 mt-[223px] rounded-[50%] w-1.5"></div>
              <div className="flex flex-col h-[120px] items-center justify-start sm:ml-[0] ml-[87px] sm:mt-0 mt-[67px] w-[120px]">
                <div className="flex flex-col h-[120px] items-center justify-start w-[120px]">
                  <div className="bg-blue-A700 border border-gray-300 border-solid flex flex-col h-[120px] items-center justify-start p-2.5 rounded-[50%] shadow-bs w-[120px]">
                    <Img
                      className="h-[57px] md:h-auto my-5 object-cover w-[98%]"
                      src="images/img_denlogoprode_48x64.png"
                      alt="denlogoprode_One"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-blue-A700_90 h-1.5 mb-[123px] sm:ml-[0] ml-[27px] sm:mt-0 mt-[127px] rounded-[50%] w-1.5"></div>
              <div className="bg-blue-A700 h-1.5 mb-[123px] sm:mt-0 mt-[127px] rounded-[50%] w-1.5"></div>
              <div className="flex flex-col items-end justify-start sm:ml-[0] ml-[3px] sm:mt-0 mt-16 w-[9%] sm:w-full">
                <div className="bg-blue-A700_7e h-1.5 rounded-[50%] w-1.5"></div>
                <div className="bg-blue-A700_90 h-1.5 mr-[11px] mt-[25px] rounded-[50%] w-1.5"></div>
                <div className="flex flex-row items-start justify-between mt-6 w-full">
                  <div className="bg-blue-A700_90 h-1.5 rounded-[50%] w-1.5"></div>
                  <div className="bg-blue-A700_6c h-1.5 rounded-[50%] w-1.5"></div>
                  <div className="bg-blue-A700 h-1.5 rounded-[50%] w-1.5"></div>
                </div>
                <div className="bg-blue-A700 h-1.5 mr-[17px] mt-[22px] rounded-[50%] w-1.5"></div>
                <div className="bg-blue-A700_90 h-1.5 mr-[11px] mt-1.5 rounded-[50%] w-1.5"></div>
                <div className="bg-blue-A700_7e h-1.5 mt-[35px] rounded-[50%] w-1.5"></div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-[60px] h-max inset-y-[0] items-center justify-start left-[0] my-auto w-auto">
            <div className="bg-gray-50_01 border border-gray-300 border-solid flex flex-col items-start justify-start py-6 rounded-lg w-[292px]">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-12 w-[258px]"
                  src="images/img_frame1597882273.svg"
                  alt="frame1597882273"
                />
                <div className="flex flex-col gap-1 items-start justify-start px-4 w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16Gray900"
                  >
                    Infrastructure optimisation
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[260px] md:max-w-full text-gray-900_cc text-sm"
                    size="txtInterRegular14Gray900cc"
                  >
                    Infrastructure automation dynamically scales based on
                    analysis of VMs
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_01 border border-gray-300 border-solid flex flex-col items-start justify-start px-2 py-6 rounded-lg w-[292px]">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-11 w-[263px]"
                  src="images/img_group1000004162.svg"
                  alt="group1000004162"
                />
                <div className="flex flex-col gap-1 items-start justify-start px-4 w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16Gray900"
                  >
                    Real time Analytics{" "}
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[244px] md:max-w-full text-gray-900_cc text-sm"
                    size="txtInterRegular14Gray900cc"
                  >
                    Comprehensive approach to accessing and analysing cloud cost
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-row h-max inset-y-[0] items-end justify-center left-[24%] my-auto w-[11%]">
            <div className="bg-blue-A700_87 h-1.5 mb-[3px] mt-64 rounded-[50%] w-1.5"></div>
            <div className="flex flex-col md:gap-10 gap-[253px] justify-start ml-[30px] w-[9%]">
              <div className="bg-blue_gray-100_01 h-1.5 mr-1.5 rounded-[50%] w-1.5"></div>
              <div className="bg-blue-A700_87 h-1.5 ml-1.5 md:ml-[0] rounded-[50%] w-1.5"></div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[251px] items-start justify-start mb-0.5 ml-[30px] w-[9%]">
              <div className="bg-blue_gray-100_01 h-1.5 md:ml-[0] ml-[5px] rounded-[50%] w-1.5"></div>
              <div className="bg-blue-A700_87 h-1.5 rounded-[50%] w-1.5"></div>
            </div>
            <div className="bg-blue-A700_ab h-1.5 mb-[3px] ml-[22px] mt-64 rounded-[50%] w-1.5"></div>
            <div className="bg-blue-A700_99 h-1.5 mb-[259px] ml-3 rounded-[50%] w-1.5"></div>
          </div>
          <List
            className="absolute flex flex-col gap-9 inset-y-[0] items-start my-auto right-[0] w-[292px] md:w-full"
            orientation="vertical"
          >
            <div className="bg-gray-50_01 border border-gray-300 border-solid flex flex-col items-start justify-start my-0 px-4 py-6 rounded-lg w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_apiaggregate.svg"
                  alt="apiaggregate"
                />
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16Gray900"
                  >
                    Cloud Management
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[220px] md:max-w-full text-gray-900_cc text-sm"
                    size="txtInterRegular14Gray900cc"
                  >
                    Seamless optimization, with the ability to automate{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_01 border border-gray-300 border-solid flex flex-col items-start justify-start my-0 px-4 py-6 rounded-lg w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_icehockey.svg"
                  alt="icehockey"
                />
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16Gray900"
                  >
                    Cloud Resources
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[220px] md:max-w-full text-gray-900_cc text-sm"
                    size="txtInterRegular14Gray900cc"
                  >
                    Optimisation, with the ability to automate corrective
                    actions{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_01 border border-gray-300 border-solid flex flex-col items-start justify-start my-0 px-4 py-6 rounded-lg w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_chart3statistics.svg"
                  alt="chart3statistic"
                />
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16Gray900"
                  >
                    Cloud Spendings
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[220px] md:max-w-full text-gray-900_cc text-sm"
                    size="txtInterRegular14Gray900cc"
                  >
                    Quickly reduce cloud costs and gradually enhance savings.
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="font-roboto h-[5779px] mt-[120px] md:px-5 relative w-full">
          <div className="flex flex-col font-inter items-center justify-start mb-[-557px] mx-auto w-auto md:w-full z-[1]">
            <div className="overflow-auto overflow-x-auto w-full">
              <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-center text-gray-900 text-xl"
                    size="txtInterRegular20Gray900"
                  >
                    Trusted by leading companies{" "}
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start max-w-[1487px] w-full">
                  <Img
                    className="h-11 w-[132px]"
                    src="images/img_grid.svg"
                    alt="cloudflarelogos"
                  />
                  <Img
                    className="sm:flex-1 h-11 md:h-auto object-cover w-[215px] sm:w-full"
                    src="images/img_spreadsimplelogosvg150px.png"
                    alt="spreadsimplelog"
                  />
                  <Img
                    className="h-11 w-[98px]"
                    src="images/img_zapierlogosvg150px.svg"
                    alt="zapierlogosvgFifteen"
                  />
                  <Img
                    className="h-9 w-[161px]"
                    src="images/img_grid.svg"
                    alt="lottiflowlofosv"
                  />
                  <Img
                    className="h-11 w-36"
                    src="images/img_grid.svg"
                    alt="zeplinlogosvgFifteen"
                  />
                  <Img
                    className="h-11 w-[132px]"
                    src="images/img_grid.svg"
                    alt="mixpanellogosvg"
                  />
                  <Img
                    className="h-11 w-[125px]"
                    src="images/img_deepllogosvg150px.svg"
                    alt="deepllogosvg150"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1440px] py-[120px] w-full">
              <div className="flex flex-col items-center justify-center max-w-[1440px] w-full">
                <div className="flex flex-col gap-8 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue-A700 text-center w-auto"
                      size="txtInterMedium16"
                    >
                      {" "}
                      Advantages
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-full"
                    size="txtInterSemiBold56"
                  >
                    Visibility and Cost Control
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-lg w-[400px] sm:w-full">
                  <Img
                    className="h-[76px] w-[76px]"
                    src="images/img_grid.svg"
                    alt="layerOne"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="leading-[31.00px] max-w-[352px] md:max-w-full text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtCircularStdBold22"
                    >
                      Comprehensive Multi-Cloud Management
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[352px] md:max-w-full text-base text-gray-900_cc"
                      size="txtInterRegular16"
                    >
                      Optimize cloud decisions with CloudScore, integrating
                      major CSPs, a FinOps framework, and advanced AI/ML for
                      granular cost visibility.
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-lg w-[400px] sm:w-full">
                  <div className="bg-blue-A700 flex flex-col h-[76px] items-center justify-start p-[15px] rounded-[50%] w-[76px]">
                    <Img
                      className="h-[35px] my-[5px]"
                      src="images/img_isolationmode.svg"
                      alt="isolationmode"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="leading-[31.00px] max-w-[352px] md:max-w-full text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtCircularStdBold22"
                    >
                      <>
                        Industry-Agnostic <br />
                        Solutions
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[352px] md:max-w-full text-base text-gray-900_cc"
                      size="txtInterRegular16"
                    >
                      <>
                        Experience CloudScore&#39;s industry-tailored
                        flexibility for efficient monitoring, analysis, and
                        improved decision-making, resource allocation, and cost
                        reduction.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-lg w-[400px] sm:w-full">
                  <div className="bg-blue-A700 flex flex-col h-[76px] items-center justify-start p-[17px] rounded-[50%] w-[76px]">
                    <Img
                      className="h-[42px]"
                      src="images/img_isolationmode_white_a700.svg"
                      alt="isolationmode"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="leading-[31.00px] max-w-[352px] md:max-w-full text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtCircularStdBold22"
                    >
                      <>
                        Optimized Cloud Resources <br />
                        and Reduced Costs
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[352px] md:max-w-full text-base text-gray-900_cc"
                      size="txtInterRegular16"
                    >
                      Utilize CloudScore to extract measurable impacts across
                      FinOps, effectively reducing cloud costs and increasing
                      operational efficiencies.
                    </Text>
                  </div>
                </div>
              </List>
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
                    <div className="absolute bg-gradient2  bottom-[8%] h-[77px] inset-x-[0] mx-auto w-full"></div>
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
                              alt="contrast"
                            />
                            <Img
                              className="absolute h-[65px] inset-y-[0] my-auto right-[0]"
                              src="images/img_contrast_light_blue_700_01.svg"
                              alt="contrast_One"
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
                            name="price"
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
                            name="price_One"
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
                    className="leading-[48.00px] max-w-[1088px] md:max-w-full mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.40px]"
                    size="txtInterBold40"
                  >
                    <>
                      Ready to save up to 40% on your <br />
                      current cost of operations?
                    </>
                  </Text>
                  <Button
                    className="!text-gray-900 cursor-pointer font-semibold min-w-[142px] mt-auto text-base text-center"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    Book a Demo
                  </Button>
                  <Img
                    className="absolute h-48 inset-y-[0] my-auto object-cover right-[0] w-[331px] md:w-full"
                    src="images/img_denlogoprode_48x64.png"
                    alt="denlogoprode_Three"
                  />
                </div>
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
                  <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[616px] md:w-full">
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
                      28 JUN 2023
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-blue-A700 border border-gray-300 border-solid flex flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[292px]">
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
                        20 JUN 2023
                      </Text>
                    </div>
                    <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[292px]">
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
                        19 JUN 2023
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
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1440px] py-[120px] w-full">
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
                    className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-auto"
                    size="txtInterSemiBold56"
                  >
                    Get our Demo
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-300 border-solid flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-start max-w-[1440px] md:pr-10 sm:pr-5 pr-[60px] rounded-lg shadow-bs3 w-full">
                <div className="bg-blue-A700 flex flex-col h-[519px] md:h-auto items-start justify-between p-10 sm:px-5 rounded-bl-lg rounded-tl-lg">
                  <div className="flex flex-col h-[408px] md:h-auto items-start justify-between w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="leading-[140.00%] max-w-[364px] md:max-w-full sm:text-3xl md:text-[32px] text-[34px] text-gray-100"
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
                  <div className="md:gap-5 gap-[90px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    {homeColumnPropList.map((props, index) => (
                      <React.Fragment key={`HomeColumn${index}`}>
                        <HomeColumn
                          className="border-b border-blue_gray-100 border-solid flex flex-1 flex-col items-start justify-start w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                  <HomeColumnlanguageThree className="border-b border-blue_gray-100 border-solid flex flex-col items-start justify-start w-full" />
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

export default SolutionsPage;
