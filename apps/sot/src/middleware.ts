import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { cookies } = request;
  const token = cookies.get("sot-user-token");
  const { pathname } = request.nextUrl;
  const siginInURL = new URL("/auth/signin", request.url);

  if (token === undefined) {
    if (request.nextUrl.pathname == "/auth/signin") {
      return NextResponse.next();
    }

    return NextResponse.redirect(siginInURL);
  }

  if (token != undefined && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
