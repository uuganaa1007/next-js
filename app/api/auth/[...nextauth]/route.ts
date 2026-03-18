// This single file handles ALL NextAuth routes:
//   GET  /api/auth/signin
//   GET  /api/auth/signout
//   GET  /api/auth/session
//   GET  /api/auth/callback/:provider
//   POST /api/auth/signin/:provider
//   POST /api/auth/signout
//
// `handlers` comes from lib/auth.ts which is the central config.

import { handlers } from "@/lib/auth";

export const { GET, POST } = handlers;
