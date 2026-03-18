// Middleware runs on the Edge Runtime — must only import edge-safe modules.
// auth.config.ts has no Prisma/Node.js imports, so it's safe here.

import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

// NextAuth wraps our config and exposes `auth` as middleware.
// The `authorized` callback in auth.config.ts decides allow/redirect.
export const { auth: middleware } = NextAuth(authConfig);

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
