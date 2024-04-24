"use client";

import {
  Box,
  SegmentedControl,
  ScrollArea,
  Flex,
  Text,
  Grid,
} from "@radix-ui/themes";
import {
  ChevronsRightIcon,
  ContactRoundIcon,
  NotepadTextIcon,
} from "lucide-react";

import { useState } from "react";
import Image from "next/image";

export default function Advice() {
  const [selected, setSelected] = useState("Next");

  function textSelector() {
    switch (selected) {
      case "Next":
        return (
          <Flex direction="column">
            <Text className="font-optiker text-lg">Advice</Text>
            <Text>
              Visual acuity worse than 20/25 should be evaluated by a licensed
              eye professional to determine whether corrective lenses or other
              treatments may be necessary. Visual acuity is not a measure of a
              patient’s prescription. This is a separate value that needs to be
              measured in an office setting.
            </Text>
            <Text className="font-optiker text-lg">Management</Text>
            <Text>
              Any patient with sudden changes in visual acuity from baseline or
              new obscurations in vision requires immediate referral to an
              ophthalmologist for dilated fundus examination and further
              testing.
            </Text>
          </Flex>
        );
      case "Evidence":
        return (
          <Flex direction="column">
            <Text className="font-optiker text-lg">Evidence Appraisal</Text>
            <Text>
              There are two main charts used to test visual acuity – Snellen
              charts, which use a geometric scale, and logMAR charts, which use
              a logarithmic scale. While both have been widely studied, Snellen
              charts are more widely used in clinical practice and logMAR charts
              are used more often in the context of research studies given the
              ease of statistical analysis. There has been one study validating
              the use of smartphone charts in measuring visual acuity; however,
              this validation was application-specific and thus more studies
              need to be conducted to elucidate the true validity of these
              charts (Bastawrous 2015).
            </Text>
          </Flex>
        );
      case "Insights":
        return (
          <Grid columns="4">
            <Box className="col-span-1">
              <Image
                src="/images/hermansnellen.jpg"
                alt="Dr. Herman Snellen"
                className="h-full w-full rounded-lg"
                height="1000"
                width="1000"
              />
            </Box>
            <Flex
              className="col-span-3 p-4"
              direction="column"
              justify="center"
            >
              <Text className="font-optiker text-xl">About the Creator</Text>{" "}
              <Text>
                Herman Snellen, MD, (d. 1908) was an ophthalmology professor at
                Utrecht University in the Netherlands. He was also the director
                of the Netherlands Hospital for Eye Patients. Dr. Snellen’s
                research interests included astigmatism, glaucoma, and
                correction of visual acuity using eyeglasses and
                ophthalmological surgery.
              </Text>
            </Flex>
          </Grid>
        );
    }
  }

  return (
    <Box className="h-full overflow-hidden rounded-lg border border-primary/20 bg-secondary/50 text-sm text-primary">
      <SegmentedControl.Root
        defaultValue="Next"
        radius="large"
        className="w-full rounded-none border border-b-primary/20 font-optiker dark:border-border"
        onValueChange={(value) => setSelected(value)}
      >
        <SegmentedControl.Item value="Next">
          <Flex align="center" gap="2">
            <ChevronsRightIcon className="h-4 w-4" /> Next Steps
          </Flex>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="Evidence">
          <Flex align="center" gap="2">
            <NotepadTextIcon className="h-4 w-4" /> Evidence
          </Flex>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="Insights">
          <Flex align="center" gap="2">
            <ContactRoundIcon className="h-4 w-4" /> Creator
          </Flex>
        </SegmentedControl.Item>
      </SegmentedControl.Root>
      <Box className="p-2 text-xs">{textSelector()}</Box>
    </Box>
  );
}
