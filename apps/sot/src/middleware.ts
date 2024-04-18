import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const token = cookies().get("token")
    if(token?.value == '' && request.url == "http://localhost:3002/") {
        return NextResponse.redirect(new URL('/auth/signin', request.url))
    }

    if(token?.value && request.url == "/auth/signin") {
        return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next()
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}