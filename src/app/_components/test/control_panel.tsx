"use client";

import {
  Heading,
  Flex,
  Text,
  Grid,
  Tooltip,
  ScrollArea,
} from "@radix-ui/themes";
import {
  EyeIcon,
  AArrowUpIcon,
  AppWindowMacIcon,
  PartyPopperIcon,
  LockKeyholeIcon,
  SpellCheckIcon,
  CircleXIcon,
} from "lucide-react";

import Results from "./results";
import Advice from "./advice";

type LevelState = {
  right: number;
  left: number;
};

export default function ControlPanel(props: {
  level: LevelState;
  testStages: number;
  eye: string;
  distance: number;
  correct: number;
  incorrect: number;
  confetti: boolean;
  enableButton: boolean;
  setDistance: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <section className="col-span-4 flex min-h-[calc(100vh-6rem)] flex-col px-4 pb-4">
      <ScrollArea className="h-full w-full">
        <Flex gap="3" direction="column" className="h-full">
          <Grid
            gap="3"
            columns="4"
            className="rounded-lg border border-primary/20 bg-secondary/50 p-4 "
          >
            <Heading className="col-span-4 flex font-optiker">
              <AppWindowMacIcon className="mr-2 size-8" />
              Control Panel
            </Heading>
            <Flex
              gap="2"
              align="center"
              className="truncate rounded-lg border border-indigo-300 bg-indigo-200 px-4 py-3 text-sm text-indigo-900 text-primary"
            >
              <EyeIcon className="h-4 w-4" /> {props.eye} Eye
            </Flex>
            <Flex
              gap="2"
              align="center"
              className="truncate  rounded-lg border border-orange-300 bg-orange-200 px-4 py-3 text-sm text-orange-900 text-primary"
            >
              <AArrowUpIcon className="h-5 w-5" />
              {`Level: ${props.testStages}`}
            </Flex>
            <Flex
              align="center"
              className="col-span-2 truncate rounded-lg border border-snelltechPurple/20 bg-snelltechPurple/20 px-4 py-3 dark:border-snelltechGreen/20 dark:bg-snelltechGreen/30"
            >
              <Text as="label" size="2">
                <Flex gap="4">
                  <Tooltip content="Adjust based on distance from screen.">
                    <input
                      id="slide"
                      type="range"
                      min={2}
                      max={5}
                      step={1}
                      defaultValue={5}
                      onChange={(value) => {
                        props.setDistance(parseInt(value?.target?.value));
                      }}
                      className="slider w-full cursor-pointer accent-snelltechPurple dark:accent-snelltechGreen"
                    />
                  </Tooltip>
                  Distance: {props.distance} ft
                </Flex>
              </Text>
            </Flex>
            <Flex
              gap="2"
              align="center"
              className="truncate rounded-lg border border-blue-300 bg-blue-200 px-4 py-3 text-sm text-blue-900 text-primary"
            >
              <LockKeyholeIcon className="h-4 w-4" /> {props.enableButton}{" "}
              Locked
            </Flex>
            <Flex
              gap="2"
              align="center"
              className={
                props.confetti
                  ? "truncate rounded-lg border border-lime-300 bg-lime-200 px-4 py-3 text-sm text-lime-900 text-primary transition-all"
                  : "truncate rounded-lg border border-yellow-400 bg-yellow-200 px-4 py-3 text-sm text-primary text-yellow-900 transition-all"
              }
            >
              <PartyPopperIcon className="h-5 w-5" />
              {`Confetti?`}
            </Flex>
            <Flex
              gap="2"
              align="center"
              className="truncate rounded-lg border border-green-300 bg-green-200 px-4 py-3 text-sm text-green-900 text-primary"
            >
              <SpellCheckIcon className="h-5 w-5" />
              {`Correct: ${props.correct}`}
            </Flex>
            <Flex
              gap="2"
              align="center"
              className="truncate  rounded-lg border border-red-300 bg-red-200 px-4 py-3 text-sm text-primary text-red-900"
            >
              <CircleXIcon className="h-5 w-5" />
              {`Incorrect: ${props.incorrect}`}
            </Flex>
          </Grid>

          <Results level={props.level?.right} eye={"Right"} />
          <Results level={props.level?.left} eye={"Left"} />

          <Advice />
        </Flex>
      </ScrollArea>
    </section>
  );
}
