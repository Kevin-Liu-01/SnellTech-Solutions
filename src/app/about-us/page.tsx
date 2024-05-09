"use client";
import { Link, Flex } from "@radix-ui/themes";
import Footer from "../_components/footer";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

// Font files can be colocated inside of `pages`b
export default function AboutUs() {
  return (
    <>
      <main className="h-[calc(100vh-6rem)] font-inter text-primary">
        <section className="w-full bg-snelltechPurple/50 px-4 py-24 dark:bg-snelltechGreen/70">
          <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Meet the Team
              </h1>
              <p className="max-w-[600px] text-lg text-foreground/70">
                The student team behind Snelltech Solutions.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-2 text-center">
                <Image
                  alt="John Doe"
                  className="aspect-[200/200] rounded-full object-cover"
                  height="200"
                  src="/images/about/SyonaPortrait1.jpeg"
                  width="200"
                />
                <h3 className="text-lg font-semibold">Syona Gupta</h3>
                <p className="text-foreground/70 dark:text-gray-300">
                  Project Lead, 3D Modelling/Printing
                </p>
              </div>
              <div className="space-y-2 text-center">
                <Image
                  alt="John Doe"
                  className="aspect-[200/200] rounded-full bg-snelltechPurple object-cover dark:bg-snelltechGreen"
                  height="200"
                  src="/images/about/KevinPortrait1.png"
                  width="200"
                />
                <h3 className="text-lg font-semibold">Kevin Liu</h3>
                <p className="text-foreground/70">
                  Software Development, Research, UI/UX
                </p>
              </div>
              <div className="space-y-2 text-center">
                <Image
                  alt="John Doe"
                  className="aspect-[200/200] rounded-full object-cover"
                  height="200"
                  src="/images/about/ShravaniPortrait.jpeg"
                  width="200"
                />
                <h3 className="text-lg font-semibold">Shravani Vedagiri</h3>
                <p className="text-foreground/70">
                  Design, Prototyping, Documentation
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-8 py-24 md:px-16">
          <div className=" grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <Flex gap="4" direction="column">
              <h2 className="font-optiker text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Key Features
              </h2>
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
                className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-snelltechPurple px-8 font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-snelltechGreen dark:text-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/test"
              >
                Try the Test
              </Link>
            </Flex>
            <div className="grid grid-cols-2 gap-4">
              <Image
                alt="headset"
                className="aspect-[300/300] rounded-xl object-cover"
                height="300"
                src="/images/about/about_headset.png"
                width="300"
              />
              <Image
                alt="control_panel"
                className="aspect-[300/300] rounded-xl object-cover"
                height="300"
                src="/images/about/about_control.png"
                width="300"
              />
              <Image
                alt="test_ui"
                className="aspect-[300/300] rounded-xl object-cover"
                height="300"
                src="/images/about/about_test.png"
                width="300"
              />
              <Image
                alt="technical_drawing"
                className="aspect-[300/300] rounded-xl object-cover invert dark:invert-0"
                height="300"
                src="/images/about/about_tech.png"
                width="300"
              />
            </div>
          </div>
        </section>{" "}
        <Footer />
      </main>
    </>
  );
}
