import { pca } from "@/services/msal";
import { AuthorizationCodeRequest } from "@azure/msal-node";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
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
  } as AuthorizationCodeRequest;

  const cookieInstance = cookies();
  const response = await pca.acquireTokenByCode(tokenRequest);

  console.log(response.idToken);

  cookieInstance.set("sot-user-token", response.idToken, {
    maxAge: 60 * 60 * 24 * 1,
    sameSite: "strict",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  });
  return redirect("/");
}
