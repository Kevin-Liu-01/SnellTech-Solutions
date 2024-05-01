"use client";
import { useState, useEffect } from "react";
// import { useSpeechSynthesis } from "react-speech-kit";
import { useSpeechRecognition } from "react-speech-kit";

import {
  Button,
  Grid,
  Text,
  Flex,
  Callout,
  Heading,
  ScrollArea,
  Box,
  Tooltip,
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
  // SpellCheckIcon,
} from "lucide-react";
import { QuestionMarkIcon } from "@radix-ui/react-icons";

import twMerge from "clsx";
import dynamic from "next/dynamic";
import List from "../_components/test/list";
import Results from "../_components/test/results";
import Advice from "../_components/test/advice";
import Dropdown from "../_components/test/dropdown";

const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

export default function Test() {
  //user state test logic
  const [letter, setLetter] = useState(" ");
  const [confetti, setConfetti] = useState(false);
  const [enableButton, setEnableButton] = useState(false);
  const [submitLetter, setSubmitLetter] = useState(false);
  const [distance, setDistance] = useState(5);
  const [size, setSize] = useState(10);
  const [userInput, setUserInput] = useState("");
  const [level, setLevel] = useState({ right: 1, left: 1 });
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [eye, setEye] = useState("Right");
  const [testStages, setTestStages] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [switchScreen, setSwitchScreen] = useState(false);

  //Speech transcription
  const [value, setValue] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: string) => {
      setValue(result);
    },
  });

  //Test logic
  useEffect(() => {
    if (incorrectGuesses === 2) {
      handleIncorrectGuess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incorrectGuesses]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const correctGuessesLimit = Math.min(level[eye.toLowerCase()], 5);
    if (correctGuesses === correctGuessesLimit) {
      handleCorrectGuess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctGuesses, level, eye]);

  const handleIncorrectGuess = () => {
    if (testStages === 1) {
      handleTestStageOne();
    } else if (testStages === 2) {
      setTestCompleted(true);
    }
  };

  const handleCorrectGuess = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 2000);

    setCorrectGuesses(0);
    setIncorrectGuesses(0);
    setSize(size - 1);
    setUserInput("");

    const newLevel = eye === "Right" ? level.right + 1 : level.left + 1;
    setLevel((prevLevel) => ({ ...prevLevel, [eye.toLowerCase()]: newLevel }));

    if (testStages === 1 && newLevel === 11) {
      setEnableButton(false);
      setSwitchScreen(true);
      setTimeout(() => {
        setSwitchScreen(false);
        setEnableButton(true);
        startTest();
      }, 5000);
    } else if (testStages === 2 && newLevel === 11) {
      setTestCompleted(true);
    }

    createRandomString(1);
  };

  //Screen for switching eyes
  const handleTestStageOne = () => {
    setEnableButton(false);
    setSwitchScreen(true);
    setTimeout(() => {
      setSwitchScreen(false);
      setEnableButton(true);
      startTest();
    }, 5000);
  };

  const createRandomString = (length) => {
    const chars = "ABCDEFGHIJKLNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setLetter(result);
  };

  const startTest = () => {
    if (testStages == 2) {
      setTestStages(0);
    } else if (testStages !== 0) {
      setEye((prev) => (prev === "Right" ? "Left" : "Right"));
    }
    setTestStages((prev) => prev + 1);
    setTestStarted(true);
    setEnableButton(true);

    if (testCompleted) {
      setTestCompleted(false);
      setTestStages(1);
      setCorrectGuesses(0);
      setIncorrectGuesses(0);
      setLevel({ right: 0, left: 0 });
    }

    setSize(10);
    setCorrectGuesses(0);
    setIncorrectGuesses(0);
    createRandomString(1);
  };

  const submitHandler = () => {
    if (userInput === letter) {
      setCorrectGuesses((prev) => prev + 1);
    } else {
      setIncorrectGuesses((prev) => prev + 1);
    }
    setSubmitLetter(!submitLetter);
    createRandomString(1);
    setUserInput("");
  };

  const submitWrongHandler = () => {
    setUserInput("");
    setIncorrectGuesses((prev) => prev + 1);
  };

  const textSizer = () => {
    switch (size) {
      case 10:
        //distance 2 feet
        if (distance === 2) return "text-[71.91mm]";
        //distance 3 feet
        if (distance === 3) return "text-[72.91mm]";
        //distance 4 feet
        if (distance === 4) return "text-[73.91mm]";
        //distance 5 feet
        return "text-[78.74mm]";
      case 9:
        //distance 2 feet
        if (distance === 2) return "text-[60.57mm]";
        //distance 3 feet
        if (distance === 3) return "text-[65.57mm]";
        //distance 4 feet
        if (distance === 4) return "text-[67.21mm]";
        //distance 5 feet
        return "text-[68.58mm]";
      case 8:
        //distance 2 feet
        if (distance === 2) return "text-[49.21mm]";
        //distance 3 feet
        if (distance === 3) return "text-[52.34mm]";
        //distance 4 feet
        if (distance === 4) return "text-[53.91mm]";
        //distance 5 feet
        return "text-[55.88mm]";
      case 7:
        //distance 2 feet
        if (distance === 2) return "text-[35.91mm]";
        //distance 3 feet
        if (distance === 3) return "text-[38.41mm]";
        //distance 4 feet
        if (distance === 4) return "text-[39.47mm]";
        //distance 5 feet
        return "text-[45.72mm]";
      case 6:
        //distance 2 feet
        if (distance === 2) return "text-[25.91mm]";
        //distance 3 feet
        if (distance === 3) return "text-[27.69mm]";
        //distance 4 feet
        if (distance === 4) return "text-[28.51mm]";
        //distance 5 feet
        return "text-[33.02mm]";
      case 5:
        //distance 2 feet
        if (distance === 2) return "text-[20.17mm]";
        //distance 3 feet
        if (distance === 3) return "text-[21.54mm]";
        //distance 4 feet
        if (distance === 4) return "text-[22.24mm]";
        //distance 5 feet
        return "text-[22.86mm]";
      case 4:
        //distance 2 feet
        if (distance === 2) return "text-[11.56mm]";
        //distance 3 feet
        if (distance === 3) return "text-[12.37mm]";
        //distance 4 feet
        if (distance === 4) return "text-[13.19mm]";
        //distance 5 feet
        return "text-[17.78mm]";
      case 3:
        //distance 2 feet
        if (distance === 2) return "text-[8.66mm]";
        //distance 3 feet
        if (distance === 3) return "text-[9.25mm]";
        //distance 4 feet
        if (distance === 4) return "text-[9.76mm]";
        //distance 5 feet
        return "text-[10.16mm]";
      case 2:
        //distance 2 feet
        if (distance === 2) return "text-[5.77mm]";
        //distance 3 feet
        if (distance === 3) return "text-[6.17mm]";
        //distance 4 feet
        if (distance === 4) return "text-[6.55mm]";
        //distance 5 feet
        return "text-[7.62mm]";
      case 1:
        //distance 2 feet
        if (distance === 2) return "text-[3.85mm]";
        //distance 3 feet
        if (distance === 3) return "text-[4.12mm]";
        //distance 4 feet
        if (distance === 4) return "text-[4.38mm]";
        //distance 5 feet
        return "text-[5.08mm]";
      default:
        return "";
    }
  };

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
                "Ensure the mic is enabled and that the website has permission to record audio.",
                "Wear the headset and adjust the size of the headset to a good fit.",
                "Select an appropriate distance. Then, choose an eye to test first (left or right). Each eye will be tested independently; this choice is for your convenience.",
                "Calibrate the headset to the testing software by lining up the rectangular slit in the headset to the rectangle present on the screen. Use the headset to cover the eye you are not testing.",
                "To begin the test, press the start button manually or say “start”",
                "The test will begin at the weakest vision level (highest optotype row) If all letters in the level are read correctly, the test will move to one level smaller. If a letter is guessed wrong, the number of wrong letters guessed in that size setting will be recorded. If the user guesses 2 letters incorrectly, the test will be terminated",
                "After completing all levels for one eye, it will switch to the opposite eye. After test completion, the test will be terminated.",
                "The visual acuity of the user will then be displayed, along with a brief explanation of the significance of the result. This can be copied for easy reference.",
              ]}
            />
          </Flex>
        </section>
        <section className={`col-span-4 flex h-full flex-col`}>
          <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-lg border border-primary/5 bg-snelltechPurple/50 p-4 dark:bg-snelltechGreen/50">
            <Confetti
              numberOfPieces={confetti ? 100 : 0}
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
                <Dropdown eye={eye} setEye={setEye} />
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
                  Switch to your {eye == "Right" ? "Left" : "Right"} Eye.
                </Text>
              </Flex>
            )}

            {testCompleted && (
              <Flex
                gap="4"
                className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-secondary/90 p-12"
              >
                <Text className="font-optiker text-3xl">Test Completed</Text>
                <Dropdown eye={eye} setEye={setEye} />

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
                disabled={!enableButton}
                onChange={(e) => setUserInput(e.target.value.toUpperCase())}
              />
              <Button
                onClick={() => {
                  submitHandler();
                }}
                disabled={!enableButton}
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
              disabled={!enableButton}
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
                disabled={!enableButton}
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
                  {`Stage: ${testStages}`}
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
                            setDistance(parseInt(value?.target?.value));
                          }}
                          className="slider w-full cursor-pointer accent-snelltechPurple  dark:accent-snelltechGreen"
                        />
                      </Tooltip>
                      Distance: {distance} ft
                    </Flex>
                  </Text>
                </Flex>
              </Grid>
              <div className="rounded-lg border border-primary/20 bg-secondary/50 p-4 text-sm text-primary">
                {value}
              </div>
              <Results level={level.right} eye={"Right"} />
              <Results level={level.left} eye={"Left"} />

              <Advice />
            </Flex>
          </ScrollArea>
        </section>
      </div>
    </main>
  );
}
