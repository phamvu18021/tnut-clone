"use client";

import { SocialButton } from "@/components/SocialButton";
import {
  Box,
  Container,
  HStack,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"500"}
      fontSize={"lg"}
      mb={2}
      borderBottom={"1px white solid"}
    >
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <>
      <Box bg={"blue.900"} color={"White"}>
        <Container as={Stack} maxW={"7xl"} py={10}>
          <SimpleGrid columns={{ base: 1, lg: 4, md: 4 }} spacing={16}>
            <Stack>
              <Stack direction={"row"} align={"flex-start"} gap={5} mb={5}>
                <Image
                  loading="lazy"
                  src={"/logo-tnut.webp"}
                  width={100}
                  height={100}
                  alt="Tìm đối tác"
                  style={{ float: "left" }}
                />
              </Stack>
              <Box py={2}>
                Elearning – giải pháp giúp người học phá bỏ rào cản về không
                gian và thời gian
              </Box>
              <HStack py={4} spacing={2} display={{ base: "flex", lg: "flex" }}>
                <SocialButton
                  bagr="rgba(255, 255, 255, 0.23)"
                  label={"Facebook"}
                  href={"https://www.facebook.com/daihoctuxatnut"}
                >
                  <FaFacebook color="white" />
                </SocialButton>
                <SocialButton
                  bagr="transparent"
                  label={"Zalo"}
                  href={"https://zalo.me/0815674848"}
                >
                  <SiZalo color="white" />
                </SocialButton>
                <SocialButton
                  bagr="transparent"
                  label={"Tiktok"}
                  href={"https://www.tiktok.com/@tnut_elearning"}
                >
                  <BsTiktok color="white" />
                </SocialButton>

                <SocialButton
                  bagr="transparent"
                  label={"Youtube"}
                  href={"https://www.youtube.com/@etnut"}
                >
                  <BsYoutube color="white" />
                </SocialButton>
              </HStack>
            </Stack>

            <Stack>
              <ListHeader>LIÊN HỆ</ListHeader>

              <Box
                pt={2}
                as={Link}
                href={"https://m.me/daihoctuxatnut"}
                _hover={{ textDecoration: "underline", color: "orange.400" }}
              >
                Facebook
              </Box>

              <Box
                py={2}
                as={Link}
                href={"https://tnut.vn"}
                _hover={{ textDecoration: "underline", color: "orange.400" }}
              >
                Website: tnut.vn
              </Box>

              <Box
                as={Link}
                href={"tel:0815674848"}
                _hover={{ textDecoration: "underline", color: "orange.400" }}
              >
                Hotline: 081.567.4848
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader> TRẠM TUYỂN SINH</ListHeader>
              <UnorderedList>
                <ListItem fontSize={14}>
                  Hà Nội: Số 116 Trần Vỹ, Mai Dịch, Cầu Giấy, Hà Nội
                </ListItem>
                <ListItem fontSize={14}>
                  Tp. HCM: Số 91 Ký Con, Phường Nguyễn Thái Bình , Quận 1, Hồ
                  Chí Minh
                </ListItem>
              </UnorderedList>
              <HStack display={"flex"} alignItems={"start"} gap={4}>
                <Image
                  loading="lazy"
                  src={"/aum.webp"}
                  width={100}
                  height={40}
                  alt="Aum Việt Nam"
                />

                <Image
                  loading="lazy"
                  src={"/logo-dhthainguyen.webp"}
                  width={100}
                  height={100}
                  alt="Tìm đối tác"
                />
              </HStack>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>HỢP TÁC TUYỂN SINH</ListHeader>

              <Link href={"https://timdoitac.aum.edu.vn/"}>
                <Image
                  loading="lazy"
                  src={"/timdoitac.webp"}
                  width={300}
                  height={100}
                  alt="Tìm đối tác"
                  style={{ borderRadius: "6px" }}
                />
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "center" }}
            align={{ md: "center" }}
          >
            <Text textAlign="center">© 2023 Copyright by IT AUM</Text>
          </Container>
        </Box>
      </Box>
    </>
  );
};
