import Image from "next/image";
// @ts-ignore
import BoschLogo from "../assets/Bosch_symbol_logo_black.svg";

export const Header = ({app_name}: {app_name: string}) => {
  return (
    <>
      <div className="w-[100%] border-5 border-b border-gray-300">
        <nav className="py-3 px-1">
          <div className="flex items-center justify-between pl-14 pr-10">
            <div>
              <h1 className="font-bold text-lg text-blue-700">{app_name}</h1>
            </div>
            <div className="">
              <Image src={BoschLogo} alt="Bosch logo" width={140} priority />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
