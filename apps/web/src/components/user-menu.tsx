"use client";

import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { signIn, signUp } from "@/server/user";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function UserMenu() {
  const session = authClient.useSession();
  console.log(session);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-4"
    >
      {session.data ? (
        <Button
          variant="outline"
          className="bg-white text-black h-8 rounded-full"
        >
          Sign Out
        </Button>
      ) : (
        <Button
          variant="outline"
          className="bg-white text-black h-8 rounded-full"
          onClick={signIn}
        >
          Sign In
        </Button>
      )}
    </motion.div>
  );
}
