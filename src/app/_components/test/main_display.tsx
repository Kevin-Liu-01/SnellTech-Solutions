"use client";
import twMerge from "clsx";
import dynamic from "next/dynamic";

import { Callout, Flex, Box, Text, Button, Progress } from "@radix-ui/themes";
import { InfoIcon } from "lucide-react";
import { textSizer } from "./functions";

import Dropdown from "./dropdown";

const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

type StartTestFunction = () => void;

export default function ControlPanel(props: {
  startTest: StartTestFunction;
  testStarted: boolean;
  switchScreen: boolean;
  instructionScreen: boolean;
  testCompleted: boolean;
  confetti: boolean;
  size: number;
  distance: number;
  letter: string;
  eye: string;
  transcript: string;
  handleInstructions: () => void;
  setEye: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-lg border border-primary/5 bg-snelltechPurple/50 p-4 dark:bg-snelltechGreen/50">
      <Confetti
        numberOfPieces={props.confetti ? 100 : 0}
        // initialVelocityY={1}
        gravity={0.5}
      />
      {!props.testStarted && (
        <Flex
          gap="4"
          className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-secondary/90 p-12"
        >
          <Text className="font-optiker text-3xl">Visual Acuity Testing</Text>
          <Callout.Root className="flex items-center bg-snelltechPurple/25 font-optiker text-snelltechPurple transition-all dark:bg-snelltechGreen/20 dark:text-snelltechGreen">
            <Callout.Icon>
              <InfoIcon className="h-6 w-6" />
            </Callout.Icon>
            <Callout.Text>
              You will need at least 10 feet of room to properly use this
              application.
            </Callout.Text>
          </Callout.Root>
          <Dropdown eye={props.eye} setEye={props.setEye} />
          <Button
            className="mt-2 bg-snelltechPurple font-optiker dark:bg-snelltechGreen"
            onClick={() => props.handleInstructions()}
          >
            Begin Test
          </Button>
        </Flex>
      )}

      {props.instructionScreen && (
        <Box className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-secondary/90 p-12">
          <Flex align="center" justify="center" direction="column">
            <Text className="font-optiker" size="5" align="center">
              Listen to the directions playing aloud, or read the instructions
              to the left.
            </Text>
            <Progress
              duration="30s"
              size="3"
              color="iris"
              className="mt-4 h-2 w-full dark:invert"
            />
          </Flex>
        </Box>
      )}

      {props.switchScreen && (
        <Flex
          gap="4"
          className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-secondary/90 p-12"
        >
          <Text className="font-optiker text-3xl">
            Switch to your {props.eye == "Right" ? "Left" : "Right"} Eye.
          </Text>
        </Flex>
      )}

      {props.testCompleted && (
        <Flex
          gap="4"
          className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-secondary/90 p-12"
        >
          <Text className="font-optiker text-3xl">Test Completed</Text>
          <Dropdown eye={props.eye} setEye={props.setEye} />

          <Button
            className="mt-2 bg-snelltechPurple font-optiker dark:bg-snelltechGreen"
            onClick={() => props.startTest()}
          >
            Restart Test
          </Button>
        </Flex>
      )}

      <div className="relative flex h-[5.08in] w-[3.08in] select-none items-center justify-center rounded-sm border-2 border-dashed border-primary bg-background  xl:border-4">
        <span
          className={twMerge(
            "font-optiker font-extrabold tracking-tight",
            textSizer(props.size, props.distance),
          )}
        >
          {props.letter}
        </span>
      </div>
    </div>
  );
}
