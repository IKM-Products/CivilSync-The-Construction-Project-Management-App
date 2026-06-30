import { betterAuth } from "better-auth";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  trustedOrigins: [
    process.env.NEXT_PUBLIC_APP_URL!,
  ],
});