"use client";
import { MotionTop } from "@/components/MotionTop";
import { FormMain } from "@/components/FormContact";

import {
  Box,
  Divider,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Container,
  GridItem,
  Text,
} from "@chakra-ui/react";

export const LkgMain = ({
  title,
  lichkg,
}: {
  title: string;
  lichkg: string;
}) => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        maxW={"7xl"}
        py={{ base: 12, lg: 20 }}
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
            <MotionTop>
            <Divider
              borderBottomWidth={"3px"}
              borderBlockEndColor={"orange"}
              w={"150px"}
            />
            </MotionTop>
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
                   {title || "KHAI GIẢNG ĐỢT III NĂM 2023"}
                  </Text>
                </ListItem>
                <ListItem py={4}>
                  <Text
                    textAlign={"center"}
                    color={"blue.400"}
                    fontWeight={600}
                  >
                    {lichkg ||"29/10/2023"}
                  </Text>
                </ListItem>
              </Box>
            </List>
          </Stack>
        </GridItem>

        <GridItem colSpan={1}>
          <Box pt={{ base: "20px", lg: "90px" }}>
            <FormMain />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
