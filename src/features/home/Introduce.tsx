"use client";
import { MotionTop } from "@/components/MotionTop";
import { FormMain } from "@/components/FormContact";

import {
  Box,
  Divider,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Container,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { FcBookmark } from "react-icons/fc";
export const Introduce = () => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        maxW={"7xl"}
        py={12}
        gap={{ base: 8, lg: 32 }}
        margin={"0 auto"}
      >
        <GridItem colSpan={1}>
          <Box pt={{ base: "0px", lg: "24px" }}>
            <Text
              size={"sm"}
              pb={"8px"}
              textAlign={{ base: "center", lg: "center" }}
              fontWeight={"600"}
            >
              ĐĂNG KÝ NGAY ĐỂ NHẬN TƯ VẤN
            </Text>
            <FormMain />
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <Stack bg="White" height="full" pt={{ base: "20px", lg: "48px" }}>
            <MotionTop>
              <Text
                fontSize={{ base: "24px", md: "24px", lg: "40px" }}
                color={"blue.800"}
                fontWeight={600}
              >
                TUYỂN SINH HỆ ĐẠI HỌC TỪ XA TNUT E-LEARNING
              </Text>
            </MotionTop>
            <MotionTop>
              <Divider
                borderBottomWidth={"3px"}
                borderBlockEndColor={"orange"}
                w={{ base: "120px", lg: "200px" }}
                p={{ base: "6px", lg: "8px" }}
              />
            </MotionTop>
            <List
              spacing={4}
              pt={"8px"}
              fontSize={{ base: "18px", lg: "20px", md: "20px" }}
            >
              <MotionTop>
                <ListItem mt={{ lg: "19px" }}>
                  <ListIcon as={FcBookmark} />
                  Trường Đại học Kỹ Thuật Công Nghiệp thông báo tuyển sinh hệ từ xa, học trực tuyến không cần đến trường
                </ListItem>
              </MotionTop>

              <MotionTop>
                <ListItem>
                  <ListIcon as={FcBookmark} />
                  Xét tuyển từ THPT (hoặc tương đương trở lên) các ngành: Kỹ thuật xây dựng, Quản lý công nghiệp, Kinh tế công nghiệp
                </ListItem>
              </MotionTop>
              <MotionTop>
                <ListItem>
                  <ListIcon as={FcBookmark} />
                  Chương trình phù hợp với người đi làm bận rộn                </ListItem>
              </MotionTop>
            </List>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
