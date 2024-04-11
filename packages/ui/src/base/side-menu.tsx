"use client";
import Link from "next/link";
import { SignOutButton } from "./sign-out-button";

type option = {
  app_name: string;
  href: string;
  icon: React.ReactNode;
};

export default function SideMenu({ options }: { options: option[] }) {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-500 flex border-r sm:h-full w-[100px] justify-center">
      <div className="flex flex-col items-center space-y-10 py-6">
        <div className="space-y-48 rounded-md">
          <ul className="flex flex-col items-center w-full">
            {options.map((option: option) => (
              <li className="p-5 sm:p-3 sm:text-[14px]">
                <Link
                  href={option.href}
                  className="flex flex-col text-center items-center justify-center font-semibold"
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
