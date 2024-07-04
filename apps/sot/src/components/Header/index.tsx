import Link from "next/link";
import { ToolTip } from "@smarthub/ui";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import BoschLogo from "@/assets/images/boschx.png";

export function Header() {
  return (
    <header className="w-[100%] select-none border-5 border-b">
      <nav className="py-3 px-1">
        <div className="flex items-center justify-between pl-14 pr-10">
          <a
            href="/"
            className="font-bold text-blue-50 text-xl py-2 flex items-center gap-2"
          >
            <div className="flex items-center">
              <Image src={BoschLogo} alt="Bosch logo" className="w-full h-full sm:w-[100px]"  loading="lazy"/>
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
                <div className="bg-blue-50 rounded-full hover:bg-blue-600">
                  <AiOutlineUser color="white" size={40} className="p-2" />
                </div>
              </ToolTip>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
