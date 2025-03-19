"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQueryStates } from "nuqs";
import { parseAsBoolean } from "nuqs";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Skeleton } from "./ui/skeleton";

type User = {
  id: string;
  slug: string;
  name?: string;
  email?: string;
  image?: string;
};

export function UserMenu() {
  const pathname = usePathname();
  const session = authClient.useSession();
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState<User | null>(null);

  const [_, setQueryStates] = useQueryStates({
    addCompany: parseAsBoolean.withDefault(false),
    redirect: parseAsBoolean.withDefault(false),
  });

  useEffect(() => {
    if (session.data) {
      setUser({
        id: session.data.user.id,
        slug: session.data.user.id,
        name: session.data.user.name,
        email: session.data.user.email,
        image: session.data.user.image ?? undefined,
      });
      setIsLoading(false);
    }
  }, [session.data]);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <Skeleton className="size-6 rounded-none" />
      </div>
    );
  }
  const handleSignOut = async () => {
    await authClient.signOut();
    setUser(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-4"
    >
      {user ? (
        <div className="flex items-center gap-2">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Avatar className="size-6 rounded-none cursor-pointer">
                <AvatarImage src={user?.image} className="rounded-none" />
                <AvatarFallback className="text-xs bg-[#878787]">
                  {user?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-32"
              side="bottom"
              sideOffset={8}
            >
              <DropdownMenuItem asChild>
                <Link href={`/u/${user?.slug}`}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button
                  type="button"
                  onClick={() =>
                    setQueryStates({ addCompany: true, redirect: true })
                  }
                  className="w-full text-left"
                >
                  Add Company
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/jobs/new">Post a job</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Link href={`/login?next=${pathname}`}>
          <Button
            variant="outline"
            className="bg-white text-black h-8 rounded-full"
          >
            Sign In
          </Button>
        </Link>
      )}
    </motion.div>
  );
}
