import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { ac, admin, myCustomRole, user } from "./permissions";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  trustedOrigins: ["https://localhost:3010"],
  plugins: [
    adminClient({
      ac: ac,
      roles: {
        admin,
        user,
        myCustomRole,
      },
    }),
  ],
});

export const { signIn, signOut, signUp, useSession } = authClient;
