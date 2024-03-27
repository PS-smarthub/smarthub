import Image from "next/image";
import UserIcon from "@/public/user.svg";
import Link from "next/link";
import Logo from "@/public/Logo.svg";
import {ToolTipBase} from "@smarthub/ui";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Header() {
  return (
    <header className="w-[100%] select-none border-5 border-b">
      <nav className="py-3 px-1">
        <div className="flex items-center justify-between pl-14 pr-10">
          <a
            href="/"
            className="font-bold text-blue-50 text-xl py-2 flex items-center gap-2"
          >
            <h1>COLD START</h1>
            <Image src={Logo} alt="Cold Start logo" className="w-[40px]" />
          </a>
          <div className="flex items-center gap-5">
            <Link href="/notify" className="p-2">
              <ToolTipBase text="Notificações">
                <IoIosNotificationsOutline color="gray" size={30}/>
              </ToolTipBase>
            </Link>
            <Link href="/profile" className="p-2">
              <ToolTipBase text="Perfil">
                <Image
                  src={UserIcon}
                  alt="User icon"
                  className="bg-blue-50 rounded-full p-1 w-[40px] hover:bg-blue-600"
                  priority
                />
              </ToolTipBase>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
