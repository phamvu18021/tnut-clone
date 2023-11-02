"use client";

import {  FormPoupCTA } from "@/components/FormContact";
import { categotys } from "@/features/home/Categorys";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiLogoTiktok } from "react-icons/bi";

import { FaFacebook, FaYoutube } from "react-icons/fa";

export const Item = ({
  path,
  image,
  title,
}: {
  path: string;
  image: string;
  title: string;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-10px)" }}
    >
      <Image
        priority
        width={700}
        height={400}
        src={image}
        alt={title}
        style={{ maxHeight: "150px", filter: "brightness(50%)" }}
      />
      <Box
        as={Flex}
        pos={"absolute"}
        top={0}
        left={"10%"}
        right={"40%"}
        bottom={0}
        align={"center"}
      >
        <Heading as={"h2"} size={"md"} color={"white"} textAlign={"center"}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export const Sidebar = ({ sticky }: { sticky?: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery || "");
    router.push(`/tim-kiem?s=${encodedSearchQuery}`);
  };
  return (
    <Box pos={sticky ? "sticky" : "static"} top={sticky} bg={"gray.100"}>
      <Box pt={4} px={6}>
        <form onSubmit={onSearch}>
          <HStack columnGap={"0"}>
            <Input
              value={searchQuery}
              type="Text"
              border={"1px solid #BFBFBF "}
              borderRadius={0}
              px={4}
              placeholder="Tìm kiếm..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              borderRadius={0}
              onClick={onSearch}
              bg={"blue.800"}
              color={"white"}
              _hover={{
                bg: "red.600",
              }}
            >
              Tìm kiếm
            </Button>
          </HStack>
        </form>
      </Box>

      <Box px={6} pt={"32px"}>
        <Heading
          as={"h3"}
          size={"sm"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "center" }}
        >
          ĐĂNG KÝ NGAY ĐỂ NHẬN TƯ VẤN
        </Heading>
        <FormPoupCTA />
      </Box>

      <Box px={6} pt={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Các ngành đào tạo
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 1 }} gap={"20px"}>
          {categotys.map((cat, index) => (
            <Item
              key={index}
              path={cat.path}
              title={cat.title}
              image={`${cat.image}`}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box pt={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          pl={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Mạng xã hội
        </Heading>
        <Box
          rounded={"sm"}
          p="24px"
          border={"1px solid"}
          borderColor={"gray.300"}
        >
          <VStack spacing={"16px"}>
            <Button
              leftIcon={<FaFacebook />}
              colorScheme="facebook"
              w={"full"}
              as={Link}
              href={"https://www.facebook.com/daihoctuxatnut"}
            >
              Facebook
            </Button>
            <Button
              leftIcon={<BiLogoTiktok />}
              bg="blackAlpha.800"
              w={"full"}
              color={"whiteAlpha.800"}
              as={Link}
              href={"https://www.tiktok.com/@tnut_learning"}
            >
              Tiktok
            </Button>
            <Button
              leftIcon={<FaYoutube />}
              colorScheme="red"
              w={"full"}
              as={Link}
              href={"https://www.youtube.com/@etnut"}
            >
              Youtube
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};
