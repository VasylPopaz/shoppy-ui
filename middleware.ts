import { NextRequest, NextResponse } from "next/server";

import { authenticated } from "./app/auth/actions/authenticated";
import { unauthenticatedRoutes } from "./app/common/constants/routes";

export const middleware = async (request: NextRequest) => {
  const isAuthenticated = await authenticated();
  const isUnauthenticatedRoute = unauthenticatedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route.path)
  );

  if (!isAuthenticated && !isUnauthenticatedRoute) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
  if (isAuthenticated && isUnauthenticatedRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
