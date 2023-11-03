import { Heading, VStack, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";


export const Logo = () => {
  return (
    <Link
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        justifyContent: "flex-start",
      }}
    >
      <Image
        priority
        width={60}
        height={60}
        src={`/logo-tnut.png`}
        alt="logo Trường Đại học Kỹ thuật Công nghiệp
        "
      />

      <Box>
        <Text
          size={{ lg: "md", base: "xs" }}
          justifyContent={"center"}
          fontWeight={600}
        >
          Đại học Kỹ thuật Công nghiệp
        </Text>
      </Box>
    </Link>
  );
};
