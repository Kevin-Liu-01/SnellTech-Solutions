"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";

import { Button, DropdownMenu } from "@radix-ui/themes";

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
        <Button variant="ghost">
          <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end">
        {themes.map((theme) => (
          <DropdownMenu.Item key={theme.id} onClick={() => setTheme(theme.id)}>
            <theme.Icon className="mr-2 size-4" />
            {theme.name}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
