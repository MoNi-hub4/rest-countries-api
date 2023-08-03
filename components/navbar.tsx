import React, { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { BiSolidSun } from "react-icons/bi";

const navbar = ({ onData }: any) => {
  const [mode, setMode] = useState("light");

  const handleClick = () => {
    setMode(() => mode === "dark" ? "light" : "dark");
    onData(() => (mode === "dark" ? "light" : "dark"));
    
  };

  return (
    <>
      <div className="h-24 bg-white dark:bg-[#2B3844] shadow-md">
        <div className="flex justify-between items-center h-full px-4 lg:px-12 max-w-[1440px] m-auto">
          <p className="font-bold dark:text-white">Where in the world?</p>
          <span
            onClick={handleClick}
            className="font-light text-sm flex items-center dark:text-white"
          >
            <BsMoonFill className="mr-2 dark:hidden" />
            <BiSolidSun className="mr-2 hidden dark:block " />
            <span className="dark:hidden">Dark mode</span>
            <span className="hidden dark:block">Light mode</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default navbar;
