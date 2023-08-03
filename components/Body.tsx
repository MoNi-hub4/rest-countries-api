import React from "react";
import Image from "next/image";
import Link from "next/link";
import jsonData from "../src/data.json";
import { useRouter } from "next/navigation";

const Body = (props: any) => {
  const flagData = jsonData;

  const router = useRouter();
  const handleClick = (flagdata: any) => {
    router.push(`/Details?data=${flagdata.name}`);
  };

  return (
    <div className="mx-4 mt-8 lg:mt-16 ">
      <div className="flex flex-col max-w-[320px] lg:max-w-[1440px] mx-auto lg:grid lg:grid-cols-4 lg:grid-flow-row gap-12 ">
        {flagData
          .filter((flagdata) =>
            flagdata.name.toLowerCase().includes(props.query.toLowerCase())
          )
          .filter((flagdata) =>
            flagdata.region.toLowerCase().includes(props.data.toLowerCase())
          )
          .map((flagdata, index) => (
            <div
              onClick={() => handleClick(flagdata)}
              key={index}
              className="card cursor-pointer bg-white dark:bg-[#2B3844] shadow-md rounded-lg"
            >
              <div className="image ">
                <Image
                  className="rounded-t-lg"
                  width={320}
                  height={200}
                  style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  src={flagdata.flag}
                  alt="Picture of the author"
                />
              </div>
              <div className="description text-left dark:text-white ml-12 mb-6">
                <p className="font-bold my-4">{flagdata.name}</p>
                <p>
                  <span>Population: </span>
                  <span className="font-light dark:font-thin">
                    {flagdata.population}
                  </span>
                </p>
                <p>
                  <span>Region: </span>
                  <span className="font-light dark:font-thin">
                    {flagdata.region}
                  </span>
                </p>
                <p>
                  <span>Capital: </span>
                  <span className="font-light dark:font-thin">
                    {flagdata.capital}
                  </span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Body;
