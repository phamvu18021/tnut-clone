import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Flex,
} from "@chakra-ui/react";

export const Advertisement = () => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <Box bg={"blue.900"} py={10}>
      <Container maxW={"7xl"}>
        <VStack spacing={12} justifyContent={"center"} py={12}>
          <Box>
            <Text
              fontSize={{ lg: "36px" }}
              color={"white"}
              fontWeight={"300"}
              textAlign={{ base: "center" }}
            >
              HỌC TỪ XA
            </Text>
            <Text
              fontSize={{ lg: "36px" }}
              color={"white"}
              fontWeight={"600"}
              textAlign={{ base: "center" }}
            >
              NHẬN BẰNG ĐẠI HỌC DANH GIÁ
            </Text>
          </Box>
 
          <Box>
            <Text
              fontSize={{ lg: "16px" }}
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
          >
            NHẬN TÀI KHOẢN HỌC THỬ
          </BtnTheme>
        </VStack>
      </Container>
    </Box>
  );
};
