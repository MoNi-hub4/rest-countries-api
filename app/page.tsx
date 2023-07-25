"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
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

export default function Home() {
  const [inputValue, setInputValue] = useState("Filter by Region");

  const data = jsonData;
  const RegionData = data.map((data) => data.region);
  const Region = RegionData.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  const handleClick = (name: any) => {
    setInputValue(name);
  };

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between max-w-[1440px] m-auto">
        <div className="header">
          <div className="search-box bg-white mt-8 lg:mt-16 flex items-center mx-4 lg:mx-0 px-4 shadow-md rounded-lg h-14">
            <AiOutlineSearch className="text-2xl ml-4" />
            <Input placeholder="Search for a country " className="ml-4" />
          </div>
        </div>
        <div className="dropdown mt-8 ml-4 w-52 h-14 px-4 flex items-center bg-white shadow-md rounded-lg">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between w-full text-slate-800 font-semibold focus-visible:outline-none">
              {inputValue}
              <MdOutlineKeyboardArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 mt-4 text-slate-800 font-semibold">
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
      <Body />
    </>
  );
}
