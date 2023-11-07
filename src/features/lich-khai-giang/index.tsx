import {
  Container,
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { Majors } from "../home/Majors";
import { LkgMain } from "./LkgMain";
import { ChevronRightIcon } from "@chakra-ui/icons";

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
        bgImage={"url('/bannernews.png')"}
        backgroundBlendMode={"overlay"}
      >
        <Container maxW={"7xl"} py="24px" color={"white"}>
          <HStack pt={24} color={"gray.50"}>
            <Box display={"flex"} alignContent={"center"}>
              <Divider
                zIndex={2}
                borderBottomWidth={"3px"}
                borderBlockEndColor={"gray.50"}
                w={"40px"}
              />
            </Box>
            <Text
              textAlign={"start"}
              fontSize={{ base: "12px", lg: "20px" }}
              fontWeight={500}
            >
              Lịch khai giảng
            </Text>
          </HStack>
          <Box>
            <Text
              fontWeight={400}
              textAlign={"start"}
              fontSize={{ base: "32px", lg: "60px" }}
              pb="40px"
            >
              Đại học Kỹ thuật Công nghiệp
            </Text>
          </Box>

          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.50" />}
            fontWeight="medium"
            fontSize="md"
          >
            <BreadcrumbItem color="gray.50" fontWeight={300}>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="gray.50" px={4} fontWeight={600}>
              <BreadcrumbLink href="/lich-khai-giang">
                Lịch khai giảng
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
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
