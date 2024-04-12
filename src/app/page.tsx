import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import Image from "next/image";
import { Flex, Text, Button, Box } from "@radix-ui/themes";
import { EyeIcon, MoveRightIcon } from "lucide-react";

export default async function Home() {
  noStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-inter dark:text-white">
      <header className="grid min-h-[calc(100vh-6rem)] w-full sm:grid-cols-2">
        <Box className="relative flex h-full w-full flex-col justify-between overflow-hidden px-8 py-4 pb-16 2xl:pt-2 3xl:py-16">
          <Text
            className={`mt-12 font-optiker text-[2rem] font-extrabold leading-[0] tracking-tight dark:text-primary sm:text-[3rem] xl:text-[5rem] 2xl:text-[6rem] `}
          >
            VISION IS OUR
          </Text>
          <Text
            className={`flex items-center font-optiker text-[5rem] font-extrabold leading-none tracking-tight text-snelltechPurple dark:text-snelltechGreen sm:text-[7rem] xl:text-[8rem] 2xl:text-[10rem]`}
          >
            MISSION
            <EyeIcon className=" ml-2 size-12 rounded-full bg-snelltechPurple p-2 text-white dark:bg-snelltechGreen" />
          </Text>
          <Text className="mb-8 text-sm sm:text-base 2xl:text-lg 3xl:text-xl ">
            Design, build and test a digital vision acuity exam to provide an
            approximate prescription for corrective lenses where the program
            uses calculation for determining letter height based on user
            distance
          </Text>
          <Box className="h-full rounded-xl border-2 border-border bg-primary-foreground p-2 xl:p-4 3xl:p-8">
            <div className="flex h-full w-[80%] flex-col justify-between sm:w-[60%]">
              <div
                className={`mb-2 font-optiker text-xl font-extrabold tracking-tight xl:text-[2rem] 3xl:text-[2.5rem]`}
              >
                {"We're here to help."}
              </div>
              <div className="mb-4 text-xs xl:text-sm 3xl:text-[1rem]">
                Eye exams are expensive and difficult to arrange in areas where
                professionals are in high demand. Ophthalmologists are often
                overbooked, which leads to long wait times for appointments.
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/test"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-snelltechPurple px-4 py-2 text-xs font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-snelltechGreen 2xl:px-6 2xl:text-sm"
                >
                  Take a Digital Eye Exam
                  <MoveRightIcon className="ml-2 size-4" />
                </Link>
                <Link
                  href="/instructions"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 2xl:px-6 2xl:text-sm"
                >
                  Read the Instructions
                </Link>
              </div>
            </div>
          </Box>
          <Box className="absolute bottom-[-4rem] right-[-4rem] h-1/2 w-1/2 dark:invert">
            <Image src="/images/man-with-stereo.svg" alt="man" fill />
          </Box>
        </Box>
        <div className="relative ml-auto w-full overflow-hidden rounded-tl-[12rem] bg-gradient-to-t from-snelltechPurple to-[#b0bdff] dark:from-snelltechGreen">
          <Image
            src="/images/neurons.jpg"
            alt="headset"
            fill
            className="absolute z-10 h-full opacity-20"
          />
          <Image
            src="/images/abstract.svg"
            alt="headset"
            fill
            className="absolute z-20 h-full opacity-80 dark:invert"
          />
          <Image
            src="/images/headset.png"
            alt="headset"
            height="2000"
            width="2000"
            className="relative z-30 ml-auto mr-0 h-full w-auto"
          />
        </div>
      </header>
      <div className="flex w-full flex-col items-center justify-center gap-12 bg-secondary px-4 py-16 dark:bg-background ">
        <h1 className={`text-xl font-extrabold tracking-tight sm:text-[5rem]`}>
          Get your Prescription
        </h1>
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :</Text>
          <Button>Lets go</Button>
        </Flex>
        <Box className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
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
        </Box>
      </div>
    </main>
  );
}
