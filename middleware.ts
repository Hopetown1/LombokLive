import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const publicRoutes = ['/', '/events/:id', '/api/webhook/clerk', '/api/webhook/stripe', '/api/uploadthing','/sign-in(.*)', '/sign-up(.*)'];
const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    // Protect all routes that are not public
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};