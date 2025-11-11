import "./Sidebar.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <span className="font-semibold text-[20px] mb-[40px] text-[#111]">
        Dashboard
      </span>
      <Link href="/dashboard" className="text-base text-[#111]">
        Buat Percakapan Baru
      </Link>
      <Link
        target="_blank"
        rel="noopener nonreferrer"
        href={"https://github.com/archangel-12/t_core/blob/main/root/readme.md"}
        className="text-base text-[#111]"
      >
        Apa itu Ti.?
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/r3yanson/"
        className="text-base text-[#111]"
      >
        Kontak developer
      </Link>

      <hr className="h-0.5 bg-[#ddd] opacity-10 mx-0 my-5 rounded-[5px] border-[none]" />
      <span className="font-semibold text-[20px] mb-[40px] text-[#111]">
        Percakapan terakhir
      </span>
      <div className="list">
        <Link href="/dashboard">hello</Link>
      </div>
      <hr className="h-0.5 bg-[#ddd] opacity-10 mx-0 my-5 rounded-[5px] border-[none]" />
      <div className="sawer_menyawer">
        <img
          className="h-5 w-5 object-contain"
          src="./favicon.ico"
          alt="ti._logo"
        />
        <div className="flex flex-col">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtu.be/dQw4w9WgXcQ?si=hDcitLlzDaEERlS7"
            className="text-sky-400"
          >
            <span>Sawer menyawer</span>
          </Link>
        </div>
      </div>
    </div>
  );
}