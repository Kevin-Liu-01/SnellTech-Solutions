"use client";

import { Heading, Flex, Grid, Tooltip, ScrollArea } from "@radix-ui/themes";
import {
  EyeIcon,
  AArrowUpIcon,
  AppWindowMacIcon,
  PartyPopperIcon,
  LockKeyholeIcon,
  SpellCheckIcon,
  CircleXIcon,
  ArrowDownAZIcon,
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
              justify="center"
              className="truncate rounded-lg border border-indigo-300 bg-indigo-200 px-2 py-3 text-[0.825rem] text-indigo-900 3xl:text-sm"
            >
              <EyeIcon className="h-5 w-5" /> {props.eye} Eye
            </Flex>
            <Flex
              gap="2"
              align="center"
              justify="center"
              className="truncate rounded-lg border border-orange-300 bg-orange-200 px-2 py-3 text-[0.825rem] text-orange-900 3xl:text-sm"
            >
              <AArrowUpIcon className="h-5 w-5" />
              {`Level: ${props.testStages}`}
            </Flex>
            <Flex
              align="center"
              justify="center"
              gap="2"
              className="col-span-2 truncate rounded-lg border border-snelltechPurple/20 bg-snelltechPurple/20 px-2 py-2 text-[0.825rem] text-violet-900 dark:border-snelltechGreen/20 dark:bg-snelltechGreen/30 3xl:text-sm"
            >
              <ArrowDownAZIcon className="h-5 w-5" />
              Distance: {props.distance} ft
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
                  className="w-24 cursor-pointer accent-snelltechPurple dark:accent-snelltechGreen 3xl:w-auto"
                />
              </Tooltip>
            </Flex>
            <Flex
              gap="2"
              align="center"
              justify="center"
              className="truncate rounded-lg border border-blue-300 bg-blue-200 px-2 py-3 text-[0.825rem] text-blue-900 3xl:text-sm"
            >
              <LockKeyholeIcon className="h-5 w-5" /> {props.enableButton}{" "}
              Locked
            </Flex>
            <Flex
              gap="2"
              align="center"
              justify="center"
              className={
                props.confetti
                  ? "truncate rounded-lg border border-lime-300 bg-lime-200 px-2 py-3 text-[0.825rem] text-lime-900 transition-all 3xl:text-sm"
                  : "truncate rounded-lg border border-yellow-500/50 bg-yellow-200 px-2 py-3 text-[0.825rem] text-yellow-900 transition-all 3xl:text-sm"
              }
            >
              <PartyPopperIcon className="h-5 w-5" />
              {`Confetti?`}
            </Flex>
            <Flex
              gap="2"
              align="center"
              justify="center"
              className="truncate rounded-lg border border-green-300 bg-green-200 px-2 py-3 text-[0.825rem] text-green-900 3xl:text-sm"
            >
              <SpellCheckIcon className="h-5 w-5" />
              {`Correct: ${props.correct}`}
            </Flex>
            <Flex
              gap="2"
              align="center"
              justify="center"
              className="truncate rounded-lg border border-red-300 bg-red-200 px-2 py-3 text-[0.825rem] text-red-900 3xl:text-sm"
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
