import Image from "next/image";
import Logo from "./Logo";
// @ts-ignore
import BoschLogo from "../assets/Bosch_symbol_logo_black.svg";

export const Header = ({ app_name }: { app_name: string }) => {
  return (
    <header className="w-[100%] select-none border-5 border-b border-gray-300 bg-white">
      <nav className="py-3 px-1">
        <div className="flex items-center justify-between pl-14 pr-10">
          <div>
            <Logo app_name="COLD START" />
          </div>
          <div className="">
            <Image src={BoschLogo} alt="Bosch logo" width={140} priority />
          </div>
        </div>
      </nav>
    </header>
  );
};
