"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Person } from "../types/Types";
import { Skeleton } from "@mui/material";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<Person | null>();

  const id = useSearchParams().get("id");

  return (
    <div className="flex  justify-center w-full ">
      {isLoading ? (
        <div className=" m-10 ">
          <Skeleton
            variant="rounded"
            width={300}
            height={150}
            animation="pulse"
            sx={{ bgcolor: "grey.900" }}
          />
        </div>
      ) : (
        <div className="bg-gray-900 m-10 p-6 rounded-2xl cursor-default">
          <h1>FirstName: {person?.firstName}</h1>
          <h1>LastName: {person?.lastName}</h1>
          <h1>Email: {person?.email}</h1>
          <h1>PhoneNumber: {person?.phoneNumber}</h1>
        </div>
      )}
    </div>
  );
}
