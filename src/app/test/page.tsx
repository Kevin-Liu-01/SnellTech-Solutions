"use client";
import { useState } from "react";
// import { useSpeechSynthesis } from "react-speech-kit";
import { useSpeechRecognition } from "react-speech-kit";

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
  DropdownMenu,
} from "@radix-ui/themes";
import {
  SendIcon,
  InfoIcon,
  ListOrderedIcon,
  AppWindowMacIcon,
  TriangleAlertIcon,
  EyeIcon,
  MicIcon,
  ALargeSmallIcon,
  SpellCheckIcon,
} from "lucide-react";
import { QuestionMarkIcon } from "@radix-ui/react-icons";

import twMerge from "clsx";
import dynamic from "next/dynamic";
import List from "../_components/test/list";
import Results from "../_components/test/results";
import Advice from "../_components/test/advice";

const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

export default function Test() {
  const [letter, setLetter] = useState(" ");
  const [confetti, setConfetti] = useState(false);
  const [submitLetter, setSubmitLetter] = useState(false);
  const [size, setSize] = useState(10);
  const [userInput, setUserInput] = useState("");
  const [levelRight, setLevelRight] = useState(1); // Start level from 0
  const [levelLeft, setLevelLeft] = useState(1); // Start level from 0

  const [correctGuesses, setCorrectGuesses] = useState(0); // Track correct guesses
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [eye, setEye] = useState("Right");

  //begin/end test logic
  const [testStages, setTestStages] = useState(0);
  const [testStarted, setTestStarted] = useState(false); // Track if the test has started
  const [testCompleted, setTestCompleted] = useState(false); // Track if the test has completed
  const [switchScreen, setSwitchScreen] = useState(false);

  //Speech transcription
  const [value, setValue] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: string) => {
      setValue(result);
    },
  });

  function createRandomString(length: number) {
    const chars = "ABCDEFGHIJKLNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars
        ?.replace(letter, "")
        ?.charAt(Math.floor(Math.random() * chars.length));
    }
    setLetter(result);
  }

  function startTest() {
    setTestStages(testStages + 1);
    if (testCompleted) {
      setTestCompleted(false);
      setTestStages(0);
      setCorrectGuesses(0);
      setIncorrectGuesses(0);
      setLevelLeft(0);
      setLevelRight(0);
    }
    if (testStages < 3) {
      setTestStarted(true);
      if (testStages == 1) {
        if (eye == "Right") {
          setEye("Left"); // Start the level from 1
        }
        if (eye == "Left") {
          setEye("Right");
        }
      }

      setSize(10);
      setCorrectGuesses(0);
      setIncorrectGuesses(0);
      createRandomString(1);
    } else {
      setTestCompleted(true);
    }
  }

  function responseHandler(correctGuessesLimit: number, level: number) {
    if (correctGuesses == correctGuessesLimit - 1) {
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, 2000);

      createRandomString(1);
      setCorrectGuesses(0);
      setIncorrectGuesses(0);
      setSize(size - 1);
      setUserInput("");
      if (eye == "Right") {
        setLevelRight(level); // Start the level from 1
      }
      if (eye == "Left") {
        setLevelLeft(level);
      }

      if (testStages === 1 && level === 11) {
        setSwitchScreen(true);
        setTimeout(() => {
          setSwitchScreen(false);
        }, 5000);
        startTest();
      } else if (testStages == 2 && level == 11) {
        setTestCompleted(true);
      }

      return;
    }
    setCorrectGuesses(correctGuesses + 1);
    createRandomString(1);
  }

  function submitHandler() {
    // Check if the user input matches the letter
    if (userInput === letter) {
      switch (eye == "Right" ? levelRight : levelLeft) {
        case 1:
          responseHandler(1, 2);
          break;
        case 2:
          responseHandler(2, 3);
          break;
        case 3:
          responseHandler(3, 4);
          break;
        case 4:
          responseHandler(4, 5);
          break;
        case 5:
          responseHandler(5, 6);
          break;
        case 6:
          responseHandler(5, 7);
          break;
        case 7:
          responseHandler(5, 8);
          break;
        case 8:
          responseHandler(5, 9);
          break;
        case 9:
          responseHandler(5, 10);
          break;
        case 10:
          responseHandler(5, 11);
          break;
        // case 11:
        //   if (testStages == 1) {
        //     setSwitchScreen(true);
        //     setTimeout(() => {
        //       setSwitchScreen(false);
        //     }, 5000);
        //     startTest();
        //   } else {
        //     setTestCompleted(true);
        //   }
        //   break;
      }
      // If the user input does not match the letter
    } else {
      setIncorrectGuesses(incorrectGuesses + 1);
      if (
        incorrectGuesses === 2 ||
        (eye == "Right" ? levelRight === 11 : levelLeft === 11)
      ) {
        // End the test or display prescription if needed
        setTestCompleted(true);
        return;
      }
    }
    // Reset the user input
    setSubmitLetter(!submitLetter);
    setUserInput("");
  }

  function submitWrongHandler() {
    // If the user does not know the letter
    setUserInput("");
    setIncorrectGuesses(incorrectGuesses + 1);
    if (incorrectGuesses === 2) {
      // End the test or display prescription if needed
      // console.log(`Test ended with prescription: ${level}`);
      setTestStarted(false);
      setLetter("");
      return;
    }
    // setLevel(level + 1);
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

  return (
    <main className="h-[calc(100vh-6rem)] px-4 font-inter text-primary">
      <div className="grid h-full grid-cols-11">
        <section className="col-span-3 flex min-h-full flex-col p-4 pt-0">
          <Flex
            className="h-full rounded-lg border border-primary/20 bg-primary-foreground p-4"
            direction="column"
            gap="3"
          >
            <Heading className="flex font-optiker text-2xl">
              <ListOrderedIcon className="my-auto mr-2 size-8" />
              Instructions
            </Heading>
            <Callout.Root className="flex items-center bg-snelltechPurple/20 font-optiker text-snelltechPurple dark:bg-snelltechGreen/20 dark:text-snelltechGreen">
              <Callout.Icon>
                <TriangleAlertIcon className="h-6 w-6" />
              </Callout.Icon>
              <Callout.Text>
                This test is intended as a convenient screener for visual acuity
                and should not be used as a replacement for in-office testing.
              </Callout.Text>
            </Callout.Root>
            <List
              steps={[
                "Ensure proper room lighting and set device brightness to 100%.",
                "Hold the screen 10 feet (3.05 m) from the patient. If the patient has glasses, wear the proper glasses for distance vision.",
                "Give patient occluder and have them cover the eye not being tested. Each eye will be tested independently.",
                "Have patient read the smallest line they can see on the chart.",
                "If patient reads all 5 letters correctly and there are more lines below then ask them to try the next line.",
                "Repeat steps for opposite eye.",
              ]}
            />
          </Flex>
        </section>
        <section className={`col-span-4 flex h-full flex-col`}>
          <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-lg border border-primary/5 bg-snelltechPurple/50 p-4 dark:bg-snelltechGreen/50">
            <Confetti
              numberOfPieces={confetti ? 200 : 0}
              // initialVelocityY={1}
              gravity={0.5}
            />
            {!testStarted && (
              <Flex
                gap="4"
                className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-secondary/90 p-12"
              >
                <Text className="font-optiker text-3xl">
                  Visual Acuity Testing
                </Text>
                <Callout.Root className="flex items-center bg-snelltechPurple/25 font-optiker text-snelltechPurple transition-all dark:bg-snelltechGreen/20 dark:text-snelltechGreen">
                  <Callout.Icon>
                    <InfoIcon className="h-6 w-6" />
                  </Callout.Icon>
                  <Callout.Text>
                    You will need at least 10 feet of room to properly use this
                    application.
                  </Callout.Text>
                </Callout.Root>
                <Box className="rounded-lg border-2 border-snelltechPurple/50 font-optiker dark:border-snelltechGreen/50">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button
                        variant="soft"
                        className=" font-optiker text-primary"
                      >
                        Starting with {eye} Eye
                        <DropdownMenu.TriggerIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item
                        shortcut="L"
                        onClick={() => setEye("Left")}
                      >
                        Left Eye
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        shortcut="R"
                        onClick={() => setEye("Right")}
                      >
                        Right Eye
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </Box>

                <Button
                  className="mt-2 bg-snelltechPurple font-optiker dark:bg-snelltechGreen"
                  onClick={() => startTest()}
                >
                  Start Test
                </Button>
              </Flex>
            )}

            {switchScreen && (
              <Flex
                gap="4"
                className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-secondary/90 p-12"
              >
                <Text className="font-optiker text-3xl">
                  Switch to your Left Eye.
                </Text>
              </Flex>
            )}

            {testCompleted && (
              <Flex
                gap="4"
                className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-secondary/90 p-12"
              >
                <Text className="font-optiker text-3xl">Test Completed</Text>
                <Button
                  className="mt-2 bg-snelltechPurple font-optiker dark:bg-snelltechGreen"
                  onClick={() => startTest()}
                >
                  Restart Test
                </Button>
              </Flex>
            )}

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
          <Grid columns="8" gap="3" className="relative my-4 w-full">
            <Box className="col-span-4 flex rounded-lg border border-primary/20">
              <input
                type="text"
                placeholder="Type Letter..."
                maxLength={1}
                className="w-full rounded-l-lg bg-gray-100 px-4 py-2 text-gray-900 transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-snelltechPurple dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-snelltechGreen"
                value={userInput}
                disabled={!testStarted}
                onChange={(e) => setUserInput(e.target.value.toUpperCase())}
              />
              <Button
                onClick={() => {
                  submitHandler();
                }}
                disabled={!testStarted}
                className="flex h-full cursor-pointer items-center justify-center rounded-l-none rounded-r-[0.45rem] bg-snelltechPurple text-center font-optiker text-secondary hover:bg-snelltechPurple/90 dark:bg-snelltechGreen hover:dark:bg-snelltechGreen/90"
              >
                <SendIcon className="inline h-4 w-4 " /> Check
              </Button>
            </Box>
            <Button
              onClick={() => {
                submitWrongHandler();
              }}
              color="tomato"
              disabled={!testStarted}
              className="col-span-2 h-full cursor-pointer rounded-lg font-optiker"
            >
              <QuestionMarkIcon className="h-4 w-4" /> {"Don't Know"}
            </Button>
            <Box className="col-span-2">
              <Button
                className="h-full w-full cursor-pointer rounded-lg font-optiker"
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                onMouseDown={listen}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                onMouseUp={stop}
                disabled={!testStarted}
                color={listening ? "ruby" : "jade"}
              >
                <MicIcon className="h-4 w-4" /> {listening ? "Stop" : "Record"}
              </Button>
            </Box>
          </Grid>
        </section>
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
                  <EyeIcon className="h-4 w-4" /> {eye} Eye
                </Flex>
                <Flex
                  gap="2"
                  align="center"
                  className="truncate  rounded-lg border border-primary/20 bg-secondary/50 px-4 py-2 text-sm text-primary"
                >
                  <ALargeSmallIcon className="h-5 w-5" />{" "}
                  {`Level: ${levelRight}`}
                </Flex>
                <Flex
                  gap="2"
                  align="center"
                  className="truncate  rounded-lg border border-primary/20 bg-secondary/50 px-4 py-2 text-sm text-primary"
                >
                  <SpellCheckIcon className="h-5 w-5" />{" "}
                  {`Correct: ${correctGuesses}`}
                </Flex>
                {/* <Flex
                  align="center"
                  className="rounded-lg border border-primary/20 bg-secondary/50 px-4 py-2 text-sm text-primary"
                >{`Incorrect: ${incorrectGuesses}`}</Flex> */}
                <Flex
                  align="center"
                  className="truncate rounded-lg border border-primary/20 bg-secondary/50 p-4"
                >
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
                      Size
                    </Flex>
                  </Text>
                </Flex>
              </Grid>
              <div className="rounded-lg border border-primary/20 bg-secondary/50 p-4 text-sm text-primary">
                {value} Stage: {testStages}
              </div>
              <Results level={levelRight} eye={"Right"} />
              <Results level={levelLeft} eye={"Left"} />

              <Advice />
            </Flex>
          </ScrollArea>
        </section>
      </div>
    </main>
  );
}
