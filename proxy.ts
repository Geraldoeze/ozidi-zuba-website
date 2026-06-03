import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Keep this explicitly to catch unauthorized access to admin panels
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // 1. Explicitly match the admin dashboard and all sub-routes
    "/admin(.*)",
    // 2. Explicitly match your API routes so you can check user headers there
    "/api/(.*)",
    // 3. Always run for dynamic server actions and internal trpc endpoints if you use them
    "/(api|trpc)(.*)"
  ],
};