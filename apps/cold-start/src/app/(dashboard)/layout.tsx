"use client";

import { useMsal } from "@azure/msal-react";
import { redirect } from "next/navigation";
import React, { useLayoutEffect } from "react";
import Header from "@/components/header";
import SideMenu from "@/components/side-menu";
import QueryProvider from "@/providers/QueryProvider";
import { TooltipProvider } from "@smarthub/ui";
import { Toaster } from "@smarthub/ui";
import "@smarthub/ui/src/globals.css";

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
        <main className="flex h-full">
          <SideMenu />
          {children}
        </main>
        <Toaster />
      </TooltipProvider>
    </QueryProvider>
  );
}
