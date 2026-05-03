'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathname = usePathname();
  return (
  <div className="absolute top-0 left-0 w-full h-14 z-50 flex items-center justify-between px-6">
         <div className="text-white font-bold text-xl tracking-wide">
        🚀 Anime
      </div>
      <div>
        <ul className="flex items-center justify-center gap-4">
           <Link href="/" className={pathname === "/" ? "text-blue-500" : "text-white"}>
            <li>Home</li>
          </Link>
          <Link href="/characters" className={pathname === "/characters" ? "text-blue-500" : "text-white"}>
            <li>Characters</li>
          </Link>
          <Link href="/episodes" className={pathname === "/episodes" ? "text-blue-500" : "text-white"}>
            <li>Episodes</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
