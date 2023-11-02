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
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

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
                  src={"/logo-tnut.png"}
                  width={150}
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
                  href={"https://www.facebook.com/TNUElearning"}
                >
                  <FaFacebook color="white" />
                </SocialButton>
                <SocialButton
                  bagr="transparent"
                  label={"Zalo"}
                  href={"https://zalo.me/0846770022"}
                >
                  <SiZalo color="white" />
                </SocialButton>
                <SocialButton bagr="transparent" label={"Instagram"} href={""}>
                  <GrInstagram color="white" />
                </SocialButton>

                <SocialButton bagr="transparent" label={"Youtube"} href={""}>
                  <BsYoutube color="white" />
                </SocialButton>
              </HStack>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Liên hệ</ListHeader>

              <Box
                py={2}
                fontSize={"14px"}
                as={Link}
                href={"https://www.facebook.com/groups/835191238124628"}
              >
                www.facebook.com/groups/835191238124628
              </Box>

              <Box
                py={2}
                as={Link}
                href={"https://www.facebook.com/bcvt.edu.vn/"}
              >
                www.facebook.com/bcvt.edu.vn/
              </Box>

              <Box as={Link} href={"tel:0846770022"}>
                Hotline: 0846770022
              </Box>
            </Stack>

            {/* <Stack align={"flex-start"}>
              <ListHeader>DANH SÁCH NGÀNH HỌC</ListHeader>
              <Box as={Link} href={"/nganh-quan-tri-kinh-doanh"}>
                Quản trị kinh doanh
              </Box>
              <Box as={Link} href={"/nganh-cong-nghe-thong-tin"}>
                Công nghệ thông tin
              </Box>
              <Box as={Link} href={"/nganh-ky-thuat-dien-tu-vien-thong"}>
                Kỹ thuật Điện tử Viễn thông
              </Box>
            </Stack> */}
            <Stack align={"flex-start"}>
              <ListHeader> TRẠM TUYỂN SINH</ListHeader>
              <UnorderedList>
                <ListItem>
                  Hà Nội: Số 116 Trần Vĩ, Phường Mai Dịch, Quận Cầu Giấy, Thành
                  Phố Hà Nội
                </ListItem>
              </UnorderedList>
              <Image
                src={"/aum.png"}
                width={150}
                height={40}
                alt="Aum Việt Nam"

                // style={{ borderRadius: "6px" }}
              />
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>HỢP TÁC TUYỂN SINH</ListHeader>

              <Link href={"https://timdoitac.aum.edu.vn/"}>
                <Image
                  src={"/timdoitac.jpg"}
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
