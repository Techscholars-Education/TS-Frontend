import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname, origin } = request.nextUrl;

  // Define paths
  const isPublicPath = pathname === "/login" || pathname === "/signin";
  const isPaymentPath = pathname === "/payment";
  const isAdminPath = pathname.startsWith("/admin");

  // Get cookies
  const token = request.cookies.get('access_token')?.value || '';
  const admin = request.cookies.get('admin_user')?.value || '';

  // Redirect to dashboard/home if a user is logged in and on a public path
  if (isPublicPath && token && pathname !== '/dashboard/home') {
    return NextResponse.redirect(new URL('/dashboard/home', origin));
  }

  // Redirect to admin/home if an admin is logged in and on a public path
  if (isPublicPath && admin && pathname !== '/admin/home') {
    return NextResponse.redirect(new URL('/admin/home', origin));
  }

  // Redirect to login if trying to access a protected path without a token
  if (!isPublicPath && !token && !isAdminPath) {
    return NextResponse.redirect(new URL('/login', origin));
  }

  // Redirect to login if trying to access the payment path without a token
  if (isPaymentPath && !token) {
    return NextResponse.redirect(new URL('/login', origin));
  }

  // Redirect to login if trying to access an admin path without admin cookie
  if (isAdminPath && !admin) {
    return NextResponse.redirect(new URL('/login', origin));
  }

  return NextResponse.next();
}

// "Matching Paths"
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/signin',
    '/payment',
    '/admin/:path*',
  ],
};
