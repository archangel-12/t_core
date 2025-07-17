"use client"

import Link from "next/link";
import "./page.css";
import Loading from "./loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loading />;

  return (
    <div className="homepage">
      <div className="left">
        <h1>Velvet</h1>
        <h2 className="text-[black]">Your Personal History Companion</h2>
        <h3 className="font-normal max-w-[70%] text-[black]">
          Explore the past, learn something new every day
        </h3>
        <Link
          href="/dashboard"
          className="px-[25px] py-[15px] bg-[#00f0ff] text-[black] rounded-[20px] text-[14px] mt-[20px] no-underline transition-all duration-300 ease-in-out hover:bg-[whitesmoke] hover:text-[#00f0ff]"
        >
          let's get on with it :)
        </Link>
      </div>
      <div className="terms">
        <img src="./favicon.png" alt="lol" />
        <div className="links">
          <Link href="/">Syarat & Ketentuan</Link>
          <span>|</span>
          <Link href="/">Kebijakan Privasi</Link>
        </div>
      </div>
    </div>
  );
}