import { env } from "node:process";
export const clerkEnv = {
  publishableKey: env.CLERK_PUBLISHABLE_KEY,
  secretKey: env.CLERK_SECRET_KEY,
  signInUrl: env.CLERK_SIGN_IN_URL,
  signUpUrl: env.CLERK_SIGN_UP_URL,
  signInFallbackUrl: env.CLERK_SIGN_IN_FALLBACK_URL,
  signUpFallbackUrl: env.CLERK_SIGN_UP_FALLBACK_URL,
};
