import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="shadow-md bg-[#4f5054]">
      <div className="flex">
        <div className="header-menu">
          <Image alt="Sovereign House Logo" width={100} height={100} src="/images/SovereignHouse-logo.png"/>
        </div>
      </div>
    </header>
  );
}