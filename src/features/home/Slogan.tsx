import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import {
  Box,
  Container,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { MotionTop } from "@/components/MotionTop";
export const Slogan = () => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <Box bg={"blue.900"} py={10}>
      <Container maxW={"7xl"}>
        <SimpleGrid columns={{ base: 1, lg: 5 }} spacing={{ base: 4, lg: 8 }}>
          <GridItem colSpan={3} justifyContent={"center"}>
            <Text
              fontSize={{ base: "24px", lg: "24px" }}
              color={"white"}
              fontWeight={"600"}
              textAlign={{ base: "center", lg: "right" }}
            >
              Xét tuyển – Không thi đầu vào
            </Text>
          </GridItem>

          <GridItem>
            <Flex justifyContent={{ base: "center", lg: "flex-start" }}>
              <MotionTop>
                <BtnTheme
                  color={"white"}
                  colorScheme="white"
                  size={{ base: "sm", md: "lg" }}
                  onClick={() => !isOpen && onOpen && onOpen()}
                  w={{ base: "160px", lg: "200px" }}
                >
                  ĐĂNG KÝ
                </BtnTheme>
              </MotionTop>
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
