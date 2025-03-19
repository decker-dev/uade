import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3010",
});

export const { signIn, signUp, useSession } = createAuthClient();
