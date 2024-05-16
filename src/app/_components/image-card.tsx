"use client";

import { Heading, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

export function ImageCard(props: {
  step: number;
  text: string;
  imageLink: string;
}) {
  return (
    <Flex
      direction="column"
      gap="2"
      className="rounded-lg border border-primary/20 bg-primary-foreground p-4"
    >
      <Heading className="font-optiker text-xl">Step {props.step}.</Heading>
      <Text className="font-inter text-sm">{props.text}</Text>
      <Image
        alt="headset"
        className="mt-auto aspect-[300/300] w-full rounded-md object-cover"
        height="300"
        src={props.imageLink}
        width="300"
      />
    </Flex>
  );
}
