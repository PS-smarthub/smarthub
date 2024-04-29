import Link from "next/link";
//@ts-ignore
import Logo from "../assets/user.svg";
import Image from "next/image";
import { ToolTip } from "@smarthub/ui";
import { IoIosNotificationsOutline } from "react-icons/io";

export function Header({ logo }: { logo: string }) {
  return (
    <header className="w-[100%] select-none border-5 border-b">
      <nav className="py-3 px-1">
        <div className="flex items-center justify-between pl-14 pr-10">
          <a
            href="/"
            className="font-bold text-blue-50 text-xl py-2 flex items-center gap-2"
          >
            <div className="flex items-center">
              <span>{logo}</span>
            </div>
          </a>
          <div className="flex items-center gap-5">
            <Link href="/notify" className="p-2">
              <ToolTip text="Notificações">
                <IoIosNotificationsOutline color="gray" size={30} />
              </ToolTip>
            </Link>
            <Link href="/profile" className="p-2">
              <ToolTip text="Perfil">
                <Image
                  src={Logo}
                  alt="Profile icon"
                  className="w-[40px] h-[40px] rounded-full p-1 bg-blue-50"
                />
              </ToolTip>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
