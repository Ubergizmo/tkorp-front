/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useLayoutEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Animal } from "../types/Types";
import { Skeleton } from "@mui/material";
import { fetchOneData } from "../api/fetchData";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [animal, setAnimal] = useState<Animal | null>();

  const id = useSearchParams().get("id");

  const fetchAllAnimals = async () => {
    setIsLoading(true);
    if (id) {
      const data = await fetchOneData("animals", id);
      setAnimal(data);
      console.log(data.owner)
    }
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    fetchAllAnimals();
  }, []);

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
      ) :animal? (
        <div className="bg-gray-900 m-10 p-6 rounded-2xl cursor-default">
          <h1>Name: {animal?.name}</h1>
          <h1>DateOfBirth: {animal?.dateOfBirth}</h1>
          <h1>Species: {animal?.species}</h1>
          <h1>Breed: {animal?.species}</h1>
          <h1>Color: {animal?.color}</h1>
          <h1>Weight: {animal?.weight/1000} kg</h1>
          <h1>
            Owner: {animal?.owner?.firstName} {animal?.owner?.lastName}
          </h1>
        </div>
      ):(<div className="m-10 p-6">Une erreur est survenue</div>
        )}
    </div>
  );
}
