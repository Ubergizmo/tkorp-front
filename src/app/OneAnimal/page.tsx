"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import data from "../api/data.json";
import { Animal } from "../types/Types";
import { Skeleton } from "@mui/material";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [animal, setAnimal] = useState<Animal | null>();

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
          <h1>Name: {animal?.name}</h1>
          <h1>dateOfBirth: {animal?.dateOfBirth}</h1>
          <h1>species: {animal?.species}</h1>
          <h1>breed: {animal?.species}</h1>
          <h1>
            Owner: {animal?.owner?.firstName} {animal?.owner?.lastName}
          </h1>
        </div>
      )}
    </div>
  );
}
