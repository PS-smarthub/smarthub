"use client";

import { useMsal } from "@azure/msal-react";
import { redirect } from "next/navigation";
import React, { useLayoutEffect } from "react";
import Header from "@/components/header";
import SideMenu from "@/components/side-menu";
import QueryProvider from "@/providers/QueryProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/Toaster";
import "@smarthub/ui/src/globals.css"

export default function InsideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { accounts } = useMsal();

  const user = accounts[0];

  useLayoutEffect(() => {
    if (!user) {
      redirect("/auth/signin");
    }
  }, [user]);

  return (
    <QueryProvider>
      <TooltipProvider>
        <Header />
        <main  className="flex h-screen sm:h-[87%]">
          <SideMenu />
          <div className="flex-1 h-full">{children}</div>
        </main>
        <Toaster />
      </TooltipProvider>
    </QueryProvider>
  );
}
