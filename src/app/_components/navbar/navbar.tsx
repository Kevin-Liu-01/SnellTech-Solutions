"use client";

import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CircleUserRound, ScanEyeIcon } from "lucide-react";

import { Button, DropdownMenu } from "@radix-ui/themes";
import { ThemeSwitcher } from "./theme-switcher";

export const Navbar = (props: {
  session: {
    user: { id: string; name: string; email: string; image: string };
  } | null;
}) => {
  return (
    <nav className="flex h-24 flex-row justify-between px-8">
      <Link href="/" className="my-auto flex flex-row gap-x-4">
        <ScanEyeIcon className="my-auto size-8" />
        <p className="hidden font-optiker text-2xl font-bold sm:block">
          SNELLTECH{" "}
          <span className="dark:text-snelltechGreen text-snelltechPurple">
            SOLUTIONS
          </span>
        </p>
      </Link>
      <div className="flex items-center gap-x-6">
        <Link
          href="https://github.com/ap-1/json-to-udm"
          target="_blank"
          className="flex"
        >
          <Button variant="ghost">
            <GitHubLogoIcon className="size-5" />
          </Button>
        </Link>
        <ThemeSwitcher />
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost">
              {props.session ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={props.session.user.image}
                  alt="user"
                  className="size-8 rounded-full"
                />
              ) : (
                <CircleUserRound className="text-snelltechPurple dark:text-snelltechGreen size-8 transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content align="end">
            {props.session && (
              <>
                <DropdownMenu.Item>
                  <div className="rounded-full font-semibold no-underline transition">
                    Welcome, {props.session?.user?.name}
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <div className="rounded-full no-underline transition">
                    {props.session?.user?.email}
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <div className="rounded-full no-underline transition">
                    ID: {props.session?.user?.id}
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <Link href="/api/auth/signout">
                    <button className="font-semibold no-underline  transition">
                      View Profile
                    </button>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
              </>
            )}
            <DropdownMenu.Item>
              <Link
                href={props.session ? "/api/auth/signout" : "/api/auth/signin"}
              >
                <button className="rounded-full  font-semibold no-underline  transition">
                  {props.session ? "Sign Out" : "Sign In"}
                </button>
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
};
