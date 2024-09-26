"use client";
import React, { useLayoutEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard/AnimalCard";
import { Animal } from "../types/Types";
import { Pagination, Skeleton } from "@mui/material";
import styles from "@/app/Styles/Pagination.module.css";
import { fetchDatas } from "../api/fetchData";

export default function Page() {
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [animals, setAnimals] = useState<Animal[] | null>(null);

  const handlePage = (page: number) => {
    setPage(page);
    setIsLoading(true);
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const fetchAllAnimals = async () => {
    setIsLoading(true);
    const data = await fetchDatas("animals");
    setAnimals(data);
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    fetchAllAnimals();
  }, []);

  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 ">
      <h1 className="font-[family-name:var(--font-geist-sans)] w-full text-center mt-10 text-2xl cursor-default">
        Tous les animaux
      </h1>
      {isLoading ? (
        <div className="gap-4 flex flex-col">
          {Array.from({ length: 10 }, (_, i) => i).map((i: number) => (
            <Skeleton
              variant="rounded"
              width={300}
              height={100}
              animation="pulse"
              sx={{ bgcolor: "grey.900" }}
              key={i}
            />
          ))}
        </div>
      ) : animals ? (
        <>
          <div className="">
            {animals?.slice(page * 10 - 10, page * 10).map((animal: Animal) => (
              <AnimalCard key={animal.id} Animal={animal} />
            ))}
          </div>
          <div className="mb-14">
            <Pagination
              // Longueur / nombre d'éléments par page
              count={animals?.length / 10}
              color="secondary"
              variant="outlined"
              onChange={(event, page) => handlePage(page)}
              page={page}
              className={styles.root}
            />
          </div>
        </>
      ) : (
        <div>Aucune donnée</div>
      )}
    </main>
  );
}
