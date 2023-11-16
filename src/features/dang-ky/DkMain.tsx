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
  UnorderedList,
  HStack,
} from "@chakra-ui/react";
import { FcBookmark } from "react-icons/fc";
export const DkMain = () => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"7xl"}
        py={{ base: 12, lg: 20 }}
        gap={{ base: 12, lg: 32 }}
        margin={"0 auto"}
      >
        <GridItem colSpan={1}>
          <Box pt={{ base: "20px", lg: "0px" }}>
            <Text
              color={"blue.700"}
              fontSize={"24px"}
              textAlign={{ base: "center", lg: "center" }}
              fontWeight={"600"}
            >
              ĐĂNG KÝ XÉT TUYỂN KHÔNG CẦN THI
            </Text>
            <Text
              color={"gray.700"}
              fontSize={"18px"}
              pb={"8px"}
              textAlign={{ base: "center", lg: "center" }}
              fontWeight={"400"}
            >
              Tư vấn chuyên nghiệp. Thủ tục nhanh gọn. Đi học được luôn. Ưu tiên
              nộp hồ sơ sớm.
            </Text>
            <FormMain />
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 1, lg: 1 }}>
          <Stack bg="White" height="full">
            <MotionTop>
              <Text
                fontSize={{ base: "25px", md: "25px", lg: "40px" }}
                color={"blue.800"}
                fontWeight={600}
              >
                THÔNG TIN TUYỂN SINH
              </Text>
            </MotionTop>
            <MotionTop>
              <Divider
                borderBottomWidth={"3px"}
                borderBlockEndColor={"orange"}
                w={"150px"}
              />
            </MotionTop>
            <List spacing={4} pt={"8px"} fontSize={{ base: "18px" }}>
              <MotionTop>
                <ListItem mt={{ lg: "19px" }}>
                  <HStack>
                    <ListIcon as={FcBookmark} />
                    <Text fontWeight={600}>Đối tượng xét tuyển:</Text>
                  </HStack>
                </ListItem>
                <UnorderedList pl={4}>
                  <ListItem>Tốt nghiệp THPT</ListItem>
                  <ListItem>Tốt nghiệp Trung cấp chuyên nghiệp</ListItem>
                  <ListItem>Tốt nghiệp Cao đẳng</ListItem>
                  <ListItem>Tốt nghiệp Đại học</ListItem>
                </UnorderedList>
              </MotionTop>

              <MotionTop>
                <ListItem>
                  <HStack>
                    <ListIcon as={FcBookmark} />
                    <Text fontWeight={600}>Hình thức tuyển sinh:</Text>
                  </HStack>
                  <UnorderedList pl={4}>
                    <ListItem>
                      Xét tuyển theo hồ sơ đăng ký. KHÔNG THI TUYỂN.
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </MotionTop>
              <MotionTop>
                <ListItem>
                  <HStack>
                    <ListIcon as={FcBookmark} />
                    <Text fontWeight={600}>Thời gian tuyển sinh:</Text>
                  </HStack>
                  <UnorderedList pl={4}>
                    <ListItem> Liên tục trong năm.</ListItem>
                  </UnorderedList>
                </ListItem>
              </MotionTop>
            </List>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
