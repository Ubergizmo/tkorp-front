"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const navData = [
    { name: "Accueil", link: "/" },
    { name: "Personnes", link: "/AllPerson", link2: "/OnePerson" },
    { name: "Animaux", link: "/AllAnimal", link2: "/OneAnimal" },
  ];
  return (
    <header className="font-[family-name:var(--font-geist-mono)">
      <nav className="flex justify-center w-full">
        <ul className="bg-violet-600 font-bold w-full flex  p-10 justify-evenly">
          {navData.map(
            (
              li: { name: string; link: string; link2?: string },
              index: number
            ) => (
              <Link href={li.link} key={index}>
                <motion.li
                  whileHover={{ color: "black", scale: 1.3 }}
                  key={index}
                  whileTap={{ scale: 1 }}
                  style={{
                    color:
                      pathname === li.link || pathname === li.link2
                        ? "black"
                        : "white",
                  }}
                  className="px-4"
                >
                  {li.name}
                </motion.li>
              </Link>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
