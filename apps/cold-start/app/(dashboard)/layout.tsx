"use client"

import { useMsal } from "@azure/msal-react";
import { redirect } from "next/navigation";
import React, { useLayoutEffect } from "react";
import { Header } from "@smarthub/ui";
import SideMenu from "../../components/SideMenu";

export default function InsideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { accounts } = useMsal();

  useLayoutEffect(() => {
    if (!accounts[0]) {
      redirect("/auth/signin");
    }
  }, []);
  return (
    <>
      <Header app_name="COLD START" />
      <main className="flex h-[90%] sm:h-[87%]">
        <SideMenu />
        <div className="flex-1 h-full">{children}</div>
      </main>
    </>
  );
}
