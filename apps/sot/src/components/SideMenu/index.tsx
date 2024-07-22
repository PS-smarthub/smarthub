"use client";
import Link from "next/link";
import { OptionMenu } from "../../types";
import { SignOutButton } from "./sign-out-button";
import { usePathname } from "next/navigation";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

export function SideMenu() {
  const pathname = usePathname();

  const MENU_OPTIONS: OptionMenu[] = [
    {
      app_name: "OS",
      href: "/os",
      icon: <MdMiscellaneousServices className="w-[40px] h-[40px]" />,
    },
    {
      app_name: "Projetos",
      href: "/projects",
      icon: <GrProjects className="w-[35px] h-[53px]" />,
    },
  ];

  return (
    <div className="bg-gray-100 h-full text-gray-500 flex w-[95px] border-r justify-center">
      <div className="flex flex-col items-center space-y-10 py-6">
        <div className="space-y-48 rounded-md">
          <ul className="flex flex-col items-center w-full">
            {MENU_OPTIONS.map((option: OptionMenu) => (
              <li className="sm:py-1 sm:text-[14px]" key={option.app_name}>
                <Link
                  href={option.href}
                  className={`flex flex-col text-center items-center justify-center font-semibold hover:text-blue-50 hover:fill-blue-50 ${pathname === option.href && "text-blue-50 fill-blue-50"}`}
                >
                  {option.icon}
                  {option.app_name}
                </Link>
              </li>
            ))}

            <li className="sm:p-3 sm:text-[14px] flex w-full justify-center">
              <SignOutButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
