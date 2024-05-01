"use client";

import {
  Heading,
  Flex,
  Text,
  Grid,
  Tooltip,
  ScrollArea,
} from "@radix-ui/themes";
import { EyeIcon, ALargeSmallIcon, AppWindowMacIcon } from "lucide-react";

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
  transcript: string;
  setDistance: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <section className="col-span-4 flex min-h-[calc(100vh-6rem)] flex-col px-4 pb-4">
      <Heading className="mb-3 flex font-optiker">
        <AppWindowMacIcon className="mr-2 size-8" />
        Control Panel
      </Heading>
      <ScrollArea className="h-full w-full">
        <Flex gap="3" direction="column" className="h-full">
          <Grid gap="3" columns="4">
            <Flex
              gap="2"
              align="center"
              className="truncate rounded-lg border border-primary/20 bg-secondary/50 px-4 py-2 text-sm text-primary"
            >
              <EyeIcon className="h-4 w-4" /> {props.eye} Eye
            </Flex>
            <Flex
              gap="2"
              align="center"
              className="truncate  rounded-lg border border-primary/20 bg-secondary/50 px-4 py-2 text-sm text-primary"
            >
              <ALargeSmallIcon className="h-5 w-5" />
              {`Stage: ${props.testStages}`}
            </Flex>
            <Flex
              align="center"
              className="col-span-2 truncate rounded-lg border border-primary/20 bg-secondary/50 p-4"
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
                      className="slider w-full cursor-pointer accent-snelltechPurple  dark:accent-snelltechGreen"
                    />
                  </Tooltip>
                  Distance: {props.distance} ft
                </Flex>
              </Text>
            </Flex>
          </Grid>
          <div className="rounded-lg border border-primary/20 bg-secondary/50 p-4 text-sm text-primary">
            {props.transcript}
          </div>
          <Results level={props.level?.right} eye={"Right"} />
          <Results level={props.level?.left} eye={"Left"} />

          <Advice />
        </Flex>
      </ScrollArea>
    </section>
  );
}
