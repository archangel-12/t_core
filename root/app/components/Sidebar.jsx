import "./Sidebar.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <span className="title">Dashboard</span>
      <Link href="/dashboard" className="text-base text-[#111]">Buat Percakapan Baru</Link>
      <Link href="/dashboard" className="text-base text-[#111]">Apa itu Velvet?</Link>
      <Link href="/dashboard" className="text-base text-[#111]">Kontak developer</Link>

      <hr className="h-0.5 bg-[#ddd] opacity-10 mx-0 my-5 rounded-[5px] border-[none]" />
      <span className="font-semibold text-[20px] mb-[40px] text-[#111]">Percakapan terakhir</span>
      <div className="list">
        <Link href="/dashboard">The chat title</Link>
      </div>
      <hr className="h-0.5 bg-[#ddd] opacity-10 mx-0 my-5 rounded-[5px] border-[none]" />
      <div className="sawer_menyawer">
        <img className="h-5 w-5 object-contain" src="./favicon.png" alt="velvet_logo" />
        <div className="flex flex-col">
          <span>Sawer menyawer</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;