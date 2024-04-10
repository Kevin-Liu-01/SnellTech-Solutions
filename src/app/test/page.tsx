"use client";
import Link from "next/link";
import {
  Button,
  Grid,
  Slider,
  Checkbox,
  Text,
  Flex,
  Callout,
  Heading,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { SendIcon, InfoIcon } from "lucide-react";
import twMerge from "clsx";
// Font files can be colocated inside of `pages`b
export default function Test() {
  const [state, setState] = useState(false);
  const [size, setSize] = useState("row1");
  const [userInput, setUserInput] = useState("");

  function createRandomString(length: number) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  function submitHandler() {
    setState(!state);
    return;
  }

  //CONVERSION RATIO: Font height * 2.54

  return (
    <main className="h-[calc(100vh-6rem)] bg-background font-inter text-primary">
      <div className="grid h-full grid-cols-3">
        <section className="flex min-h-full flex-col p-4 pt-0">
          <div className="h-full rounded-lg border border-border bg-primary-foreground p-4">
            <h3 className="text-2xl font-bold">Instructions</h3>
            <div className="font-optiker text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
            <Callout.Root className="mt-full flex items-center">
              <Callout.Icon>
                <InfoIcon className="h-6 w-6" />
              </Callout.Icon>
              <Callout.Text>
                You will need admin privileges to install and access this
                application.
              </Callout.Text>
            </Callout.Root>
          </div>
        </section>
        <section className={`relative flex h-full flex-col overflow-hidden`}>
          <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-primary-foreground p-4">
            <div className="relative flex h-[5.08in] w-[3.08in] select-none items-center justify-center rounded-xl border-2 border-dashed border-primary bg-background  xl:border-4">
              <span
                className={twMerge(
                  "font-optiker font-extrabold tracking-tight",
                  size == "row1" && "text-[78.74mm]",
                  size == "row2" && "text-[68.58mm]",
                  size == "row3" && "text-[55.88mm]",
                  size == "row4" && "text-[45.72mm]",
                  size == "row5" && "text-[33.02mm]",
                  size == "row6" && "text-[22.86mm]",
                  size == "row7" && "text-[17.78mm]",
                  size == "row8" && "text-[10.16mm]",
                  size == "row9" && "text-[7.62mm]",
                  size == "row10" && "text-[5.08mm]",
                )}
              >
                {createRandomString(1)}
              </span>
            </div>
          </div>
          <Grid columns="6" gap="3" className="relative mt-4 w-full">
            <form
              onSubmit={() => {
                submitHandler();
              }}
              className="col-span-4 flex rounded-lg border border-border"
            >
              <input
                type="text"
                placeholder="Type the Letter..."
                className="focus:ring-snelltechPurple dark:focus:ring-snelltechGreen w-full rounded-l-lg bg-gray-100 px-4 py-2 text-gray-900 duration-150 focus:outline-none focus:ring-1 dark:bg-gray-800 dark:text-gray-200"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <Button
                type="submit"
                color="blue"
                className="bg-snelltechPurple dark:bg-snelltechGreen flex h-full items-center justify-center rounded-l-none rounded-r-lg text-center text-secondary"
              >
                <SendIcon className="inline h-5 w-5 " />
              </Button>
            </form>{" "}
            <Button
              onClick={() => {
                setState(!state);
              }}
              color={"tomato"}
              className="col-span-2 h-full rounded-lg"
            >
              {"Don't Know"}
            </Button>
          </Grid>
        </section>
        <section className="h-full px-4 pb-4">
          <Heading className="font-inter">Control Panel</Heading>
          <Slider
            defaultValue={[1]}
            color="grass"
            min={0.1}
            max={1}
            step={0.1}
            onChange={(value) => {
              // console.log("hi" + value);
              // setSizeFactor(value[0]);
              // setSize(value[0]);
            }}
            className="mb-4 w-full"
          />
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" onClick={() => setSize("row1")} color="blue" />
              Row 1 (20/70), 31mm
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" onClick={() => setSize("row2")} color="blue" />
              Row 2 (20/60), 27mm
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" onClick={() => setSize("row3")} color="blue" />
              Row 3 (20/50), 22mm
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" onClick={() => setSize("row4")} color="blue" />
              Row 4 (20/40), 18mm
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" onClick={() => setSize("row5")} color="blue" />
              Row 5 (20/30), 13mm
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" onClick={() => setSize("row6")} color="blue" />
              Row 6 (20/20), 9mm
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" onClick={() => setSize("row7")} color="blue" />
              Row 7 (15/20), 7mm
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" onClick={() => setSize("row8")} color="blue" />
              Row 7 (10/20), 4mm
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox size="1" onClick={() => setSize("row9")} color="blue" />
              Row 7 (7/20), 3mm
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox
                size="1"
                onClick={() => setSize("row10")}
                color="blue"
              />
              Row 7 (4/20), 2mm
            </Flex>
          </Text>
        </section>
      </div>
    </main>
  );
}
