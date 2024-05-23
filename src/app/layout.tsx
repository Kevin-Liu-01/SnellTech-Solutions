import "~/styles/globals.css";
import "@radix-ui/themes/styles.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

import type { PropsWithChildren } from "react";

import { Theme, ScrollArea } from "@radix-ui/themes";

import { ThemeProvider } from "./_components/theme-provider";
import SessionProvider from "./_components/session-provider";
import { getServerAuthSession } from "~/server/auth";

import { Navbar } from "~/app/_components/navbar/navbar";

//Font management
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: "./font/Optiker-K.woff2",
  variable: "--font-optiker",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

//Metadata for pages
export const metadata = {
  title: "SnellTech Soutions",
  description:
    "SnellTech Solutions offers a digital eye exam and web platform for patients to get their eyes checked from the comfort of their own home.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

//Page layout template
export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerAuthSession();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${myFont.variable}`}>
        <TRPCReactProvider>
          <SessionProvider>
            <ThemeProvider attribute="class">
              <Theme radius="large">
                <ScrollArea className="h-screen">
                  {/* @ts-expect-error: Unreachable code error*/}
                  <Navbar session={session} /> {children}
                </ScrollArea>
              </Theme>
            </ThemeProvider>
          </SessionProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
