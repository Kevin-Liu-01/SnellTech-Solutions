"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CircleUserRound, ScanEyeIcon } from "lucide-react";

import {
  Button,
  DropdownMenu,
  SegmentedControl,
  Flex,
  Text,
  Box,
} from "@radix-ui/themes";
import { ThemeSwitcher } from "./theme-switcher";

export const Navbar = (props: {
  session: {
    user: { id: string; name: string; email: string; image: string };
  } | null;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="z-50 flex h-24 flex-row items-center justify-between px-8">
      {/* Website Title */}
      <Link href="/" className="my-auto flex flex-row gap-x-4">
        <ScanEyeIcon className="my-auto size-8" />
        <p className="hidden font-optiker text-2xl font-bold sm:block">
          SNELLTECH{" "}
          <span className="text-snelltechPurple dark:text-snelltechGreen">
            SOLUTIONS
          </span>
        </p>
      </Link>

      {/* Page Selection */}
      <SegmentedControl.Root
        value={pathname || ""}
        className="border border-border font-optiker"
        radius="full"
        onValueChange={(value: string) => router.push(value)}
      >
        <SegmentedControl.Item value="/">Home</SegmentedControl.Item>
        <SegmentedControl.Item value="/test">Test</SegmentedControl.Item>
        <SegmentedControl.Item value="/instructions">
          Instructions
        </SegmentedControl.Item>
        <SegmentedControl.Item value="/about-us">
          About Us
        </SegmentedControl.Item>
      </SegmentedControl.Root>

      {/* User Selection Group */}
      <div className="flex items-center gap-x-6">
        <Link
          href="https://github.com/Kevin-Liu-01/SnellTech"
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
                <Flex align="center">
                  <Text className="pr-3 font-optiker ">
                    {props.session?.user?.name}
                  </Text>
                  <Box>
                    <Image
                      src={props.session.user.image}
                      alt="user"
                      height="36"
                      width="36"
                      className="size-9 rounded-full"
                    />
                  </Box>
                </Flex>
              ) : (
                <Flex align="center">
                  <Text className="pr-3 font-optiker ">Sign In</Text>
                  <Box>
                    <CircleUserRound className="size-9 text-snelltechPurple transition-all dark:text-snelltechGreen" />
                  </Box>
                </Flex>
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content align="end" className="font-inter">
            {props.session && (
              <>
                <DropdownMenu.Item>
                  <div className="rounded-full font-optiker font-semibold no-underline transition">
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
                <button className="rounded-full font-inter font-semibold no-underline transition">
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
