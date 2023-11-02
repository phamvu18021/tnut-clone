import {
  Box,
  Container,
  GridItem,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { BtnTheme } from "./BtnTheme";
import { useModal } from "./ModalContext";
import { isNamedExportBindings } from "typescript";

interface IMDetails {
  major: string;
  image: string;
  tabf: string;
  tabs: string;
  tabt: string;
  tabfp: string[];
  tabsp: string[];
  tabtp: string[];
}

export const MajorsDetails = (props: IMDetails) => {
  const { image, major, tabf, tabs, tabt, tabfp, tabsp, tabtp } = props;
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <Box>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={24}>
            <GridItem colSpan={1}>
              <Text fontSize={32} fontWeight={400}>
                {major}
              </Text>
              <Tabs pt={8} pb={12}>
                <TabList>
                  <Tab>{tabf}</Tab>
                  <Tab>{tabs}</Tab>
                  <Tab>{tabt}</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    {tabfp.map((line, index) => (
                      <Text color={"gray.500"} pb={2} key={index}>
                        {line}
                      </Text>
                    ))}
                  </TabPanel>
                  <TabPanel>
                    {tabsp.map((lines, indexs) => (
                      <Text color={"gray.500"} pb={2} key={indexs}>
                        {lines}
                      </Text>
                    ))}
                  </TabPanel>
                  <TabPanel>
                    {tabtp.map((linet, indext) => (
                      <Text color={"gray.500"} pb={2} key={indext}>
                        {linet}
                      </Text>
                    ))}
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <Box display={"flex"} justifyContent={"center"}>
                <BtnTheme
                  color={"white"}
                  colorScheme="white"
                  size={{ base: "sm", md: "lg" }}
                  onClick={() => !isOpen && onOpen && onOpen()}
                  w={{ base: "200px", md: "240px", lg: "280px" }}
                >
                  ĐĂNG KÝ NGAY
                </BtnTheme>
              </Box>
            </GridItem>

            <GridItem colSpan={1}>
              <Box
                bgImage={image}
                bgSize={"cover"}
                w={"full"}
                h={400}
                bgPosition={"left"}
              ></Box>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};
