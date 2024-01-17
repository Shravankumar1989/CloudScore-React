import React from "react";

import { Button, Img, SelectBox, Text } from "components";
import Header from "components/Header";
import Home1439768Column from "components/Home1439768Column";
import Home1439768ColumnlanguageThree from "components/Home1439768ColumnlanguageThree";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WhyCS1439768Page = () => {
  const home1439768ColumnPropList = [
    {},
    { mariotext: "|", firstname: "Last Name" },
    { mariotext: "mario.papa@gmail.com", firstname: "Work Email" },
    { mariotext: "Google Inc.", firstname: "Company" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <Header className="flex flex-col gap-2 items-center justify-center px-2 md:px-5 py-8 w-full" />
        <div className="h-[614px] max-w-6xl mt-[68px] mx-auto md:px-5 relative w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-24 items-center justify-start mb-[-4px] ml-[30px] mt-[148px] p-5 rounded-[50%] shadow-bs4 w-24 z-[1]">
            <Img
              className="h-[31px] my-[11px]"
              src="images/img_settings_blue_gray_900_01.svg"
              alt="settings"
            />
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-24 items-center justify-start mb-[-25px] ml-auto mr-[41px] mt-[169px] p-[25px] sm:px-5 rounded-[50%] shadow-bs4 w-24 z-[1]">
            <Img
              className="h-[29px] my-2 rounded-lg"
              src="images/img_user_red_700.svg"
              alt="user"
            />
          </div>
          <div className="flex flex-col gap-10 items-center justify-start mb-[-24px] mx-auto w-auto z-[1]">
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
                Optimal solution for biggest Cloud Providers
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
          <div
            className="bg-cover bg-no-repeat flex flex-col gap-[18px] h-[374px] justify-end mt-auto mx-auto p-[55px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_grid.svg')" }}
          >
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-24 items-center justify-start md:ml-[0] ml-[212px] mr-[732px] mt-[53px] p-7 sm:px-5 rounded-[50%] shadow-bs4 w-24">
              <Img
                className="h-[30px] my-[3px] rounded-[50%] w-[93%]"
                src="images/img_vector.svg"
                alt="vector"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-24 items-center justify-start md:ml-[0] ml-[659px] mr-[285px] p-[30px] sm:px-5 rounded-[50%] shadow-bs4 w-24">
              <Img
                className="h-8 md:h-auto object-cover"
                src="images/img_group.png"
                alt="group"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start mt-[93px] w-auto md:w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1440px] py-[120px] w-full">
            <div className="flex flex-col items-end justify-start max-w-[1264px] mx-auto md:px-5 w-full">
              <div className="flex flex-col gap-8 items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <Text
                    className="text-base text-blue-A700 text-center w-auto"
                    size="txtInterMedium16"
                  >
                    Why CloudScore
                  </Text>
                </div>
                <Text
                  className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-full"
                  size="txtInterSemiBold56"
                >
                  Unified cloud cost optimization
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1264px] mx-auto md:px-5 w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-[289px]">
                <Text
                  className="text-base text-gray-800_02 w-auto"
                  size="txtInterRegular16Gray80002"
                >
                  DevOps
                </Text>
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtInterSemiBold16Gray900"
                >
                  FinOps
                </Text>
                <Text
                  className="text-base text-gray-800_02 w-auto"
                  size="txtInterRegular16Gray80002"
                >
                  IT Executives
                </Text>
                <Text
                  className="text-base text-gray-800_02 w-auto"
                  size="txtInterRegular16Gray80002"
                >
                  Cloud Architects
                </Text>
              </div>
              <Img
                className="md:flex-1 h-[480px] sm:h-auto object-cover rounded-lg w-[400px] md:w-full"
                src="images/img_rectangle40308_480x400.png"
                alt="rectangle40308"
              />
              <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 w-auto"
                    size="txtInterSemiBold40"
                  >
                    FinOps
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                  <Text
                    className="leading-[28.00px] max-w-[400px] md:max-w-full text-base text-black-900_01"
                    size="txtInterRegular16Black90001"
                  >
                    CloudScore enables FinOps teams to efficiently manage AWS
                    resources by providing a streamlined solution. It offers
                    seamless optimization, with the ability to automate
                    corrective actions and deploy solutions quickly. This tool
                    operates without the need for agents, maintaining both
                    security and compliance effortlessly.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[1440px] py-[120px] w-full">
            <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start max-w-[1264px] mx-auto md:px-5 w-full">
              <div className="bg-gray-50 border border-gray-200_01 border-solid md:h-[336px] h-[400px] sm:h-[912px] p-8 sm:px-5 relative rounded-lg w-[400px] sm:w-full">
                <div className="absolute inset-x-[0] mx-auto top-[8%] w-full">
                  <div className="absolute flex flex-col gap-3 inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
                    <div className="relative w-full">
                      <div className="flex flex-col items-center justify-start m-auto w-full">
                        <div className="flex flex-col gap-3 items-center justify-start w-full">
                          <Img
                            className="h-3 w-[400px]"
                            src="images/img_frame1597882221.svg"
                            alt="frame1597882221"
                          />
                          <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-auto sm:w-full">
                            <div className="border border-gray-300 border-solid flex flex-col h-24 md:h-auto items-center justify-center p-2 rounded-lg w-[91px]">
                              <Img
                                className="h-[62px] md:h-auto object-cover w-[62px]"
                                src="images/img_628cd2987059a8c448f5c318a.png"
                                alt="628cd2987059a8c"
                              />
                            </div>
                            <div className="border border-gray-300 border-solid h-24 rounded-lg w-24"></div>
                            <div className="border border-gray-300 border-solid flex flex-col h-24 md:h-auto items-center justify-center p-2 rounded-lg w-24">
                              <Img
                                className="h-[62px] md:h-auto object-cover w-[62px]"
                                src="images/img_awscertifieds.png"
                                alt="awscertifieds"
                              />
                            </div>
                            <div className="border border-gray-300 border-solid h-24 rounded-lg w-[21%]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-gradient2  h-[59px] inset-x-[0] mx-auto rotate-[180deg] top-[0] w-full"></div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-auto sm:w-full">
                      <div className="border border-gray-300 border-solid h-24 rounded-lg w-[23%]"></div>
                      <div className="border border-gray-300 border-solid flex flex-col h-24 md:h-auto items-center justify-center p-2 rounded-lg w-24">
                        <Img
                          className="h-[62px] md:h-auto object-cover w-[62px]"
                          src="images/img_finopsbadges1.png"
                          alt="finopsbadgesOne"
                        />
                      </div>
                      <div className="border border-gray-300 border-solid h-24 rounded-lg w-24"></div>
                      <div className="border border-gray-300 border-solid flex flex-col h-24 md:h-auto items-center justify-center p-2 rounded-lg w-[81px]">
                        <Img
                          className="h-[62px] md:h-auto object-cover w-[62px]"
                          src="images/img_628cd2987059a8c448f5c318a_62x62.png"
                          alt="628cd2987059a8c_One"
                        />
                      </div>
                    </div>
                    <Img
                      className="h-24 w-[400px]"
                      src="images/img_frame1597882221.svg"
                      alt="frame1597882220"
                    />
                  </div>
                  <div className="absolute bg-gradient2  bottom-[0] h-[134px] inset-x-[0] mx-auto w-full"></div>
                </div>
                <div className="absolute bottom-[8%] flex flex-col gap-2 inset-x-[0] items-start justify-start mx-auto w-full">
                  <Text
                    className="text-gray-900 text-xl w-auto"
                    size="txtInterMedium20Gray900"
                  >
                    Certification Providers{" "}
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[336px] md:max-w-full text-base text-gray-900_cc"
                    size="txtInterRegular16"
                  >
                    Seamless optimization, with the ability to automate
                    corrective actions and deploy solutions quickly.{" "}
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200_01 border-solid flex flex-col md:h-auto p-8 sm:px-5 relative rounded-lg w-[400px] sm:w-full">
                <div className="mx-auto w-full">
                  <div className="absolute flex flex-col gap-3 inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
                    <Img
                      className="h-8 w-80"
                      src="images/img_frame1597882227.svg"
                      alt="frame1597882227"
                    />
                    <div className="border border-gray-300 border-solid flex flex-col gap-2 items-center justify-center p-6 sm:px-5 rounded-lg w-[322px]">
                      <Img
                        className="md:h-auto h-px object-cover w-8"
                        src="images/img_line145.png"
                        alt="line145"
                      />
                      <Text
                        className="leading-[16.00px] max-w-[274px] md:max-w-full text-black-900_01 text-xs"
                        size="txtInterMedium12Black90001"
                      >
                        <span className="text-blue-A700 font-inter text-left font-medium">
                          def
                        </span>
                        <span className="text-black-900_01 font-inter text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-red-800 font-inter text-left font-medium">
                          get_cost_and_usage
                        </span>
                        <span className="text-black-900_01 font-inter text-left font-medium">
                          <>
                            (client, start_date, end_date):
                            <br />{" "}
                          </>
                        </span>
                        <span className="text-green-600 font-inter text-left font-medium">
                          <>
                            &quot;&quot;&quot; Retrieve AWS cost and usage data
                            for a given date range &quot;&quot;&quot;
                          </>
                        </span>
                        <span className="text-black-900_01 font-inter text-left font-medium">
                          <>
                            <br />{" "}
                          </>
                        </span>
                        <span className="text-blue-A700 font-inter text-left font-medium">
                          {" "}
                          try:
                        </span>
                        <span className="text-black-900_01 font-inter text-left font-medium">
                          <>
                            <br /> response = client.get_cost_and_usage(
                            <br /> TimePeriod=&#123;
                            <br />{" "}
                          </>
                        </span>
                        <span className="text-green-600 font-inter text-left font-medium">
                          <>&#39;Start&#39;:</>
                        </span>
                        <span className="text-black-900_01 font-inter text-left font-medium">
                          <>
                            {" "}
                            start_date.strftime(&#39;%Y-%m-%d&#39;),
                            <br />{" "}
                          </>
                        </span>
                        <span className="text-green-600 font-inter text-left font-medium">
                          <>&#39;End&#39;:</>
                        </span>
                        <span className="text-black-900_01 font-inter text-left font-medium">
                          <> end_date.strftime(&#39;%Y-%m-%d&#39;)</>
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-gradient2  bottom-[0] h-[117px] inset-x-[0] mx-auto w-full"></div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start mt-[-54px] mx-auto w-full z-[1]">
                  <Text
                    className="text-black-900_01 text-xl w-auto"
                    size="txtInterMedium20Black90001"
                  >
                    One script integration
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[336px] md:max-w-full text-base text-gray-900_cc"
                    size="txtInterRegular16"
                  >
                    Discover the power of streamlined cloud cost management with
                    our one-script integration solution.{" "}
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200_01 border-solid md:h-[254px] h-[400px] p-8 sm:px-5 relative rounded-lg w-[400px] sm:w-full">
                <div className="absolute inset-x-[0] mx-auto top-[8%] w-full">
                  <div className="absolute border border-gray-300 border-solid flex flex-col h-[218px] md:h-auto inset-x-[0] items-center justify-start mx-auto p-6 sm:px-5 rounded-lg top-[0] w-[336px]">
                    <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                      <Img
                        className="md:h-auto h-px object-cover w-8 sm:w-full"
                        src="images/img_line145.png"
                        alt="line145_One"
                      />
                      <div className="flex flex-col gap-6 items-center justify-start w-full">
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Text
                            className="text-gray-900 text-xs w-auto"
                            size="txtInterSemiBold12"
                          >
                            Total Cloud Cost
                          </Text>
                          <SelectBox
                            className="sm:flex-1 text-left text-xs w-[39%] sm:w-full"
                            placeholderClassName="text-gray-900"
                            indicator={
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="dropdown"
                            options={dropdownOptionsList}
                            isSearchable={false}
                            placeholder="This month"
                            shape="round"
                            color="gray_300"
                            size="xs"
                            variant="outline"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                          <div className="flex flex-col gap-6 items-start justify-start mb-6 w-auto">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                              size="txtInterSemiBold32"
                            >
                              $48,12K
                            </Text>
                            <Text
                              className="leading-[140.00%] max-w-[126px] md:max-w-full text-gray-800_02 text-sm"
                              size="txtInterRegular14"
                            >
                              <>
                                Cloud optimisation
                                <br />
                                effectiveness
                              </>
                            </Text>
                          </div>
                          <Img
                            className="h-[69px] md:h-auto mt-[57px] object-cover w-[95px]"
                            src="images/img_frame114_indigo_a700_01.png"
                            alt="frame114"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gradient2  bottom-[0] h-[126px] inset-x-[0] mx-auto w-full"></div>
                </div>
                <div className="absolute bottom-[8%] flex flex-col gap-2 inset-x-[0] items-start justify-start mx-auto w-full">
                  <Text
                    className="text-black-900_01 text-xl w-auto"
                    size="txtInterMedium20Black90001"
                  >
                    Ultimate Optimisation{" "}
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[336px] md:max-w-full text-base text-gray-900_cc"
                    size="txtInterRegular16"
                  >
                    Achieve optimal savings and utilization by consistently
                    fine-tuning cloud expenditure and commitment purchases.{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[1440px] py-[120px] w-full">
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1264px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-end justify-start max-w-[1264px] w-full">
                <div className="flex flex-col gap-8 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <Text
                      className="text-base text-blue-A700 text-center w-auto"
                      size="txtInterMedium16"
                    >
                      Security and Efficiency{" "}
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-0.56px] w-full"
                    size="txtInterSemiBold56"
                  >
                    Awards and Certifications
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-end justify-start w-auto md:w-full">
                <Img
                  className="h-28 md:h-auto object-cover w-[131px] sm:w-full"
                  src="images/img_newsscreename.png"
                  alt="newsscreename"
                />
                <Img
                  className="h-[115px] md:h-auto object-cover w-[115px]"
                  src="images/img_628cd2987059a8c448f5c318a.png"
                  alt="628cd2987059a8c_Two"
                />
                <Img
                  className="h-[115px] md:h-auto object-cover w-[115px]"
                  src="images/img_628cd2987059a8c448f5c318a_62x62.png"
                  alt="628cd2987059a8c_Three"
                />
                <Img
                  className="h-[115px] md:h-auto object-cover w-[115px]"
                  src="images/img_awscertifieds.png"
                  alt="awscertifieds_One"
                />
                <Img
                  className="h-[115px] md:h-auto object-cover w-[103px] sm:w-full"
                  src="images/img_finopsbadges1_115x103.png"
                  alt="finopsbadgesOne_One"
                />
                <Img
                  className="h-[115px] md:h-auto object-cover w-[102px] sm:w-full"
                  src="images/img_finopsbadges2.png"
                  alt="finopsbadgesTwo"
                />
                <Img
                  className="h-[115px] md:h-auto object-cover w-[101px] sm:w-full"
                  src="images/img_finopsbadges5.png"
                  alt="finopsbadgesFive"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1440px] py-[120px] w-full">
            <div className="bg-blue-A700 flex flex-col items-start justify-start max-w-[1264px] mx-auto md:px-5 px-[88px] py-[120px] rounded-lg w-full">
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
                  alt="denlogoprode_One"
                />
              </div>
            </div>
          </div>
          <div className="font-roboto md:h-[1425px] h-[1431px] sm:h-[959px] md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] mx-auto w-full">
              <Img
                className="h-[801px] mx-auto object-cover w-full"
                src="images/img_numcloud1.png"
                alt="numcloudOne"
              />
              <div className="bg-black-900 flex flex-col items-center justify-center max-w-[1440px] mt-[-236px] mx-auto w-full z-[1]">
                <div className="flex flex-col items-start justify-start max-w-[1264px] w-full">
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
                              Why CloudScore
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
            <div className="absolute flex flex-col font-inter md:gap-10 gap-20 inset-x-[0] items-center justify-center max-w-[1440px] mx-auto py-[120px] top-[0] w-full">
              <div className="flex flex-col items-end justify-start max-w-[1264px] w-full">
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
              <div className="bg-gray-50 border border-gray-300 border-solid flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-start max-w-[1264px] md:pr-10 sm:pr-5 pr-[60px] rounded-lg shadow-bs3 w-full">
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
                    {home1439768ColumnPropList.map((props, index) => (
                      <React.Fragment key={`Home1439768Column${index}`}>
                        <Home1439768Column
                          className="border-b border-blue_gray-100 border-solid flex flex-1 flex-col items-start justify-start w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                  <Home1439768ColumnlanguageThree className="border-b border-blue_gray-100 border-solid flex flex-col items-start justify-start w-full" />
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
        </div>
      </div>
    </>
  );
};

export default WhyCS1439768Page;
