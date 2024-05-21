import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { pca } from "./services/msal";
import { getToken } from "./lib/session";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const user = getToken();
  const { pathname } = request.nextUrl;

  if (!user) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  if (user != undefined && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
