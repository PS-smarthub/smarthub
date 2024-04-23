"use client";
import Link from "next/link";
import { SignOutButton } from "./sign-out-button";
import { OptionMenu } from "@/types";

export default function SideMenu({ options }: { options: OptionMenu[] }) {

  return (
    <div className="bg-gray-100 h-full text-gray-500 flex w-[95px] border-r justify-center">
      <div className="flex flex-col items-center space-y-10 py-6">
        <div className="space-y-48 rounded-md">
          <ul className="flex flex-col items-center w-full">
            {options.map((option: OptionMenu) => (
              <li className="p-5 sm:p-3 sm:text-[14px]" key={option.app_name}>
                <Link
                  href={option.href}
                  className="flex flex-col text-center items-center justify-center font-semibold hover:text-blue-50 hover:fill-blue-50"
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
