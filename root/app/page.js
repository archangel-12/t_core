"use client";

import Link from "next/link";
import "./page.css";
import Loading from "./loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loading />;

  return (
    <div className="homepage">
      <div className="left">
        <h1>Terra Incognita</h1>
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
        <img src="./ti.png" alt="lol" />
        <div className="links">
          <button
            onClick={() => setShowModal("terms")}
            className="bg-transparent border-none p-0 text-black underline cursor-pointer"
          >
            Syarat & Ketentuan
          </button>
          <span className="content-between">|</span>
          <button
            onClick={() => setShowModal("privacy")}
            className="bg-transparent border-none p-0 text-black underline cursor-pointer"
          >
            Kebijakan Privasi
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed top-[0] left-[0] w-full h-full bg-[rgba(0,_0,_0,_0.4)] flex items-center justify-center"
          onClick={() => setShowModal(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[1.2rem] mb-[10px]">
              {showModal === "terms"
                ? "Syarat & Ketentuan"
                : "Kebijakan Privasi"}
            </h2>
            <div className="modal-body">
              {showModal === "terms" ? (
                <>
                  <p className="mx-[0] my-[10px] text-[0.95rem] text-amber-100">
                    1. Chatbot ini hanya untuk tujuan edukatif dan informasi
                    sejarah.
                  </p>
                  <p className="mx-[0] my-[10px] text-[0.95rem] text-amber-100">
                    2. Pengguna setuju untuk tidak menggunakan layanan ini untuk
                    menyebarkan informasi palsu atau tidak pantas.
                  </p>
                  <p className="mx-[0] my-[10px] text-[0.95rem] text-amber-100">
                    3. Pengembang tidak bertanggung jawab atas interpretasi
                    pengguna terhadap jawaban yang diberikan AI.
                  </p>
                </>
              ) : (
                <>
                  <p className="mx-[0] my-[10px] text-[0.95rem] text-amber-100">
                    1. Pengembang tidak menyimpan informasi pribadi pengguna.
                  </p>
                  <p className="mx-[0] my-[10px] text-[0.95rem] text-amber-100">
                    2. Interaksi dengan AI tidak dicatat kecuali untuk debugging
                    internal.
                  </p>
                  <p className="mx-[0] my-[10px] text-[0.95rem] text-amber-100">
                    3. Tidak ada data yang dibagikan kepada pihak ketiga.
                  </p>
                </>
              )}
            </div>
            <button
              onClick={() => setShowModal(null)}
              className="mt-[15px] px-[16px] py-[8px] bg-[black] text-[whitesmoke] border-none rounded-[6px] cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}