'use client';

import Image from "next/image";

export default function Page() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/tanjiro-kamado.jpg"
        alt="Tanjiro"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
          Welcome to the Anime World
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl">
          Dive into epic battles, unforgettable characters, and legendary stories.
        </p>

        <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-full text-lg font-semibold shadow-lg">
          Explore Now ⚔️
        </button>
      </div>

    </div>
  );
}