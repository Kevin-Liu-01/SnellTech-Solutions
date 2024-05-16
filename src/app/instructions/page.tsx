"use client";
import { Heading, Callout, Grid, Flex, Separator } from "@radix-ui/themes";
import { ListOrderedIcon, TriangleAlertIcon } from "lucide-react";
import List from "../_components/test/list";
import Footer from "../_components/footer";
import { ImageCard } from "../_components/image-card";

// Font files can be colocated inside of `pages`b
export default function Instructions() {
  return (
    <>
      <Grid
        gap="4"
        className="min-h-[calc(100vh-6rem)] px-8 py-4 font-inter text-primary"
      >
        <Heading className="flex flex-col font-optiker text-xl">
          <Flex>
            <ListOrderedIcon className="my-auto mr-2 size-8" />
            Headset Instructions
          </Flex>
          <Separator mt="2" size="4" />
        </Heading>
        <Callout.Root className="flex items-center bg-snelltechPurple/20 font-optiker text-snelltechPurple dark:bg-snelltechGreen/20 dark:text-snelltechGreen">
          <Callout.Icon>
            <TriangleAlertIcon className="h-6 w-6" />
          </Callout.Icon>
          <Callout.Text>
            {`Eye charts measure only visual acuity, which is just one component of
          good vision. They cannot determine if your eyes are "working overtime"
          (needing to focus more than normal, which can lead to headaches and
          eye strain) or can they determine if your eyes work properly as a team
          for clear, comfortable binocular vision and accurate depth perception.
          Eye charts also cannot detect serious eye problems such as glaucoma or
          early diabetic retinopathy that could lead to serious vision
          impairment and even blindness. Only a comprehensive eye exam performed
          by a licensed optometrist or ophthalmologist can determine if your
          eyes are healthy and you are seeing as clearly and comfortably as
          possible.`}
          </Callout.Text>
        </Callout.Root>

        <Grid
          columns="4"
          gap="4"
          className="mx-auto w-full rounded-lg bg-secondary p-4 font-inter text-sm"
        >
          <ImageCard
            step={1}
            text="Gather all the necessary components to assemble the headset."
            imageLink="/images/instructions/step1.png"
          />
          <ImageCard
            step={2}
            text="Take the head strap and wrap it around the side plates."
            imageLink="/images/instructions/step2.png"
          />
          <ImageCard
            step={3}
            text="Insert the cylindrical dowels into the attachment plate."
            imageLink="/images/instructions/step3.png"
          />
          <ImageCard
            step={4}
            text="Affix the calibration wheels to the dowels."
            imageLink="/images/instructions/step4.png"
          />
          <ImageCard
            step={5}
            text="Attach the front plate to the dowels. "
            imageLink="/images/instructions/step5.png"
          />
          <ImageCard
            step={6}
            text="Align the faceplate to the calibration apparatus as shown."
            imageLink="/images/instructions/step6.png"
          />
          <ImageCard
            step={7}
            text="Attach the faceplate and apparatus onto one of the side plates."
            imageLink="/images/instructions/step7.png"
          />
          <ImageCard
            step={8}
            text="Attach the other side plate to the other side of the headset."
            imageLink="/images/instructions/step8.png"
          />
        </Grid>

        <Heading className="flex flex-col font-optiker text-xl">
          <Flex>
            <ListOrderedIcon className="my-auto mr-2 size-8" />
            Digital Eye Exam Instructions
          </Flex>
          <Separator mt="2" size="4" />
        </Heading>
        <List
          steps={[
            "Ensure proper room lighting and set device brightness to 100%.",
            "Ensure the mic is enabled and that the website has permission to record audio.",
            "Wear the headset and adjust the size of the headset to a good fit.",
            "Select an appropriate distance. Then, choose an eye to test first (left or right). Each eye will be tested independently; this choice is for your convenience.",
            "Calibrate the headset to the testing software by lining up the rectangular slit in the headset to the rectangle present on the screen. Use the headset to cover the eye you are not testing.",
            "To begin the test, press the start button manually or say “start.” Read the letter that you can see on the screen. If the test is not understanding you, saying the word ”letter” before the actual letter helps with recognition.",
            "The test will begin at the weakest vision level (highest optotype row) If all letters in the level are read correctly, the test will move to one level smaller. If a letter is guessed wrong, the number of wrong letters guessed in that size setting will be recorded. If the user guesses 2 letters incorrectly, the test will be terminated",
            "After completing all levels for one eye, it will switch to the opposite eye. After test completion, the test will be terminated.",
            "The visual acuity of the user will then be displayed, along with a brief explanation of the significance of the result. This can be copied for easy reference.",
          ]}
        />
      </Grid>
      <Footer />
    </>
  );
}
