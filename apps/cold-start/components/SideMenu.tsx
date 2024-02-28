"use client";
import { RiCalendarEventLine } from "react-icons/ri";
import Link from "next/link";
import { GoContainer } from "react-icons/go";

export default function SideMenu() {
  return (
    <div className="bg-gray-100 h-full text-gray-500 flex border-r border-gray-300 sm:h-full">
      <div className="flex flex-col items-center space-y-10 py-6">
        <div className="space-y-48 rounded-md bg-white">
          <ul>
            <li className="p-5 sm:p-3 sm:text-[14px]">
              <Link
                href={"/"}
                className="flex flex-col hover:text-blue-600 items-center justify-center font-semibold"
              >
                <GoContainer width={100} />
                Container
              </Link>
            </li>
            <li className="p-5 sm:p-3 sm:text-[14px]">
              <Link
                href={"/agenda"}
                className="flex flex-col hover:text-blue-600 items-center justify-center font-semibold"
              >
                <RiCalendarEventLine width={200} />
                Agenda
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
