import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  HStack,
  Text
} from "@chakra-ui/react";
import { Majors } from "../home/Majors";
import { LkgMain } from "./LkgMain";
import { LkgTuyensinh } from "./LkgTuyensinh";

export const LichKg = ({
  list,
  isLoading
}: {
  list: string[];
  isLoading: boolean;
}) => {
  return (
    <>
      <Box
        bg={"rgba(0, 0, 0, 0.5)"}
        bgImage={"url('/bannernews.webp')"}
        bgSize={"cover"}
        bgPosition={"bottom"}
        backgroundBlendMode={"overlay"}
      >
        <Container
          maxW={"7xl"}
          py={{ base: "28px", lg: "42px" }}
          color={"white"}
          pl={{ base: 6, lg: 0 }}
        >
          <HStack
            pt={{ base: 8, lg: 16 }}
            pb={{ base: 2, lg: 8 }}
            color={"gray.50"}
          >
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
              pb={{ base: "36px", lg: "52px" }}
            >
              Đại học Kỹ thuật Công nghiệp
            </Text>
          </Box>

          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.50" />}
            fontWeight="medium"
            fontSize="md"
            pb={{ base: 2, lg: 8 }}
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

      {!isLoading && (
        <LkgMain title={list[0]} lichkg={list[1]} lichkg2={list[2]} />
      )}
      <LkgTuyensinh />
      <Box bg={"gray.50"}>
        <Container maxW={"7xl"}>
          <Majors />
        </Container>
      </Box>
    </>
  );
};
