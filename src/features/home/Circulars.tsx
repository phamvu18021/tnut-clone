"use client";
import { FormHome } from "@/components/FormContact";

import { FcBookmark } from "react-icons/fc";
import {
  Box,
  SimpleGrid,
  Stack,
  Heading,
  Divider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
export const Circulars = () => {
  const items = [
    {
      text: "Ngày 30/12/2019, Bộ Giáo dục và Đào tạo đã ban hành Thông tư 27/2019/TT-BGDĐT quy định nội dung chính ghi trên văn bằng và phụ lục văn bằng giáo dục đại học.",
    },
    {
      text: "Đặc biệt, một trong những điểm mới của Thông tư này là không ghi thông tin về hình thức đào tạo như chính quy hoặc vừa làm vừa học; học từ xa hay tự học có hướng dẫn trong nội dung chính của văn bằng như quy định cũ tại phụ lục kèm theo Thông tư số 19/2011/TT-BGDĐT.      ",
    },
  ];

  return (
    <Box
      py={{ base: "10", lg: "16" }}
      id="sectionIntroduce"
      margin={"0 auto"}
      bg={"gray.50"}
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"7xl"}
        margin={"0 auto"}
        gap={20}
      >
        <Box className="formbox" mt={{ lg: "47px" }}>
          <FormHome title="Vui lòng điền thông tin" />
        </Box>
        <Stack bg="gray.50" height="full" padding={"40px"}>
          <Heading
            fontSize={{ base: "20px", md: "20px", lg: "28px" }}
            color={"blue.600"}
          >
            THÔNG TƯ 27/2019/TT-BGDĐT KHÔNG GHI HÌNH THỨC ĐÀO TẠO TRÊN BẰNG TỐT
            NGHIỆP
          </Heading>
          <Divider
            borderBottomWidth={"3px"}
            borderBlockEndColor={"orange"}
            w={"200px"}
            p={{ base: "6px", lg: "15px" }}
          />
          <List
            spacing={30}
            pt={{ lg: "15px", base: "15px" }}
            fontSize={{ base: "18px" }}
          >
            {items.map((item, index) => (
              <ListItem
                key={index}
                mt={{ lg: "19px" }}
                maxW={{ lg: "950px", base: "auto" }}
              >
                <ListIcon as={FcBookmark} />
                {item.text}
              </ListItem>
            ))}
          </List>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};