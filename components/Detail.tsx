"use client"
import React from "react";
import jsonData from "../src/data.json";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// import data.json
// find data by prop.name
// apply

const Detail = (props: any) => {
  const router = useRouter();
  const handleGoBack = () => {
    // Go back to the previous page
    router.back();
  };
  const searchParams = useSearchParams();
  const search = searchParams.get("data");
  const flagData = jsonData;
  const foundObjects = flagData.filter((item) => item.name === search);

  const lang = [];
  for (let i = 0; i < foundObjects[0].languages.length; i++) {
    lang.push(foundObjects[0].languages[i].name);
  }
  const commaSeparatedLang = lang.join(", ");

  const bord = [];
  if (foundObjects[0].borders) {
    for (let i = 0; i < foundObjects[0].borders?.length; i++) {
      bord.push(foundObjects[0].borders[i]);
    }
  }

  return (
    <>
      <div className="lg:max-w-[1440px] mx-auto">
        <div className="pt-12 px-8">
          <div>
            <Button
              className="shadow-lg"
              variant="default"
              onClick={handleGoBack}
            >
              Back
            </Button>
          </div>

          <div className="description pt-12 lg:flex lg:flex-row">
            <div className="image lg:flex-1">
              <Image
                className="rounded-lg"
                src={foundObjects[0].flag}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="Data pt-12 lg:flex-1 lg:pt-0 dark:text-white ">
              <div className="lg:flex">
                <div className="s1 lg:basis-2/4">
                  <p className="font-bold text-2xl mb-6">
                    {foundObjects[0].name}
                  </p>
                  <p className="text-sm pb-2">
                    <span className="font-semibold">Native Name: </span>
                    {foundObjects[0].nativeName}
                  </p>
                  <p className="text-sm pb-2">
                    <span className="font-semibold">Population: </span>
                    {foundObjects[0].population}
                  </p>
                  <p className="text-sm pb-2">
                    <span className="font-semibold">Region: </span>
                    {foundObjects[0].region}
                  </p>
                  <p className="text-sm pb-2">
                    <span className="font-semibold">Sub region: </span>
                    {foundObjects[0].subregion}
                  </p>
                  {foundObjects[0].capital && (
                    <p className="text-sm pb-2">
                      <span className="font-semibold">Capital: </span>
                      {foundObjects[0].capital}
                    </p>
                  )}
                </div>
                <div className="s2 mt-6 lg:mt-14 lg:basis-1/3">
                  <p className="text-sm pb-2">
                    <span className="font-semibold">Top Level Domain: </span>
                    {foundObjects[0].topLevelDomain}
                  </p>
                  {foundObjects[0].currencies && (
                    <p className="text-sm pb-2">
                      <span className="font-semibold">Currencies: </span>
                      {foundObjects[0].currencies[0].code}
                    </p>
                  )}
                  <p className="text-sm pb-2">
                    <span className="font-semibold">Languages: </span>
                    {commaSeparatedLang}
                  </p>
                </div>
              </div>
              {bord.length > 0 && (
                <div>
                  <div className="text-md pb-2 mt-6 ">
                    <span className="font-bold">
                      Border Countries:
                      <div>
                        {bord.map((name) => (
                          <Button className="mr-4 mt-4" key={name}>
                            {name}
                          </Button>
                        ))}
                      </div>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
