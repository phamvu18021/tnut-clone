import { Container, Box, Text } from "@chakra-ui/react";
import { Majors } from "../home/Majors";
import { LkgMain } from "./LkgMain";

export const LichKg = ({
  list,
  isLoading,
}: {
  list: string[];
  isLoading: boolean;
}) => {
  return (
    <>
      <Box
        bg={"rgba(0, 0, 0, 0.5)"}
        bgImage={"url('breadcrumbs-img.jpg')"}
        backgroundBlendMode={"overlay"}
      >
        <Container maxW={"7xl"} py="24px" color={"white"}>
          <Box py={{ base: 12, lg: 24 }}>
            <Text
              fontWeight={300}
              textAlign={"start"}
              fontSize={{ base: "20px", lg: "32px" }}
              pb="28px"
            >
              Lịch khai giảng
            </Text>
            <Text
              fontWeight={600}
              textAlign={"start"}
              fontSize={{ base: "24px", lg: "60px" }}
            >
              Đại học Kỹ thuật Công nghiệp
            </Text>
          </Box>
        </Container>
      </Box>
      <LkgMain />
      <Box bg={"gray.50"}>
        <Container maxW={"7xl"}>
          <Majors />
        </Container>
      </Box>
    </>
  );
};
