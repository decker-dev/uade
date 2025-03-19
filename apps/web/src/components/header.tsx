"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { MobileMenu } from "./mobile-menu";
import { UserMenu } from "./user-menu";

const navigationLinks = [
  { href: "/major", label: "Carreras" },
  { href: "/subject", label: "Materias" },
  { href: "/faq", label: "Preguntas Frecuentes" },
] as const;

export function Header() {
  const pathname = usePathname();

  const mainNavItems = navigationLinks.slice(0, 5);
  const dropdownNavItems = navigationLinks.slice(5);

  return (
    <div className="flex justify-between items-center mt-2 md:mt-0">
      <div className="md:fixed z-50 flex justify-between items-center top-0 px-6 py-2 w-full bg-background backdrop-filter backdrop-blur-sm bg-opacity-30">
        <Link href="/" className="font-medium font-mono text-sm">
          uade.me
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {mainNavItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-2 text-sm font-medium py-2",
                pathname.includes(link.href)
                  ? "text-primary"
                  : "text-[#878787]",
              )}
            >
              {link.label}
            </Link>
          ))}
          {/*
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 hover:bg-transparent text-[#878787] px-0 focus-visible:ring-0"
              >
                More
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {dropdownNavItems.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium",
                      pathname.includes(link.href)
                        ? "text-primary"
                        : "text-[#878787]",
                    )}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          */}
          <Suspense fallback={null}>
            <UserMenu />
          </Suspense>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}
