"use client";

import { MsalProvider as Provider } from "@azure/msal-react";
import { msalInstance } from "@/src/services/msalService";

export default function MsalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider instance={msalInstance}>{children}</Provider>;
}
