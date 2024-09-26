/* eslint-disable react/no-unescaped-entities */
"use client";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">Tkorp Test Technique Front</h1>
        <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Cliquez sur "Personnes" pour afficher toutes les personnes.
          </li>
          <li>Cliquez sur "Animaux" pour afficher toutes les animaux.</li>
        </ul>
      </main>
    </div>
  );
}
