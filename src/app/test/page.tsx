"use client";
import {
  Button,
  Grid,
  Checkbox,
  Text,
  Flex,
  Callout,
  Heading,
  ScrollArea,
  Box,
  Tooltip,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import {
  SendIcon,
  InfoIcon,
  ListOrderedIcon,
  AppWindowMacIcon,
} from "lucide-react";
import twMerge from "clsx";
import Confetti from "react-confetti";
// Font files can be colocated inside of `pages`b
export default function Test() {
  const [letter, setLetter] = useState("");
  const [confetti, setConfetti] = useState(false);

  const [submitLetter, setSubmitLetter] = useState(false);
  const [size, setSize] = useState(1);
  const [userInput, setUserInput] = useState("");

  function createRandomString(length: number) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setLetter(result);
  }

  useEffect(() => {
    createRandomString(1);
  }, []);

  useEffect(() => {
    createRandomString(1);
  }, [submitLetter]);

  function submitHandler() {
    if (userInput === letter) {
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, 2000);
    }
    setSubmitLetter(!submitLetter);
    setUserInput("");
    return;
  }

  function submitWrongHandler() {
    setUserInput("");
    return;
  }

  function textSizer() {
    switch (size) {
      case 10:
        return "text-[78.74mm]";
      case 9:
        return "text-[68.58mm]";
      case 8:
        return "text-[55.88mm]";
      case 7:
        return "text-[45.72mm]";
      case 6:
        return "text-[33.02mm]";
      case 5:
        return "text-[22.86mm]";
      case 4:
        return "text-[17.78mm]";
      case 3:
        return "text-[10.16mm]";
      case 2:
        return "text-[7.62mm]";
      case 1:
        return "text-[5.08mm]";
    }
  }

  //CONVERSION RATIO: Font height * 2.54

  return (
    <main className="h-[calc(100vh-6rem)] px-4 font-inter text-primary">
      <div className="grid h-full grid-cols-3">
        {/* Instructions for Use */}
        <section className="flex min-h-full flex-col p-4 pt-0">
          <Flex
            className="h-full rounded-lg border border-border bg-primary-foreground p-4"
            direction="column"
            gap="3"
          >
            <Heading className="flex font-inter text-2xl font-bold">
              <ListOrderedIcon className="my-auto mr-2 size-8" />
              Instructions
            </Heading>
            <Callout.Root className="flex items-center bg-snelltechPurple/20 font-optiker text-snelltechPurple dark:bg-snelltechGreen/20 dark:text-snelltechGreen">
              <Callout.Icon>
                <InfoIcon className="h-6 w-6" />
              </Callout.Icon>
              <Callout.Text>
                You will need at least 10 feet of room to properly use this
                application.
              </Callout.Text>
            </Callout.Root>
            <ScrollArea type="always" scrollbars="vertical" className="h-full">
              <Box p="2" pr="8">
                <Flex direction="column" gap="4">
                  <Text size="3">
                    1. Have patient stand at appropriate marking on floor.
                  </Text>
                  <Text size="3">
                    2. If patient has glasses make sure they are wearing the
                    proper glasses for distance vision.
                  </Text>
                  <Text size="3">
                    3. Give patient occluder and have them cover the eye not
                    being tested.
                  </Text>
                  <Text size="3">
                    4. Have patient read the smallest line they can see on the
                    chart.
                  </Text>
                  <Text size="3">
                    5. If patient reads all 5 letters correctly and there are
                    more lines below then ask them to try the next line.
                  </Text>
                  <Text size="3">6. Repeat steps for opposite eye.</Text>
                </Flex>
              </Box>
            </ScrollArea>
          </Flex>
        </section>
        {/* Test Area */}
        <section className={`relative flex h-full flex-col overflow-hidden`}>
          <div className="flex h-full flex-col items-center justify-center rounded-lg border border-border bg-snelltechPurple/50 p-4 dark:bg-snelltechGreen/50">
            <div className="absolute h-full w-full">
              <Confetti
                numberOfPieces={confetti ? 200 : 0}
                initialVelocityY={10}
                opacity={0.7}
                wind={5}
              />
            </div>
            <div className="relative flex h-[5.08in] w-[3.08in] select-none items-center justify-center rounded-sm border-2 border-dashed border-primary bg-background  xl:border-4">
              <span
                className={twMerge(
                  "font-optiker font-extrabold tracking-tight",
                  textSizer(),
                )}
              >
                {letter}
              </span>
            </div>
          </div>
          {/* Submit Letters */}
          <Grid columns="6" gap="3" className="relative my-4 w-full">
            <div className="col-span-4 flex rounded-lg border border-input">
              <input
                type="text"
                placeholder="Type the Letter..."
                maxLength={1}
                className="w-full rounded-l-lg bg-gray-100 px-4 py-2 text-gray-900 duration-150 focus:outline-none focus:ring-1 focus:ring-snelltechPurple dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-snelltechGreen"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value.toUpperCase())}
              />
              <Button
                onClick={() => {
                  submitHandler();
                }}
                color="blue"
                className="flex h-full cursor-pointer items-center justify-center rounded-l-none rounded-r-lg bg-snelltechPurple text-center text-secondary hover:bg-snelltechPurple/90 dark:bg-snelltechGreen hover:dark:bg-snelltechGreen/90"
              >
                <SendIcon className="inline h-5 w-5 " />
              </Button>
            </div>
            <Button
              onClick={() => {
                submitWrongHandler();
              }}
              color={"tomato"}
              className="col-span-2 h-full cursor-pointer  rounded-lg"
            >
              {"Don't Know"}
            </Button>
          </Grid>
        </section>
        {/* Control Panel */}
        <section className="h-full px-4 pb-4 ">
          <Heading className="flex font-inter">
            <AppWindowMacIcon className="mr-2 size-8" />
            Control Panel
          </Heading>
          <ScrollArea className="h-full py-4">
            <Box className="truncate rounded-lg border border-border bg-secondary/50 p-4">
              <Text as="label" size="2">
                <Flex gap="4">
                  <Tooltip content="Adjust text size as necessary">
                    <input
                      id="slide"
                      type="range"
                      min={1}
                      max={10}
                      step={1}
                      defaultValue={1}
                      onChange={(value) => {
                        setSize(parseInt(value?.target?.value));
                      }}
                      className="w-full cursor-pointer accent-snelltechPurple  dark:accent-snelltechGreen"
                    />
                  </Tooltip>
                  Adjust Size
                </Flex>
              </Text>
            </Box>

            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox
                  size="1"
                  onClick={() => setSize(1)}
                  color="blue"
                  disabled
                  checked
                />
                Row 1 (20/70), 31mm
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox
                  size="1"
                  onClick={() => setSize(2)}
                  className="accent-snelltechPurple"
                  disabled
                  checked
                />
                Row 2 (20/60), 27mm
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox size="1" onClick={() => setSize(3)} color="blue" />
                Row 3 (20/50), 22mm
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox size="1" onClick={() => setSize(4)} color="blue" />
                Row 4 (20/40), 18mm
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox size="1" onClick={() => setSize(5)} color="blue" />
                Row 5 (20/30), 13mm
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox size="1" onClick={() => setSize(6)} color="blue" />
                Row 6 (20/20), 9mm
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox size="1" onClick={() => setSize(7)} color="blue" />
                Row 7 (15/20), 7mm
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox size="1" onClick={() => setSize(8)} color="blue" />
                Row 8 (10/20), 4mm
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox size="1" onClick={() => setSize(9)} color="blue" />
                Row 9 (7/20), 3mm
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox size="1" onClick={() => setSize(10)} color="blue" />
                Row 10 (4/20), 2mm
              </Flex>
            </Text>
          </ScrollArea>
        </section>
      </div>
    </main>
  );
}
