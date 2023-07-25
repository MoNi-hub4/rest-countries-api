import React from "react";
import { BsMoonFill } from "react-icons/bs";

const navbar = () => {
  return (
    <>
      <div className="h-24 bg-white shadow-md">
        <div className="flex justify-between items-center h-full px-4 lg:px-12 max-w-[1440px] m-auto">
          <p className="font-bold">Where in the world?</p>
          <span className="font-light text-sm flex items-center">
            <BsMoonFill className="mr-2" />
            Dark mode
          </span>
        </div>
      </div>
    </>
  );
};

export default navbar;
