import { NextResponse } from 'next/server'
 

export function middleware(request) {

    
    const path = request.nextUrl.pathname
    
    const isPublicPath = path ==="/login" || path === "/signin"

    const token = request.cookies.get('authCookie')?.value || ''

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/dashboard/home',request.nextUrl))
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/signin'
  ]
}