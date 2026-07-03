import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="shadow-md">
      <div className="flex">
        <div className="header-menu">
          <Image src="/images"/>
        </div>
      </div>
    </header>
  );
}