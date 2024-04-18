"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";

import { Button, DropdownMenu, Box } from "@radix-ui/themes";

const themes = [
  { id: "light", name: "Light", Icon: SunIcon },
  { id: "dark", name: "Dark", Icon: MoonIcon },
  { id: "system", name: "System", Icon: DesktopIcon },
];

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button
          color="gray"
          className="rounded-full bg-snelltechPurple px-[0.25rem] shadow-inner transition-all dark:bg-snelltechGreen"
        >
          <Box className="rotate-0 scale-100 rounded-full bg-background p-[0.25rem] text-primary shadow transition-all dark:-rotate-90 dark:scale-0">
            <SunIcon className="size-4" />
          </Box>
          <Box className=" rotate-90 scale-0 rounded-full bg-primary p-[0.25rem] shadow transition-all dark:rotate-0 dark:scale-100 dark:text-secondary">
            <MoonIcon className="size-4" />
          </Box>

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end">
        {themes.map((theme) => (
          <DropdownMenu.Item key={theme.id} onClick={() => setTheme(theme.id)}>
            <theme.Icon className="size-4" />
            {theme.name}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
