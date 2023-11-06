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
import { BtnTheme } from "./BtnTheme";
import { useModal } from "./ModalContext";
import ReactHtmlParser from "html-react-parser";

interface IMDetails {
  major: string;
  image: string;
  tabf: any;
  tabs: any;
  tabt: any;
  tabfp: any[];
  tabsp: any[];
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
              <Text fontSize={{ base: 24, lg: 32 }} fontWeight={500}>
                {major}
              </Text>
              <Tabs pt={8} pb={12}>
                <TabList>
                  <Tab
                    fontSize={{ base: 16, lg: 20 }}
                    _selected={{ color: "orange.500" }}
                  >
                    {tabf}
                  </Tab>
                  <Tab
                    fontSize={{ base: 16, lg: 20 }}
                    _selected={{ color: "orange.500" }}
                  >
                    {tabs}
                  </Tab>
                  <Tab
                    fontSize={{ base: 16, lg: 20 }}
                    _selected={{ color: "orange.500" }}
                  >
                    {tabt}
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    {tabfp.map((line, index) => (
                      <div
                        style={{ paddingTop: "12px" }}
                        key={index}
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                  </TabPanel>
                  <TabPanel>
                    {tabsp.map((lines, indexs) => (
                      <div
                        style={{ paddingTop: "12px" }}
                        key={indexs}
                        dangerouslySetInnerHTML={{ __html: lines }}
                      />
                    ))}
                  </TabPanel>
                  <TabPanel>
                    {tabtp.map((linet, indext) => (
                      // <Text color={"gray.500"} pb={2} key={indext}>
                      //   {linet}
                      // </Text>
                      <div
                        style={{ paddingTop: "8px" }}
                        key={indext}
                        dangerouslySetInnerHTML={{ __html: linet }}
                      />
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
