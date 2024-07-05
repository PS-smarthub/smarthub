import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const cookie = cookies().get("sot-user-token")?.value;
  const { pathname } = request.nextUrl;

  const siginInURL = new URL("/auth/signin", request.url);

  if (cookie === undefined) {
    if (request.nextUrl.pathname == "/auth/signin") {
      return NextResponse.next();
    }

    return NextResponse.redirect(siginInURL);
  }

  if (cookie && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return res;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
