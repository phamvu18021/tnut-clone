"use client";

import { Sidebar } from "@/layouts/components/Sidebar";
import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

export const LayoutPost = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxW={"7xl"} py={8}>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={"8"}>
        <GridItem colSpan={{ base: 1, lg: 2 }}>{children}</GridItem>
        <GridItem colSpan={{ base: 1, g: 1 }}>
          <Sidebar  sticky="125px" />
          
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
// typez={"post"}