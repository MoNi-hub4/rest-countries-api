"use client";
import Detail from "@/components/Detail";
import React from "react";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
    const search = searchParams.get("data");

  return <Detail prop={search} />;
};

export default page;
