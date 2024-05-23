"use client";
import { Link, Flex, Grid, Box, Text, Separator } from "@radix-ui/themes";
import {
  CheckIcon,
  BookPlusIcon,
  BookTypeIcon,
  BookCheckIcon,
  ViewIcon,
  GlassesIcon,
  SquareSigmaIcon,
} from "lucide-react";
import Image from "next/image";

import Footer from "../_components/footer";
import AdCard from "../_components/advertisement-card";

// Font files can be colocated inside of `pages`b
export default function AboutUs() {
  return (
    <>
      <main className="h-[calc(100vh-6rem)] font-inter text-primary">
        <section className="relative w-full overflow-hidden bg-gradient-to-t from-snelltechPurple/70 to-[#b0bdff] px-4 pt-20 dark:from-snelltechGreen ">
          <Image
            src="/images/neurons.jpg"
            alt="headset"
            fill
            sizes="ref"
            className="absolute z-10 w-full object-cover opacity-20"
          />
          <Box className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <Box className="space-y-4 pb-20">
              <Text className="font-optiker text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Meet the Team
              </Text>
              <Separator mt="0" mb="4" size="4" />

              <p className="max-w-[600px] text-xl text-foreground/80">
                The student team behind Snelltech Solutions.
              </p>
            </Box>
            <Grid gap="8" columns="3">
              <Flex
                direction="column"
                align="center"
                className="space-y-2 rounded-t-full bg-primary-foreground p-4 pb-20 text-center"
              >
                <Image
                  alt="Syona Gupta"
                  className="aspect-[200/200] rounded-full bg-snelltechPurple/30 object-cover dark:bg-snelltechGreen/60"
                  height="200"
                  src="/images/about/SyonaPortrait1.png"
                  width="200"
                />
                <h3 className="text-lg font-semibold">Syona Gupta</h3>
                <p className="text-sm text-foreground/70">
                  Project Lead, 3D Modelling/Printing
                </p>
              </Flex>
              <Flex
                direction="column"
                align="center"
                className="space-y-2 rounded-t-full bg-primary-foreground p-4 pb-20 text-center"
              >
                <Image
                  alt="Kevin Liu"
                  className="aspect-[200/200] rounded-full bg-snelltechPurple/30 object-cover dark:bg-snelltechGreen/60"
                  height="200"
                  src="/images/about/KevinPortrait1.png"
                  width="200"
                />
                <h3 className="text-lg font-semibold">Kevin Liu</h3>
                <p className="text-sm text-foreground/70">
                  Software Development, Research, UI/UX
                </p>
              </Flex>
              <Flex
                direction="column"
                align="center"
                className="space-y-2 rounded-t-full bg-primary-foreground p-4 pb-20 text-center"
              >
                <Image
                  alt="Shravani Vedagiri"
                  className="aspect-[200/200] rounded-full bg-snelltechPurple/30 object-cover dark:bg-snelltechGreen/60"
                  height="200"
                  src="/images/about/ShravaniPortrait1.png"
                  width="200"
                />
                <h3 className="text-lg font-semibold">Shravani Vedagiri</h3>
                <p className="text-sm text-foreground/70">
                  Design, Prototyping, Documentation
                </p>
              </Flex>
            </Grid>
          </Box>
        </section>
        <Grid
          columns="3"
          gap="4"
          className="mx-auto w-full bg-secondary px-8 py-12 font-inter text-sm md:px-16"
        >
          <AdCard
            title="Problem Statement"
            icon={BookPlusIcon}
            description={`Limited accessibility to affordable eye examinations presents significant challenges, stemming from financial, geographical, and demographic barriers. These impediments impede individuals' access to essential vision care, particularly among marginalized populations. Consequently, the persistence and exacerbation of visual impairments contribute to the perpetuation of disparities in vision health outcomes. `}
          />
          <AdCard
            title="Justification"
            icon={BookTypeIcon}
            description="Accessing eye exams can be challenging due to various socioeconomic barriers. Studies have shown that financial barriers prevent many people from seeking necessary eye care; in a study of 380 patients with vision impairments, 53% of individuals reported insurance as a barrier, with more than 31% out of the 55% of patients who were insured still reporting that insurance was a financial burden."
          />
          <AdCard
            title="Problem Research"
            icon={BookCheckIcon}
            description="The main metric for identifying visual impairment is visual acuity (VA), which expresses the level of ability with respect to the spatial resolution of the eye, and it is the first test in the analysis of visual function. In its evidence-based clinical practice guidelines, the American Optometric Association suggests the use of letter charts, such as the Snellen Chart, to diagnose visual acuity."
          />
          <AdCard
            title="Visual Acuity Testing"
            icon={ViewIcon}
            description="During the Covid-19 pandemic, home visual acuity testing became an important part of telemedicine for eye care. A variety of home tests are available in print, on smartphone apps or the internet. These tests have been found to be almost as accurate as a test performed in a provider's office. No special preparation is necessary for this test. There is no discomfort."
          />
          <AdCard
            title="Why the Test is Performed"
            icon={GlassesIcon}
            description="The visual acuity test is a routine part of an eye examination or general physical examination, particularly if there is a change in vision or a problem with vision. In children, the test is performed to screen for vision problems. Vision problems in young children can often be corrected or improved. Undetected or untreated problems may lead to permanent vision damage."
          />
          <AdCard
            title="Normal Results"
            icon={SquareSigmaIcon}
            description="Visual acuity is expressed as a fraction. The top number refers to the distance you stand from the chart. The bottom number indicates the distance at which a person with normal eyesight could read the same line you correctly read. Even if you miss one or two letters on the smallest line you can read, you are still considered to have vision equal to that line."
          />
        </Grid>
        <section className="w-full px-8 py-24 md:px-16">
          <Box className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <Flex gap="4" direction="column">
              <h2 className="font-optiker text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Key Features
              </h2>
              <Separator mt="0" mb="4" size="4" />

              <p className="max-w-[600px] text-lg text-gray-500 dark:text-gray-400">
                Discover the powerful features that make our SnellTech web app a
                must-have for anyone looking to check their vision.
              </p>
              <ul className="grid gap-4 text-lg">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                  Accurate and reliable vision testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                  Easy-to-use interface for all ages
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                  Personalized results and recommendations
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                  Shareable test results
                </li>
              </ul>
              <Link
                className="mr-8 mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-snelltechPurple px-8 font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-snelltechGreen dark:text-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/test"
              >
                Try the Test
              </Link>
            </Flex>
            <Grid gap="4" columns="2">
              <Image
                alt="headset"
                className="aspect-[300/300] w-full rounded-xl object-cover"
                height="300"
                src="/images/about/about_headset.png"
                width="300"
              />
              <Image
                alt="control_panel"
                className="aspect-[300/300] w-full rounded-xl object-cover"
                height="300"
                src="/images/about/about_control.png"
                width="300"
              />
              <Image
                alt="test_ui"
                className="aspect-[300/300] w-full rounded-xl object-cover"
                height="300"
                src="/images/about/about_test.png"
                width="300"
              />
              <Image
                alt="technical_drawing"
                className="aspect-[300/300] w-full rounded-xl object-cover invert dark:invert-0"
                height="300"
                src="/images/about/about_tech.png"
                width="300"
              />
            </Grid>
          </Box>
        </section>
        <Footer />
      </main>
    </>
  );
}
