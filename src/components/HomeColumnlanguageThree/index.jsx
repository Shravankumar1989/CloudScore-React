import React from "react";
import { TextField } from '@mui/material';

import { Text } from "components";

const HomeColumnlanguageThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-left justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-auto"
                  size="txtInterSemiBold18"
                >
                  {props?.languageThree}
                </Text>
                </div>
              </div>
          </div>
          <div className="flex flex-col items-center justify-start py-3 w-full">
            <div className="flex flex-col items-left justify-start w-full">
              <TextField size="txtInterSemiBold18" className="text-gray-900 text-lg w-auto"
                id="standard-basic" variant="standard">        
                {props?.messagetext}
              </TextField>
            </div>
        </div>
      </div>
    </>
  );
};

HomeColumnlanguageThree.defaultProps = {
  languageThree: "Message ",
  messagetext: "Write your message..",
};

export default HomeColumnlanguageThree;
