import { NextResponse, NextRequest } from 'next/server';
import { fallbackLng, languages } from './i18n/settings';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const url = new URL(`/${fallbackLng}${pathname}`, req.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
