import { pca } from "@/services/msal";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function handler(req: NextRequest, res: any) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const code = searchParams.get("code");

  const tokenRequest = {
    code: code,
    scopes: [
      "User.Read",
      "ChannelMessage.Send",
      "Chat.Create",
      "User.ReadBasic.All",
    ],
    redirectUri: "http://localhost:3002/api/redirect",
  };
  const cookieInstance = cookies();
  //@ts-ignore
  const response = await pca.acquireTokenByCode(tokenRequest);
  cookieInstance.set("session", response.accessToken);
  return redirect("/");
}

export { handler as GET, handler as POST };
