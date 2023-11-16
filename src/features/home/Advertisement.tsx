import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import {
  Box,
  Container,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Image,
} from "@chakra-ui/react";

export const Advertisement = () => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <Box bg={"blue.900"} py={{ base: 2, lg: 10 }}>
      <Container maxW={"7xl"}>
        <SimpleGrid columns={{ base: 1, lg: 2 }}>
          <GridItem colSpan={1}>
            {" "}
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
                  HỌC ĐẠI HỌC TỪ XA
                </Text>
                <Text
                  fontSize={{ base: "22px", lg: "36px" }}
                  color={"white"}
                  fontWeight={"600"}
                  textAlign={{ base: "center" }}
                >
                  BẰNG CÓ GIÁ TRỊ TƯƠNG ĐƯƠNG HỆ CHÍNH QUY
                </Text>
              </Box>

              <Box>
                <Text
                  fontSize={{ base: "14px", lg: "16px" }}
                  color={"white"}
                  fontWeight={"300"}
                  textAlign={{ base: "center", lg: "center" }}
                >
                  Tốt nghiệp được cấp bằng KỸ SƯ/CỬ NHÂN không ghi hình thức đào
                  tạo, có giá trị vĩnh viễn
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
          </GridItem>
          <GridItem colSpan={1}>
            <Box display={"flex"} justifyContent={"center"} py={8}>
              <Image
                src={"/bang-dai-hoc.png"}
                width={"80%"}
                maxHeight={"80%"}
                objectFit={"contain"}
                height={"auto"}
              />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
