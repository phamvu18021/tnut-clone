"use client";
import { MotionTop } from "@/components/MotionTop";
import { FormPoupCTA } from "@/components/FormContact";

import {
  AspectRatio,
  Box,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Container,
  GridItem,
  Text,
  UnorderedList,
  HStack,
} from "@chakra-ui/react";

export const LkgMain = () => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        maxW={"7xl"}
        py={20}
        gap={16}
        margin={"0 auto"}
      >
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <Stack bg="White" height="full">
            <MotionTop>
              <Text
                fontSize={{ base: "25px", md: "25px", lg: "40px" }}
                color={"blue.800"}
                fontWeight={600}
              >
                ĐĂNG KÝ NGAY!
              </Text>
            </MotionTop>
            <Divider
              borderBottomWidth={"3px"}
              borderBlockEndColor={"orange"}
              w={"150px"}
              // p={{ base: "6px", lg: "15px" }}
            />
            <List
              spacing={4}
              pt={"8px"}
              fontSize={{ base: "18px", lg: "21px", md: "md" }}
            >
              <MotionTop>
                <ListItem>
                  <Text fontWeight={400}>
                    Chương trình Đào tạo từ xa Đại học Kỹ Thuật Công Nghiệp Thái
                    Nguyên
                  </Text>
                </ListItem>
              </MotionTop>
              <Box border={"1px solid black"}>
                <ListItem>
                  <Text
                    fontSize={{ base: "20px", lg: "24px" }}
                    pt={2}
                    textAlign={"center"}
                    fontWeight={600}
                  >
                    KHAI GIẢNG ĐỢT III NĂM 2023
                  </Text>
                </ListItem>
                <ListItem py={4}>
                  <Text
                    textAlign={"center"}
                    color={"blue.400"}
                    fontWeight={600}
                  >
                    29/10/2023
                  </Text>
                </ListItem>
              </Box>
            </List>
          </Stack>
        </GridItem>

        <GridItem colSpan={1}>
          <Box pt={{ base: "20px", lg: "90px" }}>
            <FormPoupCTA />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
