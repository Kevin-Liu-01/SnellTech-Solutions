"use client";

import { Flex, Text, Separator, IconButton } from "@radix-ui/themes";
import { CopyIcon } from "lucide-react";
export default function Results(props: { level: number }) {
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
      description: "",
    },
    {
      degree: "20/20",
      equivalent: "Equivalent to 6/6 (non-US)",
      description: "",
    },
    {
      degree: "20/20",
      equivalent: "Equivalent to 6/6 (non-US)",
      description: "",
    },
  ];

  return (
    <Flex
      direction="column"
      className="relative h-full rounded-lg border-2 border-dashed border-border bg-background p-4 font-inter text-sm text-primary dark:bg-secondary"
    >
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
      <Text className="font-optiker text-4xl font-extrabold">
        {results[props.level]?.degree}
      </Text>
      <Text className="font-optiker">Visual Acuity</Text>
      <Separator my="2" size="4" />
      <Text className="text-sm">{results[props.level]?.equivalent}</Text>
      <Separator my="2" size="4" />
      <Text className="text-xs">{results[props.level]?.description}</Text>
    </Flex>
  );
}
