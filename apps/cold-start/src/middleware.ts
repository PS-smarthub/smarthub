import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "@/lib/session";
import { getContainerList } from "./server/actions";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();

  const token = await getToken();
  const get = await getContainerList();
  const { pathname } = request.nextUrl;
  const siginInURL = new URL("/auth/signin", request.url);

  if (token === undefined || get === null) {
    if (request.nextUrl.pathname == "/auth/signin") {
      return NextResponse.next();
    }

    return NextResponse.redirect(siginInURL);
  }

  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return res;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
