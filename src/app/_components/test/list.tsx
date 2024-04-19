"use client";

import { ScrollArea, Flex, Text, Box } from "@radix-ui/themes";

export default function List(props: { steps: string[] }) {
  return (
    <ScrollArea
      type="always"
      scrollbars="vertical"
      className="h-full rounded-lg border border-primary/30"
    >
      <Box p="2" pr="4">
        <Flex direction="column" gap="2">
          {props.steps?.map((step, index) => (
            <Flex gap="2" key={index + 1}>
              <Flex className="items-center justify-center rounded-lg border border-primary/30 bg-snelltechPurple/10 p-2 px-3 font-optiker text-xl dark:bg-snelltechGreen/20">
                {index + 1}.
              </Flex>
              <Text
                size="3"
                className="w-full rounded-lg border border-primary/30 bg-secondary p-2 text-sm"
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
