"use client";

import { Box, DropdownMenu, Button } from "@radix-ui/themes";

export default function Dropdown(props: {
  eye: string;
  setEye: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Box className="rounded-lg border-2 border-snelltechPurple/50 font-optiker dark:border-snelltechGreen/50 ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft" className=" font-optiker text-primary">
            Starting with {props.eye} Eye
            <DropdownMenu.TriggerIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="center" className="rounded-lg">
          <DropdownMenu.Item shortcut="L" onClick={() => props.setEye("Left")}>
            Left Eye
          </DropdownMenu.Item>
          <DropdownMenu.Item shortcut="R" onClick={() => props.setEye("Right")}>
            Right Eye
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
}
