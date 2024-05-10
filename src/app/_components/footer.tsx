"use client";
import Image from "next/image";
import { Link, Flex, Text } from "@radix-ui/themes";
import { ScanEyeIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container relative mx-auto flex w-full items-center justify-between p-6 md:p-12">
      <Flex align="center" gap="4">
        <ScanEyeIcon className="h-8 w-8 " />
        <Flex
          direction="column"
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          <Text className="font-optiker text-lg text-snelltechPurple dark:text-snelltechGreen">
            SNELLTECH SOLUTIONS
          </Text>
          <Text className="text-xs">
            Made by Kevin Liu, Shravani Vedagiri, and Syona Gupta for
            Engineering Development & Design
          </Text>
        </Flex>
      </Flex>
      <Flex align="center" gap="4">
        <Link
          className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Privacy
        </Link>
        <Link
          className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Terms
        </Link>
        <Link
          className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Contact
        </Link>{" "}
        <Image
          src="../images/falling.svg"
          alt="abstract"
          className="ml-8 size-24  object-fill dark:invert"
          height="100"
          width="100"
        />
      </Flex>
    </footer>
  );
}
