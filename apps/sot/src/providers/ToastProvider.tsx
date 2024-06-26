"use client";

import { ToastProvider as Provider } from "@smarthub/ui";

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider>{children}</Provider>;
}
