"use client";
import { Heading, Callout, Grid, Box } from "@radix-ui/themes";
import { ListOrderedIcon, TriangleAlertIcon } from "lucide-react";
import List from "../_components/test/list";
import Footer from "../_components/footer";

// Font files can be colocated inside of `pages`b
export default function Instructions() {
  return (
    <>
      <Grid
        gap="4"
        className="container mx-auto h-[calc(100vh-6rem)] px-8 py-4 font-inter text-primary"
      >
        <Heading className="flex items-center font-optiker text-2xl">
          <ListOrderedIcon className="my-auto mr-2 size-8" />
          Instructions
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
        <Grid columns="3" gap="4" className="font-inter text-sm">
          <Box className="rounded-lg border border-primary/20 bg-primary-foreground p-4">
            <Heading className="mb-2 font-optiker">
              Visual Acuity Testing
            </Heading>
            {`During the Covid-19 pandemic, home visual acuity testing became an
          important part of telemedicine for eye care. A variety of home tests
          are available in print, on smartphone apps or the internet. These
          tests have been found to be almost as accurate as a test performed in
          a provider's office. No special preparation is necessary for this
          test. There is no discomfort. `}
          </Box>
          <Box className="rounded-lg border border-primary/20 bg-primary-foreground p-4">
            <Heading className="mb-2 font-optiker">
              Why the Test is Performed
            </Heading>
            The visual acuity test is a routine part of an eye examination or
            general physical examination, particularly if there is a change in
            vision or a problem with vision. In children, the test is performed
            to screen for vision problems. Vision problems in young children can
            often be corrected or improved. Undetected or untreated problems may
            lead to permanent vision damage.
          </Box>
          <Box className="rounded-lg border border-primary/20 bg-primary-foreground p-4">
            <Heading className="mb-2 font-optiker">Normal Results</Heading>
            Visual acuity is expressed as a fraction. The top number refers to
            the distance you stand from the chart. The bottom number indicates
            the distance at which a person with normal eyesight could read the
            same line you correctly read. Even if you miss one or two letters on
            the smallest line you can read, you are still considered to have
            vision equal to that line.
          </Box>
        </Grid>
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
