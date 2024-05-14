"use client";
import { Link, Flex, Text, Button, Box } from "@radix-ui/themes";
import Footer from "~/app/_components/footer";
import { ScanEyeIcon } from "lucide-react";
import Image from "next/image";

//Displays error page when user tries to access page that doesn't exist
export default function Error() {
  return (
    <>
      <main className="relative h-[calc(100vh-6rem)] font-inter text-primary">
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="h-full w-full bg-white/90 text-xl transition-all dark:bg-[#111113]/90 "
        >
          <Flex
            justify="center"
            align="center"
            direction="row"
            gap="4"
            className="h-full font-optiker"
          >
            <Box>
              <Image
                alt="Error"
                className="aspect-[400/400] object-cover  dark:invert"
                height="400"
                width="400"
                src="/images/crashed-error.svg"
              />
            </Box>
            <Flex align="start" direction="column" gap="4">
              <Flex align="center" justify="center" gap="2">
                <ScanEyeIcon className="size-12" />
                SNELLTECH
                <span className="text-snelltechPurple dark:text-snelltechGreen">
                  SOLUTIONS
                </span>
              </Flex>
              <Text className="rounded-3xl bg-snelltechPurple/50 p-4 font-inter text-7xl font-extrabold dark:bg-snelltechGreen/90">
                Sorry about the error!
              </Text>
              <Text className="font-inter">
                {
                  "We weren't able to find your page. Go home by pressing the button below!"
                }
              </Text>
              <Link href={"/"}>
                <Button className="mt-2 bg-snelltechPurple p-4 font-optiker text-lg dark:bg-snelltechGreen">
                  Go Home
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Footer />
        </Flex>
      </main>
    </>
  );
}
