"use client";

import { useMsal } from "@azure/msal-react";
import { redirect } from "next/navigation";
import React, { useEffect, useLayoutEffect } from "react";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import QueryProvider from "@/providers/QueryProvider";
import { useAuthStore } from "@/stores/useContainer";

export default function InsideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { accounts } = useMsal();
  const { setToken } = useAuthStore();

  const user = accounts[0];

  useLayoutEffect(() => {
    if (!user) {
      redirect("/auth/signin");
    }
  }, [user]);

  

  return (
    <QueryProvider>
      <Header />
      <main className="flex h-full sm:h-[88%]">
        <SideMenu />
        <div className="flex-1 h-full">{children}</div>
      </main>
    </QueryProvider>
  );
}
