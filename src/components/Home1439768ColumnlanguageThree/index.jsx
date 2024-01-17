import React from "react";

import { Text } from "components";

const Home1439768ColumnlanguageThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <Text
            className="text-gray-900 text-lg w-auto"
            size="txtInterSemiBold18"
          >
            {props?.languageThree}
          </Text>
        </div>
        <div className="flex flex-col h-14 md:h-auto items-start justify-start py-4 w-full">
          <Text
            className="text-base text-gray-800_03 w-full"
            size="txtInterRegular16Gray80003"
          >
            {props?.messagetext}
          </Text>
        </div>
      </div>
    </>
  );
};

Home1439768ColumnlanguageThree.defaultProps = {
  languageThree: "Message ",
  messagetext: "Write your message..",
};

export default Home1439768ColumnlanguageThree;
