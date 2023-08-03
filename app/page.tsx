"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import jsonData from "../src/data.json";
import { useState } from "react";
import Body from "@/components/Body";

export default function Home(props: any) {
  const data = jsonData;
  const [inputValue, setInputValue] = useState("Filter by Region");
  const [query, setQuery] = useState("");
  const [regionVal, setRegionVal] = useState("");
  // console.log(data.filter((data) => data.name.toLowerCase().includes("ca")));

  const RegionData = data.map((data) => data.region);
  const Region = RegionData.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  const handleClick = (name: any) => {
    setInputValue(name);
    setRegionVal(name);
  };

  let property = {
    query: query,
    data: regionVal,
  };

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between max-w-[1440px] m-auto">
        <div className="header">
          <div className="search-box bg-white dark:bg-[#2B3844] mt-8 lg:mt-16 flex items-center mx-4 lg:mx-0 px-4 shadow-md rounded-lg h-14">
            <BsSearch className="text-2xl ml-4 dark:text-white" />
            <Input
              placeholder="Search for a country "
              className="ml-4"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="dropdown mt-8 ml-4 w-52 h-14 px-4 flex items-center bg-white dark:bg-[#2B3844] dark:text-white shadow-md rounded-lg">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between w-full text-slate-800 dark:text-white font-semibold focus-visible:outline-none">
              {inputValue}
              <MdOutlineKeyboardArrowDown className="dark:text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 mt-4 text-slate-800 dark:bg-[#2B3844] font-semibold">
              {Region.map((region, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => handleClick(region)}
                >
                  {region}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Body {...property} />
    </>
  );
}
