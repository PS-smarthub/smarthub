import Image from "next/image";
import UserIcon from "@/public/user.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-[100%] select-none border-5 border-b border-gray-300 bg-white">
      <nav className="py-3 px-1">
        <div className="flex items-center justify-between pl-14 pr-10">
          <div className="font-bold text-blue-50 text-l py-2">
            <a href="/">
              COLD START
            </a>
          </div>
          <Link href="/profile" className="p-2">
            <Image
              src={UserIcon}
              alt="User icon"
              className="bg-blue-50 rounded-full p-1 w-[40px]"
              priority
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
