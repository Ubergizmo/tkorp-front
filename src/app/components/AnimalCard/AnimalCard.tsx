"use client";
import { Animal } from "@/app/types/Types";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function AnimalCard({ Animal }: { Animal: Animal }) {
  return (
    <Link
      href={{
        pathname: `/OneAnimal`,
        query: {
          id: Animal.id,
        },
      }}
    >
      <motion.div
        className="bg-gray-900 m-4 p-7 flex justify-center rounded-lg cursor-pointer hover:bg-violet-600"
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.03 * Animal.id,
          duration: 0.2,
        }}
        initial={{
          opacity: 0,
          scale: 1.1,
        }}
      >
        <h4>
          My name is {Animal.name} and im a {Animal.species}
        </h4>
      </motion.div>
    </Link>
  );
}
