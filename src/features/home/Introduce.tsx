"use client";
import { MotionTop } from "@/components/MotionTop";
import { FormPoupCTA } from "@/components/FormContact";
import { MotionRightLeft } from "@/components/MotionLeft";

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
            <FormPoupCTA />
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <Stack bg="White" height="full" pt={{ base: "20px", lg: "48px" }}>
            <MotionTop>
              <Text
                fontSize={{ base: "25px", md: "25px", lg: "32px" }}
                color={"blue.800"}
              >
                ĐÀO TẠO TỪ XA – TNUT ELEARNING
              </Text>
            </MotionTop>
            <Divider
              borderBottomWidth={"3px"}
              borderBlockEndColor={"orange"}
              w={"200px"}
              p={{ base: "6px", lg: "15px" }}
            />
            <List
              spacing={4}
              pt={"8px"}
              fontSize={{ base: "18px", lg: "20px", md: "20px" }}
            >
              <MotionTop>
                <ListItem mt={{ lg: "19px" }}>
                  <ListIcon as={FcBookmark} />
                  Trường Đại học Kỹ Thuật Công Nghiệp thông báo tuyển sinh hệ từ
                  xa, học Đại học trực tuyến không cần đến trường. Xét tuyển đối
                  với các ngành: Kỹ Thuật Xây Dựng, Quản Lý Công Nghiệp, Kinh Tế
                  Công Nghiệp.
                </ListItem>
              </MotionTop>

              <MotionTop>
                <ListItem>
                  <ListIcon as={FcBookmark} />
                  Xét tuyển từ bằng THPT hoặc tương đương trở lên
                </ListItem>
              </MotionTop>
              <MotionTop>
                <ListItem>
                  <ListIcon as={FcBookmark} />
                  Chương trình phù hợp với người đi làm, bận rộn
                </ListItem>
              </MotionTop>
            </List>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
