import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

import { Flex, Text, Button, Grid, Box } from "@radix-ui/themes";
import { EyeIcon, MoveRightIcon } from "lucide-react";

export default async function Home() {
  noStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-inter dark:text-white">
      <header className="grid min-h-[calc(100vh-6rem)] w-full sm:grid-cols-2">
        <div className="3xl:py-16 relative flex h-full w-full flex-col overflow-hidden px-8 py-4 pb-16 2xl:pt-2">
          <h1
            className={`3xl:text-[8rem] font-optiker text-[2rem] font-extrabold tracking-tight dark:text-primary sm:text-[3rem] 2xl:text-[6rem] `}
          >
            VISION IS OUR
          </h1>
          <h1
            className={`absolute flex items-center font-optiker text-[5rem] font-extrabold tracking-tight text-[hsl(243,100%,65%)] dark:text-[#84aa19] sm:text-[7rem] 2xl:mt-10 2xl:text-[10rem]`}
          >
            MISSION
            <EyeIcon className=" size-12 rounded-lg bg-[hsl(243,100%,65%)] p-2 text-white dark:bg-[#84aa19]" />{" "}
          </h1>
          <div className="3xl:mt-12 mt-12 text-sm sm:mt-16 sm:text-base 2xl:mt-24 2xl:text-xl">
            Eye exams are expensive and difficult to arrange in areas where
            professionals are in high demand. Ophthalmologists are often
            overbooked, which leads to long wait times for appointments.
          </div>
          <div className="border-bg-gray-300/90 mt-4 h-full rounded-lg border-2 bg-gray-300/40 p-2 dark:border-secondary dark:bg-secondary/30 sm:mt-8 2xl:p-4">
            <div className="flex w-[80%] flex-col sm:w-[60%]">
              <div
                className={`font-optiker text-xl font-extrabold tracking-tight 2xl:text-[2rem] `}
              >
                {"We're here to help."}
              </div>
              <div className="mb-4 text-xs 2xl:text-sm">
                Eye exams are expensive and difficult to arrange in areas where
                professionals are in high demand. Ophthalmologists are often
                overbooked, which leads to long wait times for appointments.
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href=""
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[hsl(243,100%,65%)] px-4 py-2 text-xs font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-[#84aa19] 2xl:px-6 2xl:text-sm"
                >
                  Take a Digital Eye Exam
                  <MoveRightIcon className="ml-2 size-4" />
                </Link>
                <Link
                  href=""
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 2xl:px-6 2xl:text-sm"
                >
                  Read the Instructions
                </Link>
              </div>
            </div>
          </div>
          <img
            src="/images/man-with-stereo.svg"
            alt="headset"
            className="absolute bottom-[-4rem] right-[-4rem] h-1/2 w-1/2 dark:invert"
          />
        </div>
        <div className="relative ml-auto w-full overflow-hidden rounded-tl-[12rem] bg-gradient-to-t from-[hsl(243,100%,65%)] to-[#b0bdff] dark:from-[#84aa19]">
          <img
            src="/images/neurons.jpg"
            alt="headset"
            className="z-1 absolute h-full opacity-20"
          />
          <img
            src="/images/abstract.svg"
            alt="headset"
            className="z-1 absolute h-full opacity-80 dark:invert"
          />
          <img
            src="/images/headset.png"
            alt="headset"
            className="z-5 relative ml-auto mr-0 h-full"
          />
        </div>
      </header>
      <div className="flex w-full flex-col items-center justify-center gap-12 px-4 py-16 dark:bg-background ">
        <h1 className={`text-xl font-extrabold tracking-tight sm:text-[5rem]`}>
          Not even close to completion
        </h1>
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :</Text>
          <Button>Lets go</Button>
        </Flex>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
