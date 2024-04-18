"use client";

import { ScrollArea, Flex, Text, Box } from "@radix-ui/themes";

export default function List(props: { steps: string[] }) {
  console.log(props.steps);
  return (
    <ScrollArea type="always" scrollbars="vertical" className="h-full">
      <Box py="2" pr="5">
        <Flex direction="column" gap="4">
          {props.steps?.map((step, index) => (
            <Flex gap="3" key={index + 1}>
              <Flex className="items-center justify-center rounded-lg border border-primary/30 p-2 px-3 font-optiker text-xl">
                {index + 1}.
              </Flex>
              <Text
                size="3"
                className="w-full rounded-lg border border-primary/30 bg-secondary p-2"
              >
                {step}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </ScrollArea>
  );
}
