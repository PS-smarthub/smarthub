import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "./lib/session";

export async function middleware(request: NextRequest) {
  const token = await getToken();
  const { pathname } = request.nextUrl;
  console.log("token: ",token)

  if (token == "") {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  if (token != undefined && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
