"use client";
import CalendarIcon from '../public/calendar-icon.svg'
import ContainerIcon from '../public/Container-icon.svg'
import Link from "next/link";
import Image from "next/image";

export default function SideMenu() {
  return (
    <div className="bg-gray-100 h-full text-gray-500 flex border-r border-gray-300">
      <div className="flex flex-col items-center space-y-10 py-6">
        <div className="space-y-48 rounded-md bg-white">
          <ul>
            <li className="p-5 sm:p-3 sm:text-[14px]">
              <Link href={"/"} className="flex flex-col hover:text-blue-600 items-center justify-center font-semibold text-blue-500">
                <Image src={ContainerIcon} alt="Container icon" width={40}/>
                Container
              </Link>
            </li>
            <li className="p-5 sm:p-3 sm:text-[14px]">
              <Link href={"/agenda"} className="flex flex-col hover:text-blue-600 items-center justify-center font-semibold">
                <Image src={CalendarIcon} width={45} alt="Calendar icon"/>
                Agenda
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
