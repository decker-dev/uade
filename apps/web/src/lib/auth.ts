import { db } from "@/db/drizzle";
import { schema } from "@/db/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import { ac, admin as adminRole, myCustomRole, user } from "./permissions";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  plugins: [
    nextCookies(),
    admin({
      ac: ac,
      roles: {
        admin: adminRole,
        user,
        myCustomRole,
      },
    }),
  ],
});
