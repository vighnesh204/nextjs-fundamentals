import CharacterCard from "@/components/CharacterCard";
import { animeData } from "@/utils/animeData"

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Anime Characters
      </h1>

      {/* FLEX layout */}
      <div className="flex flex-wrap justify-center gap-6">
        {animeData.map((char) => (
          <div key={char.id} className="w-[280px]">
            <CharacterCard character={char} />
          </div>
        ))}
      </div>

    </div>
  );
}