"use client";

import { useState } from "react";
import styles from "./page.module.scss"
import { Button, createTheme, MantineProvider, ScrollArea, Title, useComputedColorScheme, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import LandingPage from "./components/landing-component/landing-page";

export default function Home() {


  const theme = createTheme({

    fontFamily: 'Roboto, sans-serif',
    headings: { fontFamily: 'Georgia, serif' },
  });



  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="dark" withGlobalClasses={true} >
        <ScrollArea>
          <LandingPage />
        </ScrollArea>
      </MantineProvider>
    </>
  );
}
