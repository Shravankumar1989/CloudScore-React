import React, { useState } from 'react';

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeColumn from "components/HomeColumn";
import HomeColumnlanguageThree from "components/HomeColumnlanguageThree";
import { TextField } from '@mui/material';

const BlogPage = () => {

  const [demoName, setDemoName] = useState('');
  
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
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[787px] items-center justify-start p-[263px] md:px-10 sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_frame1597882240_787x1440.png')",
          }}
        >
          <div className="flex flex-col items-center justify-start mb-[69px] w-auto md:w-full">
            <div className="flex flex-col items-start justify-end w-auto md:w-full">
              <Text
                className="leading-[64.00px] max-w-[723px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 tracking-[-0.56px]"
                size="txtInterSemiBold56WhiteA700"
              >
                CloudScore Hub: Navigating Cloud Cost Optimisation
              </Text>
            </div>
          </div>
        </div>
        <div className="font-roboto h-[3229px] mt-[86px] md:px-5 relative w-full">
          <div className="flex flex-col font-inter items-center justify-start mb-[-566px] mx-auto w-auto md:w-full z-[1]">
            <div className="h-[1414px] md:h-[2164px] sm:h-[2432px] relative w-full">
              <div className="absolute flex flex-col inset-x-[0] items-end justify-start max-w-[1440px] mx-auto top-[0] w-full">
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
              <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-20 inset-x-[0] items-center justify-center max-w-[1440px] mx-auto py-[120px] w-full">
                <div className="flex flex-col items-center justify-center max-w-[1440px] w-full">
                  <List
                    className="flex flex-col gap-8 items-center w-[88%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                      <div className="bg-gray-50 border border-gray-300 border-solid flex md:flex-1 flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[616px] md:w-full">
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
                            into best practices and tools for effective cloud
                            cost management.
                          </Text>
                        </div>
                        <Text
                          className="text-base text-gray-200_01 w-auto"
                          size="txtInterRegular16Gray20001"
                        >
                          20 JUN 2023
                        </Text>
                      </div>
                      <div className="bg-gray-50 border border-gray-300 border-solid flex flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[292px]" id="homeSection">
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
                    </div>
                    <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                      <div className="bg-gray-50 border border-gray-300 border-solid flex flex-1 flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                        <div className="flex flex-col gap-10 h-full items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="leading-[46.00px] max-w-[228px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                              size="txtInterBold32"
                            >
                              Multi-Cloud Strategies
                            </Text>
                          </div>
                          <Text
                            className="leading-[24.00px] max-w-[228px] md:max-w-full text-base text-gray-800_02"
                            size="txtInterRegular16Gray80002"
                          >
                            Explore the advantages and challenges of a
                            multi-cloud approach, with insights on effective
                            implementation
                          </Text>
                        </div>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtInterRegular16Gray80002"
                        >
                          10 JUN 2023
                        </Text>
                      </div>
                      <div className="bg-gray-50 border border-gray-300 border-solid flex flex-1 flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                        <div className="flex flex-col gap-10 h-full items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="leading-[46.00px] max-w-[228px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                              size="txtInterBold32"
                            >
                              Cloud Optimization
                            </Text>
                          </div>
                          <Text
                            className="leading-[24.00px] max-w-[228px] md:max-w-full text-base text-gray-800_02"
                            size="txtInterRegular16Gray80002"
                          >
                            Enhance your cloud optimization strategy with
                            advanced techniques, including AI-driven insights.
                          </Text>
                        </div>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtInterRegular16Gray80002"
                        >
                          09 JUN 2023
                        </Text>
                      </div>
                      <div className="bg-gray-50 border border-gray-300 border-solid flex flex-1 flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                        <div className="flex flex-col gap-10 h-full items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="leading-[46.00px] max-w-[228px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                              size="txtInterBold32"
                            >
                              Cloud-Native Security
                            </Text>
                          </div>
                          <Text
                            className="leading-[24.00px] max-w-[228px] md:max-w-full text-base text-gray-800_02"
                            size="txtInterRegular16Gray80002"
                          >
                            Navigate the ever-evolving landscape of cloud-native
                            security, exploring strategies and best practices.
                          </Text>
                        </div>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtInterRegular16Gray80002"
                        >
                          08 JUN 2023
                        </Text>
                      </div>
                      <div className="bg-gray-50 border border-gray-300 border-solid flex flex-1 flex-col md:gap-10 gap-16 h-[460px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                        <div className="flex flex-col gap-10 h-full items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="leading-[46.00px] max-w-[228px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                              size="txtInterBold32"
                            >
                              Data Sovereignty
                            </Text>
                          </div>
                          <Text
                            className="leading-[24.00px] max-w-[228px] md:max-w-full text-base text-gray-800_02"
                            size="txtInterRegular16Gray80002"
                          >
                            Delve into the complexities of data sovereignty in
                            cloud operations and discover best practices.
                          </Text>
                        </div>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtInterRegular16Gray80002"
                        >
                          01 JUN 2023
                        </Text>
                      </div>
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
            <div className="bg-blue-A700 flex flex-col gap-8 items-center justify-start max-w-[1440px] py-20 rounded-lg w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
                size="txtInterBold40"
              >
                Don’t want to miss anything?
              </Text>
              <Text
                className="leading-[22.00px] max-w-[522px] md:max-w-full text-base text-center text-white-A700"
                size="txtInterRegular16WhiteA700"
              >
                Get weekly updates on the newest design stories, case studies
                and tips right in your mailbox.
              </Text>
              <div
                className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[68px] items-center justify-end p-5 rounded-lg w-[45%] md:w-full"
                style={{ backgroundImage: "url('images/img_group5.svg')" }}
              >
                <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                  <TextField size="" className="text-gray-100 text-lg" InputProps={{ disableUnderline: true }}
                    id="standard-basic" variant="standard" label="Email"/>                    
                  <Text
                    className="text-base text-black-900_01 tracking-[-0.29px] mt-[12px]"
                    size="txtInterSemiBold16"
                  >
                    Subscribe
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-cover bg-no-repeat flex flex-col  items-center justify-start  py-[120px] md:px-10 sm:px-5 w-full " id="homeSection" style={{ backgroundImage:`url(${'images/img_numcloud1.png'})`,backgroundRepeat:"no-repeat" }}>
              <div className="flex flex-col items-end justify-start max-w-[1440px] w-full" >
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
              <div className="bg-gray-50 border border-gray-300 border-solid flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-start max-w-[1440px] md:pr-10 sm:pr-5 pr-[60px] rounded-lg shadow-bs3 w-full ">
                <div className="bg-blue-A700 flex flex-col h-[650px] md:h-auto items-start justify-between p-10 sm:px-5 rounded-bl-lg rounded-tl-lg" style={{zIndex: '1'}}>
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
                    style={{zIndex: '1'}}
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

export default BlogPage;
