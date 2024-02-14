"use client"

import {MsalProvider} from "@azure/msal-react"
import { msalInstance } from "../service/msal"

export default function MSALProvider({children}: {children: React.ReactNode}) {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>
}
