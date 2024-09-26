import { Person } from "@/app/types/Types";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function PersonCard({ Person }: { Person: Person }) {
  return (
    <Link
      href={{
        pathname: `/OnePerson`,
        query: {
          id: Person.id,
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
          delay: 0.03 * Person.id,
          duration: 0.2,
        }}
        initial={{
          opacity: 0,
          scale: 1.1,
        }}
      >
        <h4>
          {Person.firstName} {Person.lastName}
        </h4>
      </motion.div>
    </Link>
  );
}
