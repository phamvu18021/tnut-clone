import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import { Box, Container, VStack, Text } from "@chakra-ui/react";

export const Advertisement = () => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <Box bg={"blue.900"} py={{ base: 2, lg: 10 }}>
      <Container maxW={"7xl"}>
        <VStack
          py={{ base: 10, lg: 12 }}
          spacing={{ base: 8, lg: 8 }}
          justifyContent={"center"}
        >
          <Box>
            <Text
              fontSize={{ base: "24px", lg: "36px" }}
              color={"white"}
              fontWeight={"300"}
              textAlign={{ base: "center" }}
            >
              HỌC TỪ XA
            </Text>
            <Text
              fontSize={{ base: "22px", lg: "36px" }}
              color={"white"}
              fontWeight={"600"}
              textAlign={{ base: "center" }}
            >
              NHẬN BẰNG ĐẠI HỌC DANH GIÁ
            </Text>
          </Box>

          <Box>
            <Text
              fontSize={{ base: "14px", lg: "16px" }}
              color={"white"}
              fontWeight={"300"}
              textAlign={{ base: "center", lg: "right" }}
            >
              Tốt nghiệp sinh viên được cấp bằng Kỹ Sư/Cử Nhân có giá trị tương
              đương hệ Đào tạo Chính quy
            </Text>
          </Box>
          <BtnTheme
            color={"white"}
            colorScheme="white"
            size={{ base: "sm", md: "lg" }}
            onClick={() => !isOpen && onOpen && onOpen()}
            w={"300px"}
            h={"60px"}
          >
            NHẬN TÀI KHOẢN HỌC THỬ
          </BtnTheme>
        </VStack>
      </Container>
    </Box>
  );
};
