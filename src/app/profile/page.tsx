"use client";
import {
  Link,
  Flex,
  Text,
  Button,
  Box,
  IconButton,
  Tooltip,
  Separator,
} from "@radix-ui/themes";
import Footer from "../_components/footer";
import { ScanEyeIcon, CircleUserRound, CopyIcon } from "lucide-react";
import Image from "next/image";
import { useSession } from "next-auth/react";
//Cookie reading
import { getCookie } from "cookies-next";

//Defines types for cookies
interface CookieData {
  degree: string;
  equivalent: string;
  description: string;
}

export default function Profile() {
  const { data: session, status } = useSession();

  const leftCookie = getCookie("Left");
  const left: CookieData | null = leftCookie
    ? (JSON.parse(leftCookie) as CookieData)
    : null;

  const rightCookie = getCookie("Right");
  const right: CookieData | null = rightCookie
    ? (JSON.parse(rightCookie) as CookieData)
    : null;

  return (
    <>
      <main className="relative h-[calc(100vh-6rem)] font-inter text-primary">
        {status !== "authenticated" ? (
          <Flex
            justify="center"
            align="center"
            className="absolute left-0 top-0 z-50 h-full w-full bg-white/90 text-xl transition-all dark:bg-[#111113]/90 "
          >
            <Flex
              justify="center"
              direction="column"
              align="center"
              gap="4"
              className="mb-12 font-optiker"
            >
              <Flex align="center" gap="4">
                <ScanEyeIcon className="size-12" />
                <Text>
                  SNELLTECH{" "}
                  <span className="text-snelltechPurple dark:text-snelltechGreen">
                    SOLUTIONS
                  </span>
                </Text>
              </Flex>
              <Text>Create an account to view your results.</Text>
              <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
                <Button className="mt-2 bg-snelltechPurple p-4 font-optiker text-lg dark:bg-snelltechGreen">
                  Sign In
                </Button>
              </Link>
            </Flex>
          </Flex>
        ) : (
          <></>
        )}
        <Flex direction="column" justify="start" className="h-full">
          <section className="relative w-full overflow-hidden bg-snelltechPurple/50 px-4 py-8 dark:bg-snelltechGreen/70">
            <Flex
              gap="8"
              align="center"
              className="container relative z-10 mx-auto px-4 md:px-10"
            >
              {session?.user?.image ? (
                <Image
                  src={session?.user?.image}
                  alt="user"
                  height="200"
                  width="200"
                  className="aspect-[200/200] rounded-full bg-snelltechPurple object-cover dark:bg-snelltechGreen"
                />
              ) : (
                <Box>
                  <CircleUserRound
                    height="200"
                    width="200"
                    className="aspect-[200/200] rounded-full bg-snelltechPurple object-cover text-white dark:bg-snelltechGreen"
                  />
                </Box>
              )}
              <Flex direction="column" className="space-y-4">
                <Flex
                  direction="column"
                  className="font-optiker text-3xl font-bold tracking-tight"
                >
                  Welcome,
                  <Text className="text-5xl  sm:text-6xl md:text-7xl">
                    {session?.user?.name ?? "User"}
                  </Text>
                </Flex>
                <Flex
                  direction="column"
                  gap="2"
                  className="max-w-[600px] text-lg font-semibold text-foreground/70"
                >
                  <Text className="">
                    Email: {session?.user?.email ?? "None"}
                  </Text>
                  <Text className="">ID: {session?.user?.id ?? "None"} </Text>
                </Flex>
              </Flex>
              <Box className="rotate absolute right-16 z-[5] dark:invert">
                <Image
                  src="/images/surreal-flying-bulbs.svg"
                  height="500"
                  width="500"
                  alt="freelancer"
                />
              </Box>
            </Flex>
          </section>
          <section className="w-full px-8 py-12 md:px-16">
            <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
              <Flex
                direction="column"
                className="relative h-full rounded-lg border-2 border-dashed border-primary/20 bg-background p-4 font-inter text-sm text-primary dark:bg-secondary"
              >
                <Text className="font-optiker text-4xl">Left Eye</Text>
                <Separator my="2" size="4" />
                <Tooltip content="Copy visual acuity">
                  <IconButton
                    size="1"
                    aria-label="Copy value"
                    color="gray"
                    variant="ghost"
                    onClick={() =>
                      navigator.clipboard.writeText(left?.degree ?? "")
                    }
                    className="absolute right-0 top-0 m-4"
                  >
                    <CopyIcon />
                  </IconButton>
                </Tooltip>

                <Text className="font-optiker text-5xl font-extrabold">
                  {left?.degree ?? "0/20"}
                </Text>
                <Text className="font-optiker text-2xl">Visual Acuity</Text>
                <Separator my="2" size="4" />
                <Text className="text-lg">{left?.equivalent ?? "No data"}</Text>
                <Separator my="2" size="4" />
                <Text className="text-base">
                  {left?.description ??
                    "Take the test to get your visual acuity for your left eye!"}
                </Text>
              </Flex>
              <Flex
                direction="column"
                className="relative h-full rounded-lg border-2 border-dashed border-primary/20 bg-background p-4 font-inter text-sm text-primary dark:bg-secondary"
              >
                <Text className="font-optiker text-4xl">Right Eye</Text>
                <Separator my="2" size="4" />
                <Tooltip content="Copy visual acuity">
                  <IconButton
                    size="1"
                    aria-label="Copy value"
                    color="gray"
                    variant="ghost"
                    onClick={() =>
                      navigator.clipboard.writeText(right?.degree ?? "")
                    }
                    className="absolute right-0 top-0 m-4"
                  >
                    <CopyIcon />
                  </IconButton>
                </Tooltip>

                <Text className="font-optiker text-5xl font-extrabold">
                  {right?.degree ?? "0/20"}
                </Text>
                <Text className="font-optiker text-2xl">Visual Acuity</Text>
                <Separator my="2" size="4" />
                <Text className="text-lg">
                  {right?.equivalent ?? "No data"}
                </Text>
                <Separator my="2" size="4" />
                <Text className="text-base">
                  {right?.description ??
                    "Take the test to get your visual acuity for your left eye!"}
                </Text>
              </Flex>
            </div>
          </section>
        </Flex>
        <Footer />
      </main>
    </>
  );
}
