import React from "react";
import { Link } from "react-router-dom";

import { Button, FloatingInput, Img, Line, List, Text } from "components";
import Header from "components/Header";
import HomeColumn from "components/HomeColumn";
import HomeColumnlanguageThree from "components/HomeColumnlanguageThree";

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
          <div className="absolute flex sm:h-[539px] md:h-[726px] h-[932px] inset-[0] justify-end m-auto pt-[393px] w-full">
            <div className="h-[539px] mt-auto mx-auto w-full">
              <div className="h-[539px] m-auto w-full">
                <div className="h-[539px] m-auto w-full">
                  <div className="h-[539px] m-auto w-full">
                    <div className="h-[539px] m-auto w-full">
                      <div className="h-[539px] m-auto w-full">
                        <div className="h-[539px] m-auto w-full">
                          <Img
                            className="h-[539px] m-auto"
                            src="images/img_grid.svg"
                            alt="grid"
                          />
                          <Img
                            className="absolute h-[42px] inset-y-[0] left-[11%] my-auto rounded-lg"
                            src="images/img_vector178.svg"
                            alt="vector178"
                          />
                        </div>
                        <div className="absolute bottom-[1%] flex flex-col md:gap-10 gap-[153px] justify-start left-[8%] w-[76%]">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <Img
                              className="h-[104px] md:mt-0 mt-[99px]"
                              src="images/img_oracle.svg"
                              alt="oracle"
                            />
                            <Img
                              className="h-[104px] md:h-auto md:ml-[0] ml-[163px] object-cover"
                              src="images/img_azure.png"
                              alt="azure"
                            />
                            <div className="flex md:h-[125px] h-[134px] justify-end md:ml-[0] ml-[496px] md:mt-0 mt-[92px] relative w-[22%] md:w-full">
                              <div className="bg-gray-300 h-2 mt-auto mx-auto rounded-bl-sm rounded-br-sm w-[2%]"></div>
                              <div className="absolute md:h-[125px] h-[134px] inset-[0] justify-center m-auto w-full">
                                <div className="absolute bg-gray-300 bottom-[0] h-[9px] inset-x-[0] mx-auto rounded-bl-sm rounded-br-sm w-[2%]"></div>
                                <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto p-[11px] rounded-[21px] shadow-bs top-[0] w-full">
                                  <div className="flex flex-col gap-3.5 items-start justify-start mt-[5px] w-[91%] md:w-full">
                                    <Text
                                      className="capitalize text-gray-900 text-sm"
                                      size="txtInterMedium14"
                                    >
                                      Total Cloud Cost
                                    </Text>
                                    <Line className="bg-gray-200 h-px w-full" />
                                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                                      <div className="flex flex-col gap-[3.54px] items-start justify-start w-auto">
                                        <Text
                                          className="capitalize text-base text-gray-900 w-auto"
                                          size="txtInterBold16"
                                        >
                                          $15,234
                                        </Text>
                                        <div className="flex flex-row gap-[7.07px] items-center justify-start w-auto">
                                          <Text
                                            className="text-gray-400 text-xs w-auto"
                                            size="txtInterRegular12"
                                          >
                                            This month
                                          </Text>
                                          <div className="bg-blue_gray-600_14 flex flex-row gap-[3.54px] items-center justify-center px-[7.07px] py-[3.54px] rounded-[13px] w-auto">
                                            <Img
                                              className="h-3 w-3"
                                              src="images/img_iconarrowupoutlined.svg"
                                              alt="iconarrowupoutl"
                                            />
                                            <Text
                                              className="capitalize text-gray-900 text-xs w-auto"
                                              size="txtInterRegular12Gray900"
                                            >
                                              2,8%
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                      <Img
                                        className="h-[47px] md:h-auto object-cover"
                                        src="images/img_frame114.png"
                                        alt="frame114"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-[100px] md:ml-[0] ml-[252px]"
                            src="images/img_google.svg"
                            alt="google"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[10%] flex flex-col md:gap-10 gap-[157px] justify-start left-[11%] w-[65%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[51px] items-start justify-end p-2 rounded-[16px] w-full"
                          style={{
                            backgroundImage: "url('images/img_vector178.svg')",
                          }}
                        >
                          <div className="bg-gradient  h-0.5 md:ml-[0] ml-[396px] mt-[33px] rounded-[1px] w-[4%]"></div>
                        </div>
                        <Img
                          className="h-[21px] ml-10 md:ml-[0] rounded-lg"
                          src="images/img_vector182.svg"
                          alt="vector182"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[9%] flex flex-col md:gap-10 gap-[99px] justify-start left-[13%] w-[22%]">
                      <div className="flex flex-row gap-[97px] items-start justify-end ml-7 md:ml-[0] w-[91%] md:w-full">
                        <div className="bg-gradient  h-0.5 mt-[79px] rounded-[1px] w-[13%]"></div>
                        <div className="flex flex-col items-center justify-start w-[53%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-2"
                              src="images/img_settings.svg"
                              alt="settings"
                            />
                            <div className="flex flex-row items-start justify-evenly w-full">
                              <div className="h-[122px] relative w-[94%]">
                                <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-[9px] right-[0] rounded-[16px] shadow-bs w-[95%]">
                                  <div className="flex flex-col gap-2.5 items-center justify-start my-[7px] w-auto">
                                    <Img
                                      className="h-8 md:h-auto object-cover w-8"
                                      src="images/img_artificialinte.png"
                                      alt="artificialinte"
                                    />
                                    <Text
                                      className="leading-[16.00px] max-w-[112px] md:max-w-full text-blue_gray-900 text-center text-xs"
                                      size="txtInterMedium12"
                                    >
                                      <>
                                        Machine-learning models to optimise{" "}
                                        <br />
                                        the Cost
                                      </>
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[39%] h-[13px] left-[0]"
                                  src="images/img_television.svg"
                                  alt="television"
                                />
                              </div>
                              <Img
                                className="h-[13px] mt-[61px]"
                                src="images/img_television_gray_300.svg"
                                alt="television_One"
                              />
                            </div>
                            <Img
                              className="h-2"
                              src="images/img_thumbsup.svg"
                              alt="thumbsup"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[30px] items-start justify-end p-2 rounded-[15px] w-3/5 md:w-full"
                        style={{
                          backgroundImage: "url('images/img_vector182.svg')",
                        }}
                      >
                        <div className="bg-gradient  h-0.5 md:ml-[0] ml-[33px] mt-3 rounded-[1px] w-[22%]"></div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[14%] h-[104px] left-[10%]"
                    src="images/img_aws.svg"
                    alt="aws"
                  />
                  <div className="absolute bottom-[0] flex flex-row h-[204px] items-center justify-center right-[8%] w-[204px]">
                    <Img
                      className="h-[13px]"
                      src="images/img_television_gray_300_13x8.svg"
                      alt="television_Two"
                    />
                    <div className="bg-white-A700 flex flex-col gap-[13px] items-center justify-end p-2.5 rounded-[16px] shadow-bs w-[97%]">
                      <div className="h-28 md:h-[91px] mt-[11px] relative w-28">
                        <div className="absolute md:h-20 h-[107px] inset-y-[0] left-[0] my-auto w-[107px]">
                          <div className="absolute md:h-20 h-[83px] left-[0] top-[0] w-[83px]">
                            <div className="absolute bottom-[0] flex flex-col h-[57px] items-center justify-start right-[0] w-[57px]">
                              <div className="flex flex-col h-[57px] items-center justify-start w-[57px]">
                                <div className="bg-white-A700 flex flex-col h-[57px] items-center justify-center p-[5px] rounded-[28px] shadow-bs1 w-[57px]">
                                  <Text
                                    className="mt-[13px] text-blue_gray-900 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    $10,124
                                  </Text>
                                  <Text
                                    className="mb-[7px] mt-0.5 text-[7px] text-blue_gray-400"
                                    size="txtInterRegular7"
                                  >
                                    This month
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-20 inset-y-[0] left-[0] my-auto rounded-[1px]"
                              src="images/img_contrast.svg"
                              alt="contrast"
                            />
                          </div>
                          <Img
                            className="absolute h-[45px] right-[0] rounded-[1px] top-[0]"
                            src="images/img_contrast_blue_a700.svg"
                            alt="contrast_One"
                          />
                          <Img
                            className="absolute bottom-[0] h-[35px] left-[7%] rounded-[1px]"
                            src="images/img_user.svg"
                            alt="user"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[0] h-[72px] right-[0] rounded-[1px]"
                          src="images/img_mobile.svg"
                          alt="mobile"
                        />
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-6 grid grid-cols-2 justify-start w-auto"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <div className="bg-blue-A700 h-1 rounded-[50%] w-1"></div>
                            <Text
                              className="text-gray-900 text-xs w-auto"
                              size="txtInterRegular12Gray900"
                            >
                              Oracle Cloud
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <div className="bg-indigo-A700 h-1 rounded-[50%] w-1"></div>
                            <Text
                              className="text-blue_gray-900_02 text-xs w-auto"
                              size="txtInterRegular12Bluegray90002"
                            >
                              Google Cloud
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <div className="bg-blue-A700_66 h-1 rounded-[50%] w-1"></div>
                            <Text
                              className="text-gray-900 text-xs w-auto"
                              size="txtInterRegular12Gray900"
                            >
                              AWS
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <div className="bg-blue-A700_19 h-1 rounded-[50%] w-1"></div>
                            <Text
                              className="text-gray-900 text-xs w-auto"
                              size="txtInterRegular12Gray900"
                            >
                              Azure
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[20%] h-9 right-[21%] rounded-lg"
                  src="images/img_vector210.svg"
                  alt="vector210"
                />
              </div>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[19%] flex flex-col h-11 items-end justify-end p-2 right-[21%] rounded-[16px] w-[29%]"
                style={{ backgroundImage: "url('images/img_vector210.svg')" }}
              >
                <div className="bg-gradient  h-0.5 mr-4 mt-[26px] rounded-[1px] w-[6%]"></div>
              </div>
            </div>
            <div className="absolute bottom-[6%] flex md:flex-col flex-row md:gap-5 items-end justify-start right-[24%] w-[48%]">
              <div className="flex flex-col md:gap-10 gap-[131px] items-start justify-start mb-12 w-[2%] md:w-full">
                <Img
                  className="h-[78px] md:h-auto object-cover"
                  src="images/img_group1000004164.png"
                  alt="group1000004164"
                />
                <Img
                  className="h-[78px] md:h-auto object-cover"
                  src="images/img_group1000004163.png"
                  alt="group1000004163"
                />
              </div>
              <div className="h-[196px] md:h-[280px] mb-[84px] md:ml-[0] ml-[201px] md:mt-0 mt-[55px] relative w-[196px]">
                <div className="flex flex-col h-full items-center justify-start m-auto w-[180px]">
                  <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col h-[180px] items-center justify-start p-[18px] rounded-[24px] shadow-bs w-[180px]">
                    <Img
                      className="h-[82px] md:h-auto my-[30px] object-cover w-full"
                      src="images/img_denlogoprode.png"
                      alt="denlogoprode"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[196px] inset-[0] justify-center m-auto w-[196px]"
                  src="images/img_group1000004151.svg"
                  alt="group1000004151"
                />
              </div>
              <div className="flex flex-row items-center justify-center md:ml-[0] ml-[89px] md:mt-0 mt-[239px] w-[21%] md:w-full">
                <Img
                  className="h-[13px]"
                  src="images/img_television_gray_300_13x8.svg"
                  alt="television_Three"
                />
                <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[16px] shadow-bs w-[89%]">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="capitalize text-gray-900 text-xl w-auto"
                      size="txtInterBold20"
                    >
                      $5,640
                    </Text>
                    <Text
                      className="capitalize text-blue_gray-900 text-xs w-auto"
                      size="txtInterMedium12"
                    >
                      Total saved
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[13px]"
                  src="images/img_television_13x8.svg"
                  alt="television_Four"
                />
              </div>
              <div className="bg-gradient  h-0.5 mb-11 md:ml-[0] ml-[22px] md:mt-0 mt-[289px] rounded-[1px] w-[4%]"></div>
            </div>
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
          <div className="flex flex-col font-inter items-center justify-start mb-[-539px] mx-auto w-auto md:w-full z-[1]">
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
                <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-lg w-[292px]">
                  <Img
                    className="h-[76px] w-[76px]"
                    src="images/img_grid.svg"
                    alt="layerOne"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="leading-[31.00px] max-w-[244px] md:max-w-full text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtCircularStdBold22"
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
                <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-lg w-[292px]">
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
                      size="txtCircularStdBold22"
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
                <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-lg w-[292px]">
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
                      size="txtCircularStdBold22"
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
                <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-lg w-[292px]">
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
                      size="txtCircularStdBold22"
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
                    onClick={scrollToHome}
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
                        size="txtCircularStdBold22"
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
                        size="txtCircularStdBold22"
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
                        size="txtCircularStdBold22"
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
                        size="txtCircularStdBold22"
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
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1440px] py-[120px] w-full" id="homeSection">
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
                <div className="bg-blue-A700 flex flex-col h-[590px] md:h-auto items-start justify-between p-10 sm:px-5 rounded-bl-lg rounded-tl-lg" style={{zIndex: '1'}}>
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
          <footer className="flex items-center justify-center mt-auto mx-auto w-full">
            <div className="h-[1011px] sm:h-[801px] md:h-[973px] relative w-full">
              <Img
                className="absolute h-[801px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                src="images/img_numcloud1.png"
                alt="numcloudOne"
              />
              <div className="absolute bg-black-900 bottom-[0] flex flex-col inset-x-[0] items-center justify-center max-w-[1440px] mx-auto w-full">
                <div className="flex flex-col items-start justify-start max-w-[1440px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[152.1px] items-start justify-between pt-[120px] w-full">
                    <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-auto">
                        <Img
                          className="h-12 md:h-auto object-cover w-16 sm:w-full"
                          src="images/img_denlogoprode_48x64.png"
                          alt="denlogoprode_Two"
                        />
                        <Text
                          className="leading-[140.00%] md:max-w-full max-w-xs text-sm text-white-A700_a2"
                          size="txtRobotoRomanRegular14"
                        >
                          Powerful multi-cloud management platform, optimizing
                          cloud resources and costs for businesses of all sizes
                          and industries
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
                            <a
                              href="javascript:"
                              className="text-gray-200_01 text-sm w-auto"
                            >
                              <Text size="txtRobotoRomanRegular14Gray20001">
                                Privacy Policy
                              </Text>
                            </a>
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
        </div>
      </div>
    </>
  );
};

export default HomePage;
