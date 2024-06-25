import { NextResponse } from 'next/server'
 

export function middleware(request) {

    
    const path = request.nextUrl.pathname
    
    const isPublicPath = path ==="/login" || path === "/signin"
    const isPayment = path === "/payment"
    const isAdmin = path === "/admin-login"

    const token = request.cookies.get('access_token')?.value || ''
    const admin = request.cookies.get('admin_user')?.value || ''
    
    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/dashboard/home',request.nextUrl))
    }
    if(isAdmin && admin){
      return NextResponse.redirect(new URL('/admin/home',request.nextUrl))
  }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }

    if(!token && isPayment){
        return NextResponse.redirect(new URL("login",request.nextUrl))
    }

    if(!isAdmin && !admin ){
      return NextResponse.redirect(new URL('/admin-login',request.nextUrl))
  }
    

  



}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/signin',
    '/payment',
    '/admin/:path*',

  ]
}