import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "@/lib/session";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();

  const token = getToken();
  const { pathname } = request.nextUrl;
  const siginInURL = new URL("/auth/signin", request.url);

  if (token == "") {
    if (request.nextUrl.pathname == "/auth/signin") {
      return NextResponse.next();
    }

    return NextResponse.redirect(siginInURL);
  }

  if (token != "" && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  
  return res;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
