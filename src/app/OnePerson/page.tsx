/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useLayoutEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Animal, Person } from "../types/Types";
import { Skeleton } from "@mui/material";
import { fetchOneData } from "../api/fetchData";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [person, setPerson] = useState<Person | null>();

  const id = useSearchParams().get("id");

  const fetchAllAnimals = async () => {
    setIsLoading(true);
    if (id) {
      const data = await fetchOneData("persons", id);
      setPerson(data);
    }
    setIsLoading(false);
  };

  console.log(person?.animals);

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
      ) : person ? (
        <div className="bg-gray-900 m-10 p-6 rounded-2xl cursor-default">
          <h1>FirstName: {person?.firstName}</h1>
          <h1>LastName: {person?.lastName}</h1>
          <h1>Email: {person?.email}</h1>
          <h1>PhoneNumber: {person?.phoneNumber}</h1>
          <h1>Animals: {person.animals.length === 0 && "No animals"} </h1>
          <ul className="list-disc pl-6">
            {person?.animals.map((animal: Animal, index: number) => (
              <li key={index}>
                {animal.name} the {animal.species}{" "}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="m-10 p-6">Une erreur est survenue</div>
      )}
    </div>
  );
}
