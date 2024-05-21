import { pca } from "@/services/msal";
import { NextRequest, NextResponse } from "next/server";

export async function handler(req: NextRequest, res: NextResponse) {
  const authCodeUrlParameters = {
    scopes: [
      "User.Read",
      "ChannelMessage.Send",
      "Chat.Create",
      "User.ReadBasic.All",
    ],
    redirectUri: "http://localhost:3002/api/redirect",
  };

  const response = await pca.getAuthCodeUrl(authCodeUrlParameters);

  return NextResponse.redirect(response);
}

export { handler as GET, handler as POST };
