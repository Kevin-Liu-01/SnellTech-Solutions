/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
//State management and mutation functions
import { useState, useEffect } from "react";
//Speech recognition and transcription functions
import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit";
//Component and Icon Libraries
import { Button, Grid, Flex, Callout, Heading, Box } from "@radix-ui/themes";
import {
  SendIcon,
  ListOrderedIcon,
  TriangleAlertIcon,
  MicIcon,
} from "lucide-react";
import { QuestionMarkIcon } from "@radix-ui/react-icons";

//Specially Designed Components
import List from "../_components/test/list";
import ControlPanel from "../_components/test/control_panel";
import MainDisplay from "../_components/test/main_display";
import { createRandomString } from "../_components/test/functions";

//Constructor
export default function Test() {
  //User data
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

  //Test state logic
  const [testStages, setTestStages] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [switchScreen, setSwitchScreen] = useState(false);
  const [instructionScreen, setInstructionScreen] = useState(false);

  //Speech transcription
  const [transcript, setTranscript] = useState("");
  const [mic, setMic] = useState(false);
  const { speak, voices, cancel } = useSpeechSynthesis();
  const safeVoices: SpeechSynthesisVoice[] = voices as SpeechSynthesisVoice[];
  const voice = safeVoices[1];

  const { listen, stop } = useSpeechRecognition({
    onResult: (result: string) => {
      setTranscript(result);
    },
  });

  //If user guesses a letter wrong, it will trigger the incorrect question handler
  useEffect(() => {
    if (incorrectGuesses === 2) {
      handleTooManyIncorrect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incorrectGuesses]);

  //If user guesses a letter correctly, it will trigger the correct question handler
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const correctGuessesLimit = Math.min(level[eye.toLowerCase()], 5);
    if (correctGuesses === correctGuessesLimit) {
      handleCorrectGuess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctGuesses, level, eye]);

  //If user enables/disables the mic, this function will detect it
  useEffect(() => {
    if (mic) {
      listen({
        continuous: true,
      });
    } else {
      stop();
    }
  }, [mic, listen, stop]);

  // Effect to handle spoken letters if user chooses to complete test with voice
  useEffect(() => {
    if (testStarted) {
      if (transcript.endsWith("don't know")) {
        submitWrongHandler();
      } else if (transcript.charAt(transcript.length - 2) == " ") {
        // Automatically submit the spoken letter when transcript changes
        submitHandler();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript]);

  // Function to handle when test ends from too many incorrect
  const handleTooManyIncorrect = () => {
    if (testStages === 1) {
      handleTestSwitchEyes();
    } else if (testStages === 2) {
      handleTestCompletion();
    }
  };

  //Function to handle when test should switch states for correct answers
  const handleCorrectGuess = () => {
    //Logic to reinitialize variables and begin test
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 2000);

    setCorrectGuesses(0);
    setIncorrectGuesses(0);
    setSize(size - 1);
    setUserInput("");

    //Determine whether to increment the acuity level
    const newLevel = eye === "Right" ? level.right + 1 : level.left + 1;
    setLevel((prevLevel) => ({ ...prevLevel, [eye.toLowerCase()]: newLevel }));

    //Handle whether to switch eyes or end test
    if (testStages === 1 && newLevel === 11) {
      handleTestSwitchEyes();
    } else if (testStages === 2 && newLevel === 11) {
      handleTestCompletion();
    }

    //Switch the letter at the middle of the screen
    createRandomString(1, setLetter);
  };

  //Handle when the test is completed
  const handleTestCompletion = () => {
    setTestCompleted(true);
    speak({
      voice: voice,
      text: "The test is now completed. Your visual acuity results are now available.",
    });
  };

  //Enables screen for switching eyes (lasts 5 seconds, makes buttons unusable)
  const handleTestSwitchEyes = () => {
    setEnableButton(false);
    setSwitchScreen(true);
    setTimeout(() => {
      setSwitchScreen(false);
      setEnableButton(true);
      startTest();
    }, 5000);
  };

  //Logic to begin the test and initialize variables
  const startTest = () => {
    if (testStages == 2) {
      setTestStages(0);
    } else if (testStages !== 0) {
      setEye((prev) => (prev === "Right" ? "Left" : "Right"));
    }
    setInstructionScreen(false);
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
    createRandomString(1, setLetter);
  };

  // Handler to play instructions to user before beginning test
  const handleInstructions = () => {
    cancel(); //this line is necessary to clear the queue and ensure the voiceover begins
    setInstructionScreen(true);
    speak({
      voice: voice,
      text: `Welcome to SnellTech Solutions. Before we begin, ensure proper room lighting and set device brightness to 100%. 
      You have chosen to test your ${eye} eye first at a distance of ${distance} feet.`,
    });
    speak({
      voice: voice,
      text: `To begin, adjust your headset so you can only see out of your ${eye} eye. 
      Then, calibrate the headset to the testing software by lining up the rectangular slit in the headset to the rectangle present on the screen.`,
    });
    speak({
      voice: voice,
      text: `When a letter appears on the screen, say the letter out loud. Upon completion of your first eye, you will be prompted to switch to your other eye. The test is beginning now.`,
    });
    setTimeout(() => startTest(), 39000);
  };

  // Handler to determine behavior after user guesses the letter
  const submitHandler = () => {
    if (
      userInput === letter ||
      transcript.charAt(transcript.length - 1).toUpperCase() === letter
    ) {
      setCorrectGuesses((prev) => prev + 1);
    } else {
      setIncorrectGuesses((prev) => prev + 1);
    }
    setSubmitLetter(!submitLetter);
    createRandomString(1, setLetter);
    setUserInput("");
  };

  //Handler to increment incorrect guesses
  const submitWrongHandler = () => {
    setUserInput("");
    setIncorrectGuesses((prev) => prev + 1);
  };

  //Handler for when the test is restarted
  const restartHandler = () => {
    setTestCompleted(true);
    startTest();
  };

  //TSX code for web design
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
          <MainDisplay
            startTest={startTest}
            testStarted={testStarted}
            switchScreen={switchScreen}
            instructionScreen={instructionScreen}
            confetti={confetti}
            size={size}
            distance={distance}
            letter={letter}
            eye={eye}
            testCompleted={testCompleted}
            transcript={transcript}
            setEye={setEye}
            handleInstructions={handleInstructions}
            restartHandler={restartHandler}
            cancel={cancel}
          />
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
                onClick={() => setMic((prevMic) => !prevMic)}
                // disabled={!enableButton}
                color={mic ? "ruby" : "jade"}
              >
                <MicIcon className="h-4 w-4" /> {mic ? "Stop" : "Record"}
              </Button>
            </Box>
          </Grid>
        </section>
        <ControlPanel
          level={level}
          testStages={testStages}
          eye={eye}
          distance={distance}
          confetti={confetti}
          enableButton={enableButton}
          correct={correctGuesses}
          incorrect={incorrectGuesses}
          setDistance={setDistance}
        />
      </div>
    </main>
  );
}
