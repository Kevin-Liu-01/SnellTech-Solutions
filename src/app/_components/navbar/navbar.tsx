"use client";

import Link from "next/link";
import { GitHubLogoIcon, TransformIcon } from "@radix-ui/react-icons";
import { CircleUserRound } from "lucide-react";

import { Button, DropdownMenu } from "@radix-ui/themes";
import { ThemeSwitcher } from "./theme-switcher";

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../Optiker-K.woff2" });

export const Navbar = (props: {
  session: { user: { email: string; id: string; image: string; name: string } };
}) => {
  console.log(props.session);
  return (
    <nav className="flex h-24 flex-row justify-between px-8">
      <Link href="/" className="my-auto flex flex-row gap-x-4">
        <TransformIcon className="my-auto size-8" />
        <p className={`hidden text-2xl font-bold sm:block ${myFont.className}`}>
          SNELLTECH
        </p>
      </Link>
      <div className="flex items-center gap-x-4">
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
                <img
                  src={props.session.user.image}
                  alt="user"
                  className="size-8 rounded-full"
                />
              ) : (
                <CircleUserRound className="size-5 transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content align="end">
            {props.session && (
              <>
                <DropdownMenu.Item>
                  <div className="rounded-full font-semibold no-underline transition">
                    {props.session?.user?.name}
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
                <DropdownMenu.Separator />
              </>
            )}
            <DropdownMenu.Item>
              <Link
                href={props.session ? "/api/auth/signout" : "/api/auth/signin"}
              >
                <button className="rounded-full  font-semibold no-underline  transition">
                  {props.session ? "Sign out" : "Sign in"}
                </button>
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
};
