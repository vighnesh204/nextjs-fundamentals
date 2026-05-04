'use client';

import { animeData } from "@/utils/animeData";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function CharacterDetail() {
  const params = useParams();
  const id = params?.id;

  const character = animeData.find((c) => c.id === id);

  if (!character) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Character not found
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">

      {/* 🔥 Background Image */}
      <Image
        src={character.image}
        alt={character.name}
        fill
        priority
        className="object-cover"
      />

      {/* 🔥 Smooth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* 🔥 Bottom Content */}
      <div className="absolute bottom-0 z-10 w-full px-6 md:px-12 pb-10">

        <h1 className="text-3xl md:text-6xl font-extrabold">
          {character.name}
        </h1>

        <p className="mt-2 text-red-400 font-semibold text-lg">
          {character.anime}
        </p>

        <p className="mt-4 max-w-2xl text-gray-200 text-sm md:text-lg">
          {character.description}
        </p>

        <button onClick={()=> alert("🚀 Added to watchlist 😍")} className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-full font-semibold shadow-lg">
          Watch Now ⚔️
        </button>

      </div>
    </div>
  );
}