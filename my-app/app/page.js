'use client';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next.js</h1>
      <Link href="/about">About</Link>
      <br />
      <Link href="/services">Services</Link>
      <br />
      <Link href="/products">Products</Link>

    </>
  );
}
