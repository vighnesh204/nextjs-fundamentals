'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div className="w-full h-14 bg-white flex items-center justify-between px-4">
      <div className="text-black font-bold text-2xl ">🚀 Anime</div>
      <div>
        <ul className="flex items-center justify-center gap-4">
           <Link href="/" className={pathname === "/" ? "text-blue-500" : "text-black"}>
            <li>Home</li>
          </Link>
          <Link href="/characters" className={pathname === "/characters" ? "text-blue-500" : "text-black"}>
            <li>Characters</li>
          </Link>
          <Link href="/episodes" className={pathname === "/episodes" ? "text-blue-500" : "text-black"}>
            <li>Episodes</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
