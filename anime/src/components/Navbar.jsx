import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] bg-white flex items-center justify-between px-4">
      <div className="text-black font-bold text-2xl ">🚀 Anime</div>
      <div>
        <ul className="flex items-center justify-center gap-4">
           <Link href="/"><li>Home</li></Link>
            <Link href="/characters"><li>Characters</li></Link>
            <Link href="/episodes"><li>Episodes</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
