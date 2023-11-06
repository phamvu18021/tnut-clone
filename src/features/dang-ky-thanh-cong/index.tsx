"use client";

import { Box, Container, Text } from "@chakra-ui/react";

import { SamePosts } from "../post/Sames";
import { useModal } from "@/components/ModalContext";
import { BtnTheme } from "@/components/BtnTheme";
export const DangkyTc = () => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <>
      <Box
        bg={"rgba(0, 0, 0, 0.5)"}
        bgImage={"url('breadcrumbs-img.jpg')"}
        backgroundBlendMode={"overlay"}
      >
        <Container maxW={"7xl"} py="24px" color={"white"}>
          <Box py={24}>
            <Text
              fontWeight={400}
              textAlign={"start"}
              fontSize={{ base: "24px", lg: "60px" }}
              pb="40px"
            >
              ĐĂNG KÝ THÀNH CÔNG!
            </Text>
            <Text>
              Cảm ơn bạn đã để lại thông tin. Cán bộ tư vấn sẽ liên hệ lại hỗ
              trợ thông tin chi tiết chương trình học cho bạn sớm!
            </Text>
          </Box>
        </Container>
      </Box>
      <Container maxW="7xl" justifyContent="center">
        <SamePosts catId={"84"} id={"7096"} />
        <Box display={"flex"} justifyContent={"center"} pb={8}>
          <BtnTheme
            color={"white"}
            colorScheme="white"
            size={{ base: "sm", md: "lg" }}
            onClick={() => !isOpen && onOpen && onOpen()}
            w={{ base: "200px", md: "260px", lg: "320px" }}
          >
            Xem thêm về chương trình
          </BtnTheme>
        </Box>
      </Container>
    </>
  );
};
