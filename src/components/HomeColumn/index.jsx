import React from "react";

import { Text } from "components";

const HomeColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtInterSemiBold18"
              >
                {props?.firstname}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start py-3 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-base text-gray-800_02 w-auto"
                size="txtRobotoRomanRegular16"
              >
                {props?.mariotext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeColumn.defaultProps = {
  firstname: "First Name",
  mariotext: "Mario",
};

export default HomeColumn;
