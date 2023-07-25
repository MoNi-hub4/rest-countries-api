import React from "react";
import jsonData from "../src/data.json";
import { useRouter } from "next/navigation";
// import data.json
// find data by prop.name
// apply

const Detail = (props: any) => {
    const router = useRouter();
    const handleGoBack = () => {
      // Go back to the previous page
      router.back();
    };
    const flagData = jsonData;
    const foundObjects = flagData.filter((item) => item.name === props.prop);
    console.log(foundObjects)
    

  return (
    <>
      <button onClick={handleGoBack} >Back</button>
          <div className="flag">{foundObjects[0].flag}</div>
          <div>{ foundObjects[0].name}</div>
    </>
  );
};

export default Detail;
