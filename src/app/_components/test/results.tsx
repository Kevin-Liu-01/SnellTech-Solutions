"use client";

import {
  Flex,
  Text,
  Separator,
  IconButton,
  Grid,
  Checkbox,
  Tooltip,
} from "@radix-ui/themes";
import { CopyIcon } from "lucide-react";
export default function Results(props: { level: number; eye: string }) {
  const results = [
    {
      degree: "0/20",
      equivalent: "Please complete the test to view your results.",
      description: "",
    },
    {
      degree: "0/20",
      equivalent: "Please complete the test to view your results.",
      description: "",
    },
    {
      degree: "20/200",
      equivalent: "Equivalent to 6/60 (non-US)",
      description:
        "Visual acuity worse than 20/25 (6/7.5 if non-US) should be evaluated by a licensed eye professional to determine whether corrective lenses may be necessary",
    },
    {
      degree: "20/100",
      equivalent: "Equivalent to 6/30 (non-US)",
      description:
        "Visual acuity worse than 20/25 (6/7.5 if non-US) should be evaluated by a licensed eye professional to determine whether corrective lenses may be necessary",
    },
    {
      degree: "20/70",
      equivalent: "Equivalent to 6/21 (non-US)",
      description:
        "Visual acuity worse than 20/25 (6/7.5 if non-US) should be evaluated by a licensed eye professional to determine whether corrective lenses may be necessary",
    },
    {
      degree: "20/50",
      equivalent: "Equivalent to 6/15 (non-US)",
      description:
        "Visual acuity worse than 20/25 (6/7.5 if non-US) should be evaluated by a licensed eye professional to determine whether corrective lenses may be necessary",
    },
    {
      degree: "20/40",
      equivalent: "Equivalent to 6/12 (non-US)",
      description:
        "Visual acuity worse than 20/25 (6/7.5 if non-US) should be evaluated by a licensed eye professional to determine whether corrective lenses may be necessary",
    },
    {
      degree: "20/30",
      equivalent: "Equivalent to 6/9 (non-US)",
      description:
        "Visual acuity worse than 20/25 (6/7.5 if non-US) should be evaluated by a licensed eye professional to determine whether corrective lenses may be necessary",
    },
    {
      degree: "20/25",
      equivalent: "Equivalent to 6/7.5 (non-US)",
      description: "",
    },
    {
      degree: "20/20",
      equivalent: "Equivalent to 6/6 (non-US)",
      description: "Normal vision.",
    },
    {
      degree: "20/15",
      equivalent: "Equivalent to 6/4.5 (non-US)",
      description: "Your vision is sharper than average. ",
    },
    {
      degree: "20/10",
      equivalent: "Equivalent to 6/3 (non-US)",
      description: "Your vision is sharper than average. ",
    },
  ];

  return (
    <Grid
      columns="2"
      className="rounded-lg border border-primary/20 bg-secondary/50 p-4 text-sm text-primary"
    >
      <Tooltip content={`This is the optotype level for your ${props.eye} Eye`}>
        <Flex direction="column" gap="1" className="pr-4">
          <Text className="font-optiker text-2xl">{props.eye} Eye</Text>
          <Separator size="4" mb="2" />
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox
                size="1"
                checked={props.level > 1}
                className="accent-snelltechPurple dark:accent-snelltechGreen"
              />
              Level 1 (20/200), (6/60)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" checked={props.level > 2} />
              Level 2 (20/100), (6/30)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" checked={props.level > 3} />
              Level 3 (20/70), (6/21)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" checked={props.level > 4} />
              Level 4 (20/50), (6/15)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" checked={props.level > 5} />
              Level 5 (20/40), (6/12)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" checked={props.level > 6} />
              Level 6 (20/30), (6/9)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" checked={props.level > 7} />
              Level 7 (20/25), (6/7.5)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" checked={props.level > 8} />
              Level 8 (20/20), (6/6)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" checked={props.level > 9} />
              Level 9 (20/15), (6/4.5)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" checked={props.level > 10} />
              Level 10 (20/10), (6/3)
            </Flex>
          </Text>
        </Flex>
      </Tooltip>
      <Flex
        direction="column"
        className="relative h-full rounded-lg border-2 border-dashed border-primary/20 bg-background p-4 font-inter text-sm text-primary dark:bg-secondary"
      >
        <Tooltip content="Copy visual acuity">
          <IconButton
            size="1"
            aria-label="Copy value"
            color="gray"
            variant="ghost"
            onClick={() =>
              navigator.clipboard.writeText(results[props.level]?.degree ?? "")
            }
            className="absolute right-0 top-0 m-4"
          >
            <CopyIcon />
          </IconButton>
        </Tooltip>

        <Text className="font-optiker text-4xl font-extrabold">
          {results[props.level]?.degree}
        </Text>
        <Text className="font-optiker">Visual Acuity</Text>
        <Separator my="2" size="4" />
        <Text className="text-sm">{results[props.level]?.equivalent}</Text>
        <Separator my="2" size="4" />
        <Text className="text-xs">{results[props.level]?.description}</Text>
      </Flex>
    </Grid>
  );
}
