'use client';

import Image from "next/image";
import Link from "next/link";

const CharacterCard = ({ character }) => {
  return (
    <Link href={`/characters/${character.id}`}>
      <div className="group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 shadow-lg transition duration-300 hover:shadow-red-500/30">

        {/* Image */}
        <div className="relative w-full h-[350px] overflow-hidden">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>

        {/* Content */}
        <div className="absolute bottom-0 p-4 z-10">
          <h2 className="text-white text-xl font-bold tracking-wide">
            {character.name}
          </h2>

          <p className="text-sm text-gray-300">
            {character.anime}
          </p>

          {/* Hidden description on hover */}
          <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
            {character.description}
          </p>
        </div>

        {/* Glow Border Effect */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-red-500/50 transition duration-300"></div>

      </div>
    </Link>
  );
};

export default CharacterCard;