import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import Image from "next/image";
import { Flex, Text, Grid, Box, Separator, Heading } from "@radix-ui/themes";
import {
  EyeIcon,
  MoveRightIcon,
  ArrowDownZAIcon,
  ALargeSmallIcon,
  ViewIcon,
  GoalIcon,
} from "lucide-react";
import Footer from "./_components/footer";

export default async function Home() {
  noStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden font-inter dark:text-white">
      <header className="grid min-h-[calc(100vh-6rem)] w-full sm:grid-cols-2">
        <Box className=" relative flex h-full w-full flex-col justify-center px-8 py-4 pb-16 2xl:pt-2 3xl:py-16">
          <Text
            className={`mt-12 font-optiker text-[2rem] font-extrabold leading-[0] tracking-tight dark:text-primary sm:text-[3rem] xl:text-[6rem]  `}
          >
            VISION IS OUR
          </Text>
          <Text
            className={`flex items-center font-optiker text-[5rem] font-extrabold leading-none tracking-tight text-snelltechPurple dark:text-snelltechGreen sm:text-[7rem] xl:text-[10rem]`}
          >
            MISSION
            <EyeIcon className=" ml-2 size-12 rounded-full bg-snelltechPurple p-2 text-white dark:bg-snelltechGreen" />
          </Text>
          <Separator mt="0" mb="4" size="4" />
          <Text className="mb-8 text-xs sm:text-base 2xl:text-lg 3xl:text-xl  ">
            Design, build and test a digital vision acuity exam to provide an
            approximate prescription for corrective lenses where the program
            uses calculation for determining letter height based on user
            distance.
          </Text>

          <Box className="rounded-xl border-2 border-border bg-primary-foreground p-2 xl:p-6 3xl:p-8">
            <div className="flex h-full w-[80%] flex-col justify-between sm:w-[60%]">
              <div
                className={`mb-2 font-optiker text-xl font-extrabold tracking-tight xl:text-[2.25rem]`}
              >
                {"We're here to help."}
              </div>
              <div className="mb-4 py-2 text-xs xl:text-base">
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
          <Box className="absolute bottom-[-4rem] right-[-4rem] z-[5] h-1/2 w-1/2 dark:invert">
            <Image src="/images/man-with-stereo.svg" alt="man" fill />
          </Box>
        </Box>
        <div className="relative mb-4 ml-12 w-full overflow-hidden rounded-l-full bg-gradient-to-t from-snelltechPurple to-[#b0bdff] dark:from-snelltechGreen">
          <Image
            src="/images/neurons.jpg"
            alt="headset"
            fill
            sizes="ref"
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
      <Box className=" relative z-10 grid w-full bg-secondary px-8 py-16 dark:bg-background ">
        <Grid columns="2" gap="8">
          <Flex direction="column" gap="8">
            <Heading
              className={`font-optiker text-xl font-extrabold tracking-tight sm:text-[3.5rem]`}
            >
              Get your{" "}
              <Text className="text-snelltechPurple dark:text-snelltechGreen">
                Visual Acuity
              </Text>
            </Heading>
            <Flex
              direction="column"
              justify="between"
              gap="4"
              className="h-full text-sm lg:text-lg "
            >
              <Flex
                direction="row"
                gap="4"
                className="h-full rounded-xl border-2 border-border bg-primary-foreground p-4"
              >
                <Box className="h-16 w-16">
                  <ALargeSmallIcon className="h-16 w-16 rounded-lg bg-snelltechPurple p-4 text-secondary dark:bg-snelltechGreen" />
                </Box>
                <Box className="">
                  Letter charts are not only used to measure visual acuity, they
                  are also used as targets for subjective refraction. This is
                  the main reason distance acuity is measured more often than
                  near acuity. At a long distance, accommodation is relaxed.
                </Box>
              </Flex>
              <Flex
                direction="row"
                gap="4"
                className="h-full rounded-xl border-2 border-border bg-primary-foreground p-4"
              >
                <Box className="h-16 w-16">
                  <ArrowDownZAIcon className="h-16 w-16 rounded-lg bg-snelltechPurple p-4 text-secondary dark:bg-snelltechGreen" />
                </Box>
                <Box className="">
                  At a longer test distance, the effect of small changes in the
                  subject’s position is less important and can be ignored. As
                  today’s exam lanes often are smaller than 20 feet (6 meters),
                  charts are often designed for shorter distances. This is no
                  problem for visual acuity measurement, as long as the actual
                  test distance is accurately accounted for.{" "}
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Image
            src="/images/Snellen_distances.png"
            alt="headset"
            height="658"
            width="981"
            className="h-auto w-full rounded-xl border-2 border-dashed border-snelltechPurple/40 bg-primary-foreground p-4 dark:bg-primary dark:invert"
          />
        </Grid>
      </Box>
      <Box className=" relative z-10 w-full  px-8 py-16 ">
        <Flex direction="row" gap="8">
          <Image
            src="/images/Snellen_chart.svg"
            alt="headset"
            height="406"
            width="325"
            className="rounded-xl border-2 border-dashed border-snelltechPurple/40 dark:invert"
          />
          <Flex direction="column" gap="8">
            <Heading
              className={`font-optiker text-xl font-extrabold tracking-tight sm:text-[3.5rem]`}
            >
              Use the{" "}
              <Text className="text-snelltechPurple dark:text-snelltechGreen">
                SNELLEN
              </Text>{" "}
              Test
            </Heading>
            <Flex
              direction="column"
              justify="between"
              gap="4"
              className="h-full text-sm lg:text-lg "
            >
              <Flex
                direction="row"
                gap="4"
                className="h-full rounded-xl border-2 border-border bg-primary-foreground p-4"
              >
                <Box className="h-16 w-16">
                  <ViewIcon className="h-16 w-16 rounded-lg bg-snelltechPurple p-4 text-secondary dark:bg-snelltechGreen" />
                </Box>
                <Box className="">
                  It is a persistent urban legend that 20/20 would represent
                  normal, average or even perfect vision. This is not so.
                  Snellen deliberately chose his reference standard (5 min of
                  arc) as a size that is “easily recognized by normal eyes.”
                  Thus, almost all normal eyes will equal or exceed the
                  reference standard. If 20/20 equaled average acuity, half of
                  the population would fall short of 20/20, since that is the
                  definition of average.
                </Box>
              </Flex>
              <Flex
                direction="row"
                gap="4"
                className="h-full rounded-xl border-2 border-border bg-primary-foreground p-4"
              >
                <Box className="h-16 w-16">
                  <GoalIcon className="h-16 w-16 rounded-lg bg-snelltechPurple p-4 text-secondary dark:bg-snelltechGreen" />
                </Box>
                <Box className="">
                  Visual acuity values are understood best by the following
                  simple rule. On a Snellen chart we determine the line that the
                  person can just recognize. If that line is twice as large as
                  the reference standard (20/20), we state that that person’s
                  MAgnification Requirement (MAR) is 2x. If the MAgnification
                  Requirement is 2x, the visual acuity is 1/2 (20/40).
                  Similarly, if the MAgnification Requirement (MAR) is 5x, the
                  visual acuity is 1/5 (20/100); if MAR = 10, visual acuity =
                  1/10 (20/200), and so on.
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </main>
  );
}
