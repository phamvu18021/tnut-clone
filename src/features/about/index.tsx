"use client";

import { Box } from "@chakra-ui/react";

import { IntroduceAbout } from "./IntroduceAbout";
import { Benefit } from "../home/Benefit";
import { Slogan } from "../home/Slogan";
import { Majors } from "../home/Majors";
import { Banner } from "../home/Banner";
export const About = () => {
  return (
    <>
      <Box color={"blue.800"}>
        <Box bg="radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%)"></Box>
        <Box>
          <Banner />
          <IntroduceAbout />
          <Benefit />
          <Slogan />
          <Majors />
        </Box>
      </Box>
    </>
  );
};
