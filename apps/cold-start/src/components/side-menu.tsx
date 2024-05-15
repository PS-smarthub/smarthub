"use client";
import CalendarIcon from "@/public/calendar-icon.svg";
import ContainerIcon from "@/public/container-svgrepo-com.svg";
import Link from "next/link";
import SignOutButton from "./sign-out-button";
import Image from "next/image";

export default function SideMenu() {
  return (
    <div className="bg-gray-100 h-full text-gray-500 flex border-r sm:h-full">
      <div className="flex flex-col items-center space-y-10 py-6">
        <div className="space-y-48 rounded-md">
          <ul>
            <li className="p-5 sm:p-3 sm:text-[14px]">
              <Link
                href={"/"}
                className="flex flex-col items-center justify-center font-semibold"
              >
                <Image
                  src={ContainerIcon}
                  alt="Container icon"
                  className="w-[35px]"
                />
                Container
              </Link>
            </li>
            <li className="p-5 sm:p-3 sm:text-[14px]">
              <Link
                href={"/agenda"}
                className="flex flex-col  items-center justify-center font-semibold"
              >
                <Image
                  src={CalendarIcon}
                  alt="Calendar icon"
                  className="w-[40px]"
                  color="blue"
                />
                Agenda
              </Link>
            </li>
            <li className="sm:p-3 sm:text-[14px] flex w-full justify-center">
              <SignOutButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
